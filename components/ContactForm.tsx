"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  // Without a key the form cannot submit anywhere, so don't render a dead form.
  if (!ACCESS_KEY) return null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setError(result.message || "Something went wrong. Please email me instead.");
      }
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Please email me instead.");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-background p-8 text-center">
        <CheckCircle2 size={28} className="text-accent" />
        <p className="font-semibold">Thanks — your message is on its way.</p>
        <p className="text-sm text-muted">I&apos;ll get back to you soon.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-1 text-sm text-muted underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-left">
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input type="hidden" name="subject" value="New message from mkayfour.in" />
      <input type="hidden" name="from_name" value="mkayfour.in" />
      {/* Honeypot — bots fill this, humans never see it. */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={150}
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={2000}
          placeholder="What would you like to talk about?"
          className={`${fieldClass} resize-y`}
        />
      </div>

      {status === "error" && error && (
        <p
          role="alert"
          className="flex items-center gap-2 text-sm text-foreground"
        >
          <AlertCircle size={15} />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={15} />
            Send message
          </>
        )}
      </button>
    </form>
  );
}

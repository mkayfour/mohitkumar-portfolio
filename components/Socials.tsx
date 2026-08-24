import { SocialIcon } from "react-social-icons";
import { profile } from "@/data/profile";

export function Socials({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      {profile.socials.map((social) => (
        <SocialIcon
          key={social.platform}
          url={social.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: size, width: size }}
          fgColor="#ffffff"
        />
      ))}
    </div>
  );
}

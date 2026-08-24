export function SectionHeading({
  id,
  title,
  action,
}: {
  id: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div id={id} className="mb-8 flex scroll-mt-24 items-baseline justify-between">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {action}
    </div>
  );
}

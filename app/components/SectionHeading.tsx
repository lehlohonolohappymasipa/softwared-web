type Props = {
  title: string;
  description?: string;
  kicker?: string;
};

export default function SectionHeading({ title, description, kicker }: Props) {
  return (
    <>
      {kicker ? (
        <p className="pill w-fit">
          <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" aria-hidden />
          <span className="text-sm font-semibold">{kicker}</span>
        </p>
      ) : null}

      <h2 className="mt-0 font-[family-name:var(--font-display)] text-[length:var(--step-4)] leading-[var(--lh-tight)] tracking-[var(--tracking-tight)]">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-[length:var(--step-1)] text-[color:var(--muted)]">
          {description}
        </p>
      ) : null}
    </>
  );
}

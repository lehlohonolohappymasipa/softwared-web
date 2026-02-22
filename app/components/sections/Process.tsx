import Image from "next/image";
import SectionHeading from "../SectionHeading";

export default function Process() {
  const steps = [
    {
      num: 1,
      title: "Discovery",
      body: "We map your workflow, identify the bottleneck, and agree on outcomes.",
    },
    {
      num: 2,
      title: "Scope + plan",
      body: "We define the smallest version that removes friction and reduces errors.",
    },
    {
      num: 3,
      title: "Build + integrate",
      body: "We implement the system and share progress regularly.",
    },
    {
      num: 4,
      title: "Launch + iterate",
      body: "We ship, support rollout, and improve based on real usage.",
    },
  ];

  return (
    <section
      id="process"
      className="border-b border-[color:var(--border)] bg-[color:var(--bg)]"
    >
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left: heading + image */}
          <div className="lg:col-span-5">
            <SectionHeading
              kicker="How it works"
              title="Calm process. Clear scope. Steady delivery."
              description="Start with one bottleneck, ship the first version in 2–6 weeks, then iterate with real usage."
            />

            <div className="mt-8 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]">
              <Image
                src="/images/benefit-mobile-web.webp"
                alt="Mobile and web app interfaces showing the development process"
                width={1400}
                height={600}
                sizes="(min-width: 1024px) 480px, 100vw"
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: steps */}
          <div className="lg:col-span-7">
            <ol className="space-y-4">
              {steps.map((step) => (
                <li key={step.num} className="card p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-sm font-semibold text-[color:var(--accent)]"
                      aria-hidden
                    >
                      {step.num}
                    </div>
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
              <p className="text-sm font-semibold">What makes this work</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[color:var(--muted)]">
                <li>• One workflow at a time (tight scope = predictable delivery)</li>
                <li>• Simple UI, minimal dependencies, accessible defaults</li>
                <li>• Systems built for your process, not the other way around</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

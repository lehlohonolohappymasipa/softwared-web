import SectionHeading from "../SectionHeading";

export default function FAQ() {
  const faqs = [
    {
      q: "What do you build?",
      a: "Custom software for internal systems, business automation, dashboards, and web + mobile apps. We focus on operational software that reduces admin and eliminates errors.",
    },
    {
      q: "How long does the first version take?",
      a: "Most first versions ship in 2–6 weeks. We keep scope tight so delivery stays predictable.",
    },
    {
      q: "Do you integrate with existing tools?",
      a: "Yes, where it reduces admin and mistakes. We connect tools and remove duplicate data entry.",
    },
    {
      q: "What do you need from us?",
      a: "One point of contact, access to the current workflow, and fast feedback during the build.",
    },
    {
      q: "How much does it cost?",
      a: "Pricing depends on scope and complexity. We'll give you a clear quote after the discovery call once we understand the workflow.",
    },
  ];

  return (
    <section
      id="faq"
      className="border-b border-[color:var(--border)] bg-alt"
    >
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left: heading */}
          <div className="lg:col-span-4">
            <SectionHeading
              kicker="FAQ"
              title="Quick answers."
              description="Common questions about working with softwared. If you have a different question, bring it to the call."
            />
          </div>

          {/* Right: FAQ items */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((item) => (
                <details key={item.q} className="card p-5 group">
                  <summary className="cursor-pointer list-none font-semibold flex items-center justify-between gap-4">
                    <span>{item.q}</span>
                    <span
                      className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted)] transition-transform duration-200 group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import SectionHeading from "../SectionHeading";

export default function Problems() {
  const painPoints = [
    {
      title: "Spreadsheet chaos",
      body: "Critical data lives in spreadsheets that break, go stale, or get emailed around.",
      icon: (
        <svg className="h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <path d="M10 12.5 8 15l2 2.5" />
          <path d="m14 12.5 2 2.5-2 2.5" />
        </svg>
      ),
    },
    {
      title: "Manual admin",
      body: "Staff spend hours on repetitive tasks that could be automated.",
      icon: (
        <svg className="h-5 w-5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Errors and missed handoffs",
      body: "Information falls through the cracks between people and tools.",
      icon: (
        <svg className="h-5 w-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
    },
    {
      title: "Disconnected tools",
      body: "Data is copied between systems, causing duplicates and drift.",
      icon: (
        <svg className="h-5 w-5 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          <line x1="2" y1="2" x2="22" y2="22" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="problems"
      className="border-b border-[color:var(--border)] bg-[color:var(--bg)]"
    >
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Problem visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]">
              <Image
                src="/images/before-spreadsheet.webp"
                alt="Messy spreadsheet representing operational chaos before using custom software"
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 480px, 100vw"
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeading
              kicker="The problem"
              title="You've outgrown spreadsheets and manual handoffs."
              description="Operations run on fragile tools and human memory. Errors happen. Updates get missed. Staff burn out on admin."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {painPoints.map((item) => (
                <div key={item.title} className="card p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-[color:var(--text)]">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-prose-custom text-[color:var(--muted)]">
              If this sounds familiar, you're not alone. Most service businesses
              hit this wall as they grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

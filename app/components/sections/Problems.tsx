import Image from "next/image";
import SectionHeading from "../SectionHeading";

export default function Problems() {
  const painPoints = [
    {
      title: "Spreadsheet chaos",
      body: "Critical data lives in spreadsheets that break, go stale, or get emailed around.",
    },
    {
      title: "Manual admin",
      body: "Staff spend hours on repetitive tasks that could be automated.",
    },
    {
      title: "Errors and missed handoffs",
      body: "Information falls through the cracks between people and tools.",
    },
    {
      title: "Disconnected tools",
      body: "Data is copied between systems, causing duplicates and drift.",
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
                  <p className="font-semibold text-[color:var(--text)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[color:var(--muted)]">
              If this sounds familiar, you're not alone. Most service businesses
              hit this wall as they grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

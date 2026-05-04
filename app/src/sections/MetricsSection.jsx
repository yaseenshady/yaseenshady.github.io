import MetricCounter from "../components/ui/MetricCounter";

export default function MetricsSection({ items }) {
  return (
    <section className="relative px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.26em] text-yellow-200/70">Proof</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
            A few simple numbers to keep the story grounded.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <MetricCounter key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

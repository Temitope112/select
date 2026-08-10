const stats = [
  {
    value: "4.9★",
    label: "Customer Rating",
  },
  {
    value: "5000+",
    label: "Happy Clients",
  },
  {
    value: "12+",
    label: "Years Experience",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-2xl font-bold text-white">
            {stat.value}
          </h3>

          <p className="mt-1 text-sm text-neutral-300">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
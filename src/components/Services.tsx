const services = [
  // {
  //   title: "3D Printing Services",
  //   icon: "🧩",
  //   desc: "High-precision FDM & Resin printing for prototypes, functional parts, and creative models.",
  // },
  // {
  //   title: "Custom 3D Modeling",
  //   icon: "📐",
  //   desc: "We design optimized 3D models tailored for strength, aesthetics, and print accuracy.",
  // },
  // {
  //   title: "Materials & Finishing",
  //   icon: "🧪",
  //   desc: "PLA, ABS, PETG, Resin & post-processing like sanding, painting, and polishing.",
  // },
  // {
  //   title: "Small Batch Production",
  //   icon: "🏭",
  //   desc: "Cost-effective short-run manufacturing for startups and product launches.",
  // },
  {
    title: "Name Plates & Keychains",
    icon: "🏷️",
    desc: "Personalized custom name plates and keychains perfect for gifts and branding.",
  },
  {
    title: "Custom 3D Lithophanes",
    icon: "🖼️",
    desc: "Turn your photos into stunning 3D-printed light boxes and lithophanes.",
  },
  {
    title: "University Projects",
    icon: "🎓",
    desc: "Rapid prototyping and part fabrication for engineering and design student projects.",
  },
  {
    title: "3D Miniatures",
    icon: "♟️",
    desc: "High-detail resin printing for tabletop gaming, collectibles, and display models.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        What We Do
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-start"
          >
            <span className="text-4xl mb-6 block bg-gray-800/50 p-3 rounded-xl border border-white/5 group-hover:scale-110 transition-transform">
              {s.icon}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
              {s.title}
            </h3>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed flex-grow">
              {s.desc}
            </p>
            <button className="mt-6 text-sm font-semibold text-purple-400 group-hover:text-purple-300 flex items-center gap-2">
              Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

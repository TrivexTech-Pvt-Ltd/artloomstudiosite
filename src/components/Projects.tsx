import Image from "next/image";

const projects = [
  {
    title: "Project Alpha",
    category: "Prototype enclosure for electronics startup",
    image: "/project/img-1.jpg",
  },
  {
    title: "Project Beta",
    category: "Custom figurines & collectibles",
    image: "/project/img-2.jpg",
  },
  {
    title: "Product Gamma",
    category: "3D printed home decor items",
    image: "/project/img-3.jpg",
  },
  {
    title: "Product Delta",
    category: "Mechanical parts & tools",
    image: "/project/img-4.jpg",
  },
  {
    title: "Architectural Models",
    category: "High-detail scale models",
    image: "/project/img-5.jpg",
  },
  {
    title: "Artistic Sculptures",
    category: "Complex geometry art pieces",
    image: "/project/img-6.jpg",
  },
  {
    title: "Custom Lithophanes",
    category: "Personalized light boxes",
    image: "/project/img-7.jpg",
  },
  {
    title: "University Prototypes",
    category: "Engineering student projects",
    image: "/project/img-8.jpg",
  },
  {
    title: "Miniature Figures",
    category: "Detailed tabletop models",
    image: "/project/img-9.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Our Projects & Products
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-900/40"
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-gray-900">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>


          </div>
        ))}
      </div>
    </section>
  );
}

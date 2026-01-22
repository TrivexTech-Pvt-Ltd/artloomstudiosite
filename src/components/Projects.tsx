import Image from "next/image";
import { projectsData } from "@/lib/data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Our Projects & Products
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-900/40"
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-gray-900">
              <Image
                src={project.image}
                alt={project.title}
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

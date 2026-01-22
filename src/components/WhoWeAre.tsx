import Image from "next/image";

export default function WhoWeAre() {
    const points = [
        "Industrial-grade printers",
        "High-quality materials",
        "Fast turnaround",
        "Custom design support",
    ];

    return (
        <section id="about" className="px-6 py-16 md:py-24 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Who We Are
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    Artloom Studio is a modern 3D printing and digital fabrication studio
                    delivering precision-crafted models, prototypes, and custom products
                    for businesses, creators, and innovators.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {points.map((point, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-200">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-sm">
                                ✔
                            </span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-1 relative h-64 w-full md:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20">
                <Image
                    src="/img-2.jpg"
                    alt="Who We Are - Artloom Studio"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
        </section>
    );
}

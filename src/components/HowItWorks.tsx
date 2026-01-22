export default function HowItWorks() {
    const steps = [
        {
            id: "1",
            title: "Upload your 3D file",
            icon: "📂",
        },
        {
            id: "2",
            title: "Choose material & size",
            icon: "⚙️",
        },
        {
            id: "3",
            title: "Get instant quote",
            icon: "🟣",
        },
        {
            id: "4",
            title: "We print & deliver 🚚",
            icon: "📦",
        },
    ];

    return (
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    How It Works
                </h2>
                <p className="mt-4 text-gray-400">Your journey from idea to object in 4 simple steps.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900 opacity-30 -z-10" />

                {steps.map((step) => (
                    <div key={step.id} className="relative flex flex-col items-center text-center group">
                        <div className="w-20 h-20 rounded-full bg-black border-2 border-purple-500/30 flex items-center justify-center text-3xl mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] group-hover:border-purple-400 transition-all duration-300 z-10 bg-opacity-80 backdrop-blur-sm">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                        <span className="absolute -top-4 -right-2 text-6xl font-bold text-white/5 select-none -z-10">
                            {step.id}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-20 pt-10 border-t border-white/10 flex flex-col items-center gap-6 text-center animate-fade-in-up">
                <h3 className="text-2xl font-semibold text-white">Ready to start?</h3>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
                    <a href="tel:+94710702062" className="flex items-center gap-3 text-lg hover:text-purple-400 transition-colors group">
                        <span className="p-3 bg-purple-600/20 rounded-full group-hover:bg-purple-600 group-hover:text-white transition-all">📞</span>
                        <span className="font-medium">+94 71 070 2062</span>
                    </a>
                    <div className="hidden sm:block w-px h-8 bg-white/20" />
                    <a href="https://wa.me/94710702062" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg hover:text-green-400 transition-colors group">
                        <span className="p-3 bg-green-500/20 rounded-full group-hover:bg-green-500 group-hover:text-white transition-all">💬</span>
                        <span className="font-medium">WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

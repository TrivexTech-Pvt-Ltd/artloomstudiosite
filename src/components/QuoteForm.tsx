"use client";

export default function QuoteForm() {
  return (
    <section className="px-10 py-24 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Request a Quote</h2>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-black/40 border border-white/10"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 rounded bg-black/40 border border-white/10"
        />
        <input type="file" accept=".stl,.obj" className="w-full text-sm" />
        <textarea
          placeholder="Project details..."
          className="w-full p-3 rounded bg-black/40 border border-white/10"
        />

        <button className="w-full py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition">
          Submit Quote Request
        </button>
      </form>
    </section>
  );
}

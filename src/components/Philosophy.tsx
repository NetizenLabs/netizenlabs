export default function Philosophy() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
          Research first. <br className="md:hidden" />
          <span className="text-[var(--accent)]">Publish daily.</span>
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed opacity-70 mb-8 font-medium">
          We never guess a format and hope. Every channel, product and client video starts with research into what is already working, gets produced to a fixed quality bar, and is judged on real numbers — then scaled, fixed, or honestly retired.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12 max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10">
            <div className="text-4xl font-extrabold text-[var(--accent)] mb-2">1.2M</div>
            <div className="font-bold text-lg mb-1">Views in 30 Days</div>
            <p className="text-sm opacity-70">Rescue Watch, our AI rescue-drama series on Facebook, passed 1.2 million views in its first month — with zero ad spend.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10">
            <div className="text-4xl font-extrabold text-[var(--accent)] mb-2">0 → 429,876</div>
            <div className="font-bold text-lg mb-1">Views in Under Two Months</div>
            <p className="text-sm opacity-70">Orange Cat Chaos launched from a standing start and compounded to nearly 430K views on researched hooks and daily publishing.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm font-bold uppercase tracking-widest opacity-50 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)]"></span>
            Research Before Production
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)]"></span>
            Fact-Checked Numbers
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)]"></span>
            Daily Publishing Systems
          </div>
        </div>
      </div>
    </section>
  );
}

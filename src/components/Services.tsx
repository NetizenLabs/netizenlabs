export default function Services() {
  const services = [
    {
      title: "AI Short-Form Video Production",
      description: "Scroll-stopping vertical videos for TikTok, Reels, Shorts and ads — researched, generated, edited and captioned end-to-end.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
      )
    },
    {
      title: "AI UGC & Ad Creatives",
      description: "Believable people-and-product style videos that do not look obviously AI — built for brands that need creative volume without a camera crew.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-7-4 16-6-4-3 4v-6L3 11z"/></svg>
      )
    },
    {
      title: "Channel Building & Content Systems",
      description: "We launch and run faceless channels like our own: format research, daily publishing systems, and analytics-led iteration until a format proves itself.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/></svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">For Brands: The Same Engine, Working For You</h2>
          <p className="text-lg opacity-70 leading-relaxed mb-6">
            Everything on this page is our own work, produced with the same workflow we offer clients: research first, AI production with Google Flow / Veo, human editing and captions, and numbers checked before anything ships. Tell us about your product and we will reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="p-8 rounded-2xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 hover:border-[var(--accent)]/50 transition-all duration-300 group hover:scale-[1.02] flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--background)] flex items-center justify-center mb-6 text-[var(--accent)] shadow-sm group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="opacity-70 leading-relaxed text-sm mb-6 flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-3 mt-auto border-t border-[var(--foreground)]/10 pt-6">
                {service.title === "AI Short-Form Video Production" && (
                  <>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-[var(--accent)] font-bold">✓</span> 
                      <span><strong className="text-[var(--foreground)]">Researched hooks:</strong> Every video starts from what is already working in your niche — never generic templates.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-[var(--accent)] font-bold">✓</span> 
                      <span><strong className="text-[var(--foreground)]">Full production:</strong> Script, AI generation, edit, captions and platform-ready exports handled for you.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-[var(--accent)] font-bold">✓</span> 
                      <span><strong className="text-[var(--foreground)]">Daily volume:</strong> A publishing system, not one-off clips — built for consistency.</span>
                    </li>
                  </>
                )}
                {service.title === "AI UGC & Ad Creatives" && (
                  <>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-[var(--accent)] font-bold">✓</span> 
                      <span><strong className="text-[var(--foreground)]">Natural, not obviously AI:</strong> Realistic people, products and settings in the Veo 3 / Google Flow workflow.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-[var(--accent)] font-bold">✓</span> 
                      <span><strong className="text-[var(--foreground)]">Test variations:</strong> One concept spun into multiple hooks so your ad account can find the winner.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-[var(--accent)] font-bold">✓</span> 
                      <span><strong className="text-[var(--foreground)]">Disclosure-safe:</strong> AI content labelled correctly for each platform&apos;s rules.</span>
                    </li>
                  </>
                )}
                {service.title === "Channel Building & Content Systems" && (
                  <>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-[var(--accent)] font-bold">✓</span> 
                      <span><strong className="text-[var(--foreground)]">Proven on our own channels:</strong> 1.2M views in 30 days on one series; 429,876 views in under two months on another.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-[var(--accent)] font-bold">✓</span> 
                      <span><strong className="text-[var(--foreground)]">Fact-audited long-form:</strong> Numbers locked to sources and checked before publishing — no invented statistics.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-[var(--accent)] font-bold">✓</span> 
                      <span><strong className="text-[var(--foreground)]">Analytics-led:</strong> Formats are judged on watch data and iterated — or honestly retired.</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

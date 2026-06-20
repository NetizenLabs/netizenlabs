import Link from 'next/link';

const projects = [
  {
    title: "Tax For Freelancers",
    category: "Fintech / Finance",
    desc: "An enterprise-grade financial suite for independent professionals modeling complex 1099 and self-employment US tax rules.",
    link: "https://taxforfreelancers.online",
    colSpan: "md:col-span-2"
  },
  {
    title: "StudyNova",
    category: "EdTech / Utility",
    desc: "A comprehensive learning platform featuring GPA calculators and exam planners.",
    link: "https://getstudynova.online",
    colSpan: "md:col-span-1"
  },
  {
    title: "Quran Tracker",
    category: "Privacy / Gamification",
    desc: "A privacy-first Islamic reading tracker. Built for readers to log progress without external telemetry.",
    link: "https://quranhub.xyz",
    colSpan: "md:col-span-1"
  },
  {
    title: "TradeConvert",
    category: "B2B / Industrial",
    desc: "NIST-verified technical reference tools built specifically for construction workers and field engineers on mobile devices.",
    link: "https://tradeconvert.pro",
    colSpan: "md:col-span-2"
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 sm:py-32 bg-[var(--foreground)] text-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">We Practice What We Preach</h2>
            <p className="text-lg opacity-80">Explore our flagship zero-server developer toolkit and our portfolio of specialized tools. It's the exact same edge-optimized architecture we build for our clients.</p>
          </div>
          <Link 
            href="https://wtkpro.site" 
            className="px-6 py-3 rounded-full border border-[var(--background)]/20 font-bold hover:bg-[var(--background)]/10 transition-colors whitespace-nowrap"
          >
            View WebToolkit Pro
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Flagship Hero (Full Width) */}
          <div className="md:col-span-3 rounded-3xl bg-[var(--background)] p-1 overflow-hidden group">
            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-[var(--background)] rounded-[22px] overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] to-[var(--foreground)]/5 border border-[var(--foreground)]/5 rounded-[22px]"></div>
              <div className="relative z-10 text-center w-full max-w-lg p-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--foreground)]/20 text-sm font-mono text-[var(--foreground)] mb-6 bg-[var(--background)]/50 backdrop-blur-md shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
                  Zero-Server Architecture
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] mb-4 tracking-tight group-hover:scale-105 transition-transform duration-500">
                  WebToolkit Pro
                </h3>
                <p className="text-[var(--foreground)]/60 text-lg md:text-xl">
                  150+ instant-execution utilities. No tracking, no latency.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Cards */}
          {projects.map((project, idx) => (
            <div key={idx} className={`${project.colSpan} rounded-3xl bg-[var(--background)] p-1 overflow-hidden group`}>
              <div className="w-full h-full bg-[var(--background)] rounded-[22px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden min-h-[320px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] to-[var(--foreground)]/5 border border-[var(--foreground)]/5 rounded-[22px]"></div>
                
                <div className="relative z-10">
                  <div className="text-[var(--accent)] font-mono text-sm mb-4">{project.category}</div>
                  <h4 className="text-3xl font-extrabold text-[var(--foreground)] mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300">{project.title}</h4>
                  <p className="text-[var(--foreground)]/60 text-lg leading-relaxed max-w-md">{project.desc}</p>
                </div>

                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center gap-2 font-bold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors mt-12 w-fit group/link">
                  View Project <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          ))}

        </div>
        
      </div>
    </section>
  );
}

import Link from 'next/link';

const channels = [
  {
    title: "Orange Cat Chaos",
    category: "YouTube · AI Shorts",
    desc: "One orange cat, one true caring moment per Short. Our flagship channel grew from zero to 429,876 views in under two months on researched hooks and loop-perfect endings.",
    stat: "429,876 views",
    link: "https://www.youtube.com/@orangecatchaos11",
    colSpan: "md:col-span-2"
  },
  {
    title: "Rescue Watch",
    category: "Facebook · AI Drama Series",
    desc: "AI rescue-drama Reels shot in a raw, real-phone style. The series passed one million views in its first month.",
    stat: "1,205,012 views in 30 days",
    link: "https://www.facebook.com/profile.php?id=1353193954553188",
    colSpan: "md:col-span-1"
  },
  {
    title: "Sky Bloom",
    category: "Facebook · AI Spectacle",
    desc: "Giant-flower firework Reels over real skylines — a visual format built for shares.",
    stat: "612,197 views in 28 days",
    link: "https://www.facebook.com/profile.php?id=1524457370740776",
    colSpan: "md:col-span-1"
  },
  {
    title: "The Second-Half Ledger",
    category: "YouTube · Senior Finance",
    desc: "Faceless long-form explainers on Medicare, Social Security and retirement money — every number fact-checked against a locked source before publishing.",
    stat: "Long-form, fact-audited",
    link: "https://www.youtube.com/@SecondHalfLedgerShow",
    colSpan: "md:col-span-2"
  },
  {
    title: "Goldie — The Living Statue",
    category: "Facebook · AI Character Series",
    desc: "A golden living-statue character in quiet, funny everyday moments.",
    stat: "Daily Reels",
    link: "https://www.facebook.com/profile.php?id=1381120091758389",
    colSpan: "md:col-span-1"
  },
  {
    title: "TinyTale Studio",
    category: "Facebook · AI Storytelling",
    desc: "Short AI story Reels for families, led by Milo the tiny orange kitten.",
    stat: "Daily Reels",
    link: "",
    colSpan: "md:col-span-1"
  }
];

export default function Portfolio() {
  return (
    <section id="channels" className="py-24 sm:py-32 bg-[var(--foreground)] text-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Our Channels &amp; Pages</h2>
            <p className="text-lg opacity-80">A network of AI content brands across YouTube and Facebook — every format researched first, then produced daily and judged on real numbers.</p>
          </div>
          <Link 
            href="https://www.youtube.com/@orangecatchaos11" 
            target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-[var(--background)]/20 font-bold hover:bg-[var(--background)]/10 transition-colors whitespace-nowrap"
          >
            Watch Orange Cat Chaos
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
                  Flagship Series
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] mb-4 tracking-tight group-hover:scale-105 transition-transform duration-500">
                  Rescue Watch
                </h3>
                <p className="text-[var(--foreground)]/60 text-lg md:text-xl">
                  1,205,012 views in 30 days. One AI series, zero ad spend.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Cards */}
          {channels.map((channel, idx) => (
            <div key={idx} className={`${channel.colSpan} rounded-3xl bg-[var(--background)] p-1 overflow-hidden group`}>
              <div className="w-full h-full bg-[var(--background)] rounded-[22px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden min-h-[320px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] to-[var(--foreground)]/5 border border-[var(--foreground)]/5 rounded-[22px]"></div>
                
                <div className="relative z-10">
                  <div className="text-[var(--accent)] font-mono text-sm mb-4">{channel.category}</div>
                  <h4 className="text-3xl font-extrabold text-[var(--foreground)] mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300">{channel.title}</h4>
                  <p className="text-[var(--foreground)]/60 text-lg leading-relaxed max-w-md">{channel.desc}</p>
                </div>

                <div className="relative z-10 mt-12 flex items-center justify-between gap-4">
                  <span className="font-mono text-sm font-bold text-[var(--foreground)]/70">{channel.stat}</span>
                  {channel.link && (
                    <Link href={channel.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors w-fit group/link">
                      Visit <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>
        
      </div>
    </section>
  );
}

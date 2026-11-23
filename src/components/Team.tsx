import Link from 'next/link';

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[var(--background)] border-t border-[var(--foreground)]/5">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">The Founder</h2>
            <p className="text-lg opacity-80">Netizen Labs is a one-person studio with a system behind it — you always work directly with the person who makes the videos.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Founder: Abu Sufyan */}
          <div className="group rounded-3xl border border-[var(--foreground)]/10 p-8 hover:bg-[var(--foreground)]/5 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-6 font-extrabold text-2xl tracking-tight">
              AS
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Abu Sufyan</h3>
            <p className="text-sm font-mono text-[var(--accent)] mb-4">Founder &amp; AI Video Creator</p>
            <p className="opacity-70 mb-6 leading-relaxed">
              AI video creator based in Lahore, working worldwide. He produces short-form content daily with Google Flow / Veo, runs the Netizen Labs channel network, and designs the studio&apos;s digital products and books.
            </p>
            
            <Link 
              href="https://www.youtube.com/@orangecatchaos11" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold hover:text-[var(--accent)] transition-colors group/link"
            >
              Watch the flagship channel
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>

        </div>
        
      </div>
    </section>
  );
}

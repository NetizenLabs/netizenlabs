import Link from 'next/link';
import Portfolio from '@/components/Portfolio';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Philosophy from '@/components/Philosophy';
import Team from '@/components/Team';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col items-center justify-center pt-20 pb-12 transition-colors duration-500">
        
        {/* Bespoke Background Element instead of generic mesh */}
        <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none opacity-20 dark:opacity-10">
          <div className="w-[800px] h-[400px] bg-[var(--accent)] blur-[150px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          
          {/* Announcement Badge */}
          <div className="hero-enter mb-8">
            <Link href="/#channels" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--foreground)]/10 text-sm opacity-80 transition-transform duration-[160ms] ease-out-custom hover:opacity-100 active:scale-[0.97] select-none bg-[var(--foreground)]/5 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[var(--accent)]"></span>
              <span className="font-medium">Our channels passed 2.2M views</span>
            </Link>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight mb-8 hero-enter delay-50 leading-[1.05]">
            We Build AI Content Brands <br className="hidden md:block" /> People Actually Watch.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl opacity-70 max-w-2xl mb-12 leading-relaxed hero-enter delay-100">
            Netizen Labs is an AI content studio. We research, produce and publish short-form video channels, digital products and books — and we put the same video engine to work for brands.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center hero-enter delay-150">
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-[12px] bg-[var(--foreground)] text-[var(--background)] font-bold flex items-center gap-2 group transition-all duration-[160ms] ease-out-custom hover:scale-[1.02] active:scale-[0.97] select-none shadow-lg"
            >
              Work With Us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-[160ms] ease-out-custom"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link 
              href="/#channels" 
              className="px-8 py-4 rounded-[12px] border border-[var(--foreground)]/20 font-bold transition-all duration-[160ms] ease-out-custom hover:bg-[var(--foreground)]/5 active:scale-[0.97] select-none backdrop-blur-sm"
            >
              See Our Channels
            </Link>
          </div>

          {/* Proof Strip */}
          <div className="mt-12 pt-6 border-t border-[var(--foreground)]/10 w-full max-w-3xl hero-enter delay-300">
            <p className="text-sm opacity-50 uppercase tracking-[0.2em] mb-6 font-mono font-semibold">
              Proof, not promises
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-[var(--accent)]">1.2M</div>
                <div className="text-xs uppercase tracking-widest opacity-60 font-bold">Views in 30 days, one series</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-[var(--accent)]">429,876</div>
                <div className="text-xs uppercase tracking-widest opacity-60 font-bold">Channel views in under 2 months</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-[var(--accent)]">20+</div>
                <div className="text-xs uppercase tracking-widest opacity-60 font-bold">Digital products &amp; books live</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Portfolio />
      <Products />
      <Services />
      <Philosophy />
      <Team />
      
      {/* Long-tail copy for SEO/LLM discovery */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm md:text-base opacity-50 leading-relaxed font-mono">
            Netizen Labs is an AI content studio run by Abu Sufyan in Lahore, working worldwide. We produce AI-generated short-form video for YouTube Shorts, Facebook Reels and TikTok, publish digital planners and workbooks under CareNest and Planners &amp; Printables Studio, and release large-print puzzle and coloring books on Amazon KDP. For brands, we offer AI video production, AI UGC ad creatives and channel building.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}

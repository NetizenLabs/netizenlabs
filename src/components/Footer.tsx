import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--foreground)]/10 py-12 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-bold text-lg tracking-tight">Netizen Labs</div>
          <p className="text-sm opacity-50">Engineered for performance.</p>
        </div>

        <div className="flex items-center gap-6 opacity-70">
          <Link href="https://x.com/WebToolkitPro" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-100 hover:text-[var(--accent)]" aria-label="X (Twitter)">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.15H5.078z"/></svg>
          </Link>
          <Link href="https://www.instagram.com/netizen_labs/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-100 hover:text-[var(--accent)]" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61590616118776" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-100 hover:text-[var(--accent)]" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </Link>
        </div>

      </div>
      <div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-[var(--foreground)]/5 flex flex-col md:flex-row items-center justify-between text-xs opacity-40 gap-4">
        <p>© {new Date().getFullYear()} Netizen Labs. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          <Link href="https://abusufyan.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:underline font-bold transition-colors">
            Abu Sufyan
          </Link>
          <span>•</span>
          <Link href="https://wtkpro.site" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:underline font-bold transition-colors">
            WebToolkit Pro
          </Link>
          <span>•</span>
          <Link href="https://tradeconvert.pro" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:underline font-bold transition-colors">
            TradeConvert
          </Link>
          <span>•</span>
          <Link href="https://www.severancecalculator.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:underline font-bold transition-colors">
            Severance Pay
          </Link>
          <span>•</span>
          <Link href="https://getstudynova.online" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:underline font-bold transition-colors">
            StudyNova
          </Link>
          <span>•</span>
          <Link href="https://quranhub.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:underline font-bold transition-colors">
            QuranHub
          </Link>
          <span>•</span>
          <Link href="https://slabreachcalculator.site" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:underline font-bold transition-colors">
            SLA Breach Calc
          </Link>
          <span>•</span>
          <Link href="https://taxforfreelancers.online" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:underline font-bold transition-colors">
            Freelance Tax
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

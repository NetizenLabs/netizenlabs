import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--foreground)]/10 py-12 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-bold text-lg tracking-tight">Netizen Labs</div>
          <p className="text-sm opacity-50">An AI content studio.</p>
        </div>

        <div className="flex items-center gap-6 opacity-70">
          <Link href="https://www.youtube.com/@orangecatchaos11" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-100 hover:text-[var(--accent)]" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z"/></svg>
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
          <Link href="https://safyan1.gumroad.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:underline font-bold transition-colors">
            Gumroad Store
          </Link>
          <span>•</span>
          <Link href="https://www.youtube.com/@orangecatchaos11" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:underline font-bold transition-colors">
            Orange Cat Chaos
          </Link>
          <span>•</span>
          <Link href="https://carenest.abusufyan.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:underline font-bold transition-colors">
            CareNest
          </Link>
          <span>•</span>
          <Link href="https://wtkpro.site" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:underline font-bold transition-colors">
            WebToolkit Pro
          </Link>
          <span>•</span>
          <Link href="https://getstudynova.online" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:underline font-bold transition-colors">
            StudyNova
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

import Link from 'next/link';

const products = [
  {
    title: "CareNest Complete Caregiver Binder",
    category: "CareNest · Fillable PDF",
    desc: "The 35-page organiser for people caring for aging parents — medical contacts, medications, appointments and emergency information in one place.",
    price: "$12",
    link: "https://safyan1.gumroad.com/l/qhxqyb"
  },
  {
    title: "Final Wishes & Legacy Organiser",
    category: "CareNest · Fillable PDF",
    desc: "186 pages and 3,409 real fillable fields: document locator, final wishes, letters, digital legacy and the first-week plan. An organiser, not a will.",
    price: "$19.99",
    link: "https://safyan1.gumroad.com/l/final-wishes-legacy-organiser"
  },
  {
    title: "Multi-Day Shaadi Planner",
    category: "Planners & Printables Studio · Fillable PDF",
    desc: "226 pages built for multi-day South Asian weddings — Dholki, Mehndi, Nikah, Baraat and Walima — with a 400-guest budget spreadsheet.",
    price: "$29.99",
    link: "https://safyan1.gumroad.com/l/shaadi-planner"
  },
  {
    title: "2027 Goal & Life Planner",
    category: "Planners & Printables Studio · Fillable PDF",
    desc: "119 pages, dated and undated editions: yearly goals broken into 12-week sprints, monthly and weekly planning, finance trackers and reflections.",
    price: "$11.99",
    link: "https://safyan1.gumroad.com/l/izwimi"
  },
  {
    title: "CareNest Hospital & Discharge Pack",
    category: "CareNest · Fillable PDF",
    desc: "30 pages for hospital stays and coming home: discharge papers, medication lists and follow-up care, organised before the stress hits.",
    price: "$12.99",
    link: "https://safyan1.gumroad.com/l/carenest-hospital-discharge-pack"
  },
  {
    title: "Large-Print Puzzle & Coloring Books",
    category: "Amazon KDP · Paperbacks",
    desc: "Word search and Sudoku for seniors, plus big-truck and tractor coloring books for kids — published under our Golden Years Puzzles and Little Wheels Press pen names.",
    price: "From $9.99",
    link: "https://safyan1.gumroad.com"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 sm:py-32 relative bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Our Products</h2>
          <p className="text-lg opacity-70 leading-relaxed mb-6">
            Fillable planners, organisers and books — designed from real buyer research, built to a premium standard, and sold in our Gumroad store and on Amazon. Every paid product has a free sample, so buyers can try before they pay.
          </p>
          <Link 
            href="https://safyan1.gumroad.com" 
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold hover:text-[var(--accent)] transition-colors group/link"
          >
            Visit the Gumroad store <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div 
              key={i} 
              className="p-8 rounded-2xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 hover:border-[var(--accent)]/50 transition-all duration-300 group hover:scale-[1.02] flex flex-col"
            >
              <div className="text-[var(--accent)] font-mono text-sm mb-4">{product.category}</div>
              <h3 className="text-xl font-bold mb-4">{product.title}</h3>
              <p className="opacity-70 leading-relaxed text-sm mb-6 flex-grow">
                {product.desc}
              </p>
              <div className="flex items-center justify-between mt-auto border-t border-[var(--foreground)]/10 pt-6">
                <span className="font-extrabold text-lg">{product.price}</span>
                <Link href={product.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold hover:text-[var(--accent)] transition-colors group/link">
                  View <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

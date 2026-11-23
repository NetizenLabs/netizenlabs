'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectScope: '',
    budget: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '3dd29efe-c7b4-46a8-a42a-bd18f201622c', 
          subject: `New Content Inquiry from ${formData.company || formData.name}`,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          budget: formData.budget,
          message: formData.projectScope,
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', projectScope: '', budget: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <main className="min-h-screen pt-32 pb-24 bg-[var(--background)] text-[var(--foreground)] flex justify-center items-center">
        <div className="max-w-md w-full px-6 text-center hero-enter">
          <div className="w-20 h-20 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-4">Message Sent</h1>
          <p className="text-lg opacity-70 mb-8">
            Thanks for reaching out! We will review your message and get back to you within 24 hours.
          </p>
          <Link href="/" className="px-6 py-3 rounded-full border border-[var(--foreground)]/20 font-bold hover:bg-[var(--foreground)]/5 transition-colors">
            Return to Homepage
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-6xl w-full mx-auto px-6">
        
        <div className="mb-14 text-center hero-enter">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--foreground)]/10 text-sm opacity-80 bg-[var(--foreground)]/5 backdrop-blur-md mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[var(--accent)]"></span>
            <span className="font-medium">Booking new projects now</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Start a Conversation</h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Tell us about your brand and the videos you need. You will hear back from Abu Sufyan directly — the person who actually makes the videos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <span className="px-4 py-2 rounded-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 text-sm font-bold">Replies within 24 hours</span>
            <span className="px-4 py-2 rounded-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 text-sm font-bold">Lahore · Working worldwide</span>
            <span className="px-4 py-2 rounded-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 text-sm font-bold">1.2M views in 30 days on our own series</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* Left column: process + direct contact */}
          <div className="lg:col-span-2 flex flex-col gap-8 hero-enter delay-50">
            
            <div className="bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 rounded-3xl p-8">
              <h2 className="text-xl font-extrabold tracking-tight mb-6">What happens next</h2>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[var(--accent)] text-[var(--background)] flex items-center justify-center font-extrabold">1</div>
                  <div>
                    <div className="font-bold mb-1">You tell us the goal</div>
                    <p className="text-sm opacity-70 leading-relaxed">Your product, your audience, and where the videos will run — TikTok, Reels, Shorts or ads.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[var(--accent)] text-[var(--background)] flex items-center justify-center font-extrabold">2</div>
                  <div>
                    <div className="font-bold mb-1">We reply within 24 hours</div>
                    <p className="text-sm opacity-70 leading-relaxed">With first hook ideas based on what is already working in your niche, plus a clear price.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[var(--accent)] text-[var(--background)] flex items-center justify-center font-extrabold">3</div>
                  <div>
                    <div className="font-bold mb-1">Start with a small test</div>
                    <p className="text-sm opacity-70 leading-relaxed">A small paid test batch first. If the numbers work, we scale into a daily publishing system.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 rounded-3xl p-8">
              <h2 className="text-xl font-extrabold tracking-tight mb-6">Or reach us directly</h2>
              <div className="flex flex-col gap-4">
                <Link href="mailto:safi4730358@gmail.com" className="flex items-center gap-3 font-bold hover:text-[var(--accent)] transition-colors group/link">
                  <span className="w-10 h-10 shrink-0 rounded-xl bg-[var(--background)] flex items-center justify-center text-[var(--accent)] shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </span>
                  safi4730358@gmail.com
                </Link>
                <Link href="https://wa.me/923264500909" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold hover:text-[var(--accent)] transition-colors group/link">
                  <span className="w-10 h-10 shrink-0 rounded-xl bg-[var(--background)] flex items-center justify-center text-[var(--accent)] shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  </span>
                  WhatsApp: +92 326 4500909
                </Link>
                <Link href="https://www.youtube.com/@orangecatchaos11" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold hover:text-[var(--accent)] transition-colors group/link">
                  <span className="w-10 h-10 shrink-0 rounded-xl bg-[var(--background)] flex items-center justify-center text-[var(--accent)] shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z"/></svg>
                  </span>
                  See the work on YouTube
                </Link>
              </div>
            </div>

          </div>

          {/* Right column: the form */}
          <div className="lg:col-span-3 bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 rounded-3xl p-8 md:p-12 hero-enter delay-100 shadow-xl backdrop-blur-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-bold opacity-80 uppercase tracking-widest">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      disabled={status === 'submitting'}
                      className="bg-[var(--background)] border border-[var(--foreground)]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors disabled:opacity-50"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-bold opacity-80 uppercase tracking-widest">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      disabled={status === 'submitting'}
                      className="bg-[var(--background)] border border-[var(--foreground)]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors disabled:opacity-50"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-bold opacity-80 uppercase tracking-widest">Company / Brand</label>
                  <input 
                    type="text" 
                    id="company" 
                    disabled={status === 'submitting'}
                    className="bg-[var(--background)] border border-[var(--foreground)]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors disabled:opacity-50"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="text-sm font-bold opacity-80 uppercase tracking-widest">Estimated Monthly Budget</label>
                <select 
                  id="budget" 
                  required
                  disabled={status === 'submitting'}
                  className="bg-[var(--background)] border border-[var(--foreground)]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none disabled:opacity-50"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                >
                  <option value="" disabled>Select a range</option>
                  <option value="Under $250">Under $250</option>
                  <option value="$250 - $1,000">$250 - $1,000</option>
                  <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                  <option value="$2,500+">$2,500+</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="projectScope" className="text-sm font-bold opacity-80 uppercase tracking-widest">What do you need?</label>
                <textarea 
                  id="projectScope" 
                  required
                  rows={5}
                  disabled={status === 'submitting'}
                  className="bg-[var(--background)] border border-[var(--foreground)]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none disabled:opacity-50"
                  value={formData.projectScope}
                  onChange={(e) => setFormData({...formData, projectScope: e.target.value})}
                  placeholder="e.g. 12 AI UGC videos a month for our skincare brand, for TikTok and Reels…"
                />
              </div>

              {status === 'error' && (
                <div className="text-red-500 text-sm font-bold text-center">
                  Something went wrong. Please try again or email us directly at safi4730358@gmail.com.
                </div>
              )}

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="mt-4 px-8 py-4 rounded-[12px] bg-[var(--accent)] text-[var(--background)] font-bold text-lg flex items-center justify-center gap-2 group transition-all duration-[160ms] ease-out-custom hover:scale-[1.02] active:scale-[0.97] select-none shadow-xl w-full disabled:opacity-70 disabled:hover:scale-100 disabled:active:scale-100"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                {status !== 'submitting' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-[160ms] ease-out-custom"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
}

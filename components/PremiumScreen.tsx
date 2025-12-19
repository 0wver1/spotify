import React from 'react';

interface PremiumScreenProps {
  onClose: () => void;
}

const PremiumScreen: React.FC<PremiumScreenProps> = ({ onClose }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased pb-20">
      {/* Top Navigation */}
      <div className="flex items-center p-4 pb-2 justify-between z-20 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1">Premium</h2>
        <div className="flex w-12 items-center justify-end">
          <button 
            onClick={onClose}
            className="flex items-center justify-center rounded-full h-10 w-10 bg-transparent text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>
      </div>

      {/* Hero Card */}
      <div className="px-4 pt-2 pb-6">
        <div className="relative w-full rounded-xl overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.3)] bg-[#1e1e1e] group">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
            style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(16, 34, 23, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaD9_NVXhY-Q-XzoM4GdAAMavwOpA0W_wEwaeDR3oylPQaj1KPdCU3siHRFjN3AcyryboES8cvOx5kdmp4wjksKNjWQ5nX3Qw38PBvm0tC9HNV2vBqes4i8bmUp3EuUk8bY7VH2soHXwll7IDD2ZWqE8mRQ9WUk5OIl7k_LaAeO5Nw5TQhwFU09GSr_UL6JdKlYF1SiCvrUTnzUpUS_Qwevr8q-tt6KmEJry9D8-FdjFL409ZmQ5CqSEjc2O66pBDAWX6g84YFqJk")' }}
          >
          </div>
          <div className="relative z-10 flex flex-col justify-end pt-[180px] p-6 h-full">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="bg-primary text-background-dark text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Free Trial</span>
            </div>
            <h1 className="text-white tracking-tight text-3xl font-extrabold leading-[1.1] mb-2">Unlock the full<br/>experience.</h1>
            <p className="text-slate-200 text-sm font-medium leading-relaxed max-w-[280px]">Join millions of listeners. Cancel anytime.</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="flex flex-col gap-6 px-4 pb-8">
        <div>
          <h2 className="text-slate-900 dark:text-white tracking-tight text-[22px] font-bold leading-tight pb-4">Why go Premium?</h2>
          <div className="grid grid-cols-1 gap-3">
            {/* Benefit Item 1 */}
            <div className="flex gap-4 rounded-lg bg-white dark:bg-[#192b21] p-4 items-center shadow-sm border border-slate-100 dark:border-[#2a4535]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-[24px]">volume_off</span>
              </div>
              <div>
                <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight mb-1">Ad-free music listening</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Enjoy nonstop music without interruptions.</p>
              </div>
            </div>
            {/* Benefit Item 2 */}
            <div className="flex gap-4 rounded-lg bg-white dark:bg-[#192b21] p-4 items-center shadow-sm border border-slate-100 dark:border-[#2a4535]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-[24px]">download_for_offline</span>
              </div>
              <div>
                <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight mb-1">Offline playback everywhere</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Save your data. Listen anywhere.</p>
              </div>
            </div>
            {/* Benefit Item 3 */}
            <div className="flex gap-4 rounded-lg bg-white dark:bg-[#192b21] p-4 items-center shadow-sm border border-slate-100 dark:border-[#2a4535]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-[24px]">graphic_eq</span>
              </div>
              <div>
                <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight mb-1">High-fidelity audio quality</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Hear sound details you've been missing.</p>
              </div>
            </div>
            {/* Benefit Item 4 */}
            <div className="flex gap-4 rounded-lg bg-white dark:bg-[#192b21] p-4 items-center shadow-sm border border-slate-100 dark:border-[#2a4535]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-[24px]">skip_next</span>
              </div>
              <div>
                <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight mb-1">Unlimited skips</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Just hit next. Play any song you want.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="pt-2 pb-32">
        <h2 className="text-slate-900 dark:text-white tracking-tight text-[22px] font-bold leading-tight pb-4 px-4">Pick your plan</h2>
        {/* Horizontal Scroll Container for Plans */}
        <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar snap-x snap-mandatory px-4">
          
          {/* Individual Plan */}
          <div className="snap-center shrink-0 w-[280px] relative flex flex-col rounded-xl bg-slate-100 dark:bg-[#223a2d] p-0 overflow-hidden border-2 border-primary">
            <div className="bg-primary text-background-dark text-xs font-bold py-1.5 text-center uppercase tracking-wider">Most Popular</div>
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Individual</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-300">1 account</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-slate-900 dark:text-white">$9.99</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">/month</span>
                </div>
              </div>
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                  <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                  Ad-free listening
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                  <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                  Offline downloads
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                  <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                  On-demand playback
                </li>
              </ul>
              <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-background-dark font-bold rounded-full py-3 px-4 hover:opacity-90 transition-opacity">
                Choose Individual
              </button>
            </div>
          </div>

          {/* Student Plan */}
          <div className="snap-center shrink-0 w-[280px] relative flex flex-col rounded-xl bg-slate-100 dark:bg-[#1a2e23] p-6 border border-transparent dark:border-[#2a4535]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Student</h3>
                <p className="text-sm text-slate-500 dark:text-slate-300">1 verified account</p>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-slate-900 dark:text-white">$4.99</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">/month</span>
              </div>
            </div>
            <ul className="flex flex-col gap-2 mb-6 flex-1">
              <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                Hulu (With Ads) plan
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                Ad-free music
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                SHOWTIME included
              </li>
            </ul>
            <button className="w-full bg-slate-200 dark:bg-[#324f3e] text-slate-900 dark:text-white font-bold rounded-full py-3 px-4 hover:bg-slate-300 dark:hover:bg-[#406650] transition-colors">
              Choose Student
            </button>
          </div>

          {/* Family Plan */}
          <div className="snap-center shrink-0 w-[280px] relative flex flex-col rounded-xl bg-slate-100 dark:bg-[#1a2e23] p-6 border border-transparent dark:border-[#2a4535]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Family</h3>
                <p className="text-sm text-slate-500 dark:text-slate-300">Up to 6 accounts</p>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-slate-900 dark:text-white">$15.99</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">/month</span>
              </div>
            </div>
            <ul className="flex flex-col gap-2 mb-6 flex-1">
              <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                Block explicit music
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                Ad-free music
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                Spotify Kids app
              </li>
            </ul>
            <button className="w-full bg-slate-200 dark:bg-[#324f3e] text-slate-900 dark:text-white font-bold rounded-full py-3 px-4 hover:bg-slate-300 dark:hover:bg-[#406650] transition-colors">
              Choose Family
            </button>
          </div>
        </div>
        <p className="px-6 text-xs text-center text-slate-500 dark:text-slate-400 mt-4 leading-normal">
          Offer available only to users who haven't tried Premium before. Terms and conditions apply.
        </p>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark dark:to-transparent pt-12 z-30">
        <div className="max-w-md mx-auto">
          <button className="relative w-full bg-primary text-background-dark text-lg font-bold rounded-full h-14 shadow-[0_0_20px_rgba(43,238,121,0.3)] hover:shadow-[0_0_30px_rgba(43,238,121,0.5)] transition-all transform active:scale-[0.98] flex items-center justify-center gap-2">
            Get 1 Month Free
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumScreen;
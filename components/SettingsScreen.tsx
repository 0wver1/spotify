import React, { useState } from 'react';

interface SettingsScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ onNavigate, onBack }) => {
  const [gaplessPlayback, setGaplessPlayback] = useState(true);
  const [privateSession, setPrivateSession] = useState(false);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col overflow-x-hidden antialiased selection:bg-primary selection:text-black animate-fadeIn">
      {/* Top App Bar */}
      <div className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
        <div className="flex items-center justify-between px-4 py-3">
          <button 
            onClick={onBack}
            className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all active:scale-90"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10 animate-slideInRight">Settings</h2>
          <div className="w-2"></div>
        </div>
      </div>

      <main className="flex-1 flex flex-col pb-32">
        {/* Profile Header */}
        <div className="flex flex-col items-center pt-8 pb-6 px-4 animate-scaleIn">
          <div className="relative group cursor-pointer transition-transform hover:scale-105 active:scale-95">
            <div 
              className="h-28 w-28 rounded-full bg-cover bg-center shadow-2xl ring-4 ring-background-light dark:ring-background-dark transition-all duration-500 group-hover:ring-primary/30" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuArmY57a6DbPlAJlWmlfTBUaO5fY9jiWbc5eJkUky4T5bUuE2k0xQ6setFmBgsg33avNOgnUVP98s524sJqDSPb03-i_jm6xrvGebCXctzoUqaZLA7GLfBjf1Hk0xFG-ghgZcSczSSJS67GGi7oaFCYu6ACDuN1dN7e1Almm9IbEh4GcfzLyLNlIL9sA2cku24UwV6GJaPIiDWBoZpJbWYuFjLTMhL9F01s73kKhm-oR9VJ9zafLP5azhpF75bjUCUdfmUdHVIwIcg')" }}
            >
            </div>
            <div className="absolute bottom-0 right-0 bg-primary text-black rounded-full p-1.5 ring-4 ring-background-light dark:ring-background-dark flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12">
              <span className="material-symbols-outlined text-sm font-bold">edit</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <h1 className="text-2xl font-bold tracking-tight animate-fadeIn">Alex Melophile</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 font-medium opacity-0 animate-fadeIn stagger-1" style={{ animationFillMode: 'forwards' }}>alex.m@example.com</p>
          </div>
          <button className="mt-5 w-full max-w-[200px] h-10 bg-primary/10 hover:bg-primary/20 active:scale-95 transition-all text-primary text-sm font-bold rounded-full flex items-center justify-center gap-2 group">
            <span className="group-hover:tracking-wider transition-all">View Profile</span>
          </button>
        </div>

        {/* Sections */}
        <div className="mt-4 px-2 space-y-8">
            <section className="animate-fadeIn stagger-2" style={{ opacity: 0, animationFillMode: 'forwards' }}>
              <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider px-4 mb-2">Account</h3>
              <div className="flex flex-col gap-1">
                <div 
                  onClick={() => onNavigate('premium')}
                  className="group flex items-center gap-4 px-4 py-3 hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 dark:active:bg-white/10 transition-all cursor-pointer rounded-xl"
                >
                  <div className="flex items-center justify-center rounded-full bg-primary/20 text-primary shrink-0 size-10 transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined">diamond</span>
                  </div>
                  <div className="flex-1 min-w-0 transition-transform group-hover:translate-x-1">
                    <p className="text-base font-medium truncate">Premium Plan</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Next billing: Oct 24</p>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <span className="text-sm">Manage</span>
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">chevron_right</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="animate-fadeIn stagger-3" style={{ opacity: 0, animationFillMode: 'forwards' }}>
              <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider px-4 mb-2">Experience</h3>
              <div className="flex flex-col gap-1">
                <div 
                  className="group flex items-center gap-4 px-4 py-3 hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer justify-between rounded-xl"
                  onClick={() => setGaplessPlayback(!gaplessPlayback)}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex items-center justify-center rounded-full bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-300 shrink-0 size-10 transition-transform group-hover:scale-110">
                      <span className="material-symbols-outlined">queue_music</span>
                    </div>
                    <p className="text-base font-medium truncate transition-transform group-hover:translate-x-1">Gapless Playback</p>
                  </div>
                  <div className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full transition-all duration-300 ${gaplessPlayback ? 'bg-primary' : 'bg-gray-300 dark:bg-white/20'}`}>
                    <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white dark:bg-black shadow-lg ring-0 transition duration-300 ease-in-out ${gaplessPlayback ? 'translate-x-6' : 'translate-x-1'}`}></span>
                  </div>
                </div>
              </div>
            </section>
        </div>

        {/* Footer / Logout */}
        <div className="mt-10 px-6 pb-10 flex flex-col items-center gap-6 animate-fadeIn stagger-5" style={{ opacity: 0, animationFillMode: 'forwards' }}>
          <button className="w-full py-4 rounded-full border border-gray-300 dark:border-white/20 hover:bg-red-500 hover:text-white hover:border-red-500 active:scale-[0.98] transition-all text-base font-bold text-red-500 dark:text-red-400">
            Log Out
          </button>
          <div className="text-center opacity-50">
            <p className="text-xs text-gray-400 dark:text-gray-600 font-medium">Version 8.4.22</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsScreen;
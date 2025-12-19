import React from 'react';
import { USER_AVATAR } from '../constants';

interface TopBarProps {
  onNavigate?: (tab: string) => void;
}

const FilterChip: React.FC<{ label: string; onClick?: () => void }> = ({ label, onClick }) => (
  <button 
    onClick={onClick}
    className="flex h-9 shrink-0 items-center justify-center rounded-full bg-white/10 dark:bg-white/10 px-6 active:scale-95 transition-all hover:bg-white/20 hover:shadow-lg hover:-translate-y-0.5"
  >
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const TopBar: React.FC<TopBarProps> = ({ onNavigate }) => {
  return (
    <div className="sticky top-0 z-40 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md transition-all duration-300">
      <div className="flex items-center justify-between px-4 pt-12 pb-4">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => onNavigate && onNavigate('profile')}>
          <div 
            className="size-10 shrink-0 rounded-full bg-center bg-cover border-2 border-primary transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(56,224,123,0.4)] active:scale-90" 
            style={{ backgroundImage: `url("${USER_AVATAR}")` }}
            role="img"
            aria-label="User profile picture"
          />
          <h1 className="text-xl font-bold tracking-tight animate-slideInRight">Good Evening</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center text-slate-900 dark:text-white hover:text-primary transition-all active:scale-90 relative">
            <span className="material-symbols-outlined text-[26px]">notifications</span>
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border-2 border-background-dark animate-pulse"></span>
          </button>
          <button 
            className="flex items-center justify-center text-slate-900 dark:text-white hover:text-primary transition-all active:scale-90"
            onClick={() => onNavigate && onNavigate('profile')}
          >
            <span className="material-symbols-outlined text-[26px] hover:rotate-45 transition-transform duration-500">settings</span>
          </button>
        </div>
      </div>
      
      {/* Filter Chips */}
      <div className="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar mask-linear-fade">
        <FilterChip label="Music" onClick={() => onNavigate && onNavigate('home')} />
        <FilterChip label="Podcasts" onClick={() => onNavigate && onNavigate('podcasts')} />
        <FilterChip label="Live Events" />
        <FilterChip label="Made For You" />
      </div>
    </div>
  );
};

export default TopBar;
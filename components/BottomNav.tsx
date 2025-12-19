import React from 'react';

interface BottomNavProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

const NavItem: React.FC<{ 
  icon: string; 
  label: string; 
  active?: boolean;
  filled?: boolean;
  onClick: () => void;
}> = ({ icon, label, active, filled, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 p-2 group transition-all duration-300 active:scale-75 ${active ? 'text-primary' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
  >
    <div className="relative">
      <span 
        className={`material-symbols-outlined text-[28px] transition-all duration-300 ${active ? 'scale-110 fill' : 'group-hover:scale-110'}`}
        style={active && filled ? { fontVariationSettings: "'FILL' 1, 'wght' 700" } : {}}
      >
        {icon}
      </span>
      {label === 'Profile' && active && (
        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary ring-2 ring-background-light dark:ring-background-dark animate-pulse"></span>
      )}
    </div>
    <span className={`text-[10px] font-medium transition-all duration-300 ${active ? 'font-bold tracking-wide scale-105' : 'group-hover:text-slate-900 dark:group-hover:text-white'}`}>
      {label}
    </span>
    {active && (
      <div className="w-1 h-1 bg-primary rounded-full mt-0.5 animate-scaleIn"></div>
    )}
  </button>
);

const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-200 dark:border-white/5 pb-6 pt-2 transition-all duration-500">
      <div className="flex justify-around items-center">
        <NavItem 
          icon="home" 
          label="Home" 
          active={currentTab === 'home'} 
          filled={currentTab === 'home'}
          onClick={() => onTabChange('home')}
        />
        <NavItem 
          icon="search" 
          label="Search" 
          active={currentTab === 'search'} 
          filled={currentTab === 'search'} 
          onClick={() => onTabChange('search')}
        />
        <NavItem 
          icon="library_music" 
          label="Library" 
          active={currentTab === 'library'}
          filled={currentTab === 'library'}
          onClick={() => onTabChange('library')} 
        />
        <NavItem 
          icon="person" 
          label="Profile" 
          active={currentTab === 'profile'}
          filled={currentTab === 'profile'}
          onClick={() => onTabChange('profile')} 
        />
      </div>
    </div>
  );
};

export default BottomNav;
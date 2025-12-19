import React from 'react';
import { USER_AVATAR } from '../constants';
import { LibraryItem } from '../types';

interface LibraryScreenProps {
  onNavigate: (screen: string, id?: string) => void;
  items: LibraryItem[];
}

const FilterButton: React.FC<{ label: string }> = ({ label }) => (
  <button className="flex h-8 shrink-0 items-center justify-center px-4 rounded-full bg-transparent border border-slate-300 dark:border-white/20 hover:bg-slate-200 dark:hover:bg-white/10 transition-all active:scale-95">
    <span className="text-sm font-medium whitespace-nowrap">{label}</span>
  </button>
);

const LibraryListItem: React.FC<{ item: LibraryItem, index: number, onClick?: () => void }> = ({ item, index, onClick }) => {
  const commonClass = `group flex items-center gap-4 py-3 transition-all duration-300 cursor-pointer hover:bg-white/5 rounded-xl px-2 -mx-2 animate-fadeIn stagger-${(index % 5) + 1}`;
  
  const renderImage = () => {
    if (item.type === 'add-artist' || item.type === 'add-podcast') {
      return (
        <div className="flex size-16 shrink-0 items-center justify-center rounded-none bg-gradient-to-br from-slate-200 to-slate-300 dark:from-[#2a2a2a] dark:to-[#121212] shadow-sm transition-transform group-hover:scale-105">
          <span className="material-symbols-outlined text-3xl text-slate-400 dark:text-white/40 group-hover:text-white transition-colors">add</span>
        </div>
      );
    }
    if (item.type === 'liked-songs') {
      return (
        <div className="flex size-16 shrink-0 items-center justify-center rounded-sm bg-gradient-to-br from-[#450af5] to-[#c4efd9] shadow-lg transition-transform group-hover:scale-105">
          <span className="material-symbols-outlined text-white fill text-[28px]">favorite</span>
        </div>
      );
    }
    return (
      <div 
        className={`bg-center bg-no-repeat bg-cover shrink-0 size-16 shadow-sm transition-transform duration-500 group-hover:scale-105 ${item.type === 'artist' ? 'rounded-full' : item.type === 'podcast' ? 'rounded-lg' : 'rounded-none'}`}
        style={{ backgroundImage: `url("${item.image}")` }}
      ></div>
    );
  };

  return (
    <div 
      className={commonClass}
      onClick={onClick}
      style={{ opacity: 0 }}
    >
      {renderImage()}
      
      <div className="flex flex-col justify-center flex-1 min-w-0 transition-transform duration-300 group-hover:translate-x-1">
        <p className={`text-base font-semibold leading-normal truncate group-hover:text-primary transition-colors ${item.isNewEpisode ? 'text-primary' : ''}`}>
          {item.title}
        </p>
        
        <div className="flex items-center gap-1.5">
          {item.pinned && (
            <span className="material-symbols-outlined text-primary text-[14px] fill animate-pulse">push_pin</span>
          )}
          {item.isNewEpisode && (
             <>
               <p className="text-sm text-primary font-medium">New Episode</p>
               <span className="size-1 rounded-full bg-slate-500 dark:bg-white/50"></span>
             </>
          )}
          <p className="text-sm text-slate-500 dark:text-white/50 truncate">{item.subtitle}</p>
        </div>
      </div>

      {item.showAddButton && (
        <div className="shrink-0 transition-transform group-hover:scale-110">
          <span className="material-symbols-outlined text-slate-400 dark:text-white/40 hover:text-white transition-colors">add_circle</span>
        </div>
      )}
    </div>
  );
};

const LibraryScreen: React.FC<LibraryScreenProps> = ({ onNavigate, items }) => {
  const handleItemClick = (item: LibraryItem) => {
    if (item.type === 'artist' || item.type === 'album') {
      onNavigate('artist', item.id);
    } else if (item.type === 'playlist' || item.type === 'liked-songs') {
      onNavigate('playlist', item.id);
    } else if (item.type === 'podcast') {
      onNavigate('podcasts'); 
    }
  };

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark animate-fadeIn">
      <header className="flex-none z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md pt-2 sticky top-0">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div 
              className="size-9 rounded-full bg-surface-dark overflow-hidden ring-2 ring-transparent hover:ring-primary/50 transition-all cursor-pointer bg-cover bg-center active:scale-90" 
              style={{ backgroundImage: `url("${USER_AVATAR}")` }}
            ></div>
            <h1 className="text-2xl font-bold tracking-tight animate-slideInRight">Your Library</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-3xl text-slate-500 dark:text-white/70 hover:text-primary transition-all active:scale-90">search</button>
            <button 
              className="material-symbols-outlined text-3xl text-slate-500 dark:text-white/70 hover:text-primary transition-all active:scale-90"
              onClick={() => onNavigate('create-playlist')}
            >
              add
            </button>
          </div>
        </div>
        
        <div className="flex gap-2 px-4 pb-2 overflow-x-auto no-scrollbar w-full">
          <FilterButton label="Playlists" />
          <FilterButton label="Artists" />
          <FilterButton label="Albums" />
          <FilterButton label="Podcasts & Shows" />
        </div>
        
        <div className="flex items-center justify-between px-4 py-2 mt-2 border-b border-transparent dark:border-white/5">
          <button className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-white/90 hover:text-primary transition-all active:scale-95">
            <span className="material-symbols-outlined text-[20px] scale-x-[-1]">sort</span>
            <span>Recently Added</span>
          </button>
          <button className="material-symbols-outlined text-slate-600 dark:text-white/70 hover:text-primary transition-all active:scale-90">grid_view</button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto overflow-x-hidden pb-40 scroll-smooth">
        <div className="flex flex-col px-4 pt-2">
          {items.map((item, index) => (
            <LibraryListItem 
              key={item.id} 
              item={item} 
              index={index}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default LibraryScreen;
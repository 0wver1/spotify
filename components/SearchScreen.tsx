import React from 'react';
import { RecentSearchItem, BrowseCategoryItem } from '../types';
import { RECENT_SEARCHES, BROWSE_CATEGORIES } from '../constants';

const SearchPill: React.FC<{ label: string }> = ({ label }) => (
  <button className="whitespace-nowrap px-4 py-2 bg-white dark:bg-surface-dark rounded-full text-xs font-semibold border border-slate-200 dark:border-white/10 hover:border-primary dark:hover:border-primary transition-all active:scale-90 animate-fadeIn">
    {label}
  </button>
);

const SearchScreen: React.FC = () => {
  return (
    <div className="flex flex-col pb-24 relative w-full animate-fadeIn">
      {/* Top Section: Title & Search */}
      <div className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md pt-12 pb-2 px-4 transition-all duration-300">
        <h1 className="text-3xl font-bold mb-4 tracking-tight animate-slideInRight">Search</h1>
        
        {/* Search Bar */}
        <label className="group flex items-center w-full h-12 bg-white dark:bg-surface-dark rounded-lg px-3 transition-all active:scale-[0.99] duration-300 shadow-sm dark:shadow-none ring-1 ring-black/5 dark:ring-white/5 focus-within:ring-2 focus-within:ring-primary focus-within:dark:ring-primary focus-within:shadow-lg focus-within:shadow-primary/10">
          <span className="material-symbols-outlined text-slate-400 dark:text-slate-400 group-focus-within:text-primary transition-colors mr-3">search</span>
          <input 
            className="flex-1 bg-transparent border-none text-base font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-0 p-0 leading-normal" 
            placeholder="Artists, songs, or podcasts" 
            type="text"
          />
          <button className="p-1 rounded-full text-slate-400 hover:text-primary transition-all active:scale-90">
            <span className="material-symbols-outlined text-[20px]">mic</span>
          </button>
        </label>

        {/* Trending Pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mt-4 pb-2">
          <SearchPill label="Top Hits 2024" />
          <SearchPill label="Rock Classics" />
          <SearchPill label="Deep Focus" />
          <SearchPill label="Podcasts" />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 mt-2 space-y-8">
        
        {/* Recent Searches */}
        <section className="animate-fadeIn stagger-1">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Recent searches</h2>
            <button className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-primary transition-colors uppercase tracking-wider active:scale-95">Clear</button>
          </div>
          <div className="flex flex-col gap-1">
            {RECENT_SEARCHES.map((item, index) => (
              <div 
                key={item.id} 
                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer group animate-fadeIn stagger-${index + 1}`}
                style={{ opacity: 0 }}
              >
                <div className={`relative h-12 w-12 shrink-0 shadow-md flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 ${item.image ? 'rounded-full' : 'rounded-lg bg-purple-500'}`}>
                  {item.image ? (
                    <img className="h-full w-full object-cover" src={item.image} alt={item.title} />
                  ) : (
                    <span className="material-symbols-outlined text-white">podcasts</span>
                  )}
                </div>
                <div className="flex-1 min-w-0 transition-transform group-hover:translate-x-1">
                  <p className="text-base font-semibold truncate text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{item.subtitle}</p>
                </div>
                <button className="h-8 w-8 flex items-center justify-center text-slate-400 hover:text-red-500 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-all active:scale-90 opacity-0 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Browse All Grid */}
        <section className="animate-fadeIn stagger-2">
          <h2 className="text-lg font-bold mb-4">Browse all</h2>
          <div className="grid grid-cols-2 gap-3">
            {BROWSE_CATEGORIES.map((category, index) => (
              <div 
                key={category.id} 
                className={`relative h-28 rounded-lg ${category.colorClass} overflow-hidden cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg hover:shadow-xl group animate-scaleIn stagger-${(index % 4) + 1}`}
                style={{ opacity: 0 }}
              >
                <h3 className="absolute top-3 left-3 text-lg font-bold text-white z-10 break-words max-w-[80%] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  {category.title}
                </h3>
                <div className="absolute -bottom-2 -right-3 h-20 w-20 rotate-[25deg] shadow-2xl rounded-md overflow-hidden bg-slate-900 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[15deg]">
                  <img className="h-full w-full object-cover opacity-90" src={category.image} alt={category.title} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Padding for player bar */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default SearchScreen;
import React from 'react';
import { SectionItem } from '../types';

interface HorizontalSectionProps {
  title: string;
  subtitle?: string;
  items: SectionItem[];
  accentColorClass?: string;
  isMixSection?: boolean;
}

const SectionCard: React.FC<{ item: SectionItem; index: number }> = ({ item, index }) => (
  <div 
    className={`flex flex-col gap-3 min-w-[160px] w-[160px] group cursor-pointer snap-start transition-all duration-300 animate-slideInRight stagger-${(index % 5) + 1}`}
    style={{ opacity: 0 }}
  >
    <div 
      className="w-full aspect-square bg-center bg-cover rounded-lg shadow-lg relative overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:shadow-primary/20" 
      style={{ backgroundImage: `url("${item.image}")` }}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
      {item.badge && (
        <div className="absolute bottom-2 left-2">
          <span className="bg-primary text-background-dark text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
            {item.badge}
          </span>
        </div>
      )}
      {/* Play Icon on Hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-primary/90 rounded-full p-3 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
           <span className="material-symbols-outlined text-background-dark fill text-2xl">play_arrow</span>
        </div>
      </div>
    </div>
    <div className="transition-transform duration-300 group-hover:translate-x-1">
      <p className="text-base font-bold truncate text-white group-hover:text-primary transition-colors">{item.title}</p>
      <p className="text-neutral-400 text-sm truncate">{item.subtitle}</p>
    </div>
  </div>
);

const HorizontalSection: React.FC<HorizontalSectionProps> = ({ 
  title, 
  subtitle, 
  items, 
  accentColorClass = "bg-primary"
}) => {
  return (
    <div className="flex flex-col pt-6">
      <div className="px-4 pb-3 flex items-center gap-3">
        <div className={`h-12 w-1 rounded-full ${accentColorClass} transition-all duration-500 group-hover:h-14`}></div>
        <div>
          {subtitle && (
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider animate-fadeIn">
              {subtitle}
            </p>
          )}
          <h2 className="text-2xl font-bold leading-tight animate-fadeIn">{title}</h2>
        </div>
      </div>
      <div className="flex overflow-x-auto no-scrollbar pb-4 px-4 gap-4 snap-x">
        {items.map((item, index) => (
          <SectionCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalSection;
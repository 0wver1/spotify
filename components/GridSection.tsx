import React from 'react';
import { GridItem } from '../types';

interface GridSectionProps {
  items: GridItem[];
}

const GridCard: React.FC<{ item: GridItem; index: number }> = ({ item, index }) => (
  <div 
    className={`flex items-center gap-3 rounded-lg bg-surface-dark/50 hover:bg-surface-dark/80 dark:bg-white/5 dark:hover:bg-white/10 transition-all duration-300 pr-3 overflow-hidden cursor-pointer group hover:scale-[1.02] hover:shadow-lg active:scale-95 animate-fadeIn stagger-${(index % 5) + 1}`}
    style={{ opacity: 0 }}
  >
    <div 
      className="h-14 w-14 shrink-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110" 
      style={{ backgroundImage: `url("${item.image}")` }}
    />
    <span className="text-sm font-bold truncate group-hover:text-primary transition-colors pr-1">
      {item.title}
    </span>
  </div>
);

const GridSection: React.FC<GridSectionProps> = ({ items }) => {
  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-2 gap-3">
        {items.map((item, index) => (
          <GridCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default GridSection;
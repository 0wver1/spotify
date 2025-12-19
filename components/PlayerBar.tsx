import React from 'react';
import { PlayerState } from '../types';

interface PlayerBarProps {
  state: PlayerState;
  onOpen: () => void;
  onTogglePlay: () => void;
  onNext: () => void;
}

const PlayerBar: React.FC<PlayerBarProps> = ({ state, onOpen, onTogglePlay, onNext }) => {
  return (
    <div className="fixed bottom-[88px] left-2 right-2 z-50">
      <div 
        onClick={onOpen}
        className="bg-surface-dark/95 dark:bg-[#252525] backdrop-blur-xl rounded-lg p-2 pr-4 flex items-center shadow-2xl border border-white/5 relative overflow-hidden group cursor-pointer"
      >
        
        {/* Progress Bar (Visual) */}
        <div className="absolute bottom-0 left-2 right-2 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-300 ease-linear"
            style={{ width: `${state.progress}%` }}
          ></div>
        </div>

        <div 
          className="h-10 w-10 shrink-0 bg-center bg-cover rounded-md mr-3 animate-[spin_10s_linear_infinite]" 
          style={{ 
            backgroundImage: `url("${state.track.image}")`,
            animationPlayState: state.isPlaying ? 'running' : 'paused'
          }}
        />
        
        <div className="flex-1 min-w-0 flex flex-col justify-center mr-4">
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold text-white truncate">{state.track.title}</p>
            {/* Optional explicit tag */}
            {/* <span className="bg-neutral-600 text-[9px] text-white px-1 rounded-sm flex items-center h-3.5">E</span> */}
          </div>
          <p className="text-xs text-primary/80 truncate">{state.track.artist}</p>
        </div>

        <div className="flex items-center gap-4">
          <button 
            className="text-neutral-300 hover:text-white transition-colors p-1"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="material-symbols-outlined text-[28px]">devices</span>
          </button>
          <button 
            className="text-neutral-300 hover:text-white transition-colors p-1"
            onClick={(e) => { e.stopPropagation(); /* Favorite logic */ }}
          >
            <span className="material-symbols-outlined text-[28px] fill">favorite</span>
          </button>
          <button 
            className="text-white hover:scale-110 transition-transform p-1"
            onClick={(e) => {
              e.stopPropagation();
              onTogglePlay();
            }}
          >
            <span className="material-symbols-outlined text-[32px] fill">
              {state.isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;
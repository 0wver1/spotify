import React from 'react';
import { PlayerState } from '../types';

interface NowPlayingScreenProps {
  onClose: () => void;
  playerState: PlayerState;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
};

const NowPlayingScreen: React.FC<NowPlayingScreenProps> = ({ 
  onClose, 
  playerState,
  onTogglePlay,
  onNext,
  onPrev
}) => {
  const { track, isPlaying, progress, currentTime, totalTime } = playerState;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-hidden animate-[slideUp_0.3s_ease-out]">
      {/* Ambient Background Gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Sheet Handle & Top Nav */}
      <div className="relative z-10 flex flex-col w-full pt-2 pb-2">
        {/* Handle */}
        <button className="flex h-5 w-full items-center justify-center mb-2" onClick={onClose}>
          <div className="h-1 w-12 rounded-full bg-slate-300 dark:bg-white/20"></div>
        </button>
        
        {/* Navigation Header */}
        <div className="flex items-center justify-between px-6">
          <button 
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-2xl">expand_more</span>
          </button>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold tracking-[0.15em] text-slate-500 dark:text-white/60 uppercase">Now Playing</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">{track.album || 'Unknown Album'}</span>
          </div>
          <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-2xl">more_horiz</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-8 w-full max-w-lg mx-auto pb-8">
        
        {/* Album Art */}
        <div className="w-full aspect-square mb-10 relative group">
          {/* Shadow/Glow */}
          <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          {/* Image */}
          <div 
            className="relative h-full w-full rounded-2xl bg-center bg-cover shadow-2xl overflow-hidden ring-1 ring-white/10" 
            style={{ backgroundImage: `url('${track.image}')` }}
          >
          </div>
        </div>

        {/* Track Info Header */}
        <div className="flex items-end justify-between mb-6">
          <div className="flex flex-col gap-1 pr-4 min-w-0">
            <div className="overflow-hidden">
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white truncate">
                {track.title}
              </h1>
            </div>
            <p className="text-base sm:text-lg font-medium text-slate-500 dark:text-gray-400 truncate">
              {track.artist}
            </p>
          </div>
          <button className="mb-1 text-primary hover:scale-110 active:scale-95 transition-transform shrink-0">
            <span className="material-symbols-outlined fill text-3xl">favorite</span>
          </button>
        </div>

        {/* Progress Slider */}
        <div className="w-full mb-6 group/slider">
          {/* Slider Track */}
          <div className="relative h-1.5 w-full bg-slate-200 dark:bg-white/10 rounded-full cursor-pointer">
            {/* Progress Fill */}
            <div 
              className="absolute top-0 left-0 h-full bg-slate-900 dark:bg-white rounded-full group-hover/slider:bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
            {/* Thumb */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/slider:opacity-100 shadow-md transition-opacity"
              style={{ left: `${progress}%` }}
            ></div>
          </div>
          {/* Timestamps */}
          <div className="flex justify-between mt-2 text-xs font-medium text-slate-400 dark:text-white/40 font-mono">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(totalTime)}</span>
          </div>
        </div>

        {/* Primary Controls */}
        <div className="flex items-center justify-between mb-8">
          <button className="text-slate-400 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors p-2">
            <span className="material-symbols-outlined text-2xl">shuffle</span>
          </button>
          
          <button 
            onClick={onPrev}
            className="text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors p-2"
          >
            <span className="material-symbols-outlined text-5xl fill">skip_previous</span>
          </button>
          
          {/* Play/Pause Button */}
          <button 
            onClick={onTogglePlay}
            className="bg-primary text-background-dark rounded-full p-5 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center justify-center"
          >
            <span className="material-symbols-outlined fill text-4xl">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>
          
          <button 
            onClick={onNext}
            className="text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors p-2"
          >
            <span className="material-symbols-outlined text-5xl fill">skip_next</span>
          </button>
          
          <button className="text-primary p-2 relative">
            <span className="material-symbols-outlined text-2xl">repeat</span>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
          </button>
        </div>

        {/* Secondary Controls / Footer */}
        <div className="flex items-center justify-between mt-auto">
          <button className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-lg">devices</span>
            <span className="text-xs font-bold tracking-wide">iPhone 15</span>
          </button>
          <div className="flex items-center gap-4">
            <button className="text-slate-400 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">share</span>
            </button>
            <button className="text-slate-400 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">queue_music</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlayingScreen;
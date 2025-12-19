import React, { useEffect, useState } from 'react';
import { LibraryItem, Track } from '../types';

interface PlaylistScreenProps {
  onBack: () => void;
  playlist: LibraryItem;
  onPlay: (track: Track) => void;
  currentTrackId?: string;
  isPlaying?: boolean;
}

const PlaylistScreen: React.FC<PlaylistScreenProps> = ({ onBack, playlist, onPlay, currentTrackId, isPlaying }) => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTitle(true);
      } else {
        setShowTitle(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tracks = playlist.tracks || [];

  return (
    <div className="relative flex flex-col min-h-screen w-full pb-32 animate-[fadeIn_0.3s_ease-out]">
        {/* Sticky Top Bar */}
        <div className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 transition-all duration-300 ${showTitle ? 'bg-background-dark/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
            <button
                onClick={onBack}
                className="flex items-center justify-center size-10 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-white/10 active:scale-95 transition-transform"
            >
                <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
            </button>
            <h2 className={`text-white text-base font-bold transition-opacity duration-300 ${showTitle ? 'opacity-100' : 'opacity-0'} hidden sm:block`}>
                {playlist.title}
            </h2>
            <button className="flex items-center justify-center size-10 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-white/10 active:scale-95 transition-transform">
                <span className="material-symbols-outlined">more_horiz</span>
            </button>
        </div>

        {/* Hero Header */}
        <div className="relative pt-24 pb-4 px-6 flex flex-col items-center justify-end min-h-[45vh] w-full overflow-hidden">
             {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2bee79]/20 via-[#102217]/80 to-background-dark pointer-events-none z-0"></div>

            {/* Cover Image */}
            <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] rounded-lg mb-6 group transition-transform duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-primary/20 blur-2xl -z-10 rounded-full opacity-60"></div>
                <img
                    alt={playlist.title}
                    className="w-full h-full object-cover rounded shadow-lg"
                    src={playlist.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuDaD9_NVXhY-Q-XzoM4GdAAMavwOpA0W_wEwaeDR3oylPQaj1KPdCU3siHRFjN3AcyryboES8cvOx5kdmp4wjksKNjWQ5nX3Qw38PBvm0tC9HNV2vBqes4i8bmUp3EuUk8bY7VH2soHXwll7IDD2ZWqE8mRQ9WUk5OIl7k_LaAeO5Nw5TQhwFU09GSr_UL6JdKlYF1SiCvrUTnzUpUS_Qwevr8q-tt6KmEJry9D8-FdjFL409ZmQ5CqSEjc2O66pBDAWX6g84YFqJk"}
                />
            </div>

            {/* Info */}
            <div className="relative z-10 w-full flex flex-col items-start gap-1">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-2">{playlist.title}</h1>
                <p className="text-white text-base font-normal leading-normal opacity-90 line-clamp-2">
                    {playlist.subtitle}
                </p>
                <div className="flex items-center gap-2 mt-2">
                    <div className="size-6 rounded-full overflow-hidden bg-gray-700">
                        <img
                            alt="Alex"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1_Udoig-RSZ10wQfgYWhpFXeGVU8TYT5DXKfXkWVUL9AWYZQR73vWK0dt9kYn2VKN5HCAsTsqurub68-CZMBm18Dcwt6QOfsW5JVbkwjCnujVzgHfvWkgggZvMv596o_MtM1ZHlU1x-uptEI9FUIZ7lx9tuJoa2t9MHbpkt7L5aEA1XuPCOEkszjQfOjTbS3MjWXOTiar0366HJvi0O2pC2V7utUtmZOn9exYAd-22txBv1kJFufqypnbU1N1HA8Ef6ENdyyEq8g"
                        />
                    </div>
                    <p className="text-[#92c9a8] text-sm font-medium tracking-wide">Created by Alex • {tracks.length} songs</p>
                </div>
            </div>
        </div>

        {/* Action Bar (Stickyish) */}
        <div className="sticky top-0 z-30 bg-background-dark/95 backdrop-blur-xl border-b border-white/5 px-6 py-3 flex items-center justify-between transition-all">
            <div className="flex items-center gap-5">
                <button className="text-gray-400 hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px] font-light">favorite</span>
                </button>
                <button className="text-primary hover:text-primary/80 transition-colors">
                    <span className="material-symbols-outlined text-[28px] font-light">download_for_offline</span>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px] font-light">share</span>
                </button>
            </div>
            <button 
                onClick={() => tracks.length > 0 && onPlay(tracks[0])}
                className="relative group"
            >
                <div className="absolute inset-0 bg-primary/40 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                <div className="relative size-14 bg-primary rounded-full flex items-center justify-center text-background-dark shadow-lg shadow-black/40 hover:scale-105 active:scale-95 transition-all">
                    <span className="material-symbols-outlined text-[32px] fill">play_arrow</span>
                    <div className="absolute bottom-0 right-0 bg-white rounded-full size-5 flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-[12px] text-black">shuffle</span>
                    </div>
                </div>
            </button>
        </div>

        {/* Songs List */}
        <div className="flex flex-col px-4 mt-2 gap-1 w-full max-w-3xl mx-auto">
            {/* Search/Sort */}
            <div className="flex items-center gap-3 mb-3 pt-2">
                <div className="relative flex-1 group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors text-[20px]">search</span>
                    </div>
                    <input
                        className="block w-full rounded-full border-0 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:bg-white/10 focus:ring-1 focus:ring-primary transition-all"
                        placeholder="Find in playlist"
                        type="text"
                    />
                </div>
                <button className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all active:scale-95 group">
                    <span>Sort</span>
                    <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">sort</span>
                </button>
            </div>

            {/* List Items */}
             {tracks.length === 0 ? (
                 <div className="text-center py-10 text-gray-500">No songs yet. Add some!</div>
             ) : (
                 tracks.map((song, index) => {
                     const active = song.id === currentTrackId;
                     return (
                        <div 
                            key={song.id} 
                            onClick={() => onPlay(song)}
                            className="group flex items-center justify-between p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                        >
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                {active && isPlaying ? (
                                    <div className="flex items-center justify-center size-8 text-primary">
                                        <span className="material-symbols-outlined text-lg animate-pulse">equalizer</span>
                                    </div>
                                ) : (
                                    <>
                                        <span className={`w-8 text-center font-medium group-hover:hidden ${active ? 'text-primary' : 'text-gray-500'}`}>{index + 1}</span>
                                        <span className={`w-8 text-center hidden group-hover:block ${active ? 'text-primary' : 'text-white'}`}><span className="material-symbols-outlined text-base">play_arrow</span></span>
                                    </>
                                )}
                                <div className="flex flex-col min-w-0">
                                    <span className={`font-medium text-base truncate transition-colors ${active ? 'text-primary' : 'text-white group-hover:text-primary'}`}>{song.title}</span>
                                    <span className="text-gray-400 text-sm truncate">{song.artist}</span>
                                </div>
                            </div>
                            <button className={`text-gray-500 hover:text-white p-2 ${active ? '' : 'opacity-0 group-hover:opacity-100 transition-opacity'}`}>
                                <span className="material-symbols-outlined">more_vert</span>
                            </button>
                        </div>
                     );
                 })
             )}
        </div>
    </div>
  );
};

export default PlaylistScreen;
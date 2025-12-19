import React from 'react';
import { USER_AVATAR } from '../constants';
import { PodcastShow } from '../types';

interface PodcastScreenProps {
  onBack: () => void;
  onNavigateToPlayer: () => void;
  onCreateShow: () => void;
  shows?: PodcastShow[];
}

const CategoryButton: React.FC<{ label: string; active?: boolean }> = ({ label, active }) => (
  <button 
    className={`whitespace-nowrap font-medium px-5 py-2 rounded-full text-sm transition-colors ${
      active 
        ? 'bg-white text-background-dark font-bold' 
        : 'bg-[#1e2f24] border border-white/10 text-gray-300 hover:text-white hover:border-white/30'
    }`}
  >
    {label}
  </button>
);

const TrendingShowCard: React.FC<{
  title: string;
  host: string;
  description: string;
  image: string;
  duration?: string;
  isNew?: boolean;
  colorClass?: string;
  icon?: string;
  initials?: string;
  onClick: () => void;
}> = ({ title, host, description, image, duration, isNew, colorClass, icon, initials, onClick }) => (
  <div 
    onClick={onClick}
    className="group flex gap-4 p-3 bg-[#1e2f24]/50 hover:bg-[#1e2f24] rounded-2xl border border-transparent hover:border-white/5 transition-all cursor-pointer"
  >
    <div className={`relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden shadow-lg ${colorClass || ''} flex items-center justify-center`}>
      {image && !icon && !initials && (
        <img alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={image} />
      )}
      {icon && (
        <span className="material-symbols-outlined text-white/50 text-4xl">{icon}</span>
      )}
      {initials && (
        <div className="text-white font-black text-2xl italic opacity-50">{initials}</div>
      )}
      {!colorClass && <div className="absolute inset-0 bg-black/20"></div>}
      {duration && (
        <div className="absolute bottom-1 right-1 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] text-white font-medium">{duration}</div>
      )}
    </div>
    <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
      <div className="flex items-start justify-between">
        <h4 className="text-white font-bold text-base truncate pr-2">{title}</h4>
        {isNew ? (
          <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full font-medium">New</span>
        ) : (
          <span className="material-symbols-outlined text-gray-500 text-sm">more_vert</span>
        )}
      </div>
      <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{host}</p>
      <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{description}</p>
    </div>
  </div>
);

const PodcastScreen: React.FC<PodcastScreenProps> = ({ onBack, onNavigateToPlayer, onCreateShow, shows = [] }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-x-hidden min-h-screen pb-32 animate-[fadeIn_0.3s_ease-out]">
      
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background-dark/95 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <button 
          onClick={onBack}
          className="flex items-center justify-center size-10 rounded-full hover:bg-white/10 active:scale-95 transition-transform text-white"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
        </button>
        <h2 className="text-white text-base font-bold">Browse Podcasts</h2>
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-white/10 active:scale-95 transition-transform text-white">
          <div className="size-8 rounded-full overflow-hidden border border-white/20">
            <img alt="User profile" className="w-full h-full object-cover" src={USER_AVATAR} />
          </div>
        </button>
      </div>

      <div className="pt-24 px-4 w-full max-w-3xl mx-auto flex flex-col gap-6">
        
        {/* Title & Actions */}
        <div className="flex flex-col gap-4">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">Podcasts</h1>
              <p className="text-gray-400 text-sm mt-1">Discover new stories & ideas</p>
            </div>
            <button 
              onClick={onCreateShow}
              className="flex items-center gap-2 bg-primary text-background-dark px-4 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-colors active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
              <span>Create Show</span>
            </button>
          </div>
          
          {/* Search */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
            </div>
            <input 
              className="w-full bg-[#1e2f24] border-none text-white placeholder-gray-500 rounded-2xl py-3.5 pl-10 pr-4 focus:ring-2 focus:ring-primary/50 transition-all text-sm font-medium shadow-inner shadow-black/20" 
              placeholder="Search podcasts, creators, or topics..." 
              type="text"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
          <CategoryButton label="All" active />
          <CategoryButton label="My Shows" />
          <CategoryButton label="Technology" />
          <CategoryButton label="Comedy" />
          <CategoryButton label="Business" />
          <CategoryButton label="True Crime" />
        </div>

        {/* Trending Shows List */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-lg">Trending Shows</h3>
          
          {/* User Created Shows */}
          {shows.map(show => (
            <TrendingShowCard 
                key={show.id}
                title={show.title}
                host={`HOSTED BY ${show.host}`}
                description={show.description}
                image={show.image}
                colorClass="bg-green-800"
                icon="podcasts"
                onClick={onNavigateToPlayer}
                isNew
            />
          ))}

          <TrendingShowCard 
            title="The Night Shift"
            host="HOSTED BY ALEX & SAM"
            description="Late night conversations about music, culture, and the unexpected turns of life."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuA0oyBpxeP38ewyH6wZ-m8kgjDLkWY9qSUDIQ99clhTZm7PMwKQMMmg72HZ65eGsMlUYN7XY3R0QGW1QY5ohUeY7EJskgAR1CGa975lR-bJTdBJDWEmH2yk8wD5hl76NZJ27OOc0ZXzvJVxl2UTls_Yy-2gF3wS_CDOhXk9YWZesm_oknYO2Pc9EuCqESK8-JGVbVGYn_l5y169nDpm-8niG_f6UOPM2_ERT78LYqLpkT2124KhqjwMxh0PjOhyuomFzozxOdWqnUg"
            duration="45m"
            isNew
            onClick={onNavigateToPlayer}
          />

          <TrendingShowCard 
            title="Future Tech Daily"
            host="SILICON VALLEY PRESS"
            description="Everything you need to know about AI, crypto, and the gadgets of tomorrow, today."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDhoAXm5q9BaMVbdH7M5uqZLQOahniUzgKaLJ0k219MvrBTGiuWfo9pQfO3MxGav0djSk4_UN1o6my0xRCjKS0tOiYqMpklTck0_LdggeGEqN0pBt6Tk9bZTNK6CBO5n4b6yaDsCIXBP3eLHFvtpzd7JQJW0mjfaO1MWVC1oOnZ9Pve9T71u73Gk5_3KI9MIk15xFy6wuUUbFPKzuxBXUOALCY0_hCowe1MiXZP7glnlK_SlJshUSnweOv0kzvSeo0_ko0E58R2fgE"
            onClick={onNavigateToPlayer}
          />

          <TrendingShowCard 
            title="Startup Stories"
            host="INDIE HACKERS"
            description="Interviews with founders who built profitable online businesses from scratch."
            image=""
            colorClass="bg-indigo-900"
            icon="mic"
            onClick={onNavigateToPlayer}
          />

          <TrendingShowCard 
            title="Global Markets"
            host="FINANCE WEEKLY"
            description="A deep dive into the stock market trends affecting your portfolio."
            image=""
            colorClass="bg-gradient-to-br from-purple-600 to-blue-500"
            initials="GM"
            onClick={onNavigateToPlayer}
          />

          {/* Creator Promo Card */}
          <div className="mt-4 p-6 rounded-3xl bg-gradient-to-r from-gray-800 to-gray-900 border border-white/5 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-9xl text-white">podcasts</span>
            </div>
            <h3 className="text-xl font-bold text-white relative z-10">Got a voice?</h3>
            <p className="text-gray-400 text-sm mt-2 mb-4 max-w-xs mx-auto relative z-10">
              Upload your episodes, manage your RSS feed, and view analytics in the Creator Studio.
            </p>
            <button 
              onClick={onCreateShow}
              className="text-white border border-white/20 hover:bg-white/10 px-6 py-2 rounded-full text-sm font-semibold transition-colors relative z-10"
            >
              Go to Studio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastScreen;
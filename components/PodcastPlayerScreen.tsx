import React, { useState } from 'react';
import { USER_AVATAR } from '../constants';

interface PodcastPlayerScreenProps {
  onClose: () => void;
}

const CommentItem: React.FC<{
  initials: string;
  name: string;
  time: string;
  text: string;
  likes: number;
  colorClass: string;
  hasReply?: boolean;
}> = ({ initials, name, time, text, likes, colorClass, hasReply }) => (
  <div className="flex gap-3 animate-[fadeIn_0.5s_ease-out]">
    <div className={`size-9 rounded-full flex-shrink-0 ${colorClass} flex items-center justify-center text-white text-xs font-bold border border-white/5 shadow-lg`}>
      {initials}
    </div>
    <div className="flex-1 flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-white text-sm font-bold">{name}</span>
        <span className="text-gray-500 text-[10px]">{time}</span>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
      
      {hasReply && (
        <div className="mt-3 pl-3 border-l-2 border-white/10 flex flex-col gap-3">
            <div className="flex gap-2">
                <div className="size-6 rounded-full flex-shrink-0 bg-pink-600 flex items-center justify-center text-white text-[9px] font-bold">
                    SA
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-white text-xs font-bold">Sarah A.</span>
                        <span className="text-gray-500 text-[9px]">4h ago</span>
                    </div>
                    <p className="text-gray-400 text-xs">I think it's the "Attention Is All You Need" paper from 2017!</p>
                </div>
            </div>
        </div>
      )}

      <div className="flex items-center gap-4 mt-0.5">
        <button className="flex items-center gap-1.5 text-gray-400 hover:text-primary transition-colors text-xs group">
          <span className="material-symbols-outlined text-[16px] group-hover:scale-110">thumb_up</span>
          <span>{likes}</span>
        </button>
        <button className="text-gray-400 hover:text-white text-xs font-semibold">Reply</button>
      </div>
    </div>
  </div>
);

const PodcastPlayerScreen: React.FC<PodcastPlayerScreenProps> = ({ onClose }) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    { id: 1, initials: 'JD', name: 'Jane Doe', time: '2h ago', text: "The part about generative art really struck a chord with me. It's fascinating how AI is reshaping creativity rather than replacing it.", likes: 24, colorClass: 'bg-indigo-600', hasReply: false },
    { id: 2, initials: 'MK', name: 'Marcus King', time: '5h ago', text: "Does anyone have the link to the paper mentioned around the 20-minute mark? I'd love to read more about those algorithms.", likes: 8, colorClass: 'bg-teal-600', hasReply: true },
    { id: 3, initials: 'TR', name: 'Tom Reynolds', time: '1d ago', text: "Great production quality on this one! The sound design during the intro was impeccable.", likes: 42, colorClass: 'bg-orange-600', hasReply: false }
  ]);

  const handlePostComment = () => {
      if (!commentText.trim()) return;
      const newComment = {
          id: Date.now(),
          initials: 'AM',
          name: 'Alex Melophile',
          time: 'Just now',
          text: commentText,
          likes: 0,
          colorClass: 'bg-primary',
          hasReply: false
      };
      setComments([newComment, ...comments]);
      setCommentText('');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-x-hidden min-h-screen pb-32 animate-[slideUp_0.3s_ease-out]">
      
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background-dark/95 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <button 
          onClick={onClose}
          className="flex items-center justify-center size-10 rounded-full hover:bg-white/10 active:scale-95 transition-transform text-white"
        >
          <span className="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-white text-xs font-bold uppercase tracking-widest text-primary">Now Playing</h2>
          <span className="text-white/60 text-[10px] font-medium">Future Tech Daily</span>
        </div>
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-white/10 active:scale-95 transition-transform text-white">
          <span className="material-symbols-outlined text-[20px]">more_horiz</span>
        </button>
      </div>

      <div className="pt-20 px-6 w-full max-w-3xl mx-auto flex flex-col gap-6">
        
        {/* Player Section */}
        <div className="flex flex-col items-center gap-6 mt-4">
          <div className="relative w-full aspect-square max-w-sm rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5">
            <img 
              alt="Abstract smoke art for podcast cover" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhoAXm5q9BaMVbdH7M5uqZLQOahniUzgKaLJ0k219MvrBTGiuWfo9pQfO3MxGav0djSk4_UN1o6my0xRCjKS0tOiYqMpklTck0_LdggeGEqN0pBt6Tk9bZTNK6CBO5n4b6yaDsCIXBP3eLHFvtpzd7JQJW0mjfaO1MWVC1oOnZ9Pve9T71u73Gk5_3KI9MIk15xFy6wuUUbFPKzuxBXUOALCY0_hCowe1MiXZP7glnlK_SlJshUSnweOv0kzvSeo0_ko0E58R2fgE"
            />
          </div>
          
          <div className="flex flex-col items-start w-full gap-1 mt-2">
            <h1 className="text-2xl font-bold text-white leading-tight">Ep 42: The Future of AI in Modern Society</h1>
            <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
              <span className="text-primary">Future Tech Daily</span>
              <span>•</span>
              <span>45 min left</span>
            </div>
          </div>

          {/* Progress */}
          <div className="w-full flex flex-col gap-2">
            <div className="relative h-1 bg-surface-dark rounded-full overflow-hidden w-full">
              <div className="absolute top-0 left-0 h-full w-[35%] bg-primary rounded-full"></div>
            </div>
            <div className="flex justify-between text-[10px] font-medium text-gray-500">
              <span>12:45</span>
              <span>-45:00</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between w-full max-w-xs px-2">
            <button className="text-gray-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">shuffle</span>
            </button>
            <button className="text-white hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-4xl fill">skip_previous</span>
            </button>
            <button className="size-16 bg-primary text-background-dark rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-4xl fill">pause</span>
            </button>
            <button className="text-white hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-4xl fill">skip_next</span>
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">timer</span>
            </button>
          </div>

          {/* Actions */}
          <div className="flex w-full justify-between items-center border-b border-white/5 pb-6">
            <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary group">
              <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">favorite</span>
              <span className="text-[10px] font-medium">Like</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white group">
              <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">download</span>
              <span className="text-[10px] font-medium">Download</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white group">
              <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">share</span>
              <span className="text-[10px] font-medium">Share</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-white group">
              <span className="material-symbols-outlined text-2xl fill text-primary group-hover:scale-110 transition-transform">chat_bubble</span>
              <span className="text-[10px] font-medium text-primary">Discuss</span>
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="flex flex-col gap-5 pb-8">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-lg">Comments <span className="text-gray-500 font-medium ml-1 text-sm">{comments.length}</span></h3>
            <div className="flex bg-surface-dark rounded-lg p-1">
              <button className="px-3 py-1 bg-white/10 rounded-md text-[10px] font-bold text-white shadow-sm">Top</button>
              <button className="px-3 py-1 text-[10px] font-medium text-gray-400 hover:text-white transition-colors">Newest</button>
            </div>
          </div>

          {/* Comment Input */}
          <div className="flex gap-3 items-start">
            <div className="size-9 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
              <img alt="Your profile" className="w-full h-full object-cover" src={USER_AVATAR} />
            </div>
            <div className="flex-1 group relative">
              <input 
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handlePostComment()}
                className="w-full bg-surface-dark/80 border border-transparent hover:border-white/10 focus:border-primary/50 text-white placeholder-gray-500 rounded-2xl py-3 pl-4 pr-12 focus:ring-0 focus:bg-surface-dark transition-all text-sm shadow-inner shadow-black/20" 
                placeholder="Share your thoughts on this episode..." 
                type="text"
              />
              <button 
                onClick={handlePostComment}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-gray-400 hover:text-primary hover:bg-white/5 transition-all"
              >
                <span className="material-symbols-outlined text-[20px] fill">send</span>
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="flex flex-col gap-6 mt-2">
            {comments.map(comment => (
                <CommentItem 
                    key={comment.id}
                    initials={comment.initials}
                    name={comment.name}
                    time={comment.time}
                    text={comment.text}
                    likes={comment.likes}
                    colorClass={comment.colorClass}
                    hasReply={comment.hasReply}
                />
            ))}

            <button className="w-full py-3 mt-2 text-sm text-gray-400 font-medium hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                View all comments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastPlayerScreen;
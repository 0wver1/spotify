import React, { useState } from 'react';
import { PodcastShow } from '../types';

interface CreatePodcastScreenProps {
  onClose: () => void;
  onSubmit: (show: PodcastShow) => void;
}

const CategoryChip: React.FC<{ label: string; selected: boolean; onClick: () => void }> = ({ label, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`flex shrink-0 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
      selected
        ? 'border-primary bg-primary text-background-dark font-bold'
        : 'border-[#326747] bg-transparent text-white hover:border-[#92c9a8] hover:bg-surface-dark/50'
    }`}
  >
    {label}
  </button>
);

const CreatePodcastScreen: React.FC<CreatePodcastScreenProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Music');

  const categories = ['Music', 'True Crime', 'Technology', 'Comedy', 'Business', 'Education'];

  const handlePublish = () => {
    if (!title) return;
    const newShow: PodcastShow = {
        id: Date.now().toString(),
        title,
        description,
        host: 'YOU',
        category: selectedCategory,
        image: '', // In a real app, this would be the uploaded URL
        episodes: []
    };
    onSubmit(newShow);
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased pb-24 animate-[slideUp_0.3s_ease-out]">
      
      {/* Header */}
      <div className="sticky top-0 z-20 flex items-center justify-between bg-background-light/95 dark:bg-background-dark/95 px-4 py-3 backdrop-blur-md">
        <button 
          onClick={onClose}
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-slate-900 dark:text-white transition-colors hover:bg-black/5 dark:hover:bg-white/10"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
        <h2 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">New Show</h2>
        <div className="size-10 shrink-0"></div>
      </div>

      <div className="flex flex-col gap-6 px-4 pt-4 w-full max-w-2xl mx-auto">
        
        {/* Cover Art Upload */}
        <div className="flex flex-col items-center">
          <div className="group relative flex aspect-square w-48 cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-[#326747] bg-[#193324]/30 transition-all hover:border-primary hover:bg-[#193324]/50">
            <div className="flex size-14 items-center justify-center rounded-full bg-[#193324] text-primary shadow-lg transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-[32px]">add_a_photo</span>
            </div>
            <div className="flex flex-col items-center gap-1 px-4 text-center">
              <p className="text-sm font-bold leading-tight text-white">Upload Cover</p>
            </div>
            <input accept="image/*" className="absolute inset-0 cursor-pointer opacity-0" type="file" />
          </div>
        </div>

        {/* Basic Details Form */}
        <div className="flex flex-col gap-5">
          <label className="flex flex-col gap-2">
            <span className="text-base font-medium leading-normal text-slate-900 dark:text-white">Podcast Title</span>
            <input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-14 w-full rounded-xl border border-[#326747] bg-[#193324] px-4 text-base font-normal leading-normal text-white placeholder-[#92c9a8] transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
              placeholder="Enter show name" 
              type="text" 
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-base font-medium leading-normal text-slate-900 dark:text-white">Description</span>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[140px] w-full resize-none rounded-xl border border-[#326747] bg-[#193324] p-4 text-base font-normal leading-normal text-white placeholder-[#92c9a8] transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
              placeholder="What's your show about?"
            ></textarea>
          </label>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">Category</h3>
            <button className="text-sm font-medium text-primary hover:underline">View all</button>
          </div>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 no-scrollbar">
            {categories.map((cat) => (
              <CategoryChip 
                key={cat} 
                label={cat} 
                selected={selectedCategory === cat} 
                onClick={() => setSelectedCategory(cat)} 
              />
            ))}
          </div>
        </div>

        {/* Episodes Section */}
        <div className="flex flex-col gap-4 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">Episodes (1)</h3>
          </div>
          
          {/* Existing Episode Card */}
          <div className="relative flex items-center gap-4 overflow-hidden rounded-xl bg-[#193324] p-3 transition-colors hover:bg-[#193324]/80 group cursor-pointer">
            <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-neutral-800">
              <div className="h-full w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white drop-shadow-md">play_arrow</span>
              </div>
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
              <p className="truncate text-base font-bold text-white">Trailer: Welcome to the Show</p>
              <p className="text-xs font-medium text-[#92c9a8]">Draft • 2:14</p>
            </div>
            <button className="flex size-10 items-center justify-center rounded-full text-[#92c9a8] hover:bg-white/10 hover:text-white transition-colors">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>

          {/* Add Episode Button */}
          <button className="group flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#326747] py-4 transition-all hover:border-primary hover:bg-primary/5 active:scale-[0.99]">
            <span className="material-symbols-outlined text-primary transition-transform group-hover:scale-110">add_circle</span>
            <span className="font-bold text-primary">Add Trailer or Episode</span>
          </button>
        </div>

        {/* Extra padding for scroll */}
        <div className="h-8"></div>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/5 bg-background-dark/90 p-4 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-md items-center justify-between gap-4">
          <button 
            onClick={onClose}
            className="flex h-12 flex-1 items-center justify-center rounded-full bg-[#193324] font-bold text-white transition-transform active:scale-95 hover:bg-[#254532]"
          >
            Save Draft
          </button>
          <button 
            onClick={handlePublish}
            className="flex h-12 flex-[2] items-center justify-center rounded-full bg-primary font-bold text-background-dark shadow-lg shadow-primary/20 transition-transform hover:brightness-105 active:scale-95"
          >
            Publish Show
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePodcastScreen;
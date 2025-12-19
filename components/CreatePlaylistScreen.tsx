import React, { useState } from 'react';

interface CreatePlaylistScreenProps {
  onClose: () => void;
  onAddMusic: () => void;
  onSubmit: (title: string, description: string) => void;
}

const CreatePlaylistScreen: React.FC<CreatePlaylistScreenProps> = ({ onClose, onAddMusic, onSubmit }) => {
  const [playlistName, setPlaylistName] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [isCollaborative, setIsCollaborative] = useState(false);

  const canCreate = playlistName.trim().length > 0;

  const handleCreate = () => {
    if (canCreate) {
      onSubmit(playlistName, description);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary selection:text-background-dark h-full min-h-screen flex flex-col relative overflow-x-hidden pb-10">
      
      {/* TopAppBar */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-background-light/90 dark:bg-background-dark/90 px-4 py-3 backdrop-blur-md transition-colors">
        <button 
          onClick={onClose}
          className="flex h-10 w-10 shrink-0 items-center justify-start text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-[28px]">close</span>
        </button>
        <h2 className="flex-1 text-center text-lg font-bold leading-tight tracking-tight">Create Playlist</h2>
        <button 
          disabled={!canCreate}
          className="flex h-10 items-center justify-end px-2"
          onClick={handleCreate}
        >
          <span className={`text-base font-bold transition-colors ${canCreate ? 'text-primary cursor-pointer' : 'text-slate-300 dark:text-slate-600 cursor-not-allowed'}`}>
            Create
          </span>
        </button>
      </header>

      {/* Main Content Form */}
      <main className="flex flex-col items-center px-6 pt-6 gap-8 w-full max-w-md mx-auto z-10">
        
        {/* Cover Art Section */}
        <div className="group relative flex flex-col items-center gap-4">
          <div className="relative flex size-64 shrink-0 items-center justify-center overflow-hidden rounded-[4px] shadow-2xl shadow-black/50 transition-transform active:scale-95 cursor-pointer">
            {/* Placeholder Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a4535] to-[#112218]"></div>
            {/* Icon Overlay */}
            <div className="z-10 flex flex-col items-center justify-center gap-2 text-white/80 transition-opacity group-hover:text-white">
              <span className="material-symbols-outlined text-[48px]">add_a_photo</span>
              <span className="text-sm font-medium">Upload Image</span>
            </div>
            {/* File Input Overlay (Hidden) */}
            <input accept="image/*" aria-label="Upload playlist cover image" className="absolute inset-0 cursor-pointer opacity-0" type="file"/>
          </div>
        </div>

        {/* Title Input */}
        <div className="w-full text-center">
          <input 
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            className="w-full bg-transparent border-none p-0 text-center text-3xl font-bold leading-tight text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:ring-0 focus:outline-none focus:placeholder:text-white/10" 
            placeholder="Give your playlist a name" 
            type="text"
            autoFocus
          />
        </div>

        {/* Settings Container */}
        <div className="flex w-full flex-col gap-6">
          
          {/* Description Field */}
          <div className="w-full">
            <label className="sr-only" htmlFor="description">Description</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full resize-none rounded-xl border-none bg-white dark:bg-surface-dark p-4 text-base font-normal text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-[#92c9a8] focus:ring-2 focus:ring-primary/50 transition-all outline-none" 
              id="description" 
              placeholder="Add a description (optional)" 
              rows={3}
            ></textarea>
          </div>

          {/* Privacy Setting */}
          <div className="flex items-center justify-between gap-4 rounded-xl px-2 py-1">
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-base font-medium leading-normal text-slate-900 dark:text-white">Make Public</p>
              <p className="mt-0.5 text-sm font-normal leading-normal text-slate-500 dark:text-[#92c9a8]/70">Author appears on profile and search</p>
            </div>
            <div className="shrink-0">
              <label className={`relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full p-0.5 transition-colors ${isPublic ? 'bg-primary' : 'bg-slate-200 dark:bg-surface-dark'}`}>
                <input 
                  type="checkbox" 
                  className="sr-only" 
                  checked={isPublic}
                  onChange={() => setIsPublic(!isPublic)}
                />
                <div 
                  className={`h-[27px] w-[27px] rounded-full bg-white shadow-sm transition-transform ${isPublic ? 'translate-x-5' : 'translate-x-0'}`} 
                  style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px" }}
                ></div>
              </label>
            </div>
          </div>

          {/* Collaborative Setting */}
          <div className="flex items-center justify-between gap-4 px-2 py-1">
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-base font-medium leading-normal text-slate-900 dark:text-white">Collaborative</p>
              <p className="mt-0.5 text-sm font-normal leading-normal text-slate-500 dark:text-[#92c9a8]/70">Invite friends to add songs</p>
            </div>
            <div className="shrink-0">
              <label className={`relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full p-0.5 transition-colors ${isCollaborative ? 'bg-primary' : 'bg-slate-200 dark:bg-surface-dark'}`}>
                <input 
                  type="checkbox" 
                  className="sr-only"
                  checked={isCollaborative}
                  onChange={() => setIsCollaborative(!isCollaborative)}
                />
                <div 
                  className={`h-[27px] w-[27px] rounded-full bg-white shadow-sm transition-transform ${isCollaborative ? 'translate-x-5' : 'translate-x-0'}`} 
                  style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px" }}
                ></div>
              </label>
            </div>
          </div>
        </div>

        {/* Add Songs CTA */}
        <div className="mt-4 w-full">
          <button 
            onClick={onAddMusic}
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-white dark:bg-surface-dark hover:bg-slate-100 dark:hover:bg-white/10 active:bg-slate-200 dark:active:bg-white/20 p-4 transition-all border border-slate-200 dark:border-white/5"
          >
            <div className="flex size-8 items-center justify-center rounded-full bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[20px]">add</span>
            </div>
            <span className="text-base font-bold text-slate-900 dark:text-white">Add Music</span>
          </button>
        </div>
      </main>

      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-20 dark:opacity-10 z-0">
        <div className="absolute -top-[20%] -left-[10%] size-[500px] rounded-full bg-primary blur-[120px]"></div>
      </div>
    </div>
  );
};

export default CreatePlaylistScreen;
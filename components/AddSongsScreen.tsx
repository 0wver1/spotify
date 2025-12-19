import React, { useState } from 'react';

interface AddSongsScreenProps {
  onClose: () => void;
  onDone: () => void;
}

const FilterButton: React.FC<{ label: string }> = ({ label }) => (
  <button className="shrink-0 h-9 px-5 rounded-full bg-surface-light dark:bg-[#162e21] border border-transparent dark:border-white/5 active:scale-95 transition-transform flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5">
    <span className="text-sm font-medium whitespace-nowrap text-gray-900 dark:text-white">{label}</span>
  </button>
);

const SongItem: React.FC<{ 
  title: string; 
  subtitle: string; 
  image: string; 
  isSelected?: boolean; 
  onToggle: () => void;
}> = ({ title, subtitle, image, isSelected, onToggle }) => (
  <div 
    className={`flex items-center gap-4 px-6 py-3 transition-colors cursor-pointer ${isSelected ? 'bg-surface-light/30 dark:bg-white/5' : 'active:bg-white/5'}`}
    onClick={onToggle}
  >
    <div className="relative shrink-0 w-14 h-14 rounded-md overflow-hidden shadow-lg bg-gray-800">
      <img alt={title} className="w-full h-full object-cover" src={image} />
      {isSelected && <div className="absolute inset-0 bg-black/20"></div>}
    </div>
    <div className="flex-1 min-w-0 flex flex-col justify-center gap-0.5">
      <p className={`text-base font-medium truncate ${isSelected ? 'text-primary' : 'text-gray-900 dark:text-white'}`}>
        {title}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{subtitle}</p>
    </div>
    <button 
      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
        isSelected 
          ? 'bg-primary border-2 border-primary text-black shadow-[0_0_10px_rgba(43,238,121,0.4)]' 
          : 'border-2 border-gray-400 dark:border-gray-600 text-gray-400 hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white active:scale-90'
      }`}
    >
      <span className="material-symbols-outlined text-[20px] font-bold">
        {isSelected ? 'check' : 'add'}
      </span>
    </button>
  </div>
);

const AddSongsScreen: React.FC<AddSongsScreenProps> = ({ onClose, onDone }) => {
  const [selectedSongs, setSelectedSongs] = useState<Set<string>>(new Set(['Electric Feel']));

  const toggleSong = (title: string) => {
    const newSelected = new Set(selectedSongs);
    if (newSelected.has(title)) {
      newSelected.delete(title);
    } else {
      newSelected.add(title);
    }
    setSelectedSongs(newSelected);
  };

  const selectedCount = selectedSongs.size;

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white overflow-x-hidden antialiased animate-[slideUp_0.3s_ease-out]">
      
      {/* Bottom Sheet Handle Area (Visual only for full screen app feel) */}
      <div className="flex flex-col items-center pt-3 pb-2 bg-background-light dark:bg-background-dark sticky top-0 z-20">
        <div className="h-1.5 w-12 rounded-full bg-gray-300 dark:bg-white/20"></div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-2 bg-background-light dark:bg-background-dark sticky top-6 z-20">
        <div className="w-12">
            {/* Optional Back button could go here */}
            <button onClick={onClose} className="p-2 -ml-2 text-slate-500 hover:text-slate-900 dark:hover:text-white">
                <span className="material-symbols-outlined">close</span>
            </button>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-tight text-center">Add Songs</h2>
        <button 
            onClick={onDone}
            className="flex w-12 items-center justify-end group"
        >
          <span className="text-primary text-base font-bold group-hover:opacity-80 transition-opacity">Done</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-5 py-4 sticky top-[60px] z-10 bg-background-light dark:bg-background-dark/95 backdrop-blur-md">
        <div className="relative flex items-center w-full h-12 rounded-full bg-surface-light dark:bg-[#162e21] overflow-hidden group focus-within:ring-2 focus-within:ring-primary/50 transition-all duration-300">
          <div className="pl-4 pr-3 text-gray-400 group-focus-within:text-primary transition-colors">
            <span className="material-symbols-outlined text-[24px]">search</span>
          </div>
          <input 
            className="flex-1 bg-transparent border-none text-base font-medium placeholder:text-gray-500 text-gray-900 dark:text-white focus:ring-0 p-0 h-full" 
            placeholder="Search songs, artists, or albums" 
            type="text"
            autoFocus
          />
        </div>
      </div>

      {/* Filter Chips */}
      <div className="w-full overflow-x-auto pb-4 pt-1 no-scrollbar">
        <div className="flex px-5 gap-3">
          <FilterButton label="Top Results" />
          <FilterButton label="Rock" />
          <FilterButton label="Liked Songs" />
          <FilterButton label="New Releases" />
          <FilterButton label="Pop" />
        </div>
      </div>

      {/* Section 1: Suggested */}
      <div className="flex flex-col pb-6">
        <div className="px-6 py-3">
          <h3 className="text-lg font-bold tracking-tight">Suggested for this playlist</h3>
        </div>
        
        <SongItem 
          title="Midnight City"
          subtitle="M83 • Hurry Up, We're Dreaming"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDONOReAst5MWkCyaH6Wkdryg1o3c3UXI2dP4FKrDgIZV2VHf29PxGYrWnUidpG6OKPXMzjPT_0rkuZAlRWYUf1mUPjc6HB3zIPCimSpwFtROP90Oy23bpFMAC9EO3WnY7a4rUjscC3kz-W-YMdrZ5cMSKUNUT0aSkN-TY62whSv4Y0SiZ-997gtnyFEBp9pw-MSdqVkf4L9v3-xUMNIvrzm5Kj49vxFPEaXgmWcB2a2-YBKgRoLfnlfYaQOyImH1AyTBJpUqMcPsM"
          isSelected={selectedSongs.has('Midnight City')}
          onToggle={() => toggleSong('Midnight City')}
        />

        <SongItem 
          title="Electric Feel"
          subtitle="MGMT • Oracular Spectacular"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDWzT7Bq9k4OPu3l-bASu1bpJL8sEYjWcgM0sQwKIIIo2kb45W0RHkKN8wQ-8_cvhMls5MQEXhPocZm4v8b4rm6yBVcNp7EmCGUnlafE__AG8OrFd97exZOiBheUaB2WmbKq1vUaCPPhC61FNQajd5wEJ4jfqC-JxYJxXDEafsk6Xt82Bgx0Vzz1PkTyv_Mw0AwcgIyodE9TA1ivgsjRhb3rnnhn6zKvrPwV-FwJYgzHTXv0bJLDsTm_5XzgkhLcglHMDw71zJYBdY"
          isSelected={selectedSongs.has('Electric Feel')}
          onToggle={() => toggleSong('Electric Feel')}
        />

        <SongItem 
          title="The Less I Know The Better"
          subtitle="Tame Impala • Currents"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuCyU1wg2l-NdkgTYXTDgbIa5tbVClV-kHOKEX3C8AZAjTRR8_ezkF3FK1EM395d5T0XHjYJhiXZpQKN0HqH1ztoF0Nwee2VD5nv_ZnMzSZLv9dIrWBCgcfIQcvXYcKE-CEY8E-fxJFRSlBbdosYQ19i1rrZ13EMEz7SejhvC4XoZKPJSRSZnVHuH5Fxyfe-tif7YrQfJu88s242kl7MqYxoZgDWFjyvSLO8NrYlJtR4oTKJcmB_5GPzQY649D5538EUO30RzMQBK3A"
          isSelected={selectedSongs.has('The Less I Know The Better')}
          onToggle={() => toggleSong('The Less I Know The Better')}
        />
      </div>

      {/* Section 2: Recent Listening */}
      <div className="flex flex-col pb-24">
        <div className="px-6 py-3 pt-6">
          <h3 className="text-lg font-bold tracking-tight">Based on your recent listening</h3>
        </div>
        
        <SongItem 
          title="As It Was"
          subtitle="Harry Styles • Harry's House"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuAVqBcgHCElCA0k539Gla7BSbhwvhU-weXiwATtJHtom75l9wmlGe72ljjyRKWN2i_bmAqcD-hbUXKk0OEdSbegUvwm_bsDYfmyX5uNj3fHxbdY0IqqS6yeV_h10GgvUV7DFH9be1P7C0avlxC89IY0vTxtcX6Z7BEeQ7kefzjQKtwbUXX1lbCajLaI87CZLPIYfJycs-4Qt-XmpJNXkj6E7aQ-JRK0kjyU48lxf3leEOEFQBcK5FiLewaPZ2lWxwXIfwXeXPBTOFw"
          isSelected={selectedSongs.has('As It Was')}
          onToggle={() => toggleSong('As It Was')}
        />

        <SongItem 
          title="Sweater Weather"
          subtitle="The Neighbourhood • I Love You."
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuC8gk7pL9PcCPZTE5rGHkLKD0vMJ8257Tg14u_lkYcFTPn9MOuEpyxBiBv6FznUy5NnJIve-5W3aL6xF6avcWbBDno6n_L874G0-MqYQuPlr-1slsIfeuL5EGxIwK6VkFZgX82y0MxQP8Qo1j3i9Tr8fTVebLbrVc04Svss0J7Scqu-mgddgblpVVk_iD3B2bhyw-YsnAgIJKxHpP_vTxomosOk6oPDT-Wf1HZj74yLg0gOnzMg4BU5PRjDDIeKos_UyDO0VFz5HEg"
          isSelected={selectedSongs.has('Sweater Weather')}
          onToggle={() => toggleSong('Sweater Weather')}
        />
      </div>

      {/* Sticky Footer for adding songs */}
      {selectedCount > 0 && (
        <div className="fixed bottom-6 left-0 right-0 px-6 flex justify-center pointer-events-none z-30 animate-[slideUp_0.2s_ease-out]">
          <button 
            onClick={onDone}
            className="pointer-events-auto bg-primary text-background-dark font-bold text-base px-8 py-3.5 rounded-full shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-transform flex items-center gap-2"
          >
            <span>Add {selectedCount} song{selectedCount !== 1 ? 's' : ''}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AddSongsScreen;
import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import GridSection from './components/GridSection';
import HorizontalSection from './components/HorizontalSection';
import PlayerBar from './components/PlayerBar';
import BottomNav from './components/BottomNav';
import SearchScreen from './components/SearchScreen';
import NowPlayingScreen from './components/NowPlayingScreen';
import LibraryScreen from './components/LibraryScreen';
import PremiumScreen from './components/PremiumScreen';
import SettingsScreen from './components/SettingsScreen';
import ArtistProfileScreen from './components/ArtistProfileScreen';
import CreatePlaylistScreen from './components/CreatePlaylistScreen';
import AddSongsScreen from './components/AddSongsScreen';
import PlaylistScreen from './components/PlaylistScreen';
import PodcastScreen from './components/PodcastScreen';
import PodcastPlayerScreen from './components/PodcastPlayerScreen';
import CreatePodcastScreen from './components/CreatePodcastScreen';
import { GRID_ITEMS, NEW_RELEASES, HEAVY_ROTATION, LIBRARY_ITEMS, INITIAL_PLAYER_STATE } from './constants';
import { LibraryItem, Track, PlayerState, PodcastShow } from './types';

// Mock Data for Tracks
const ALL_TRACKS: Track[] = [
  { id: 't1', title: 'Neon Lights', artist: 'The Weeknd', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0oyBpxeP38ewyH6wZ-m8kgjDLkWY9qSUDIQ99clhTZm7PMwKQMMmg72HZ65eGsMlUYN7XY3R0QGW1QY5ohUeY7EJskgAR1CGa975lR-bJTdBJDWEmH2yk8wD5hl76NZJ27OOc0ZXzvJVxl2UTls_Yy-2gF3wS_CDOhXk9YWZesm_oknYO2Pc9EuCqESK8-JGVbVGYn_l5y169nDpm-8niG_f6UOPM2_ERT78LYqLpkT2124KhqjwMxh0PjOhyuomFzozxOdWqnUg', duration: '3:24' },
  { id: 't2', title: 'Midnight City', artist: 'M83', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDONOReAst5MWkCyaH6Wkdryg1o3c3UXI2dP4FKrDgIZV2VHf29PxGYrWnUidpG6OKPXMzjPT_0rkuZAlRWYUf1mUPjc6HB3zIPCimSpwFtROP90Oy23bpFMAC9EO3WnY7a4rUjscC3kz-W-YMdrZ5cMSKUNUT0aSkN-TY62whSv4Y0SiZ-997gtnyFEBp9pw-MSdqVkf4L9v3-xUMNIvrzm5Kj49vxFPEaXgmWcB2a2-YBKgRoLfnlfYaQOyImH1AyTBJpUqMcPsM', duration: '4:03' },
  { id: 't3', title: 'Electricity', artist: 'Silk City', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1_Udoig-RSZ10wQfgYWhpFXeGVU8TYT5DXKfXkWVUL9AWYZQR73vWK0dt9kYn2VKN5HCAsTsqurub68-CZMBm18Dcwt6QOfsW5JVbkwjCnujVzgHfvWkgggZvMv596o_MtM1ZHlU1x-uptEI9FUIZ7lx9tuJoa2t9MHbpkt7L5aEA1XuPCOEkszjQfOjTbS3MjWXOTiar0366HJvi0O2pC2V7utUtmZOn9exYAd-22txBv1kJFufqypnbU1N1HA8Ef6ENdyyEq8g', duration: '3:58' },
  { id: 't4', title: 'Instant Crush', artist: 'Daft Punk', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVqBcgHCElCA0k539Gla7BSbhwvhU-weXiwATtJHtom75l9wmlGe72ljjyRKWN2i_bmAqcD-hbUXKk0OEdSbegUvwm_bsDYfmyX5uNj3fHxbdY0IqqS6yeV_h10GgvUV7DFH9be1P7C0avlxC89IY0vTxtcX6Z7BEeQ7kefzjQKtwbUXX1lbCajLaI87CZLPIYfJycs-4Qt-XmpJNXkj6E7aQ-JRK0kjyU48lxf3leEOEFQBcK5FiLewaPZ2lWxwXIfwXeXPBTOFw', duration: '5:37' },
  { id: 't5', title: 'Summer', artist: 'Calvin Harris', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6uburDh3gwXDrmAvN1aU5yRZYkSWYtshLKT1ybooG4KQao95kCNwO8DI_Z5r1Pks7kxK5FaIdgLxrMmk4mID3dAdRDf_5j32n0dphBhgi2CWG-GRZY5uGOkYAP8ZQMtau4zAxYqWszPmyL0NfeldIEam4rdDVcG1HIGSQrXXBDATUS7gswUFDuKUDn0wX80B6XTnrWdPXALpUmsI79PLILInUOleGRbWQ9sdMxrZ_KrB03xBJnIu4qXxO7BKsar7tpGCe7WpqOR4', duration: '3:42' },
];

const INITIAL_PLAYLIST: LibraryItem = {
    id: 'p1',
    title: 'Summer Vibes 2024',
    subtitle: 'Playlist • Alex • 5 songs',
    type: 'playlist',
    image: ALL_TRACKS[0].image,
    tracks: ALL_TRACKS
};

const App: React.FC = () => {
  // Navigation State
  const [currentTab, setCurrentTab] = useState('home');
  const [activePlaylistId, setActivePlaylistId] = useState<string | null>(null);
  
  // Data State
  const [library, setLibrary] = useState<LibraryItem[]>([ ...LIBRARY_ITEMS, INITIAL_PLAYLIST ]);
  const [userShows, setUserShows] = useState<PodcastShow[]>([]);

  // Player State
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [playerState, setPlayerState] = useState<PlayerState>({
      track: ALL_TRACKS[0],
      isPlaying: false,
      progress: 0,
      currentTime: 0,
      totalTime: 204
  });

  // Navigation Helper
  const navigateTo = (screen: string, id?: string) => {
      setCurrentTab(screen);
      if (id && screen === 'playlist') {
          setActivePlaylistId(id);
      }
  };

  // Player Logic: Toggle Play
  const togglePlay = () => {
      setPlayerState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
  };

  // Player Logic: Play Specific Track
  const playTrack = (track: Track) => {
      // Parse duration to seconds (simple assumption mm:ss)
      const parts = track.duration.split(':');
      const seconds = parseInt(parts[0]) * 60 + parseInt(parts[1]);

      setPlayerState({
          track,
          isPlaying: true,
          progress: 0,
          currentTime: 0,
          totalTime: seconds
      });
  };

  // Player Logic: Next Track (Simulation)
  const nextTrack = () => {
      const currentIndex = ALL_TRACKS.findIndex(t => t.id === playerState.track.id);
      const nextIndex = (currentIndex + 1) % ALL_TRACKS.length;
      playTrack(ALL_TRACKS[nextIndex]);
  };

  // Player Logic: Progress Tick
  useEffect(() => {
    let interval: any;
    if (playerState.isPlaying) {
      interval = setInterval(() => {
        setPlayerState(prev => {
          if (prev.currentTime >= prev.totalTime) {
              // Auto skip or stop
              return { ...prev, isPlaying: false, progress: 100 };
          }
          const newTime = prev.currentTime + 1;
          const newProgress = (newTime / prev.totalTime) * 100;
          return { ...prev, currentTime: newTime, progress: newProgress };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [playerState.isPlaying, playerState.totalTime]);


  // Library Logic: Create Playlist
  const handleCreatePlaylist = (title: string, description: string) => {
      const newPlaylist: LibraryItem = {
          id: `p${Date.now()}`,
          title: title,
          subtitle: `Playlist • You • 0 songs`,
          type: 'playlist',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaD9_NVXhY-Q-XzoM4GdAAMavwOpA0W_wEwaeDR3oylPQaj1KPdCU3siHRFjN3AcyryboES8cvOx5kdmp4wjksKNjWQ5nX3Qw38PBvm0tC9HNV2vBqes4i8bmUp3EuUk8bY7VH2soHXwll7IDD2ZWqE8mRQ9WUk5OIl7k_LaAeO5Nw5TQhwFU09GSr_UL6JdKlYF1SiCvrUTnzUpUS_Qwevr8q-tt6KmEJry9D8-FdjFL409ZmQ5CqSEjc2O66pBDAWX6g84YFqJk',
          tracks: []
      };
      setLibrary(prev => [newPlaylist, ...prev]); // Add to top
      navigateTo('library');
  };

  // Library Logic: Create Podcast
  const handleCreateShow = (show: PodcastShow) => {
      setUserShows(prev => [show, ...prev]);
      navigateTo('podcasts');
  };

  // Determine which playlist to show
  const currentPlaylist = library.find(i => i.id === activePlaylistId) || INITIAL_PLAYLIST;

  const isFullScreenMode = currentTab === 'premium' || currentTab === 'artist' || currentTab === 'create-playlist' || currentTab === 'add-songs' || currentTab === 'podcasts' || currentTab === 'podcast-player' || currentTab === 'create-podcast';

  return (
    <div className="min-h-screen relative bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      
      {currentTab === 'home' && (
        <>
          <TopBar onNavigate={navigateTo} />
          <main className="pb-40">
            <GridSection items={GRID_ITEMS} />
            <HorizontalSection 
              title="New Releases" 
              subtitle="New Music Friday"
              items={NEW_RELEASES}
              accentColorClass="bg-primary"
            />
            <HorizontalSection 
              title="Your Heavy Rotation" 
              subtitle="Just for you"
              items={HEAVY_ROTATION}
              accentColorClass="bg-primary/50"
            />
            <div className="h-10"></div>
          </main>
        </>
      )}

      {currentTab === 'search' && (
        <SearchScreen />
      )}

      {currentTab === 'library' && (
        <LibraryScreen onNavigate={navigateTo} items={library} />
      )}
      
      {currentTab === 'profile' && (
        <SettingsScreen 
          onNavigate={navigateTo} 
          onBack={() => navigateTo('home')}
        />
      )}
      
      {currentTab === 'premium' && (
        <PremiumScreen onClose={() => navigateTo('profile')} />
      )}

      {currentTab === 'artist' && (
        <ArtistProfileScreen onBack={() => navigateTo('library')} />
      )}

      {currentTab === 'playlist' && (
        <PlaylistScreen 
            onBack={() => navigateTo('library')} 
            playlist={currentPlaylist}
            onPlay={playTrack}
            currentTrackId={playerState.track.id}
            isPlaying={playerState.isPlaying}
        />
      )}

      {currentTab === 'create-playlist' && (
        <CreatePlaylistScreen 
          onClose={() => navigateTo('library')} 
          onAddMusic={() => navigateTo('add-songs')}
          onSubmit={handleCreatePlaylist}
        />
      )}

      {currentTab === 'add-songs' && (
        <AddSongsScreen 
          onClose={() => navigateTo('create-playlist')} 
          onDone={() => navigateTo('create-playlist')}
        />
      )}

      {currentTab === 'podcasts' && (
        <PodcastScreen 
          onBack={() => navigateTo('home')} 
          onNavigateToPlayer={() => navigateTo('podcast-player')}
          onCreateShow={() => navigateTo('create-podcast')}
          shows={userShows}
        />
      )}

      {currentTab === 'podcast-player' && (
        <PodcastPlayerScreen 
          onClose={() => navigateTo('podcasts')} 
        />
      )}

      {currentTab === 'create-podcast' && (
        <CreatePodcastScreen 
          onClose={() => navigateTo('podcasts')}
          onSubmit={handleCreateShow} 
        />
      )}

      {!isFullScreenMode && (
        <PlayerBar 
          state={playerState} 
          onOpen={() => setIsPlayerOpen(true)}
          onTogglePlay={togglePlay}
          onNext={nextTrack}
        />
      )}

      {!isFullScreenMode && (
        <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />
      )}

      {isPlayerOpen && (
        <NowPlayingScreen 
            onClose={() => setIsPlayerOpen(false)}
            playerState={playerState}
            onTogglePlay={togglePlay}
            onNext={nextTrack}
            onPrev={() => {}} // Simple next track only for demo
        />
      )}
    </div>
  );
};

export default App;
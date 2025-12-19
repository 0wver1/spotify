export interface GridItem {
  id: string;
  title: string;
  image: string;
  type?: 'playlist' | 'artist' | 'album' | 'podcast';
}

export interface SectionItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
  type?: 'playlist' | 'artist' | 'album' | 'podcast';
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  album?: string;
  image: string;
  duration: string;
}

export interface PlayerState {
  track: Track;
  isPlaying: boolean;
  progress: number; // 0-100
  currentTime: number; // in seconds
  totalTime: number; // in seconds
}

export interface RecentSearchItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'artist' | 'podcast' | 'song';
  image?: string;
}

export interface BrowseCategoryItem {
  id: string;
  title: string;
  colorClass: string;
  image: string;
}

export interface LibraryItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'playlist' | 'artist' | 'album' | 'podcast' | 'add-artist' | 'add-podcast' | 'liked-songs';
  image?: string;
  pinned?: boolean;
  isNewEpisode?: boolean;
  showAddButton?: boolean;
  tracks?: Track[]; // For playlists
}

export interface PodcastShow {
  id: string;
  title: string;
  host: string;
  description: string;
  image: string;
  category: string;
  episodes: any[];
}

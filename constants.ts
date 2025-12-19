import { GridItem, SectionItem, PlayerState, RecentSearchItem, BrowseCategoryItem, LibraryItem } from './types';

export const GRID_ITEMS: GridItem[] = [
  {
    id: '1',
    title: 'Liked Songs',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVEJYv4lv5hmBzd8vh3Hmz12SIuD8_gHR933-L-PVCxlpJCHX6DGt7K5WQWSg36ccejihljK3HVLo_P3fihUBvvLeDrKh2kkvzSE5pOSq1ZJ-GUy8So_dW_9kSl49_Nesvdjy2Fm_C26LYSyIAhlno5wUrvxq0i-FMdLeXntqspL2VRsu8hUwQEiXW4c0T6k0JA04aIDmG88MRw_2lQtXekpYzck5ZJFere0dyRPd-7n15VMdTwQAt7kkYoPOA-ITFwyMqZ4uFJSU'
  },
  {
    id: '2',
    title: 'On Repeat',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByDuD8KoAZuqdiz5Xz7tqnwI_pAWOfXzU1AsQs_ioYHTTrK9kuozGHY2HdmqoJslBp3TlDWzT82EknmfKTwk_If6fyPOs2nG0VWUd_eZTI4BncG6W7CwBe8-tZmDNYN9MXFkmp8rnUhnARVwG10sYvzbqLcEBhskxxMFtc7Jocme3Z3KTmA8Y6xkutu-vOrxXS8y454-UHANErIGKevgEjRu4zQRdB_2Jfzyn8_IWSTbognP8Yh5LZBt7ld3p2GmfDpO8ZxXIF7v0'
  },
  {
    id: '3',
    title: 'Daily Mix 1',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeL79rEnJHkMzxYvEk3SGrFSKvmFIwN0NGV7TcNGDNWE6was3fIlxVMRR6xfl4YjuG94PEBH18yIrP0vlCcQOuYAnnWMkSlz064xkILKSwDF4Jq-ay3IMtC7azo746rIhWF6n_fQP0a0IXsp3TGPjZ6Os3vwOmvHp1TDqfhMou6m3rcOxeGNQG3Veq_JLUpV7EoAaOjOBaZy53fjIqF2RsztxcKtSVevLsHQijOhFVpMHwE4w2XqTVAh4HJfz8jrABNvEOK9NhupE'
  },
  {
    id: '4',
    title: 'Late Night Jazz',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDajuTYmGY4G-0LEn4TWSzwdCw88tX8SrZXujeqm2n9PDgvdAFWFLb-oUXoS6K0qibdqfgGRt4ylXqCRyHBjo8wmOZ5EX0Km8E9Tu4D_0l2GM8AYgepQsPnkc0E8u4KvttFIKZTpUzjOoJncz19_0juvcye7j8GcspiHiXTewUBNyrOQm9Ijcivib2fhsAR-RSggnqpxyG7EADdYpvmmY5MzFovpOiyR-1C9ctZzExYTFJ_YQVpTNG32Ciyy4_AWvC1t8k76J27ppQ'
  },
  {
    id: '5',
    title: 'Discover Weekly',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmNM1NPzzVrGSYNj8fFUzFDXZux7e1W-tasyUdWiabGH5542dQCra9dJZDvaqzd3YQs1Hm5klX_xxxrb2RDtYCorQKbeszMnXjsLZf2GKFL136UqcvluaN6-i4cehONmUoMeyUQD_pBmG-9TbMFnX6ywgtO2_1jNuk3X_yIkrkKYfflbFLVToYTErUSNTSUnGbxRuxTIKTWuZ8Yi2TE8rJn7fRV9_1NLSxIRsWwE4PtjdN3uBJm3I99DVr04tMMrB3A3RKwmMHD5Q'
  },
  {
    id: '6',
    title: 'Release Radar',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeIbDQd255BhMgY2RHAu8ztGTNgpKuXz0mFZ4DGcWdmkS_h1DHHqkkOpX_9meT3pPtP9SCGG2X6xfwW8AQLI3LJYBrWKi45e0RT73NNWOmu92rMqjOPmedkX2MHHvN1WqUGTvxzDlhU8xvRgj3UoEWLa-r-9Xv0qVaC6zw7WDL8uXuv58sKPlXZfSm8kQx_q4b-kXnmiSsBJ5WUnifsDg6j4r0CLHgwwC3iwFd7m5HIUOpQk3yoHLgwoAKz6IxBAx4RkGJLMaVPY0'
  }
];

export const NEW_RELEASES: SectionItem[] = [
  {
    id: 'nr1',
    title: 'Midnight Horizons',
    subtitle: 'The Weeknd',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz_sBdYcqsWa1BqLttzBFaxSKQyF-fjwVMpr4Q8LYZNEPfnxfoDfykM4PXLUSfQEl8sNX625Ze9l5WTrrZ5l1Um4_Qh1RHuKOR3AXzIkbqrjJS9wCd63siF6-iKx2-4U_vW-j83UjmU10bLff6RB3KgoD-iIfYFJfapO4edRWi56Ev9MG691jpsQx7OwuKCQOLc152XTnkzHzJR1jnf3zeF4DCSwIpFYRnEdGTfwgVolrNDH4ATKMHk6HhQaYNXC_i0oijAg9aZTI'
  },
  {
    id: 'nr2',
    title: 'Neon City',
    subtitle: 'Dua Lipa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDddUH5GVmoA04S3RAevrEJznLiqpYzxt7PS9Ngia0AgazAwCX-5ksSf-_2WLE6r377wn7XrdIX4Cpvio3oDivmp2b9A0yOSRAFvazO8vxhciFqeFaCUGSDLLCgG6HlZsAoKv113XzByLFXomIFKuFi-MtaeeUaceV50wP8lf183Jxme_1OJ3qVi7gRNFqybMZMEeWkBYSXPaxGfzT1o30oekedd9HLm0pkjbZCg-mrhwNfXbJLZpPJC5_eWwNZBym8-UoMOO8DZaI'
  },
  {
    id: 'nr3',
    title: 'Solar Flares',
    subtitle: 'Tame Impala',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvjlXYeMrXFfNnQn_kf0gb6ZXzwJ3v3UznqDxuVap0bGOueNyy4vyQhqoA1khAB6uPm1_8UZXUSwE_1bewynHwHIy7GzRa_DXfoJUpBdZ9xmM2AREsh_yHKC6KhFzXimT5JvA8Gyr0thNO03YeckiomTppl1w0dKyjEw2GInvVPXpcK1rCTh6VZECRPD_0WLlbrwkwbUccBHICo3rH7mv20IrCU2u-zk0nLK2Rm8pnRzhB8oizQAzoLuUfLi3godRDuap-O46tryI'
  },
  {
    id: 'nr4',
    title: 'Deep Dive',
    subtitle: 'Odesza',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCis5SOrl8_U-0qG3WEhQkV1l1lwMD7pdKCvNhXkAKaRQqV0YPgz6C9WARXP2nfZYOoxFrzMi4oUJUGrBo8JkE04xyT0KnbASoytiT2JZDqo2Ny2iXqpHzF2Vly6__LdToCkkqqZ6-nsw5Qyjd8AzL5B0UynANdIP7rTdW9BQRF0umb0u0GmF6hxA0UctWw7pjtuszLCGE1HB3A5UgGOE_YmWa0QS4wxAEDw3ZEuoQLyUZSjZXHq_TThC3xSyo-V7IJMvOfdlEsl5s'
  }
];

export const HEAVY_ROTATION: SectionItem[] = [
  {
    id: 'hr1',
    title: 'Daily Mix 2',
    subtitle: 'Glass Animals, Alt-J, Foster the People...',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5yUysOW7IJxmON4AFSbKYDtGaf8nyt5VlM5_ZcsGWxx41JwvCl8M_RzC76FWK3Pvj659P9yx9nVjiZSOqO30rdCkRR03F3gclpZetdyqAcAp0ggpCUT___0Mbxm9atMSooJgJxEUxDZO0aHXejGk5EjqXY8VBtHRwaI4bDzfwgrciv12vV3SZ3-6MHeoytfMWXD16cXhvXXrDXz5s1Um4_Qh1RHuKOR3AXzIkbqrjJS9wCd63siF6-iKx2-4U_vW-j83UjmU10bLff6RB3KgoD-iIfYFJfapO4edRWi56Ev9MG691jpsQx7OwuKCQOLc152XTnkzHzJR1jnf3zeF4DCSwIpFYRnEdGTfwgVolrNDH4ATKMHk6HhQaYNXC_i0oijAg9aZTI',
    badge: 'MIX'
  },
  {
    id: 'hr2',
    title: 'Chill Mix',
    subtitle: 'Bon Iver, The Paper Kites, Novo Amor...',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_1iGWDWykWD2ExJbxXKbw_-XxAERXLH11g2z2y6aIARYNTDjdhZzAzf30LJcG9w9HTPIiCQbG8gv8JqNJd8lmhslAJor8k-R2j-i_Nj6ss5ZhyFoAp6Hw2AQOnCRoS16faM64IWRXuZ9t97qKVJPqfw5n5Ddpoqela5bXbXgRcHV2oPUtOVghpUbrj8aXlvwVOzZ5am8hVb3Bmen7aa1HMQlcCf20rFhZzXXUmblR8pmCVxxG5gyps_xQYFJxHSvFvfHVVFTwGUY',
    badge: 'MIX'
  },
  {
    id: 'hr3',
    title: 'Rock Classics',
    subtitle: 'Queen, AC/DC, Led Zeppelin...',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpDTB8i2TYspNyvMQDwnEY7RXpvV8VwlzT4wRON_IPhw-J2-ux5HIFfxdlIwD8NqJGwHgzpxsjDQVTehrG21uOXhxqYXKbWQS0oWStR1sKSP_9A52bWpx42IL9juvmT36ZyOddtImpILgFyGbZhFaimE1J5-bYskOgl_1JxcUIQM0vETlOnxnH0335jJNruw_Qou_LOiurirbHxcTapqDt4_9vw0orPjAm2VMaMbqA530B_cqrlmwYEHLhm_zeJEFiSAmiUa9-v6k',
    badge: 'MIX'
  }
];

export const INITIAL_PLAYER_STATE: PlayerState = {
  track: {
    id: 'init_track_1',
    title: 'Neon Nights',
    artist: 'The Cyberpunks',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBD5F3QfV2DcFh8S1toZYl_kH8fw6dYGizONMAw0UC7FdeF09L7_gKXMUdPdgdzzaw_ccgBFRyzeICkef6nbYpyyY4W9I47gUcx_rcejwvSpKBL4Jxk6cXYfu6VZd_rJQJx93tNhDCyq7Mt04DJX8L29u0VvMoz8iPV5SrknTRn8ZKzvV1fqir9ZFJG4MKB5rYXKlg0fKTmdyRVWg-aoWN5Bj7p3_tIinDeZ36eEyfOdx9jMMVE4sZ79lisk-5AHmuIZ8bRTJOF3M8',
    duration: '3:30'
  },
  isPlaying: true,
  progress: 33,
  currentTime: 70,
  totalTime: 210
};

export const USER_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuArmY57a6DbPlAJlWmlfTBUaO5fY9jiWbc5eJkUky4T5bUuE2k0xQ6setFmBgsg33avNOgnUVP98s524sJqDSPb03-i_jm6xrvGebCXctzoUqaZLA7GLfBjf1Hk0xFG-ghgZcSczSSJS67GGi7oaFCYu6ACDuN1dN7e1Almm9IbEh4GcfzLyLNlIL9sA2cku24UwV6GJaPIiDWBoZpJbWYuFjLTMhL9F01s73kKhm-oR9VJ9zafLP5azhpF75bjUCUdfmUdHVIwIcg";

export const RECENT_SEARCHES: RecentSearchItem[] = [
  {
    id: 'rs1',
    title: 'The Weeknd',
    subtitle: 'Artist',
    type: 'artist',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ_wbRrEVpGxhsgqgvOpi_gMD1hFYVYYfH2waBnCZF3B3uJklZ7gH3iAFOiBQJk4f3WSbcxcUZuz_d1NY1TwYkl5GbJCHIfxXGsbyGMVSTlZf2wNvt6ncGOzU7cNnngNd0Rvop_Kjr2IaHp0rPP0basqpfNPDRufJzhPePbd0TQE0cSBeBVou2aWInfCBRdKTYpQ5LyfsFQtwFMWxafmfBvdqo3p9L-j_-ePXQt0oNZXxJPj7no1Wuj1yknHCLF78IW2cl1hD5S5Y'
  },
  {
    id: 'rs2',
    title: 'Tech Talks Daily',
    subtitle: 'Podcast • Episode 24',
    type: 'podcast',
  }
];

export const BROWSE_CATEGORIES: BrowseCategoryItem[] = [
  {
    id: 'cat1',
    title: 'Pop',
    colorClass: 'bg-pink-600',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA3oOn2QzGDpsjNxfKe_IXyngNvW_78f3ArapH63usaVpCdaHAoaOfOpJ9_OHJPDWrt3I_vC2wbLUHfYw_v02J0htgE0XK1gW6Pwg9zlmWK7GB2bhq3C-JJzq66szEHSB_WHZsrvOA0OtJrA0VatlKK0cTB3lT69mgZ0RCikQRToq-hhliLh3Ee2SunS3LhtQ-brmxdD35WzXtjh2JFurKePXzzxBX-37iK4MpXX_EXI92FbnAnOvfytJMcBeeR7i8AWi8hbcYKWc'
  },
  {
    id: 'cat2',
    title: 'Hip-Hop',
    colorClass: 'bg-orange-600',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6EvXWFEM7TnwLEJ41exttUB9xTZ7t2rzgpT5StxkZJxKo13zTDzOf977TCYS2c-9uGD0Ag56czX8vZ8dwNl0NlNOzCG0sWvqbAX7EhgNMpxK9hdX906BpFNuFz9FerEHV3mBrpYwLz-Vb-lmcKIVsQYrIQejeqKNQBJeLbWyAW50UBOpcKeTBtHqewP5eYwMRaOCZWkpTpsBhg1mOhLYd2nKnA9SDWxveUXIRbP1cvtTCh3Vn4Acc-HMkvCfz-_GPhn-2io8UCvA'
  },
  {
    id: 'cat3',
    title: 'New Releases',
    colorClass: 'bg-indigo-600',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Jl7pekBbfLYuCI8sYrL7xuh_D1I54n3ZI9qFVf0yWS-Ae5gtU1TJBWr1DAZxMjOtOj0VVLGKmQj5j0TpkII-cfs_HwE1oaMWEM7FWnaNqbt9BZ867O2Zwu7VFOLlXi-eCXkbdlpPrqjzQBnY5RJebPwG0-Bm04sHkFpkD8HQBhIlYOIag0HZagbUVmKdwoOXnGDIb7QNy2GKGSN9u1GUnhAo0nnpkmZInLVOfIQ3y-smxKoWRs3bM_sHdHPbqMreZkDRZpxcDQ4'
  },
  {
    id: 'cat4',
    title: 'Charts',
    colorClass: 'bg-teal-600',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGC2wuYLTzNe0BGTQoM3FMuisxsdInH8AQFoF5U4Hjf86-bevTY_qNNFUNvm-c_pxMR2hslVzYYB1Pu9UBpcNSzHnf8rg6wP_uR0cYOMIBFYjDuJNqadQoTt6c4WmThAhNHANi52XMQ9rCrQDRirMHEZ8XP1bo-4P7onyBDpIzvbuuUwfo6BBKgk_U9g4X28TQMKESP8RU-Ft8zX1mwbyWS7vS9hPr7DkSizvkMv_qYvQC2isa8jaM3Q6oyQlEXH6T96Ibdyw2VRg'
  },
  {
    id: 'cat5',
    title: 'Live Events',
    colorClass: 'bg-blue-600',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCxUrVsWOtQvfU_MT_4nqUbXBQ-KKx7QeC6DpXjrq8TOZBwBcxq-J3A6ZqPIVIXHOs0ngIOV_uEIs5iy-uCdCXEpgJra91JPD7Dw1UheOQnOYuf2Wh9_61QPdzbJcsvSWHXpcs7nOszTK7fC1rkY7SsWriWOP4sUSy3jmTo6od6Ac6FpwpNY_J6BIRgd5rqljd6ZBXYTczBHfcZ8CJ6WZuftMVxEGRSMd7wmzS2rHNCv1BxRApufWB2swU8yKQkLQ0pBIqFOBLhJw'
  },
  {
    id: 'cat6',
    title: 'Made For You',
    colorClass: 'bg-purple-800',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCddoqQVwzlrzDs5BrMPWvkHgYrJXGYZCcRH-0mXhPBIvm-p0TIsoL3Ug5Culn02nECSg0M3VV4aUVf8v8_zw28446koYRTNM7JSSEeSO0nMR1x-UYN29zw4j8277dkkZvnGTdL8TaJW0TraRA4qc44GcJLIps8YXC8XEfBn3yYOIAXVo-PG0bg23_Dc-sN0EfxUNsoFnAEVndAB8N3tLiWwOwWrYBrEfAOH59zeV7aetpmrwK2_7BLAIdrT77ei9O9-xeTRYRyb34'
  }
];

export const LIBRARY_ITEMS: LibraryItem[] = [
  {
    id: 'lib1',
    title: 'Add Artist',
    subtitle: '0 artists',
    type: 'add-artist',
  },
  {
    id: 'lib2',
    title: 'Add Podcast',
    subtitle: '0 podcasts',
    type: 'add-podcast',
  },
  {
    id: 'lib3',
    title: 'Liked Songs',
    subtitle: 'Playlist • 430 songs',
    type: 'liked-songs',
    pinned: true,
  },
  {
    id: 'lib4',
    title: 'The Weeknd',
    subtitle: 'Artist',
    type: 'artist',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCptuGMDZNR89qOktCwdk2rVfCuq303fJOpLW3FqZ6fVdDD53T_fr_8BbFoNuaalK4kZGCVQOAAd4pufWWdvFnti5h7SV_89EvEPZ0-_-FReK7NJRBM2z_HzeedHJSaABk2o9HAQ-q0q2k6-4PlWbi65Ww7p9DBrFrRLXdyjLHMzLKEdCOudLIOH7HTtykxwzKY5Qz3wfTI3zmtQ3jFxzzrz61csQ1E_CuFjMXUo7oIf5sImDuYMDFntmwNdIQl7v87WgaMIE41P6E'
  },
  {
    id: 'lib5',
    title: 'The Daily',
    subtitle: 'Podcast • The New York Times',
    type: 'podcast',
    isNewEpisode: true,
    showAddButton: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZbzEFJHQtFZht7vzJZkZjXcNE2Il2CW8Ka-eOtAcDjmKKecd4aLEA16yPq6gcjWUC93TBcvVdyL_4N4FLfr2jOq-RPH1ayCY_fmHcQA-CtXTWHNfr4Keu9EwzCptBJ9K3jZesz0RwYUthscAknuZNuwAiaziTfEUHTT50yzc4PqvhqEnmPJjNdgEoCFWudhCmXxmEhf1TalBMxufkIIimrCa15-RGiolUm8klqyboMylwyMV1rnmC6E6qF889sWQPRfl4R9sI4Ms'
  },
  {
    id: 'lib6',
    title: 'After Hours',
    subtitle: 'Album • The Weeknd',
    type: 'album',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA02vJ00HIaYw52Ulky4hqZSf0Qr2elN9grygxsolqh8e-uNJPfO4Pi6jcjcpKmpeS-Xl1eIxU_jIJ6-YLr9GVfXBd29yN2zI7Is1Z6FgFUQxSSv3AgID_naXnekN_GBLQKm4cgXmXJFm7V5BvHIUgtK3fQ1BMHV6Ux_e5zmplMsroGo0QcV6UNJ0a7f1v3CXFjPQgJY9mLgFLW1tZNVi0CuuSgXd6BKBd0mzmYzaj_ULFwapHUSASPRrgJ3ocJsPlrDSVI3JOCXrE'
  },
  {
    id: 'lib7',
    title: 'Daily Mix 1',
    subtitle: 'Made for you',
    type: 'playlist',
    pinned: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDICs5irNhQZQGtKhk4OP560egbtSwlchRibIK-wt9o_eacxeSPQ4fhPMypYKHhDi0HycYbgQNkGE0ax6fMG_DkBRp60TUqNSBG6naCAKwDmZjrDUgPnyHpjpWfW2HpvPZxT7M-hEkKqKvZRNOoRsZdotOhc_c5ABleOGI-4gx24ku8hbr84pTOWffkDytgB-MHs6Bmwh4A_gzu24QfQkij89sU2D3BMqF7ZwAXxxRXci_eLy88dvXhULqXEXarKXCXE9UCjJ3QOEI'
  },
  {
    id: 'lib8',
    title: 'Late Night Drive',
    subtitle: 'Playlist • John Doe',
    type: 'playlist',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrH2l6Fr9hEMF7wWSDItTQhXa5FFTTdk1eJEc73J_QgIbCiNvnKWMtfpDDrxF35KXUPUQZHiY1yfz_pgbTofbAPNiCdTkYYT0-dlP3g8gt7Z3i_k_6gkLKxXXGFWa12SUhoy_BxRIC_rW6DjBpwIOlBcO7yXU6KyHfsRpTvoZDg0aFSa0RS-Q73mb84hk1PCvT9Lg88w6roMqMlPvoxUMgM2045CcvW_Jl-VGvKA5SKnmbolGZ-DeMYS8YRIIiGt8_gIG99zM_d7c'
  },
  {
    id: 'lib9',
    title: 'Focus Flow',
    subtitle: 'Playlist • Spotify',
    type: 'playlist',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOCHmkHcAnQIMHe-yzH2eIdKJJ-oIPtRmvdtEOHVhv6c5Ovt4YkOSZp-3KoDhfola90kTfAc_yR1ey-xGluWjC73zODclIdGyC2sf1Yi_Gxfnf6zacGt5Xlb1AsTOAkWmwkBXkX6wVlKhfRIpR6ZOG9FltONcBqSx85GDVOnIs0D5470cJQV10yJrcYonjg-TLkZDTKMBNi5zCAedXsNl-kwmlm3p4Gv4I8Gb_cLb8U6ZlWO0gQSh7t7WeE6V5RsblZshdOOf-eO8'
  }
];

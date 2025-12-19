import React from 'react';

interface ArtistProfileScreenProps {
  onBack: () => void;
}

const ArtistProfileScreen: React.FC<ArtistProfileScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white overflow-x-hidden min-h-screen pb-24 animate-[fadeIn_0.3s_ease-out]">
      <div className="relative w-full h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbL2I1IWQ0bgqjGOiqXR4v1uCyEt-nSUrf77b8IK8zlNH9E4okWyAVgm75_-kaIJZfJu4L0qofmE5Jo19o-AD9f7Fp9Wqf5LzVZJDz_YOOKuWGute9kJpEzz4KVWl7AL2cTgoXj2-7gTC15OrSnlSZOOkjJPfeolWb-rezeMc0Ly6c4GKtX563TW9mfEdXgMUzrF6ZIkLWO5yTaavQlu4hnIbO_YP2uIVIZfswTa2ianjjhJAxb44yRa-772YoUIGermR2-aW_WeM')" }}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
        
        {/* Header Nav */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 pt-12 z-20">
          <button 
            onClick={onBack}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>

        {/* Artist Info */}
        <div className="absolute bottom-0 left-0 w-full p-5 z-10 flex flex-col gap-2">
          <h1 className="text-white text-5xl font-black tracking-tight leading-none drop-shadow-lg">The Midnight</h1>
          <p className="text-gray-300 text-sm font-medium tracking-wide">2,543,902 MONTHLY LISTENERS</p>
        </div>
      </div>

      {/* Action Bar */}
      <div className="px-5 py-4 flex items-center justify-between gap-4">
        <div className="flex gap-4 flex-1">
          <button className="flex-1 border border-gray-600 text-white dark:text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide hover:bg-white/10 transition-colors">
            Follow
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
        <button className="bg-primary text-background-dark w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(43,238,121,0.3)] hover:scale-105 transition-transform active:scale-95">
          <span className="material-symbols-outlined fill text-[32px]">play_arrow</span>
        </button>
      </div>

      {/* Popular Section */}
      <div className="flex flex-col pt-2">
        <h2 className="text-white tracking-tight text-[22px] font-bold leading-tight px-5 pb-4">Popular</h2>
        <div className="flex flex-col gap-1 px-1">
          {[
            { id: 1, title: 'Sunset', plays: '125,000,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3CJsvPf51L7IOdnheRwxhwjK5M2mgzHOZAL9jQOKH58BSTGkmCU28rgNfFwR7BuKBWMKZ3F_dEbC6WjOkMJx4YF9SPdcNZYbkdiRUDiyKyzthStaK8XG_tejPwtoOB4D06IXpVBTDofoZts9k0oSueV0f7k-JuSrnRbhREMRZVO7hWCW8tWo-MFs3VupuQc65EpH2VZHQ9B03aMpkg7xMBt30of1hrttj3JtqX2ibFEwoZR9-3wT-Oetn-sb9-QwX8EhfrE2UYnM' },
            { id: 2, title: 'Neon City', plays: '98,000,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDN30wLCdNBWpwTUZmIpjYEjSKkzJbc7H45sP70YpYI_joYncEVCB2D6QNbiuD_6JFq6Am2GXLvr1GU8zLSmrij5ps7E84JjL0Zl9UyAY6jsMdQfvqPCOm7YW-z8yrKENJ9EMIj6LKgAfS-r32SKbf0HDHdJNAFbhFXqmfDjPP7sFRDMoNFSOkRVTUxn8bg7jiAXZ0lsvSwd5RgMsmbiOg0BPZEhOO-SZroHPY2vU1vz2AWq7JYVM3d27N1a7-1-qIxiTowX9m9Vik' },
            { id: 3, title: 'Shadows', plays: '85,000,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuWe7_o5O2SgUBM0juPRYEaxTsL0pYHjtekUOeZJMKnGv6eoSHh--Nytt21yNN8h4GUKpZyjoyrKKCvoygNd7hFSp3qCEavTXsRBrK34jVeYHzYcNWBF4cn7EbPHcwiZtJc1Ghiw0Mk9_2PFO7BegPSkrnatOdq1M7juHBx_KKqsdI2DIQJQ_9Uz0h-tA4VjjOQZzNuxt1HC7Tuo32s_FQnS9HfhmwHRjmrImv8sIsLiwsw7PdOjXq2c8JM_A47Mi8mgnu_w_KubQ' },
            { id: 4, title: 'Los Angeles', plays: '62,400,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9YlHzp-2QVUMJmHecIUsBIVqRLn1ZeoTNr86cZGjdc-V18flkDWb24T0h5datoCMlTQ799CNGc0WgXf549x_DHbxTi9cZOW_k0H07kOdTinQntkzj9nMb9mZmCcF77tnmlOJrcgRFv4Ji6wZfj9yGu27x1lL0rwlsSjkbMCurGr1qMjsK-K-_-d_rlKWTPBplR8NDAb1D_KNf4EO_bxxwppRp6rTfNbwuhPsSPEpVd4gBxBvsaqH4XrpwyVVUsKkg5ClvM22JL5o' }
          ].map((track, index) => (
            <div key={track.id} className="group flex items-center gap-4 hover:bg-white/5 p-2 px-4 rounded-lg cursor-pointer transition-colors">
              <span className="text-gray-400 text-sm font-medium w-4 text-center">{index + 1}</span>
              <div 
                className="bg-center bg-no-repeat bg-cover rounded-lg size-12 shrink-0" 
                style={{ backgroundImage: `url("${track.image}")` }}
              ></div>
              <div className="flex flex-col flex-1 overflow-hidden">
                <p className="text-white text-base font-medium truncate group-hover:text-primary transition-colors">{track.title}</p>
                <p className="text-gray-400 text-xs truncate">{track.plays} plays</p>
              </div>
              <div className="shrink-0 text-gray-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined">more_vert</span>
              </div>
            </div>
          ))}
        </div>
        <div className="px-5 py-3">
          <button className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-wider">See all 15</button>
        </div>
      </div>

      {/* Tour Dates */}
      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between px-5 mb-4">
          <h2 className="text-white tracking-tight text-[22px] font-bold leading-tight">On Tour</h2>
          <button className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-wider">See all dates</button>
        </div>
        <div className="px-5">
          {/* Featured Tour Card */}
          <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-4 group cursor-pointer shadow-xl shadow-black/30 ring-1 ring-white/10">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbL2I1IWQ0bgqjGOiqXR4v1uCyEt-nSUrf77b8IK8zlNH9E4okWyAVgm75_-kaIJZfJu4L0qofmE5Jo19o-AD9f7Fp9Wqf5LzVZJDz_YOOKuWGute9kJpEzz4KVWl7AL2cTgoXj2-7gTC15OrSnlSZOOkjJPfeolWb-rezeMc0Ly6c4GKtX563TW9mfEdXgMUzrF6ZIkLWO5yTaavQlu4hnIbO_YP2uIVIZfswTa2ianjjhJAxb44yRa-772YoUIGermR2-aW_WeM')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent"></div>
            <div className="absolute top-3 left-3 bg-primary text-background-dark text-[10px] font-black px-2 py-1 rounded shadow-lg uppercase tracking-wider">
              Next Show
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-white text-2xl font-black leading-tight mb-0.5 drop-shadow-md">The Wiltern</h3>
                  <p className="text-gray-200 text-sm font-medium drop-shadow-md">Los Angeles, CA</p>
                </div>
                <button className="w-fit bg-white text-background-dark px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-primary transition-colors shadow-lg">
                  Get Tickets
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 px-3 flex flex-col items-center min-w-[60px] self-end mb-1">
                <span className="text-primary text-[10px] font-bold uppercase leading-tight">Oct</span>
                <span className="text-white text-xl font-black leading-none">24</span>
              </div>
            </div>
          </div>

          {/* Tour List */}
          <div className="flex flex-col gap-3">
            {[
              { date: '12', month: 'Nov', venue: 'Brooklyn Mirage', location: 'New York, NY' },
              { date: '15', month: 'Nov', venue: 'The Anthem', location: 'Washington, DC' }
            ].map((tour, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="bg-white/5 rounded-xl w-14 h-14 flex flex-col items-center justify-center border border-white/10 shrink-0 group-hover:border-primary/30 group-hover:bg-white/10 transition-colors">
                    <span className="text-primary text-[10px] font-bold uppercase">{tour.month}</span>
                    <span className="text-white text-xl font-black leading-none">{tour.date}</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white font-bold text-base leading-tight group-hover:text-primary transition-colors">{tour.venue}</p>
                    <p className="text-gray-400 text-sm leading-tight mt-1">{tour.location}</p>
                  </div>
                </div>
                <button className="bg-white text-background-dark px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-primary transition-colors shrink-0 shadow-lg shadow-white/5">
                  Tickets
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Releases */}
      <div className="mt-8 flex flex-col">
        <h2 className="text-white tracking-tight text-[22px] font-bold leading-tight px-5 pb-4">Popular Releases</h2>
        <div className="flex gap-4 overflow-x-auto px-5 pb-4 no-scrollbar snap-x">
          {[
            { title: 'Endless Summer', type: '2023 • Album', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXqUydX-skWesO0pU4Zb8zYXwf0iid8zNFnSMwHdzg0eR2_9UTgLjYSsNHhrILBcQb7tFZY17HcngbEwfeElYGd1Muw-7oyDAW_Lh8hNJNFwJ3nQuyPca_E-HD1-RRq5RIGLtgXO8AxRsGB7nztulikN5xbdiM2vuFwqy-aJs2ERzRQ2XlSoGPsdkpVlIxLZoATzctAiAlMHmS4Y6A6Qq14cpyUu_t39UEPO4dQhSyv_n4Mzs2BEC16qtSNh_4hGzGY3zPwgJ05HY' },
            { title: 'Nocturnal', type: '2021 • EP', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbicQb3IDtHPdP5FKNU7y9LHI1amEPmKbZoRt9lywHFUf7dqlmTzkciFO1zbAXCQU_JKjszaayN0wbVfjUnWUlwrVrtYuWCWNXIItbSy0d85T-OHK687sLLdWkjOEkOWBYnjDZV9jumMbtg3pd9zSZiPDhdDwodhn2lozBUdVBOY5dmtLprKMIAih68Xw4B78NPTLb-1wBL4mlCldapCV59aARFJKm6-_C-3uxQwYTojHU8R7vqWbNp6FR5skLk2xEVG76HSmuRJ0' },
            { title: 'Days of Thunder', type: '2019 • Single', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPgtmSeNtmtKe4P2ZyZxjyK8ZjZnTwqZdO3iMKjqGtKZqKyIqAfwA4RG8paY7QrEzDyinq9vdizE6zr9VuSoKkY_Ddg4MHzJuwo2qU6MBrmY99rHhc3dwWoMm6whXQUvom2qPzhHgg2FLWsn-97A9HzH1eSTM7ho40puh_I92ZC2bEZRyjkpT_QuV7AgxOl2SYJxxtrzFFcwkUzIsiy6WVPEMqwNgF928k89RdmiIRzubTjsd61NBCr-jDDZijPzoUChujw72wCgM' },
            { title: 'Monsters', type: '2020 • Album', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBii4E_HK9H50I9op-a1KjEX3ciPPJvi-eCwcdM84K_K98alYiay-6UiLRC3glC4kHbh3GzLFw68K_MJQXXOBbWAeypXinTcLe0EDMJ3A4VJr5nypGsTypMRHjcWFgzTJmGKjGsg_IUXwl4qGwWu4SzXn5kUv1PN678SeD15qJ5RrDDx2j19FHK2fA6Tj15Fou_gS9aThQbEPfNZhnPruduqog2Sq4FjasItCyUmN0qdGd-PvVoaSkfZ9gBQ5ESFw_4OOANvBTbKIQ' }
          ].map((album, idx) => (
            <div key={idx} className="flex flex-col gap-3 min-w-[150px] snap-center group cursor-pointer">
              <div 
                className="bg-cover bg-center aspect-square rounded-xl shadow-lg group-hover:opacity-90 transition-opacity" 
                style={{ backgroundImage: `url("${album.image}")` }}
              ></div>
              <div className="flex flex-col">
                <p className="text-white text-sm font-bold truncate">{album.title}</p>
                <p className="text-gray-400 text-xs">{album.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="mt-4 px-5 pb-8">
        <h2 className="text-white tracking-tight text-[22px] font-bold leading-tight pb-4">About</h2>
        <div className="relative rounded-xl overflow-hidden aspect-[16/9] group cursor-pointer">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105 duration-500" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhnCXUnjXYeAac7N1VjyqIFkqFDWL4syJ92CMHZFONmjFJaMEjzPWnXvkNLLhgsvjsn8A2Tr8pMLqAqAMguHNBNW_PNTSp-p_PGNEXn322pMCmD9b920b_vxBOJv6-M9KloTVTk0JUe88FXcRyNev02FNyL3lwb-iL70Q2WSyy3S-hv4HGoe1XmSRnjA-jgT0FmFSd-VLPNc-SpvUTXcGHyrQYpM48HfcXQD-8eHQSD_5kqwgHQ2Hi-IXPTWqDe3IX775HowHYQjs')" }}
          ></div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <p className="text-white text-sm font-medium line-clamp-2 leading-relaxed opacity-90">
              The Midnight is a synthwave band based in Los Angeles, California, formed in 2012 by Atlanta-based singer-songwriter Tyler Lyle and Los Angeles-based Danish producer, songwriter, and singer Tim McEwan.
            </p>
            <div className="flex items-center gap-1 mt-2 text-primary font-bold text-xs uppercase tracking-wider">
              Read More <span className="material-symbols-outlined text-sm">chevron_right</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20"></div>

      {/* Floating Mini Player for Artist Screen */}
      <div className="fixed bottom-0 left-0 right-0 p-2 z-50">
        <div className="bg-background-dark/95 backdrop-blur-xl border-t border-white/5 rounded-xl p-2 px-3 flex items-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
          <div 
            className="h-10 w-10 rounded-md bg-cover bg-center shrink-0" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6uburDh3gwXDrmAvN1aU5yRZYkSWYtshLKT1ybooG4KQao95kCNwO8DI_Z5r1Pks7kxK5FaIdgLxrMmk4mID3dAdRDf_5j32n0dphBhgi2CWG-GRZY5uGOkYAP8ZQMtau4zAxYqWszPmyL0NfeldIEam4rdDVcG1HIGSQrXXBDATUS7gswUFDuKUDn0wX80B6XTnrWdPXALpUmsI79PLILInUOleGRbWQ9sdMxrZ_KrB03xBJnIu4qXxO7BKsar7tpGCe7WpqOR4')" }}
          ></div>
          <div className="flex flex-col flex-1 overflow-hidden justify-center h-full">
            <div className="flex items-center gap-2">
              <p className="text-white text-xs font-bold truncate">Sunset</p>
              <span className="text-[10px] text-gray-400">•</span>
              <p className="text-gray-400 text-xs truncate">The Midnight</p>
            </div>
            <div className="w-full bg-white/10 h-0.5 rounded-full mt-1.5 overflow-hidden">
              <div className="bg-white h-full w-1/3 rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center gap-3 pr-1 text-white">
            <span className="material-symbols-outlined text-[24px]">devices</span>
            <span className="material-symbols-outlined text-[28px] hover:text-primary transition-colors cursor-pointer">favorite</span>
            <button className="bg-white text-background-dark rounded-full p-1 flex items-center justify-center hover:scale-105 transition-transform">
              <span className="material-symbols-outlined fill text-[24px]">play_arrow</span>
            </button>
          </div>
        </div>
        <div className="h-1 bg-background-dark/95 w-full"></div>
      </div>
    </div>
  );
};

export default ArtistProfileScreen;
import React from 'react';

const BottomMenu = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { 
      id: 'game', label: 'Холст', 
      icon: (active) => <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "url(#goldGradient)" : "none"} stroke={active ? "none" : "#6b7280"} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5" fill={active ? "#1a1a1a" : "currentColor"}></circle><polyline points="21 15 16 10 5 21"></polyline></svg> 
    },
    { 
      id: 'market', label: 'Маркет', 
      icon: (active) => <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "url(#goldGradient)" : "none"} stroke={active ? "none" : "#6b7280"} strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    },
    { 
      id: 'team', label: 'Команда', 
      icon: (active) => <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "url(#goldGradient)" : "none"} stroke={active ? "none" : "#6b7280"} strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    },
    { 
      id: 'profile', label: 'Профиль', 
      icon: (active) => <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "url(#goldGradient)" : "none"} stroke={active ? "none" : "#6b7280"} strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    },
  ];

  return (
    <>
      {/* Делаем SVG градиент доступным везде */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bf953f" />
            <stop offset="25%" stopColor="#fcf6ba" />
            <stop offset="50%" stopColor="#b38728" />
            <stop offset="75%" stopColor="#fbf5b7" />
            <stop offset="100%" stopColor="#aa771c" />
          </linearGradient>
        </defs>
      </svg>

      <nav className="fixed bottom-0 left-0 right-0 bg-[#0f0f0f]/90 backdrop-blur-lg border-t border-white/5 pb-4 pt-3 px-6 flex justify-between items-center z-50">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center gap-1 transition-all"
            >
              <div className={`transition-transform duration-300 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(191,149,63,0.5)]' : 'hover:scale-105'}`}>
                {tab.icon(isActive)}
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-wide transition-colors ${isActive ? 'gold-shimmer' : 'text-gray-500'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default BottomMenu;

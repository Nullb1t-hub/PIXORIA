import React, { useState } from 'react';
import Game from './pages/Game';
import Market from './pages/Market';
import Team from './pages/Team';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import BottomMenu from './components/BottomMenu';

function App() {
  const [currentPage, setCurrentPage] = useState('game');
  const [isRegistered, setIsRegistered] = useState(false);

  // Если не зарегистрирован — показываем экран входа
  if (!isRegistered) {
    return <Registration onComplete={() => setIsRegistered(true)} />;
  }

  return (
    <div className="flex flex-col h-screen w-full bg-[#0f0f0f] text-white">
      {/* Контент страницы */}
      <main className="flex-1 overflow-hidden relative">
        {currentPage === 'game' && <Game />}
        {currentPage === 'market' && <Market />}
        {currentPage === 'team' && <Team />}
        {currentPage === 'profile' && <Profile />}
      </main>

      {/* Нижнее меню */}
      <BottomMenu activeTab={currentPage} setActiveTab={setCurrentPage} />
    </div>
  );
}

export default App;

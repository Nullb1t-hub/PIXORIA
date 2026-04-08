import React, { useState, useEffect } from 'react';
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';

const Registration = ({ onComplete }) => {
  const [nickname, setNickname] = useState('');
  const userAddress = useTonAddress();

  useEffect(() => {
    // Подтягиваем имя прямо из Telegram SDK
    const tg = window.Telegram?.WebApp;
    if (tg?.initDataUnsafe?.user?.username) {
      setNickname(tg.initDataUnsafe.user.username);
    }
  }, []);

  const handleStart = () => {
    if (nickname.length > 2 && userAddress) {
      onComplete();
    } else {
      // Вибрация телефона при ошибке (через Telegram SDK)
      window.Telegram?.WebApp?.HapticFeedback.notificationOccurred('error');
      alert("Введи ник и подключи кошелек!");
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-8 bg-[#0f0f0f] overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full"></div>
      
      <div className="w-full max-w-sm space-y-10 z-10">
        <div className="text-center">
          <h1 className="text-6xl font-black tracking-tighter italic gold-shimmer mb-2">PIXORIA</h1>
          <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px]">The Great Pixel Battle</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-gray-500 ml-1 tracking-widest">Твой позывной</label>
            <input 
              type="text" 
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#bf953f] transition-all font-bold text-lg shadow-inner"
              placeholder="Nickname"
            />
          </div>

          <div className="bg-[#1a1a1a] rounded-3xl border border-white/5 p-6 flex flex-col items-center gap-4">
             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest text-center">Привяжи кошелек TON для входа</p>
             <div className="scale-110"><TonConnectButton /></div>
          </div>
        </div>

        <button 
          onClick={handleStart}
          className="w-full bg-white text-black font-black py-5 rounded-2xl shadow-[0_10px_40px_rgba(255,255,255,0.1)] transition-all active:scale-95 uppercase tracking-[0.2em] text-sm"
        >
          Ворваться в бой
        </button>
      </div>
    </div>
  );
};

export default Registration;

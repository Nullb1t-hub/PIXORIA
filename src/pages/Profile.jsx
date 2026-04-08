import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';

const Profile = () => {
  return (
    <div className="h-full p-6 pt-10 overflow-y-auto pb-32 flex flex-col">
      
      {/* Шапка профиля */}
      <div className="flex flex-col items-center mb-10">
        <div className="relative mb-4">
          <div className="w-28 h-28 rounded-full border-4 border-[#1a1a1a] p-1 shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-[#0f0f0f] flex items-center justify-center">
            {/* SVG Аватарка вместо картинки */}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          {/* Индикатор онлайна */}
          <div className="absolute bottom-2 right-2 bg-green-500 w-5 h-5 rounded-full border-4 border-[#0f0f0f]"></div>
        </div>
        <h2 className="text-2xl font-black italic uppercase tracking-tighter">Player_1337</h2>
        <span className="text-[#bf953f] text-[10px] font-black uppercase tracking-widest mt-1">Новичок (LVL 1)</span>
      </div>

      {/* Прогресс бары */}
      <div className="space-y-6 mb-8 bg-[#1a1a1a] p-5 rounded-3xl border border-white/5">
        <div>
          <div className="flex justify-between text-[10px] font-bold uppercase mb-2 tracking-widest text-gray-400">
            <span>Опыт до 2 уровня</span>
            <span className="text-white">45 / 100 XP</span>
          </div>
          <div className="w-full h-1.5 bg-[#0f0f0f] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[10px] font-bold uppercase mb-2 tracking-widest text-gray-400">
            <span>Энергия пикселей</span>
            <span className="text-white">8 / 10</span>
          </div>
          <div className="w-full h-1.5 bg-[#0f0f0f] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-white/5 flex flex-col items-center justify-center">
          <span className="text-[9px] text-gray-500 font-bold uppercase mb-1">Поставлено</span>
          <span className="text-2xl font-black">128</span>
        </div>
        <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-white/5 flex flex-col items-center justify-center">
          <span className="text-[9px] text-gray-500 font-bold uppercase mb-1">Команда</span>
          <span className="text-sm font-black text-gray-600 uppercase">Нет</span>
        </div>
      </div>

      {/* Кошелек */}
      <div className="mt-auto flex flex-col items-center gap-3 bg-[#1a1a1a] p-6 rounded-3xl border border-white/5">
        <p className="text-[10px] text-gray-400 font-bold uppercase text-center">
          Подключи кошелек для покупки текстур и вывода наград
        </p>
        <div className="mt-2 scale-110 origin-center">
          {/* Эта кнопка появится только если обернуть приложение в провайдер, мы это сделаем в main.jsx */}
          <TonConnectButton />
        </div>
      </div>

    </div>
  );
};

export default Profile;

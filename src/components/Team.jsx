import React, { useState } from 'react';

const Team = () => {
  const [activeTab, setActiveTab] = useState('top'); // 'top' или 'create'
  const [teamName, setTeamName] = useState('');
  const [maxMembers, setMaxMembers] = useState('50');

  // Фейковые данные для топа команд
  const topTeams = [
    { id: 1, name: 'TON Ninjas', members: 45, max: 50, score: 15420, isGold: true },
    { id: 2, name: 'Crypto Kings', members: 100, max: 100, score: 12050, isGold: false },
    { id: 3, name: 'Pixel Gang', members: 12, max: 25, score: 8400, isGold: false },
  ];

  return (
    <div className="h-full p-6 pt-10 overflow-y-auto pb-32">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black uppercase italic tracking-tighter">Сквады</h2>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">Объединяйся и захватывай</p>
        </div>
      </div>

      {/* Переключатель вкладок */}
      <div className="flex bg-[#1a1a1a] rounded-xl p-1 mb-6 border border-white/5">
        <button 
          onClick={() => setActiveTab('top')}
          className={`flex-1 py-2 text-xs font-bold uppercase rounded-lg transition-all ${activeTab === 'top' ? 'bg-white/10 text-white' : 'text-gray-500'}`}
        >
          Топ команд
        </button>
        <button 
          onClick={() => setActiveTab('create')}
          className={`flex-1 py-2 text-xs font-bold uppercase rounded-lg transition-all ${activeTab === 'create' ? 'bg-white/10 text-white' : 'text-gray-500'}`}
        >
          Создать
        </button>
      </div>

      {/* Вкладка: Топ команд */}
      {activeTab === 'top' && (
        <div className="space-y-3">
          {topTeams.map((team, index) => (
            <div key={team.id} className="bg-[#1a1a1a] rounded-2xl p-4 border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className={`text-xl font-black italic ${team.isGold ? 'gold-shimmer' : 'text-gray-600'}`}>
                  #{index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-sm uppercase">{team.name}</h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">
                    Участники: <span className="text-blue-400">{team.members}/{team.max}</span>
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-sm font-black">{team.score.toLocaleString()}</span>
                <span className="text-[8px] text-gray-500 font-bold uppercase">Очков</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Вкладка: Создание команды */}
      {activeTab === 'create' && (
        <div className="space-y-6 bg-[#1a1a1a] p-6 rounded-3xl border border-white/5">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-gray-500 ml-1">Название сквада</label>
            <input 
              type="text" 
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#bf953f] transition-all font-bold text-sm"
              placeholder="Введите название..."
              maxLength={15}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-gray-500 ml-1">Максимум участников</label>
            <select 
              value={maxMembers}
              onChange={(e) => setMaxMembers(e.target.value)}
              className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#bf953f] transition-all font-bold text-sm appearance-none"
            >
              <option value="10">10 бойцов</option>
              <option value="25">25 бойцов</option>
              <option value="50">50 бойцов</option>
              <option value="100">100 бойцов (Элита)</option>
            </select>
          </div>

          <button className="w-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] text-black font-black py-4 rounded-xl shadow-[0_0_15px_rgba(191,149,63,0.3)] transition-transform active:scale-95 uppercase tracking-widest text-xs">
            Создать команду
          </button>
          
          <p className="text-center text-[9px] text-gray-500 font-bold uppercase mt-2">
            Создание стоит 10 TON
          </p>
        </div>
      )}
    </div>
  );
};

export default Team;

import React from 'react';

const Market = () => {
  // Текстуры теперь генерируются кодом, никаких файлов скачивать не нужно!
  const items = [
    { 
      id: 'gold', name: 'Золотой', price: '8.9', 
      css: 'bg-gradient-to-tr from-[#bf953f] via-[#fcf6ba] to-[#aa771c] shadow-[0_0_20px_rgba(191,149,63,0.4)]', 
      desc: 'Элитный блеск' 
    },
    { 
      id: 'silver', name: 'Серебряный', price: '4.5', 
      css: 'bg-gradient-to-tr from-[#8e9eab] to-[#eef2f3] shadow-[0_0_15px_rgba(142,158,171,0.3)]', 
      desc: 'Металлический отлив' 
    },
    { 
      id: 'neon', name: 'Неон', price: '2.0', 
      css: 'bg-gradient-to-tr from-[#00c6ff] to-[#0072ff] shadow-[0_0_20px_rgba(0,198,255,0.6)]', 
      desc: 'Киберпанк свечение' 
    },
    { 
      id: 'glass', name: 'Стекло', price: '1.5', 
      css: 'bg-[#1a1a1a]/30 backdrop-blur-xl border border-white/20', 
      desc: 'Полупрозрачность' 
    },
  ];

  return (
    <div className="h-full p-6 pt-10 overflow-y-auto pb-32">
      <div className="mb-8">
        <h2 className="text-3xl font-black uppercase italic tracking-tighter">Маркет</h2>
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">Прокачай свои пиксели</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-[#1a1a1a] rounded-3xl border border-white/5 p-2 flex flex-col overflow-hidden transition-transform hover:scale-105 active:scale-95">
            {/* Сама текстура из CSS */}
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 p-1">
              <div className={`w-full h-full rounded-xl ${item.css}`}></div>
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-black text-white border border-white/10">
                {item.price} TON
              </div>
            </div>
            
            <div className="px-2 pb-2 text-center">
              <h3 className="font-bold text-sm uppercase tracking-tight">{item.name}</h3>
              <p className="text-[9px] text-gray-500 uppercase font-bold mt-1 mb-3 h-6">{item.desc}</p>
              <button className="w-full bg-white/5 hover:bg-white/10 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors active:bg-white/20">
                Купить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;

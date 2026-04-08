import React, { useState, useEffect } from 'react';
import CanvasBoard from '../components/CanvasBoard';

const Game = () => {
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [onlineCount, setOnlineCount] = useState(0);

  const baseColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FFFFFF', '#000000'];

  // Имитация живого онлайна (суета)
  useEffect(() => {
    const updateOnline = () => {
      // Базовый онлайн примерно 150-200 человек, умноженный на случайный множитель от 2 до 10
      const base = Math.floor(Math.random() * 50) + 150; 
      const multiplier = Math.floor(Math.random() * 9) + 2; 
      setOnlineCount(base * multiplier);
    };
    
    updateOnline(); // первый вызов
    const interval = setInterval(updateOnline, 4500); // каждые 4.5 секунды онлайн скачет
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-[#121212]">
      {/* Верхняя панель инфы */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 pointer-events-none">
        <div className="bg-[#0f0f0f]/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/5">
          <span className="text-[9px] text-gray-500 font-bold uppercase block">Пикселей</span>
          <span className="text-white font-black text-sm">10 / 10</span>
        </div>
        
        <div className="bg-[#0f0f0f]/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/5 text-right flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></div>
          <div>
            <span className="text-[9px] text-gray-500 font-bold uppercase block">Онлайн</span>
            <span className="text-white font-black text-sm">{onlineCount.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Сам холст */}
      <CanvasBoard activeColor={selectedColor} />

      {/* Выдвижная Палитра */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        
        {/* Кнопка открытия/закрытия */}
        <button 
          onClick={() => setIsPaletteOpen(!isPaletteOpen)}
          className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white font-bold text-xl shadow-lg active:scale-90 transition-transform"
        >
          {isPaletteOpen ? '×' : '+'}
        </button>

        {/* Сама палитра (появляется с анимацией) */}
        <div className={`flex items-center gap-2 bg-[#1a1a1a]/90 backdrop-blur-xl p-2 rounded-full border border-white/10 shadow-2xl transition-all duration-300 origin-left ${isPaletteOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 w-0 overflow-hidden'}`}>
          {baseColors.map(color => (
            <button 
              key={color}
              onClick={() => {
                setSelectedColor(color);
                setIsPaletteOpen(false); // закрываем после выбора
              }}
              className={`w-7 h-7 rounded-full border-2 transition-transform active:scale-90 ${selectedColor === color ? 'border-blue-500 scale-110' : 'border-transparent'}`}
              style={{ backgroundColor: color }}
            />
          ))}
          
          {/* Свой цвет (RGB Picker) */}
          <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-transparent hover:border-gray-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500 via-green-500 to-blue-500 pointer-events-none"></div>
            <input 
              type="color" 
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="absolute inset-0 w-10 h-10 -top-1 -left-1 cursor-pointer opacity-0"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Game;

import React, { useRef, useEffect, useState } from 'react';

const CanvasBoard = ({ activeColor }) => {
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(3); // Начальное приближение
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const CANVAS_SIZE = 1000;

  // Отрисовка фона и 25 ботов при первом запуске
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    // Белый фон
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // Боты рисуют 25 рандомных пикселей для суеты
    const botColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#000000', '#bf953f'];
    for (let i = 0; i < 25; i++) {
      const rx = Math.floor(Math.random() * CANVAS_SIZE);
      const ry = Math.floor(Math.random() * CANVAS_SIZE);
      const rc = botColors[Math.floor(Math.random() * botColors.length)];
      ctx.fillStyle = rc;
      ctx.fillRect(rx, ry, 1, 1);
    }

    // Ставим холст по центру экрана при загрузке
    setOffset({
      x: (window.innerWidth - CANVAS_SIZE * scale) / 2,
      y: (window.innerHeight - CANVAS_SIZE * scale) / 2,
    });
  }, []);

  // Логика перемещения (Drag & Drop)
  const handlePointerDown = (e) => {
    setIsDragging(false); // Сбрасываем флаг при новом касании
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handlePointerMove = (e) => {
    if (e.buttons !== 1) return; // Двигаем только если зажата кнопка/палец
    
    // Если мышь сдвинулась больше чем на 3 пикселя, считаем это перетаскиванием
    if (Math.abs(e.clientX - dragStart.x) > 3 || Math.abs(e.clientY - dragStart.y) > 3) {
      setIsDragging(true);
    }

    setOffset(prev => ({
      x: prev.x + e.movementX,
      y: prev.y + e.movementY
    }));
  };

  // Клик для постановки пикселя (сработает только если не было перетаскивания)
  const handlePointerUp = (e) => {
    if (isDragging) return; 

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    // Точная математика для вычисления координат с учетом зума
    const x = Math.floor((e.clientX - rect.left) / scale);
    const y = Math.floor((e.clientY - rect.top) / scale);

    if (x >= 0 && x < CANVAS_SIZE && y >= 0 && y < CANVAS_SIZE) {
      ctx.fillStyle = activeColor;
      ctx.fillRect(x, y, 1, 1);
      // В будущем тут будет отправка координат {x, y, color} на сервер
    }
  };

  return (
    <div className="w-full h-full bg-[#121212] overflow-hidden relative touch-none cursor-crosshair">
      
      {/* Сам холст */}
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          transformOrigin: '0 0',
          imageRendering: 'pixelated', // Пиксели остаются квадратными при зуме
          position: 'absolute'
        }}
        className="shadow-[0_0_50px_rgba(0,0,0,0.8)]"
      />

      {/* Кнопки зума (+ / -) */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
        <button 
          onClick={() => setScale(s => Math.min(s + 2, 20))}
          className="w-10 h-10 bg-[#1a1a1a]/80 backdrop-blur-md rounded-xl border border-white/10 text-white font-bold text-xl active:scale-90 transition-transform"
        >
          +
        </button>
        <button 
          onClick={() => setScale(s => Math.max(s - 1, 1))}
          className="w-10 h-10 bg-[#1a1a1a]/80 backdrop-blur-md rounded-xl border border-white/10 text-white font-bold text-xl active:scale-90 transition-transform"
        >
          -
        </button>
      </div>

    </div>
  );
};

export default CanvasBoard;

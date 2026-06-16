'use client';

import { useEffect, useRef, useState } from 'react';

type Trail = {
  id: number;
  x: number;
  y: number;
  timestamp: number;
};

export default function CursorTrail() {
  const [trails, setTrails] = useState<Trail[]>([]);
  
  const mouse = useRef({ x: 0, y: 0 });
  const follower = useRef({ x: 0, y: 0 });
  const trailId = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      follower.current.x += (mouse.current.x - follower.current.x) * 0.10;
      follower.current.y += (mouse.current.y - follower.current.y) * 0.10;

      const now = Date.now();

      setTrails(prev => [
        ...prev,
        {
          id: trailId.current++,
          x: follower.current.x,
          y: follower.current.y,
          timestamp: now
        }
      ].slice(-40)); 

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {trails.map(trail => {
        // eslint-disable-next-line react-hooks/purity
        const age = Date.now() - trail.timestamp;
        const opacity = Math.max(0, 1 - age / 800);
        const scale = Math.max(0.3, 1 - age / 800);

        return (
          <div
            key={trail.id}
            className="fixed pointer-events-none z-50 rounded-full"
            style={{
              left: trail.x - 3,
              top: trail.y - 3,
              width: 6,
              height: 6,
              background: '#00ff88',
              opacity,
              transform: `scale(${scale})`,
              boxShadow: `0 0 ${12 * opacity}px #00ff88`,
            }}
          />
        );
      })}
    </>
  );
}

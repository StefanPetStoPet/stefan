'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);

    const header = document.querySelector('h1');
    if (header) {
      header.addEventListener('mouseenter', handleMouseEnter);
      header.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (header) {
        header.removeEventListener('mouseenter', handleMouseEnter);
        header.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: isHovering ? 1 : 1,
        backgroundColor: isHovering ? '#F87171' : '#93c5fd', // red or pastel blue
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{
        width: 20,
        height: 20,
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        backgroundColor: 'transparent',
      }}
    />
  );
}

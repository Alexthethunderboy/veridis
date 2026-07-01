'use client';

import React from 'react';
import { motion } from 'motion/react';
import { RichStrain } from '@/services/api/strains';

interface StrainAuraProps {
  strain: RichStrain;
  className?: string;
}

export default function StrainAura({ strain, className = '' }: StrainAuraProps) {
  // Generate a deterministic color palette based on terpenes and type
  const getBaseColor = () => {
    switch (strain.type.toLowerCase()) {
      case 'sativa': return '255, 165, 0'; // Vibrant Orange
      case 'indica': return '128, 0, 128'; // Deep Purple
      default: return '34, 139, 34'; // Hybrid Green
    }
  };

  const getTerpeneColors = () => {
    return strain.terpenes.map(t => {
      // Map common terpene colors
      if (t.name.includes('Myrcene')) return 'rgba(255, 99, 71, 0.6)'; // Tomato red
      if (t.name.includes('Limonene')) return 'rgba(255, 215, 0, 0.6)'; // Gold
      if (t.name.includes('Pinene')) return 'rgba(46, 139, 87, 0.6)'; // Sea green
      if (t.name.includes('Linalool')) return 'rgba(147, 112, 219, 0.6)'; // Purple
      if (t.name.includes('Caryophyllene')) return 'rgba(139, 69, 19, 0.6)'; // Brown
      return `rgba(${getBaseColor()}, 0.4)`; // Fallback
    });
  };

  const colors = getTerpeneColors();
  const thcValue = parseFloat(strain.thc) || 15;
  const intensity = Math.min(1, thcValue / 30); // Normalize THC to 0-1 scale

  return (
    <div className={`relative overflow-hidden bg-[#0a0505] flex items-center justify-center ${className}`}>
      {/* Base glow representing the strain type */}
      <motion.div 
        className="absolute inset-0 opacity-40 blur-3xl"
        style={{
          background: `radial-gradient(circle at center, rgba(${getBaseColor()}, ${intensity}) 0%, transparent 70%)`
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Terpene specific overlapping auras */}
      {colors.map((color, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-2xl mix-blend-screen"
          style={{
            backgroundColor: color,
            width: `${100 + (index * 40)}%`,
            height: `${100 + (index * 40)}%`,
            top: `${-20 + (index * 15)}%`,
            left: `${-20 + (index * 20)}%`,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 15 + index * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Glass overlay to make text readable if overlaid */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent mix-blend-overlay" />
      
      {/* Data visualizer rings (Simulating scientific analysis) */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <circle cx="50" cy="50" r={30 + (intensity * 10)} fill="none" stroke={`rgba(${getBaseColor()}, 0.5)`} strokeWidth="0.5" strokeDasharray="2 4" />
        <circle cx="50" cy="50" r={40 + (intensity * 10)} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.2" />
        {/* Abstract data nodes */}
        {colors.map((_, i) => (
          <circle key={`node-${i}`} cx={50 + Math.cos(i * 2) * 35} cy={50 + Math.sin(i * 2) * 35} r="1" fill="rgba(255,255,255,0.8)" />
        ))}
      </svg>
    </div>
  );
}

import { useState, useEffect } from 'react';

interface AnimatedLogoProps {
  className?: string;
  size?: number;
  onAnimationEnd?: () => void;
}

export default function AnimatedLogo({ className = '', size = 280, onAnimationEnd }: AnimatedLogoProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animate && onAnimationEnd) {
      const timer = setTimeout(onAnimationEnd, 2500);
      return () => clearTimeout(timer);
    }
  }, [animate, onAnimationEnd]);

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 300 320"
        width={size}
        height={size * (320 / 300)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="OHCS Care Animated Logo"
      >
        <defs>
          {/* Gold gradient for heart */}
          <linearGradient id="heartGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e5b820" />
            <stop offset="50%" stopColor="#d4a017" />
            <stop offset="100%" stopColor="#b8860f" />
          </linearGradient>

          {/* Heart shine */}
          <linearGradient id="heartShine" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#f5dc8a" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#d4a017" stopOpacity="0" />
            <stop offset="100%" stopColor="#b8860f" stopOpacity="0.3" />
          </linearGradient>

          {/* Navy gradient for house/hands */}
          <linearGradient id="navyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1b3a5c" />
            <stop offset="100%" stopColor="#112a43" />
          </linearGradient>

          {/* Soft glow filter */}
          <filter id="heartGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1b3a5c" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* ===== HOUSE OUTLINE ===== */}
        <g filter="url(#softShadow)">
          <path
            d="M150 28 L258 95 L258 230 C258 248 244 262 226 262 L74 262 C56 262 42 248 42 230 L42 95 Z"
            fill="url(#navyGrad)"
            className={`transition-all duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}
            style={{
              transformOrigin: '150px 150px',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transform: animate ? 'scale(1)' : 'scale(0.9)',
            }}
          />

          {/* House roof peak accent */}
          <path
            d="M150 28 L258 95 L42 95 Z"
            fill="url(#navyGrad)"
            className={`transition-all duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}
            style={{
              transition: 'opacity 0.6s ease-out 0.1s',
            }}
          />
        </g>

        {/* ===== HANDS ===== */}
        <g
          className={`transition-all ${animate ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s',
            transform: animate ? 'translateY(0)' : 'translateY(15px)',
            transformOrigin: '150px 200px',
          }}
        >
          {/* Left hand */}
          <path
            d="M72 175 C72 175 85 195 95 210 C105 225 115 235 130 240 C130 240 120 235 110 222 C100 209 88 190 80 178 C75 170 72 175 72 175Z"
            fill="#f0f4f8"
            opacity="0.15"
          />
          <path
            d="M68 170 C55 155 50 168 58 180 C66 192 85 218 100 232 C115 246 130 250 150 252"
            stroke="url(#navyGrad)"
            strokeWidth="22"
            strokeLinecap="round"
            fill="none"
          />

          {/* Right hand */}
          <path
            d="M228 175 C228 175 215 195 205 210 C195 225 185 235 170 240 C170 240 180 235 190 222 C200 209 212 190 220 178 C225 170 228 175 228 175Z"
            fill="#f0f4f8"
            opacity="0.15"
          />
          <path
            d="M232 170 C245 155 250 168 242 180 C234 192 215 218 200 232 C185 246 170 250 150 252"
            stroke="url(#navyGrad)"
            strokeWidth="22"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* ===== HEART (animated) ===== */}
        <g
          filter="url(#heartGlow)"
          style={{
            transformOrigin: '150px 175px',
            transition: 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease-out',
            transform: animate
              ? 'translateY(0) scale(1)'
              : 'translateY(-60px) scale(0.3)',
            opacity: animate ? 1 : 0,
            transitionDelay: animate ? '0.8s' : '0s',
          }}
        >
          {/* Heart shape */}
          <path
            d="M150 210 
               C150 210 100 180 100 152 
               C100 135 112 122 128 122 
               C138 122 146 128 150 135 
               C154 128 162 122 172 122 
               C188 122 200 135 200 152 
               C200 180 150 210 150 210Z"
            fill="url(#heartGold)"
          />

          {/* Heart highlight/shine */}
          <path
            d="M150 210 
               C150 210 100 180 100 152 
               C100 135 112 122 128 122 
               C138 122 146 128 150 135 
               C154 128 162 122 172 122 
               C188 122 200 135 200 152 
               C200 180 150 210 150 210Z"
            fill="url(#heartShine)"
          />

          {/* Tiny sparkle on heart */}
          <circle
            cx="125"
            cy="142"
            r="4"
            fill="white"
            opacity="0.5"
            style={{
              transition: 'opacity 0.5s ease-out',
              transitionDelay: '2s',
              opacity: animate ? 0.5 : 0,
            }}
          />
        </g>

        {/* ===== PULSE RING (appears after heart lands) ===== */}
        <circle
          cx="150"
          cy="175"
          r="45"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.5"
          style={{
            transformOrigin: '150px 175px',
            transition: 'transform 1s ease-out, opacity 1s ease-out',
            transitionDelay: '1.8s',
            transform: animate ? 'scale(1.8)' : 'scale(0.8)',
            opacity: animate ? 0 : 0.4,
          }}
        />
        <circle
          cx="150"
          cy="175"
          r="45"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1"
          style={{
            transformOrigin: '150px 175px',
            transition: 'transform 1.2s ease-out, opacity 1.2s ease-out',
            transitionDelay: '2s',
            transform: animate ? 'scale(2.2)' : 'scale(0.8)',
            opacity: animate ? 0 : 0.3,
          }}
        />
      </svg>

      {/* Continuous subtle pulse after initial animation */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-1000 ${
          animate ? 'opacity-100 delay-[2500ms]' : 'opacity-0'
        }`}
      >
        <div className="w-24 h-24 rounded-full bg-accent-400/10 animate-[pulse_3s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}

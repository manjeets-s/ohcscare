import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import AnimatedLogo from './AnimatedLogo';

/* ─── Soft Pulsing Halo Layers (3D background glow) ─── */
function HaloGlow() {
  const inner = useRef<THREE.Mesh>(null!);
  const mid = useRef<THREE.Mesh>(null!);
  const outer = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (inner.current) inner.current.scale.setScalar(1 + Math.sin(t * 0.6) * 0.04);
    if (mid.current) mid.current.scale.setScalar(1 + Math.sin(t * 0.4 + 1) * 0.05);
    if (outer.current) outer.current.scale.setScalar(1 + Math.sin(t * 0.3 + 2) * 0.03);
  });

  return (
    <group>
      <Sphere ref={inner} args={[1.8, 64, 64]}>
        <meshBasicMaterial color="#1b3a5c" transparent opacity={0.08} side={THREE.BackSide} />
      </Sphere>
      <Sphere ref={mid} args={[2.4, 64, 64]}>
        <meshBasicMaterial color="#d4a017" transparent opacity={0.045} side={THREE.BackSide} />
      </Sphere>
      <Sphere ref={outer} args={[3.2, 64, 64]}>
        <meshBasicMaterial color="#9fb3c8" transparent opacity={0.03} side={THREE.BackSide} />
      </Sphere>
    </group>
  );
}

/* ─── Orbiting Ring ─── */
function OrbitRing() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.z = t * 0.08;
      ref.current.rotation.x = 0.3 + Math.sin(t * 0.15) * 0.1;
    }
  });

  return (
    <Float speed={0.6} rotationIntensity={0.03} floatIntensity={0.2}>
      <mesh ref={ref}>
        <torusGeometry args={[2.6, 0.012, 16, 150]} />
        <meshBasicMaterial color="#d4a017" transparent opacity={0.18} />
      </mesh>
    </Float>
  );
}

/* ─── Second Orbiting Ring ─── */
function OrbitRing2() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.z = -t * 0.05;
      ref.current.rotation.y = 0.5 + Math.sin(t * 0.1) * 0.15;
    }
  });

  return (
    <Float speed={0.4} rotationIntensity={0.02} floatIntensity={0.15}>
      <mesh ref={ref}>
        <torusGeometry args={[3.0, 0.008, 16, 150]} />
        <meshBasicMaterial color="#6d8daa" transparent opacity={0.1} />
      </mesh>
    </Float>
  );
}

/* ─── Mouse Tracking ─── */
function MouseTracker({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null!);
  const { viewport } = useThree();

  useFrame((state) => {
    if (group.current) {
      const x = (state.pointer.x * viewport.width) / 30;
      const y = (state.pointer.y * viewport.height) / 30;
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.1, 0.025);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.08, 0.025);
    }
  });

  return <group ref={group}>{children}</group>;
}

/* ─── 3D Scene (Halo only, logo is HTML overlay) ─── */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <MouseTracker>
        <HaloGlow />
        <OrbitRing />
        <OrbitRing2 />
      </MouseTracker>
    </>
  );
}

/* ─── Floating Animated Logo (HTML, sits on top of canvas) ─── */
function FloatingLogo({ loaded }: { loaded: boolean }) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-all duration-1000 ${
        loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      {/* Outer glow ring */}
      <div className="absolute w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary-200/20 via-transparent to-accent-200/15 animate-[spin_25s_linear_infinite]" />

      {/* Soft shadow behind logo */}
      <div className="absolute w-52 h-52 lg:w-60 lg:h-60 rounded-full bg-primary-600/8 blur-2xl animate-[pulse_4s_ease-in-out_infinite]" />

      {/* Animated Logo */}
      <div className="relative animate-[float_6s_ease-in-out_infinite]">
        <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-accent-300/15 to-primary-300/10 blur-xl" />
        <AnimatedLogo size={300} className="relative" />
      </div>
    </div>
  );
}

/* ─── Mobile Fallback ─── */
function MobileFallback() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Layered halos */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-primary-200/25 to-primary-300/10 blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-accent-200/15 to-accent-300/5 blur-2xl animate-[pulse_5s_ease-in-out_infinite_1s]" />

      {/* Animated Logo */}
      <div className="relative animate-[float_6s_ease-in-out_infinite]">
        <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-accent-300/15 to-primary-300/10 blur-xl" />
        <AnimatedLogo size={220} className="relative" />
      </div>
    </div>
  );
}

/* ─── Exported Component ─── */
export default function Hero3D() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) {
    return (
      <div className="w-full h-[350px] sm:h-[400px]">
        <MobileFallback />
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] lg:h-[550px] relative">
      {/* Loading shimmer */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 animate-pulse" />
        </div>
      )}

      {/* 3D canvas (halos behind logo) */}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={() => setIsLoaded(true)}
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }}
      >
        <Scene />
      </Canvas>

      {/* Logo floating on top */}
      <FloatingLogo loaded={isLoaded} />
    </div>
  );
}

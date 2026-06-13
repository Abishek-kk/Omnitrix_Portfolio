export function OmnitrixDial({ size = 220 }: { size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* outer rotating ring */}
      <div className="absolute inset-0 rounded-full border-2 border-neon/40 animate-spin-slow" style={{
        background: "conic-gradient(from 0deg, transparent, var(--neon) 20%, transparent 40%, transparent 60%, var(--neon) 80%, transparent)",
        WebkitMask: "radial-gradient(circle, transparent 60%, black 62%, black 70%, transparent 72%)",
        mask: "radial-gradient(circle, transparent 60%, black 62%, black 70%, transparent 72%)",
      }} />
      <div className="absolute inset-4 rounded-full border border-neon/30 animate-spin-reverse" />
      <div className="absolute inset-8 rounded-full border border-neon/50" />

      {/* dial body */}
      <div className="relative rounded-full bg-gradient-to-br from-zinc-900 to-black border-4 border-neon/70 neon-glow flex items-center justify-center"
        style={{ width: size * 0.55, height: size * 0.55 }}>
        {/* hourglass */}
        <svg viewBox="0 0 100 100" className="w-3/4 h-3/4 animate-pulse-glow text-neon">
          <path d="M25 15 H75 L50 50 L75 85 H25 L50 50 Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round" />
        </svg>
      </div>

      {/* tick marks */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-3 bg-neon/70 rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-${size * 0.42}px)`,
          }}
        />
      ))}
    </div>
  );
}

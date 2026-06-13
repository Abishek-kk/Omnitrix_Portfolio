// Official SVG logos for technologies

// Java - Official Coffee Cup Logo
const JavaSvg = (
  <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="javaCup" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6600" />
        <stop offset="100%" stopColor="#CC3300" />
      </linearGradient>
    </defs>
    {/* Coffee cup body */}
    <path d="M30 30 L28 70 Q28 78 35 78 L65 78 Q72 78 72 70 L70 30 Q70 25 65 25 L35 25 Q30 25 30 30 Z" fill="url(#javaCup)" />
    {/* Cup handle */}
    <path d="M72 38 Q85 42 85 50 Q85 58 72 62" stroke="url(#javaCup)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    {/* Highlight */}
    <ellipse cx="42" cy="45" rx="6" ry="12" fill="#FFAA66" opacity="0.6" />
  </svg>
);

// Python - Official Logo (Blue/Yellow)
const PythonSvg = (
  <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pythonTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#366994" />
        <stop offset="100%" stopColor="#306998" />
      </linearGradient>
      <linearGradient id="pythonBot" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFE873" />
        <stop offset="100%" stopColor="#FFC331" />
      </linearGradient>
    </defs>
    {/* Blue upper circles */}
    <circle cx="38" cy="32" r="14" fill="url(#pythonTop)" />
    <circle cx="62" cy="32" r="14" fill="url(#pythonTop)" />
    {/* Yellow lower circles */}
    <circle cx="50" cy="68" r="14" fill="url(#pythonBot)" />
    {/* Connecting paths */}
    <path d="M45 45 Q48 58 50 68" stroke="#306998" strokeWidth="2" fill="none" opacity="0.7" />
    <path d="M55 45 Q52 58 50 68" stroke="#FFD652" strokeWidth="2" fill="none" opacity="0.7" />
  </svg>
);

// JavaScript - Official Logo (Yellow square with JS)
const JavaScriptSvg = (
  <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Yellow background */}
    <rect x="10" y="10" width="80" height="80" rx="8" fill="#F7DF1E" />
    {/* JS text */}
    <text x="32" y="68" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="900" fill="#000000">
      J
    </text>
    <text x="56" y="68" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="900" fill="#000000">
      S
    </text>
  </svg>
);

// React - Official Logo (Atom with nucleus and electrons)
const ReactSvg = (
  <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="reactGlow">
        <stop offset="0%" stopColor="#61DAFB" />
        <stop offset="100%" stopColor="#17C8FF" />
      </radialGradient>
    </defs>
    {/* Center nucleus */}
    <circle cx="50" cy="50" r="6" fill="#61DAFB" />
    {/* Electron orbits */}
    <ellipse cx="50" cy="50" rx="24" ry="8" stroke="#61DAFB" strokeWidth="2.5" fill="none" />
    <ellipse cx="50" cy="50" rx="24" ry="8" stroke="#61DAFB" strokeWidth="2.5" fill="none" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="24" ry="8" stroke="#61DAFB" strokeWidth="2.5" fill="none" transform="rotate(120 50 50)" />
    {/* Electrons */}
    <circle cx="74" cy="50" r="3.5" fill="#61DAFB" />
    <circle cx="38" cy="66" r="3.5" fill="#61DAFB" />
    <circle cx="38" cy="34" r="3.5" fill="#61DAFB" />
  </svg>
);

// TensorFlow - Official Orange T Logo
const TensorFlowSvg = (
  <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tfGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF7F00" />
        <stop offset="100%" stopColor="#DD5500" />
      </linearGradient>
    </defs>
    {/* Horizontal bar of T */}
    <rect x="20" y="22" width="60" height="10" fill="url(#tfGradient)" rx="2" />
    {/* Vertical bar of T */}
    <rect x="44" y="32" width="12" height="46" fill="url(#tfGradient)" rx="2" />
    {/* Bottom accent */}
    <path d="M25 75 Q50 85 75 75" stroke="url(#tfGradient)" strokeWidth="2" fill="none" opacity="0.8" />
  </svg>
);

// MongoDB - Official Green Leaf Logo
const MongoDBSvg = (
  <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mongoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#52C41A" />
        <stop offset="100%" stopColor="#389E0D" />
      </linearGradient>
    </defs>
    {/* Main leaf shape */}
    <path
      d="M50 15 Q70 28 72 50 Q72 72 50 88 Q28 72 28 50 Q30 28 50 15 Z"
      fill="url(#mongoGradient)"
    />
    {/* Inner leaf detail */}
    <path
      d="M50 15 Q58 30 58 50 Q58 70 50 85 Q47 70 47 50 Q47 30 50 15 Z"
      fill="#13C2C2"
      opacity="0.7"
    />
    {/* Center vein */}
    <line x1="50" y1="15" x2="50" y2="88" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
  </svg>
);

// Git - Official Red/Orange Branch Logo
const GitSvg = (
  <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F34F29" />
        <stop offset="100%" stopColor="#D9451A" />
      </linearGradient>
    </defs>
    {/* Left point */}
    <circle cx="25" cy="30" r="6.5" fill="url(#gitGradient)" />
    {/* Right point */}
    <circle cx="75" cy="50" r="6.5" fill="url(#gitGradient)" />
    {/* Bottom point */}
    <circle cx="50" cy="75" r="6.5" fill="url(#gitGradient)" />
    {/* Left to bottom connection */}
    <path d="M28 35 Q35 55 50 69" stroke="url(#gitGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Left to right connection */}
    <path d="M30 30 Q50 35 70 45" stroke="url(#gitGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
);

export const TechLogos: Record<string, React.ReactNode> = {
  Java: JavaSvg,
  Python: PythonSvg,
  JavaScript: JavaScriptSvg,
  "React.js": ReactSvg,
  React: ReactSvg,
  TensorFlow: TensorFlowSvg,
  MongoDB: MongoDBSvg,
  Git: GitSvg,
};

export const getTechLogo = (techName: string) => {
  return TechLogos[techName] || null;
};

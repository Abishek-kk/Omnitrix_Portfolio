import { ReactNode } from "react";

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`neon-panel rounded-lg p-5 relative ${className}`}>
      {/* corner brackets */}
      <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon" />
      <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon" />
      <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon" />
      {children}
    </div>
  );
}

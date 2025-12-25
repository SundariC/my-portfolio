import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999]
        w-40 h-40 rounded-full
        bg-purple-500/10 blur-3xl"
      style={{
        left: pos.x - 80,
        top: pos.y - 80
      }}
    />
  );
}

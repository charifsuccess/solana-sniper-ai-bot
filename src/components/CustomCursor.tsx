"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor ring with gradient */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          width: 40,
          height: 40,
        }}
        animate={{
          scale: isHovering ? 1.8 : isClicking ? 0.8 : 1,
          rotate: isHovering ? 90 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-60 animate-pulse" style={{ padding: '2px' }}>
          <div className="w-full h-full rounded-full bg-transparent" />
        </div>
      </motion.div>

      {/* Inner glowing dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 2 : isClicking ? 0.5 : 1,
          opacity: isHovering ? 1 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-blue-400 shadow-lg shadow-purple-500/50" />
      </motion.div>

      {/* Trailing particles effect */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9998]"
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            scale: [1, 0],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 0.6,
            delay: i * 0.1,
            repeat: Infinity,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400/40 to-blue-400/40 blur-sm" />
        </motion.div>
      ))}

      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[9997] blur-xl"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          scale: isHovering ? 1.2 : 0.8,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30" />
      </motion.div>
    </>
  );
}
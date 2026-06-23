/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Dynamic hover states for buttons, links, inputs
    const addHoverListeners = () => {
      const targets = document.querySelectorAll("a, button, input, textarea, [role='button'], .magnetic-item");
      targets.forEach((elem) => {
        elem.addEventListener("mouseenter", () => setHovered(true));
        elem.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    addHoverListeners();

    // Recheck on DOM modifications (e.g., dynamic component loading)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        id="custom-cursor-glow"
        className="pointer-events-none fixed inset-0 z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/55 bg-emerald-500/5 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: clicked ? 0.7 : hovered ? 1.5 : 1,
          left: 4,
          top: 4,
        }}
      />
      {/* Inner Dot */}
      <motion.div
        id="custom-cursor-dot"
        className="pointer-events-none fixed z-50 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: clicked ? 1.5 : hovered ? 0.5 : 1,
          left: 17,
          top: 17,
        }}
      />
    </>
  );
}

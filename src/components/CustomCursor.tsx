import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const position = useRef({ x: 0, y: 0 });
  const smoothPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      position.current = { x: e.clientX, y: e.clientY };
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".project-card") ||
        target.closest("[data-cursor-hover]")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    let animationId: number;
    const animate = () => {
      smoothPosition.current.x += (position.current.x - smoothPosition.current.x) * 0.12;
      smoothPosition.current.y += (position.current.y - smoothPosition.current.y) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${smoothPosition.current.x}px`;
        cursorRef.current.style.top = `${smoothPosition.current.y}px`;
      }
      animationId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 border border-foreground/50 rounded-full transition-[width,height] duration-300 ease-out mix-blend-difference"
        style={{
          width: isHovering ? "var(--cursor-size-hover)" : "var(--cursor-size)",
          height: isHovering ? "var(--cursor-size-hover)" : "var(--cursor-size)",
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-foreground rounded-full"
      />
    </>
  );
};

export default CustomCursor;

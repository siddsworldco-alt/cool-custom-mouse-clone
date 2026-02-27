import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isProject, setIsProject] = useState(false);
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
      if (target.closest(".project-card")) {
        setIsHovering(true);
        setIsProject(true);
      } else if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        setIsHovering(true);
        setIsProject(false);
      } else {
        setIsHovering(false);
        setIsProject(false);
      }
    };

    let animationId: number;
    const animate = () => {
      const ease = isProject ? 0.08 : 0.15;
      smoothPosition.current.x += (position.current.x - smoothPosition.current.x) * ease;
      smoothPosition.current.y += (position.current.y - smoothPosition.current.y) * ease;
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
  }, [isProject]);

  const cursorSize = isProject ? 100 : isHovering ? 60 : 12;

  return (
    <>
      {/* Main trailing circle */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
        style={{
          width: cursorSize,
          height: cursorSize,
          backgroundColor: isProject ? "hsl(var(--foreground))" : "transparent",
          border: isProject ? "none" : `1px solid hsl(var(--foreground) / ${isHovering ? 0.6 : 0.4})`,
          mixBlendMode: "difference",
          transition: "width 0.4s cubic-bezier(0.23,1,0.32,1), height 0.4s cubic-bezier(0.23,1,0.32,1), background-color 0.3s ease, border 0.3s ease",
        }}
      >
        <span
          className="text-[10px] font-body tracking-[0.2em] uppercase select-none"
          style={{
            opacity: isProject ? 1 : 0,
            color: "hsl(var(--background))",
            fontWeight: 500,
            transition: "opacity 0.3s ease",
          }}
        >
          VIEW
        </span>
      </div>
      {/* Small precise dot */}
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 5,
          height: 5,
          backgroundColor: "hsl(var(--foreground))",
          opacity: isProject ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;

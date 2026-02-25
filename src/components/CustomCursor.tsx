import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLSpanElement>(null);
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

  const size = isProject
    ? "var(--cursor-size-hover)"
    : isHovering
    ? "var(--cursor-size-hover)"
    : "var(--cursor-size)";

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,background-color,border-color] duration-300 ease-out flex items-center justify-center"
        style={{
          width: size,
          height: size,
          backgroundColor: isProject ? "hsl(0 0% 95% / 0.9)" : "transparent",
          border: isProject ? "none" : "1px solid hsl(0 0% 95% / 0.5)",
          mixBlendMode: isProject ? "difference" : "difference",
        }}
      >
        <span
          ref={cursorTextRef}
          className="text-xs font-body tracking-[0.15em] uppercase transition-opacity duration-300 select-none"
          style={{
            opacity: isProject ? 1 : 0,
            color: "hsl(0 0% 5%)",
            fontSize: "11px",
            fontWeight: 500,
          }}
        >
          VIEW
        </span>
      </div>
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-foreground rounded-full transition-opacity duration-300"
        style={{ opacity: isProject ? 0 : 1 }}
      />
    </>
  );
};

export default CustomCursor;

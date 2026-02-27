import { useEffect, useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (heroRef.current) {
        const opacity = Math.max(0, 1 - scroll / 600);
        const translateY = scroll * 0.3;
        heroRef.current.style.opacity = String(opacity);
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
      if (subtitleRef.current) {
        subtitleRef.current.style.opacity = String(Math.max(0, 1 - scroll / 400));
        subtitleRef.current.style.transform = `translateY(${scroll * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div ref={heroRef} className="text-center relative z-10">
        <h1 className="text-hero text-foreground">
          Siddharth Nayak
        </h1>
      </div>
      <p
        ref={subtitleRef}
        className="absolute bottom-16 text-center text-xs tracking-[0.15em] uppercase text-muted-foreground max-w-md leading-relaxed z-10"
      >
        Data Engineer & Designer — Python, Web Scraping, Automation & Data Extraction Specialist based in Auckland, NZ
      </p>
    </section>
  );
};

export default HeroSection;

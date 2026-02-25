import { useEffect, useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scroll = window.scrollY;
        const opacity = Math.max(0, 1 - scroll / 600);
        const translateY = scroll * 0.3;
        heroRef.current.style.opacity = String(opacity);
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <div ref={heroRef} className="text-center">
        <h1 className="text-hero text-foreground">
          Billie Duvalle
        </h1>
      </div>
      <p className="absolute bottom-16 text-center text-xs tracking-[0.15em] uppercase text-muted-foreground max-w-md leading-relaxed">
        Dutch born, Japanese raised art director based in Cape Town focusing on branding & design in expressive forms.
      </p>
    </section>
  );
};

export default HeroSection;

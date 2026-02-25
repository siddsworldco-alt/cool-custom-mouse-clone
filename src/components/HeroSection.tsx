import { useEffect, useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";
import project5 from "@/assets/project-5.jpg";

const floatingImages = [
  { src: project1, x: "8%", y: "15%", width: "180px", speed: 0.4 },
  { src: project3, x: "78%", y: "20%", width: "160px", speed: 0.25 },
  { src: project5, x: "65%", y: "55%", width: "140px", speed: 0.35 },
];

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (heroRef.current) {
        const opacity = Math.max(0, 1 - scroll / 600);
        const translateY = scroll * 0.3;
        heroRef.current.style.opacity = String(opacity);
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
      imagesRef.current.forEach((img, i) => {
        if (img) {
          const speed = floatingImages[i].speed;
          const y = scroll * speed;
          img.style.transform = `translateY(${-y}px)`;
          img.style.opacity = String(Math.max(0, 1 - scroll / 800));
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Floating parallax images */}
      {floatingImages.map((img, i) => (
        <div
          key={i}
          ref={(el) => { imagesRef.current[i] = el; }}
          className="absolute opacity-30 rounded-sm overflow-hidden"
          style={{
            left: img.x,
            top: img.y,
            width: img.width,
            aspectRatio: "3/4",
            zIndex: 0,
          }}
        >
          <img
            src={img.src}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      ))}

      <div ref={heroRef} className="text-center relative z-10">
        <h1 className="text-hero text-foreground">
          Billie Duvalle
        </h1>
      </div>
      <p className="absolute bottom-16 text-center text-xs tracking-[0.15em] uppercase text-muted-foreground max-w-md leading-relaxed z-10">
        Dutch born, Japanese raised art director based in Cape Town focusing on branding & design in expressive forms.
      </p>
    </section>
  );
};

export default HeroSection;

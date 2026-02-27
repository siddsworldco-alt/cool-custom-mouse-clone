import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  category: string;
  index: number;
  tech: string[];
}

const ProjectCard = ({ image, title, subtitle, category, index, tech }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateX = y * -8;
    const rotateY = x * 8;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1)`);
    setGlare({ x: (x + 0.5) * 100, y: (y + 0.5) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlare({ x: 50, y: 50 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
    >
      <div
        ref={cardRef}
        className="project-card group relative overflow-hidden rounded-lg"
        style={{
          transform,
          transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Browser chrome bar */}
        <div className="bg-secondary/80 backdrop-blur-sm px-4 py-2.5 flex items-center gap-2 border-b border-border/50">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[hsl(45_80%_50%/0.6)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[hsl(140_60%_45%/0.6)]" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-background/50 rounded-md px-3 py-1 text-[10px] text-muted-foreground text-center truncate">
              {title.toLowerCase().replace(/\s+/g, '')}.com
            </div>
          </div>
        </div>

        {/* Website screenshot */}
        <div className="aspect-[16/10] overflow-hidden relative">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
          {/* Glare overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, hsl(var(--foreground) / 0.06) 0%, transparent 60%)`,
            }}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-3">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{category}</span>
            <h3 className="text-3xl md:text-4xl font-display text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
            <div className="flex gap-2 mt-2">
              {tech.map((t) => (
                <span key={t} className="text-[10px] tracking-wider uppercase border border-border/60 px-2 py-0.5 text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom info bar */}
        <div className="px-4 py-3 flex justify-between items-center bg-secondary/60 border-t border-border/30">
          <div>
            <h4 className="text-sm font-display text-foreground tracking-wide">{title}</h4>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{category}</span>
          </div>
          <span className="text-[10px] text-muted-foreground tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

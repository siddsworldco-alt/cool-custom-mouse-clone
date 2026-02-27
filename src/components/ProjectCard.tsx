import { useRef, useState } from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  category: string;
  index: number;
}

const ProjectCard = ({ image, title, subtitle, category, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateX = y * -6;
    const rotateY = x * 6;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={cardRef}
      className="project-card aspect-[4/5] opacity-0 animate-fade-in"
      style={{
        animationDelay: `${index * 0.1}s`,
        transform,
        transition: transform === "" ? "none" : "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={title} loading="lazy" />
      <div className="project-card-overlay">
        <span className="section-label mb-2">{category}</span>
        <h3 className="text-2xl md:text-3xl font-display text-foreground leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

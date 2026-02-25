interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  category: string;
  index: number;
}

const ProjectCard = ({ image, title, subtitle, category, index }: ProjectCardProps) => {
  return (
    <div
      className="project-card aspect-[4/5] opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
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

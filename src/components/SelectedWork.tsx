import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  { image: project1, title: "Gaston", subtitle: "Lighting under a new light", category: "Rebranding" },
  { image: project2, title: "Philly's Ice Cream", subtitle: "A taste of nostalgia", category: "Rebranding" },
  { image: project3, title: "LeBlink", subtitle: "Skincare for the modern age", category: "Rebranding" },
  { image: project4, title: "Sensaya", subtitle: "Beauty for everyone", category: "Rebranding" },
  { image: project5, title: "Vintage Everything", subtitle: "Fashion Hunters", category: "Rebranding" },
  { image: project6, title: "Schlong", subtitle: "The subtle art of fine living", category: "Rebranding" },
];

const SelectedWork = () => {
  return (
    <section id="work" className="px-6 md:px-10 py-20">
      <h2 className="section-label mb-12">Selected work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} {...project} index={i} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <a
          href="#"
          className="nav-link border border-border px-8 py-3 transition-all duration-300 hover:bg-foreground hover:text-background"
        >
          See them all
        </a>
      </div>
    </section>
  );
};

export default SelectedWork;

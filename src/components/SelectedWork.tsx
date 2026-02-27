import { useRef } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  { image: project1, title: "Maison Noir", subtitle: "Luxury fashion brand identity & e-commerce", category: "Web Design", tech: ["React", "Tailwind", "Framer"] },
  { image: project2, title: "DataPulse", subtitle: "Real-time analytics dashboard for fintech", category: "Dashboard", tech: ["Next.js", "D3.js", "TypeScript"] },
  { image: project3, title: "Gusto Kitchen", subtitle: "Restaurant website with online booking", category: "Web Design", tech: ["React", "Supabase", "Stripe"] },
  { image: project4, title: "HomeVault", subtitle: "Real estate platform with property search", category: "Web App", tech: ["React", "Maps API", "PostgreSQL"] },
  { image: project5, title: "Artfolio", subtitle: "Photographer portfolio with immersive gallery", category: "Portfolio", tech: ["React", "GSAP", "Three.js"] },
  { image: project6, title: "StreetWear Co", subtitle: "Premium clothing e-commerce store", category: "E-Commerce", tech: ["Next.js", "Stripe", "Sanity"] },
];

const SelectedWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" ref={sectionRef} className="px-6 md:px-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between mb-12"
      >
        <div>
          <h2 className="section-label mb-2">Selected work</h2>
          <p className="text-muted-foreground text-sm max-w-md">
            Crafting high-impact websites and web apps that convert visitors into customers.
          </p>
        </div>
        <span className="text-6xl md:text-8xl font-display text-muted-foreground/20 leading-none hidden md:block">
          06
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} {...project} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center mt-16"
      >
        <a
          href="https://www.upwork.com/freelancers/siddsy"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link border border-border px-8 py-3 transition-all duration-300 hover:bg-foreground hover:text-background"
        >
          View all projects
        </a>
      </motion.div>
    </section>
  );
};

export default SelectedWork;

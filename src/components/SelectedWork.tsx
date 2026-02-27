import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  { image: project1, title: "Real Estate Monitor", subtitle: "Automated price tracking & data extraction", category: "Data Engineering" },
  { image: project2, title: "LinkedIn Automation", subtitle: "Cover letter & resume generation pipeline", category: "Automation" },
  { image: project3, title: "Wiring Diagrams Scraper", subtitle: "Automotive data extraction behind login", category: "Web Scraping" },
  { image: project4, title: "E-Commerce Intelligence", subtitle: "Product pricing, SKUs & inventory scraping", category: "Data Extraction" },
  { image: project5, title: "Lead Generation Engine", subtitle: "Prospect list building from public sources", category: "Automation" },
  { image: project6, title: "PDF Data Pipeline", subtitle: "Tables & text to Excel, CSV, JSON", category: "Data Engineering" },
];

const SelectedWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".project-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="px-6 md:px-10 py-20">
      <h2 className="section-label mb-12">Selected work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} {...project} index={i} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <a
          href="https://www.upwork.com/freelancers/siddsy"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link border border-border px-8 py-3 transition-all duration-300 hover:bg-foreground hover:text-background"
        >
          See them all
        </a>
      </div>
    </section>
  );
};

export default SelectedWork;

import siddharthPortrait from "@/assets/siddharth-portrait.jpg";
import { motion } from "framer-motion";

const services = [
  "Web Design", "Landing Pages", "Dashboard Design", "E-Commerce",
  "Web Scraping", "Data Extraction", "Python Automation", "API Integration",
];

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Python",
  "Figma", "Framer Motion", "Supabase",
];

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-10 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="section-label mb-6">Hello there</h2>
          <h3 className="text-4xl md:text-6xl font-display text-foreground leading-tight mb-8">
            I'm Siddharth Nayak
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-lg">
            An engineer with a passion for data and design, based in Auckland, New Zealand. 
            I build high-converting websites and web applications, and help businesses extract 
            structured data from websites, PDFs, and online platforms through automation.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-lg mt-4">
            From pixel-perfect landing pages to complex data pipelines — I deliver 
            end-to-end solutions that look great and work flawlessly.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="aspect-[3/4] overflow-hidden rounded-sm"
        >
          <img
            src={siddharthPortrait}
            alt="Siddharth Nayak portrait"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Services & Skills */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="section-label mb-8">Services</h3>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <span key={service} className="service-tag">{service}</span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 className="section-label mb-8">Tech Stack</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {skills.map((skill) => (
              <span key={skill} className="client-name">{skill}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

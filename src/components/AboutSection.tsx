import aboutPortrait from "@/assets/about-portrait.jpg";

const services = [
  "Web Scraping", "Data Extraction", "Python Automation", "PDF to Excel/CSV",
  "Lead Generation", "API Integration", "ETL Pipelines", "Data Cleaning",
  "Web Design", "n8n Workflows",
];

const skills = [
  "Python", "Selenium", "Scrapy", "Beautiful Soup", "SQL",
  "Microsoft Excel", "n8n", "Data Analysis",
];

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-10 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div>
          <h2 className="section-label mb-6">Hello there</h2>
          <h3 className="text-4xl md:text-6xl font-display text-foreground leading-tight mb-8">
            I'm Siddharth Nayak
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-lg">
            I help businesses extract structured data from websites, PDFs, and online platforms, 
            then automate the workflow so the data is ready to use in spreadsheets, databases, or CRMs. 
            An engineer with a passion for data and design, I turn messy sources like dynamic websites, 
            directories, and scanned reports into clean, structured datasets.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-lg mt-4">
            Typical outputs include CSV, Excel, Google Sheets-friendly formats, JSON, and SQL databases. 
            I focus on providing analysis-ready accurate data, maintainable scripts, and end-to-end solutions.
          </p>
        </div>
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={aboutPortrait}
            alt="Siddharth Nayak portrait"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Services & Skills */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="section-label mb-8">Services</h3>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <span key={service} className="service-tag">{service}</span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="section-label mb-8">Skills & Tools</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {skills.map((skill) => (
              <span key={skill} className="client-name">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

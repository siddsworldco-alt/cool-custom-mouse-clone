import aboutPortrait from "@/assets/about-portrait.jpg";

const services = [
  "Graphic Design", "Packaging", "Art Direction", "Brand Strategy",
  "Copywriting", "Naming", "Communication", "Digital Design", "UX/UI Design",
];

const clients = ["Nike", "Adidas", "Ford", "Burger King", "Heineken", "Google", "Instagram"];

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-10 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div>
          <h2 className="section-label mb-6">Hello there</h2>
          <h3 className="text-4xl md:text-6xl font-display text-foreground leading-tight mb-8">
            I'm Billie Duvalle
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-lg">
            Specializing in branding and design, I try to bring a distinctive, expressive flair to
            my work, blending my multicultural background with a keen eye for bold, innovative visual
            storytelling. My creative vision spans various mediums, crafting compelling brand
            identities that resonate with diverse audiences and leave a lasting impression.
          </p>
        </div>
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={aboutPortrait}
            alt="Billie Duvalle portrait"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Services */}
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
          <h3 className="section-label mb-8">Clients</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {clients.map((client) => (
              <span key={client} className="client-name">{client}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

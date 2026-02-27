const ContactSection = () => {
  return (
    <section id="contact" className="px-6 md:px-10 py-24 border-t border-border">
      <div className="flex flex-col items-center text-center">
        <h2 className="section-label mb-8">Get in touch</h2>
        <a
          href="https://www.upwork.com/freelancers/siddsy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl md:text-8xl font-display text-foreground transition-opacity duration-300 hover:opacity-60"
          data-cursor-hover
        >
          Let's talk
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-20 text-xs text-muted-foreground gap-4">
        <span>© 2025 Siddharth Nayak</span>
        <div className="flex gap-6">
          <a href="https://www.upwork.com/freelancers/siddsy" target="_blank" rel="noopener noreferrer" className="nav-link">Upwork</a>
          <a href="#" className="nav-link">LinkedIn</a>
          <a href="#" className="nav-link">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

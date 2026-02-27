const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6">
      <span className="text-xs font-bold tracking-[0.15em] uppercase text-foreground">
        Siddharth Nayak
      </span>
      <div className="flex items-center gap-6 md:gap-8">
        <a href="#work" className="nav-link">Work</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
      <span className="text-xs text-muted-foreground hidden md:block">©2025</span>
    </nav>
  );
};

export default Navbar;

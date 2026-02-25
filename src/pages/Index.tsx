import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SelectedWork from "@/components/SelectedWork";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <SelectedWork />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;

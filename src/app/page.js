import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mx-auto px-2 md:px-12 py-4 mt-24">
        <HeroSection />
        <AboutSection id="#about" />
        <AchievementsSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </div>
  );
}

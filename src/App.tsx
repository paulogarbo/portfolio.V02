import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "@fontsource/jetbrains-mono/700.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import WhatsAppButton from "./components/WhatsAppButton";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[rgb(17,17,19)]">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import { AboutMe } from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Introduction from "./Components/Introduction";
import LeftSidebar from "./Components/LeftSidebar";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import RightSidebar from "./Components/RightSidebar";
import ParticlesComponent from "./Components/Particles";
import Prizes from "./Components/Prizes";
import Themes from "./Components/Themes";
import Schedule from "./Components/Schedule";
import SponsersPartners from "./Components/SponsersPartners";
import SpeakerJudges from "./Components/SpeakerJudges";
import Mentors from "./Components/Mentors";
import CommunityPartners from "./Components/CommunityPartners";

function App() {
  return (
    <div className="custom-scrollbar">
      <ParticlesComponent />
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      <div className="flex flex-col items-center justify-center">
        <Introduction />
        <AboutMe />
        <Prizes />
        <Themes />
        <Schedule />
        <SponsersPartners />
        <SpeakerJudges />
        <Mentors />
        <CommunityPartners />
        <Experience />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

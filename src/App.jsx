import "./App.css";
import { AboutMe } from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Introduction from "./Components/Introduction";
import LeftSidebar from "./Components/LeftSidebar";
import Navbar from "./Components/Navbar";
import RightSidebar from "./Components/RightSidebar";
import ParticlesComponent from "./Components/Particles";
import Prizes from "./Components/Prizes";
import Themes from "./Components/Themes";
import Team from "./Components/Team";
import Schedule from "./Components/Schedule";
import SponsersPartners from "./Components/SponsersPartners";
import SpeakerJudges from "./Components/SpeakerJudges";
import Mentors from "./Components/Mentors";
import CommunityPartners from "./Components/CommunityPartners";
import CarouselComp from "./Components/Carousel";
import FAQs from "./Components/FAQs";
import OrgTeam from "./Components/OrgTeam";
import Organiser from "./Components/Organisers";
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <div className="custom-scrollbar">
      <Analytics/>
      <ParticlesComponent />
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      <div className="flex flex-col items-center justify-center">
        <Introduction />
        <AboutMe />
        {/* <Prizes /> */}
        {/* <Organiser/> */}
        <Themes />
        <Schedule />
        <SponsersPartners />
        <SpeakerJudges />
        {/* <Team />
        <Mentors /> */}
        <CommunityPartners />
        <CarouselComp />
        {/* <OrgTeam /> */}
        <FAQs />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProblemSection from "./components/ProblemSection";
import VideoSection from "./components/VideoSection";

export default function App() {
  const[darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
    return (

      <>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <VideoSection />
        <ProblemSection darkMode={darkMode} />
        <Features darkMode={darkMode} />
        <Footer darkMode={darkMode}/>
      </>

    )
  }

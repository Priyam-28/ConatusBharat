import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProblemSection from "./components/ProblemSection";
import VideoSection from "./components/VideoSection";

export default function App() {
  return (
    
    <>
      <Navbar/>
      <VideoSection/>
      <ProblemSection/>
      <Features/>
      <Footer/>
    </>
    
  )
}
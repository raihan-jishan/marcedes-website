import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Model from "@/components/Model";
import Social from "@/components/Social";
import Story from "@/components/Story";
import TestDrive from "@/components/TestDrive";
import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Discover /> 
      <Story /> 
      <Model /> 
      <History />
      <Social /> 
      <TestDrive /> 
      <Footer />  
    </ThemeProvider>
  );
}

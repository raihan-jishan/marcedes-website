import Explore from "../components/explore";
import Feature from "../components/feature";
import GetStart from "../components/getStart";
import {Hero} from "../components/Hero";
import Model from "../components/Model";
import Footer from "../components/shared/footer";
import Nav from "../components/shared/nav";
import Story from "../components/Story";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Feature />
      <Explore />
      <Model />
      <Story />
      <GetStart />
      <Footer /> 
    </div>
  );
}

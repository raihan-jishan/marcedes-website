import Explore from "@/components/explore";
import Feature from "@/components/feature";
import GetStart from "@/components/getStart";
import {Hero} from "@/components/hero";
import Model from "@/components/model";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";
import Story from "@/components/story";

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

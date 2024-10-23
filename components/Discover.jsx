import { LoadingAnimation } from "@/global/animation";
import Wrapper from "@/global/wrapper";
import { Disc2Icon } from "lucide-react";
import Heading from "./ui/heading";
import VidioSection from "./ui/vidioSection";

const Discover = () => {
  return (
    <Wrapper>
       <LoadingAnimation>
        <Heading
          title={"Discover"}
          description=" onother way"
          icon={<Disc2Icon />}
        />
        </LoadingAnimation>
       <LoadingAnimation>
       <VidioSection vidioPath={"/assets/discover.mp4"} />
       </LoadingAnimation>
     
    </Wrapper>
  );
};

export default Discover;

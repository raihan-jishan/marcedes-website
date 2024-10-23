import { LoadingAnimation } from "@/global/animation";
import Wrapper from "@/global/wrapper";
import { Disc2Icon } from "lucide-react";
import Heading from "./ui/heading";
import VidioSection from "./ui/vidioSection";


const History = () => {
  return (
    <Wrapper>
      <LoadingAnimation>
        <Heading
          title={"Our"}
          description="History"
          icon={<Disc2Icon />}
          className={'mt-40 p-10'}
        />
        <VidioSection vidioPath={'assets/history.mp4'} title={'our building history'} gradientFull/>
      </LoadingAnimation>
    </Wrapper>
  );
};

export default History;

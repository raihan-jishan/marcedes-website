import { LoadingAnimation } from "@/global/animation";
import Wrapper from "@/global/wrapper";
import { Disc2Icon } from "lucide-react";
import Feed from "./ui/Feed";
import Heading from "./ui/heading";


const Social = () => {
  return (
    <Wrapper>
      <LoadingAnimation>
        <Heading
          title={"connected us"}
          description=" Socials"
          icon={<Disc2Icon />}
        />
      </LoadingAnimation>
      <LoadingAnimation>
        <Feed /> 
      </LoadingAnimation>
    </Wrapper>
  );
};

export default Social;

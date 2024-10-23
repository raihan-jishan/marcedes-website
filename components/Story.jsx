
import Heading from "@/components/ui/heading";
import { LoadingAnimation } from "@/global/animation";
import Wrapper from "@/global/wrapper";
import { Disc2Icon } from "lucide-react";
import ImageSection from "./ui/imageSection";

const Story = () => {
  return (
    <Wrapper>
      <LoadingAnimation>
        <Heading
          title={"Connected Story with "}
          description="Mercedes"
          icon={<Disc2Icon />}
          className={"mt-10 p-4"}
        />
     <ImageSection />
      </LoadingAnimation>
    </Wrapper>
  );
};

export default Story;

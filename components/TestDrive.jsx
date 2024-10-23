import { LoadingAnimation } from "@/global/animation";
import Wrapper from "@/global/wrapper";
import { Disc2Icon, HardDrive } from "lucide-react";
import Heading from "./ui/heading";
import ImageSection from "./ui/imageSection";
const TestDrive = () => {
  return (
    <Wrapper>
      <LoadingAnimation>
        <Heading
          title={"DriveIt"}
          description=" Now ? "
          icon={<Disc2Icon />}
          className={"mt-20 p-4"}
        />
        <ImageSection
          imageUrl={
            "https://di-uploads-pod40.dealerinspire.com/mercedesbenzsurrey/uploads/2023/01/20230117_MBS_VIP_TestDrive_Campaign_LandingPage-1.jpg"
          }
          text={'Go for a Test drive'}
          ctaText={'Drive it Now'}
          description={'Book a test drive today to experience luxury and performance '}
          icon={<HardDrive />}
        />
      </LoadingAnimation>
    </Wrapper>
  );
};

export default TestDrive;

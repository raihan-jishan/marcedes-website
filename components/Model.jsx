import { modelData } from "@/constants/data";
import { LoadingAnimation } from "@/global/animation";
import Wrapper from "@/global/wrapper";
import { Disc2Icon } from "lucide-react";
import { ImageCard } from "./ui/card";
import Heading from "./ui/heading";

const Model = () => {
  return (
    <Wrapper>
      <LoadingAnimation>
        <Heading
          title={"Marcedes"}
          description=" Models"
          icon={<Disc2Icon />}
          className="mt-12 p-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modelData.map((data, index) => (
            <ImageCard key={index} data={data} />
          ))}
        </div>
      </LoadingAnimation>
    </Wrapper>
  );
};

export default Model;

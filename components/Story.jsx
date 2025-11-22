import React from "react";
import Label from "./ui/label";
import { StoryCard } from "./ui/card";

const Story = () => {
  return (
    <div className="mt-32">
      <Label label={"Story Connect Marcedes"} />
      <div className="grid grid-cols-3 p-6 gap-3 max-lg:grid-cols-1 max-lg:gap-5" id="story">
        <StoryCard
          imageUrl={"/assets/story/image-1.jpg"}
          label={"A Journey Called Mercedes"}
          description="Experience the perfect blend of luxury, performance, and innovation. Every mile tells a story — of craftsmanship, comfort, and timeless elegance."
          date={"23.May.2025"}
        />
        <StoryCard
          imageUrl={"/assets/story/image-2.jpg"}
          label={"Crafted by Mercedes"}
          description={
            "Where precision meets passion. Every curve, every detail, every moment behind the wheel defines a new chapter in luxury and performance."
          }
        />
        <StoryCard
          imageUrl={"/assets/story/image-3.jpg"}
          label={"The Mercedes Experience"}
          description={
            "A story of innovation, comfort, and power — engineered to move you, inspire you, and elevate every drive."
          }
        />
      </div>
    </div>
  );
};

export default Story;

import { ModelHero } from "../../../components/hero";
import ModelGallery from "../../../components/modelGallery";
import ModelSpecification from "../../../components/modelSpecification";
import ModelVideo from "../../../components/modelVideo";
import PlaceBooking from "../../../components/placeBooking";
import PowerInfo from "../../../components/powerInfo";
import Footer from "../../../components/shared/footer";
import TopBar from "../../../components/shared/topBar";
import { modelDetailsData } from "../../../constants/data";

export default async function ModelDetails({ params }) {
  const { modelId } = params; // modelId from the URL (like /models/1)

  // Find the model based on the modelId
  const model = modelDetailsData.find(
    (model) => model.id === parseInt(modelId)
  );

  // If no model is found, show an error message
  if (!model) {
    return <div>Model not found!</div>;
  }

  return (
    <div>
      {/* Top Bar */}
      <TopBar />

      {/* Hero Section */}
      <ModelHero
        heroTitle={model.heroTitle}
        imageUrl={model.heroImage}
        shortSologan={model.shortSologan}
      />

      {/* Power Modules */}
      <PowerInfo
        zeroHundred={model.zeroHundred}
        engineConfig={model.engineConfig}
        gearbox={model.gearbox}
        topspeed={model.topspeed}
        torgue={model.torgue}
        kw={model.kw}
      />

      {/* Model Gallery */}
      <ModelGallery
        model={model}
        title={model.galleryTitle}
        description={model.galleryDesc}
      />

      {/* Model Specification */}
      <ModelSpecification
        title={model.interiorTitle}
        description={model.interiorDesc}
        model={model}
      />

      {/* Model Video Section */}
      <ModelVideo
        title={model.modelTitle}
        description={model.modelVedioDesc}
        vedioPath={model.modelVedio}
      />

      {/* Get a Test Drive */}
      <PlaceBooking />

      {/* Footer */}
      <Footer />
    </div>
  );
}

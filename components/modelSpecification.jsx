const ModelSpecification = ({ title, description, model }) => {
  return (
    <section className="relative flex flex-col lg:flex-row gap-10 p-6 lg:p-16 mt-10">
      {/* === Background Layer === */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/assets/gallery-bg.jpeg')" }}
      />

      {/* === CONTENT WRAPPER (for z-index fix) === */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 w-full">
        {/* === LEFT: MODERN GRID GALLERY === */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full lg:w-1/2">
          {/* Big Image */}
          <img
            src={model.interiorImage[0]}
            className="col-span-2 rounded-2xl shadow-xl object-cover h-64 lg:h-80"
            alt=""
          />

          {/* Side Image 1 */}
          <img
            src={model.interiorImage[1]}
            className="rounded-2xl shadow-xl object-cover h-48"
            alt=""
          />

          {/* Side Image 2 */}
          <img
            src={model.interiorImage[2]}
            className="rounded-2xl shadow-xl object-cover h-48"
            alt=""
          />
        </div>

        {/* === RIGHT: GLASS TEXT INFO === */}
        <div className="">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-6 tracking-tight font-ElmsSans">
            {title}
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-6 max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModelSpecification;

export default function ModelVideo({ vedioPath, title, description }) {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
      {/* VIDEO */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={vedioPath}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      ></video>

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* TEXT */}
      <div className="absolute bottom-8 left-8 text-white z-10 max-w-lg">
        <h1 className="text-4xl lg:text-3xl font-bold mb-4 tracking-tight font-Comfortaa max-lg:text-2xl">
          {title}
        </h1>
        <p className="text-lg lg:text-xl text-gray-200 max-lg:text-sm">
          {description}
        </p>
      </div>
    </section>
  );
}

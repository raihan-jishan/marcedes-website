
const Heading = ({ title, description, className }) => {
  return (
    <h1 className={`text-xl p-2 font-semibold flex-col ${className}`}>
      <span className="text-xl">{title}</span>{" "}
      <span className="text-5xl font-extrabold max-lg:text-5xl">
        {description}
      </span>
    </h1>
  );
};

export default Heading;

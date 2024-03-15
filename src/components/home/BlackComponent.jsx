function BlackComponent() {
  return (
    <div className="bg-black w-full p-3 md:p-0 h-full md:h-32 my-6 flex flex-wrap justify-evenly text-white items-center">
      <div className="flex ">
        <h2
          style={{ color: "#CFD19B" }}
          className="hover:scale-105 text-xl sm:text-3xl md:text-5xl font-semibold mr-4"
        >
          10k +
        </h2>
        <p className="hover:text-lime-400">
          Children are back <br /> to school
        </p>
      </div>
      <div className="flex">
        <h2
          style={{ color: "#CFD19B" }}
          className="hover:scale-105 text-xl sm:text-3xl md:text-5xl font-semibold mr-4"
        >
          2M+
        </h2>
        <p className="hover:text-lime-400">
          Total money <br /> donated
        </p>
      </div>
      <div className="flex">
        <h2
          style={{ color: "#CFD19B" }}
          className="hover:scale-105 text-xl sm:text-3xl md:text-5xl font-semibold mr-4"
        >
          100+
        </h2>
        <p className="hover:text-lime-400">
          Hospital has <br /> been built
        </p>
      </div>
    </div>
  );
}

export default BlackComponent;

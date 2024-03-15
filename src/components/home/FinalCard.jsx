import image1 from "/Rectangle 7.png";
import image2 from "/Rectangle 8.png";
import image3 from "/Rectangle 9.png";
import image4 from "/Rectangle 10.png";

function FinalCard() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h2 className="text-xl md:text-2xl font-bold tracking-wide md:leading-[1.4] text-center">
          Join our community for donating and be a part of a <br /> positive
          change in the world. With over
        </h2>
      </div>
      <div className=" flex md:w-4/6 mt-6">
        <div className="md:w-3/12" style={{ position: "relative" }}>
          <div className="flex  mb-4">
            <img src={image1} alt="" className="w-4/5" />
            <div className="w-1/5"></div>
          </div>
          <div className="flex ">
            <div className="w-2/5"></div>
            <img src={image2} alt="" className="w-3/5" />
          </div>
          <div
            className="w-64 h-64 rounded-full"
            style={{
              position: "absolute",
              top: 20,
              left: 50,
              zIndex: -1,
              background: "rgba(208, 232, 100,0.3)",
              filter: "blur(100px)",
            }}
          ></div>
        </div>
        <div className="md:w-6/12 flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl md:text-8xl font-medium italic tracking-wide hover:text-lime-600">
            130,987 +
          </h2>
          <p className="text-sm md:text-lg md:mt-6">People already joined</p>
          <button className="bg-mainColor hover:bg-stone-700 hover:scale-105 rounded-full py-1 md:py-3 text-xs md:text-base px-2  md:px-6 text-white md:mt-12">
            Yes, I want to join the community
          </button>
        </div>

        <div className="md:w-3/12" style={{ position: "relative" }}>
          <div className="flex  mb-4">
            <div className="w-3/5"></div>
            <img src={image3} alt="" className="w-4/5" />
          </div>
          <div className="flex ">
            <img src={image4} alt="" className="w-3/5" />
            <div className="w-2/5"></div>
          </div>
          <div
            className="w-64 h-64 rounded-full"
            style={{
              position: "absolute",
              top: 20,
              right: 50,
              zIndex: -1,
              background: "rgba(208, 232, 100,0.3)",
              filter: "blur(100px)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default FinalCard;

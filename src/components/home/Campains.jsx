import image1 from "/Rectangle 7a.png";
import image2 from "/Rectangle 9a.png";
import image3 from "/Rectangle 11a.png";
import image4 from "/Rectangle 11.png";

function Campaign() {
  return (
    <div className="mt-12 py-6 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold tracking-wide leading-[1.4] text-center">
        Our Campaign
      </h2>
      <div className=" w-5/6 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between my-12">
        <div
          className="bg-white flex flex-col m-2 lg:m-0 justify-center items-center w-60 h-60 rounded-xl shadow-xl  border border-gray-200 overflow-hidden"
          style={{ position: "relative" }}
        >
          <img
            src={image1}
            alt=""
            className="hover:scale-105 w-full h-3/5 object-cover rounded-2xl "
          />
          <div className="h-2/5"></div>
          <div style={{ position: "absolute", bottom: 0 }} className=" w-5/6 ">
            <button
              className="rounded-lg text-white font-semibold text-sm py-1 w-16"
              style={{ backgroundColor: "#FF9900" }}
            >
              Food
            </button>
            <p className="font-semibold">Help us to send food</p>
            <div className="flex w-full  justify-between items-center">
              <div className="bg-slate-400 h-2 rounded-lg w-5/6 overflow-hidden mr-1">
                <div
                  style={{ backgroundColor: "#FF9900" }}
                  className="w-3/5 h-full"
                ></div>
              </div>
              <p className="w-1/6 font-semibold" style={{ color: "#FF9900" }}>
                {" "}
                100%
              </p>
            </div>
            <p className="text-xs">Donator’s</p>
            <p style={{ color: "#FF9900" }} className="font-semibold">
              50
            </p>
          </div>
        </div>
        <div
          className="bg-white flex flex-col m-2 lg:m-0 justify-center items-center w-60 h-60 rounded-xl shadow-xl  border border-gray-200 overflow-hidden"
          style={{ position: "relative" }}
        >
          <img
            src={image2}
            alt=""
            className="hover:scale-105 w-full h-3/5 object-cover rounded-2xl "
          />
          <div className="h-2/5"></div>
          <div style={{ position: "absolute", bottom: 0 }} className=" w-5/6 ">
            <button
              className="rounded-lg text-white font-semibold text-sm py-1 w-16"
              style={{ backgroundColor: "#00614C" }}
            >
              Clothes
            </button>
            <p className="font-semibold">Help us to send food</p>
            <div className="flex w-full  justify-between items-center">
              <div className="bg-slate-400 h-2 rounded-lg w-5/6 overflow-hidden mr-1">
                <div
                  style={{ backgroundColor: "#00614C" }}
                  className="w-3/5 h-full"
                ></div>
              </div>
              <p className="w-1/6 font-semibold" style={{ color: "#00614C" }}>
                {" "}
                100%
              </p>
            </div>
            <p className="text-xs">Donator’s</p>
            <p style={{ color: "#00614C" }} className="font-semibold">
              50
            </p>
          </div>
        </div>
        <div
          className="bg-white flex flex-col m-2 lg:m-0 justify-center items-center w-60 h-60 rounded-xl shadow-xl  border border-gray-200 overflow-hidden"
          style={{ position: "relative" }}
        >
          <img
            src={image3}
            alt=""
            className="hover:scale-105 w-full h-3/5 object-cover rounded-2xl"
          />
          <div className="h-2/5"></div>
          <div style={{ position: "absolute", bottom: 0 }} className=" w-5/6 ">
            <button
              className="rounded-lg text-white font-semibold text-sm py-1 w-20"
              style={{ backgroundColor: "#FF8A00" }}
            >
              Education
            </button>
            <p className="font-semibold">Help us to send food</p>
            <div className="flex w-full  justify-between items-center">
              <div className="bg-slate-400 h-2 rounded-lg w-5/6 overflow-hidden mr-1">
                <div
                  style={{ backgroundColor: "#FF8A00" }}
                  className="w-3/5 h-full"
                ></div>
              </div>
              <p className="w-1/6 font-semibold" style={{ color: "#FF8A00" }}>
                {" "}
                100%
              </p>
            </div>
            <p className="text-xs">Donator’s</p>
            <p style={{ color: "#FF8A00" }} className="font-semibold">
              50
            </p>
          </div>
        </div>
        <div
          className="bg-white flex flex-col m-2 lg:m-0 justify-center items-center w-60 h-60 rounded-xl shadow-xl  border border-gray-200 overflow-hidden"
          style={{ position: "relative" }}
        >
          <img
            src={image4}
            alt=""
            className="hover:scale-105  w-full h-3/5 object-cover rounded-2xl "
          />
          <div className="h-2/5"></div>
          <div style={{ position: "absolute", bottom: 0 }} className=" w-5/6 ">
            <button
              className="rounded-lg text-white font-semibold text-sm py-1 w-20"
              style={{ backgroundColor: "#096BA1" }}
            >
              Medical
            </button>
            <p className="font-semibold">Help us to send food</p>
            <div className="flex w-full  justify-between items-center">
              <div className="bg-slate-400 h-2 rounded-lg w-5/6 overflow-hidden mr-1">
                <div
                  style={{ backgroundColor: "#096BA1" }}
                  className="w-3/5 h-full"
                ></div>
              </div>
              <p className="w-1/6 font-semibold" style={{ color: "#096BA1" }}>
                {" "}
                100%
              </p>
            </div>
            <p className="text-xs">Donator’s</p>
            <p style={{ color: "#096BA1" }} className="font-semibold">
              50
            </p>
          </div>
        </div>
      </div>
      <button className="bg-mainColor rounded-full py-4  px-6 text-white mt-8 hover:scale-105 hover:bg-stone-700">
        Show more
      </button>
    </div>
  );
}

export default Campaign;

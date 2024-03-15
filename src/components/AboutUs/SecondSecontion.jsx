import staff1 from "/Rectangle 1110.png";
import staff2 from "/Rectangle 1111.png";
import staff3 from "/Rectangle 1112.png";
import staff4 from "/Rectangle 1113.png";

function SecondSection() {
  return (
    <div className="flex justify-center my-16">
      <div className="flex flex-wrap lg:flex-nowrap justify-center w-full md:w-5/6">
        <div className="flex justify-center items-center w-60 h-60 mx-2 md:mx-2 my-4 md:my-0">
          <div className="bg-white flex flex-col justify-center items-center w-full h-full rounded-xl shadow-xl border border-gray-200 relative">
            <img
              src={staff1}
              alt=""
              className="w-full h-full object-cover rounded-2xl hover:scale-105 hover:saturate-0"
            />
            <div
              style={{ position: "absolute", bottom: -10 }}
              className="w-5/6 flex justify-center"
            >
              <div className="bg-white shadow-lg rounded py-2 w-4/5 text-center">
                Rahul
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-60 h-60 mx-2 md:mx-2 my-4 md:my-0">
          <div className="bg-white flex flex-col justify-center items-center w-full h-full rounded-xl shadow-xl border border-gray-200 relative">
            <img
              src={staff2}
              alt=""
              className="w-full h-full object-cover rounded-2xl hover:scale-105 hover:saturate-0"
            />
            <div
              style={{ position: "absolute", bottom: -10 }}
              className="w-5/6 flex justify-center"
            >
              <div className="bg-white shadow-lg rounded py-2 w-4/5 text-center">
                Ishaa
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-60 h-60 mx-2 md:mx-2 my-4 md:my-0">
          <div className="bg-white flex flex-col justify-center items-center w-full h-full rounded-xl shadow-xl border border-gray-200 relative">
            <img
              src={staff3}
              alt=""
              className="w-full h-full object-cover rounded-2xl hover:scale-105 hover:saturate-0"
            />
            <div
              style={{ position: "absolute", bottom: -10 }}
              className="w-5/6 flex justify-center"
            >
              <div className="bg-white shadow-lg rounded py-2 w-4/5 text-center">
                Priya
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-60 h-60 mx-2 md:mx-2 my-4 md:my-0">
          <div className="bg-white flex flex-col justify-center items-center w-full h-full rounded-xl shadow-xl border border-gray-200 relative">
            <img
              src={staff4}
              alt=""
              className="w-full h-full object-cover rounded-2xl hover:scale-105 hover:saturate-0"
            />
            <div
              style={{ position: "absolute", bottom: -10 }}
              className="w-5/6 flex justify-center"
            >
              <div className="bg-white shadow-lg rounded py-2 w-4/5 text-center">
                Jackson
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;

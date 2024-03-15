import budhaImage from "/buddha-8054755_640-removebg-preview 1.png";
import groupImage from "/Group 1.png";
import greenLine from "/Vector 1.png";

function BudhaComponent() {
  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(255,255,255,0.5) 0%, rgba(192, 232, 100,0.3) 100%)",
      }}
      className="w-full md:flex pt-3 md:pt-12"
    >
      <div className="w-full md:w-3/5 text-left">
        <div className="w-4/5 mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wide leading-[1.4]">
            Make someone’s Life <br /> by giving of yours
          </h1>
          <img
            src={greenLine}
            alt="green line"
            className="w-32 hidden lg:block"
            style={{ position: "absolute", left: 380 }}
          />
          <p className="mt-4 md:mt-6 text-sm md:text-base font-medium tracking-wide">
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id. Lorem
          </p>
          <button className="bg-mainColor rounded-full py-3 md:py-4 px-6 md:px-8 text-white my-4 md:my-6 text-sm md:text-base hover:bg-stone-700 hover:scale-105">
            Donate Now
          </button>
          <div className="w-5/6 sm:w-4/6 md:w-3/6 flex mt-2">
            <img
              src={groupImage}
              alt="image of group of users"
              className="w-3/6 hover:scale-95"
            />{" "}
            <button className="bg-mainColor text-white text-sm font-semibold w-2/5 rounded-md mx-2 hover:bg-stone-700 hover:scale-105">
              2.5k Helped
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/5 text-center relative mt-6 md:mt-0">
        <div
          className="rounded-full w-8 h-8"
          style={{
            backgroundColor: "#E0EFDD",
            position: "absolute",
            top: "35%",
            left: "10%",
          }}
        ></div>
        <div
          className="w-4/6 rounded-full mx-auto"
          style={{ backgroundColor: "#d2e8b5" }}
        >
          <img
            src={budhaImage}
            alt="image of buddha"
            className="hover:scale-95"
          />
        </div>
        <div
          className="rounded-full w-8 h-8"
          style={{
            backgroundColor: "#E0EFDD",
            position: "absolute",
            top: "15%",
            right: "15%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default BudhaComponent;

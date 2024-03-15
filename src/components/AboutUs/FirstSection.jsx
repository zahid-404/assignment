import budhaImage from "/buddha-8054755_640-removebg-preview 1.png";
import image1 from "/Rectangle 186.png";
function FirstSection() {
  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(255,255,255,0.5) 0%, rgba(192, 232, 100,0.3) 200%)",
      }}
      className="w-full  pt-4 "
    >
      {/* .......About us....... */}
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-normal">
        <div className="md:w-5/6 text-left flex justify-center mt-4">
          <div className="text-left  w-full ml-8 lg:ml-20 tracking-widest">
            <h2 className="text-2xl lg:text-4xl font-semibold">
              About <span style={{ color: "#C0E864" }}>Us</span>
            </h2>
            <p className="lg:my-4 hover:text-lime-800">
              Lorem ipsum dolor sit amet consectetur. At consequat purus
              hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem
              ipsum dolor sit amet consectetur. At consequat purus hendrerit
              proin risus Sit purus ante dictum in malesuada id.Sit purus ante
              dictum in malesuada id.Lorem ipsum dolor sit amet consectetur. At
              consequat purus hendrerit proin risus Sit purus ante dictum in
              malesuada id{" "}
            </p>
          </div>
        </div>
        <div
          className="md:w-2/6  flex justify-center "
          style={{ position: "relative" }}
        >
          <div
            className="rounded-full w-6 h-6"
            style={{
              backgroundColor: "#E0EFDD",
              position: "absolute",
              top: 100,
              left: 50,
            }}
          ></div>
          <div
            className="w-60 h-60  rounded-full"
            style={{ backgroundColor: "#d2e8b5" }}
          >
            <img src={budhaImage} alt="image of budha" />
          </div>
          <div
            className="rounded-full w-6 h-6"
            style={{
              backgroundColor: "#E0EFDD",
              position: "absolute",
              top: 30,
              right: 70,
            }}
          ></div>
        </div>
      </div>

      {/* .............Our Story.......... */}
      <div>
        <div className="text-left md:w-5/6 ml-8 lg:ml-20 tracking-widest">
          <h2 className="text-2xl lg:text-4xl font-semibold">
            Our <span style={{ color: "#C0E864" }}>Story</span>
          </h2>
          <p className="my-4 hover:text-lime-800">
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id.Lorem ipsum dolor
            sit amet consectetur. At consequat purus hendrerit proin risus Sit
            purus ante dictum in malesuada id.Sit purus ante dictum in malesuada
            id.Lorem ipsum dolor sit amet consectetur. At consequat purus
            hendrerit proin risus Sit purus ante dictum in malesuada id{" "}
          </p>
        </div>
      </div>
      {/* ...............Our vision......... */}
      <div className="text-left w-5/6 md:flex ml-8  lg:ml-20 mt-12 tracking-widest">
        <div className="lg:w-2/5 ">
          <img src={image1} alt="image of a girl" className="hover:scale-105" />
        </div>
        <div className="w-full lg:w-3/5 pt-8">
          <h2 className="text-2xl lg:text-4xl font-semibold">
            Our <span style={{ color: "#C0E864" }}>Vision</span>
          </h2>
          <p className="my-4 hover:text-lime-800">
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id.Lorem ipsum dolor
            sit amet consectetur. At consequat purus hendrerit proin risus Sit
            purus ante dictum in malesuada id.Sit purus ante dictum in malesuada
            id.Lorem ipsum dolor sit amet consectetur. At consequat purus
            hendrerit proin risus Sit purus ante dictum in malesuada id{" "}
          </p>
        </div>
      </div>
      {/* .....who we are......... */}
      <div>
        <div className="text-left w-5/6 mt-6 ml-8  lg:ml-20 tracking-widest">
          <h2 className="text-2xl lg:text-4xl font-semibold">
            Who <span style={{ color: "#C0E864" }}>We Are</span>
          </h2>
          <p className="my-4 hover:text-lime-800">
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id.Lorem ipsum dolor
            sit amet consectetur. At consequat purus hendrerit proin risus Sit
            purus ante dictum in malesuada id.Sit purus ante dictum in malesuada
            id.Lorem ipsum dolor sit amet consectetur. At consequat purus
            hendrerit proin risus Sit purus ante dictum in malesuada id{" "}
          </p>
        </div>
      </div>
      {/* .......our team......... */}
      <div>
        <div className="text-left w-5/6 mt-6 ml-8  lg:ml-20 tracking-widest">
          <h2 className="text-2xl lg:text-4xl font-semibold">
            Our <span style={{ color: "#C0E864" }}>Team</span>
          </h2>
          <p className="my-4 hover:text-lime-800">
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id.Lorem ipsum dolor
            sit amet consectetur. At consequat purus hendrerit proin risus Sit
            purus ante dictum in malesuada id.Sit purus ante dictum in malesuada
            id.Lorem ipsum dolor sit amet consectetur. At consequat purus
            hendrerit proin risus Sit purus ante dictum in malesuada id{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;

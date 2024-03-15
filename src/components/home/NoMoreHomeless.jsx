import image1 from "/Ellipse 14.png";
import image2 from "/Ellipse 15.png";
import image3 from "/Ellipse 17.png";
import image4 from "/Ellipse 16.png";
import image5 from "/Ellipse 18.png";
import image6 from "/Ellipse 20.png";
import image7 from "/Ellipse 21.png";
import image8 from "/Ellipse 19.png";
import rectangleImage from "/Rectangle 6.png";
import Illustration1 from "/image 4.png";
import Illustration2 from "/image 5.png";
import Illustration3 from "/image 6.png";
import { motion } from "framer-motion";

function NoMoreHomeless() {
  return (
    <div className="flex flex-col justify-center items-center pl-8">
      {/* ........First card.......... */}
      <div className="flex flex-wrap md:flex lg:flex-nowrap justify-between items-center w-5/6 my-12">
        <div className="hover:scale-105 w-64 mx-4 h-64 bg-white rounded-xl shadow-lg border border-gray-200 px-2">
          <div className="flex justify-center">
            <img
              src={image1}
              alt="round image of a boy"
              className="hover:scale-110 w-16 h-full m-3"
            />
            <img
              src={image2}
              alt="group image of boys"
              className="hover:scale-110 w-12 h-full ml-2 mt-6 mr-6"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={image3}
              alt="Childrens through the window"
              className="hover:scale-110 w-12 h-full m-2 ml-6"
            />
            <img
              src={image4}
              alt="image of a women"
              className="hover:scale-110 w-16 h-full m-3"
            />
          </div>
          <p className="text-center text-sm font-semibold mt-3">
            828 Million people in the world are still hungry
          </p>
        </div>
        <div className="hover:scale-105 w-60 ml-4 mr-14 h-56 mt-6 md:mt-0 bg-white rounded-xl shadow-lg border border-gray-200 px-2">
          <div className="flex justify-center">
            <img
              src={image5}
              alt="A sad old man"
              className="hover:scale-110 w-14 h-full m-3"
            />
            <img
              src={image6}
              alt="homeless man"
              className="hover:scale-110 w-10 h-full ml-2 mt-6 mr-6"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={image7}
              alt="Sleeping man"
              className="w-10 h-full m-2 ml-6 hover:scale-110"
            />
            <img
              src={image8}
              alt="homeless man 2"
              className="hover:scale-110 w-14 h-full m-3"
            />
          </div>
          <p className="text-center text-sm font-semibold mt-3">
            150 Million people in the world are still Homeless
          </p>
        </div>
        <div
          className="w-full lg:w-6/12 md:mx-4 py-6 "
          style={{ position: "relative" }}
        >
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide md:leading-[1.4]">
            No More Homeless <br /> No More Hunger
          </h1>
          <p className="mt-6 font-medium tracking-wide">
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id.Lorem{" "}
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="bg-mainColor rounded-full py-4 px-6 text-white my-6 hover:bg-stone-700"
          >
            Donate Now
          </motion.button>
          <div
            className="w-96 h-96 rounded-full"
            style={{
              position: "absolute",
              top: 0,
              right: 50,
              zIndex: -1,
              background: "rgba(208, 232, 100,0.2)",
              filter: "blur(100px)",
            }}
          ></div>
        </div>
      </div>
      {/* .................. */}
      {/* ........Second Card....... */}
      <div className="md:flex flex-wrap  w-5/6">
        <div
          className="md:w-6/12  md:py-12 items-center "
          style={{ position: "relative" }}
        >
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide md:leading-[1.4]">
            Great futures are built <br /> with a small trust
          </h1>
          <p className="mt-6 font-medium tracking-wide">
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id.Lorem{" "}
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="bg-mainColor rounded-full py-4 px-6 text-white my-6 hover:bg-stone-700"
          >
            Donate Now
          </motion.button>
          <div
            className="w-96 h-96 rounded-full"
            style={{
              position: "absolute",
              top: 20,
              left: 50,
              zIndex: -1,
              background: "rgba(208, 232, 100,0.2)",
              filter: "blur(100px)",
            }}
          ></div>
        </div>
        <div className="md:w-6/12">
          <img
            src={rectangleImage}
            alt="rectage shape image of group of children"
            className="hover:scale-95 max-h-96"
          />
        </div>
      </div>
      {/* ..................... */}
      {/* ............Third Card....... */}
      <div className="flex justify-center w-5/6 m-12 md:py-6 text-gray-900">
        <div className="text-center  w-4/5">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide leading-[1.5] ">
            We Believe that We can Save <br /> More Life’s with you
          </h2>

          <div className="flex flex-wrap justify-evenly  mt-12">
            <div className="bg-white flex flex-col justify-center my-4 md:my-0 items-center w-56 h-56 rounded-xl shadow-xl  border border-gray-200 px-2">
              <img
                src={Illustration1}
                alt="illustration of users"
                className="hover:scale-110 h-3/6 "
              />
              <h2 className="font-semibold">Become Volunteer</h2>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur. At consequat purus
                hendrerit proin risus Sit purus ante dictum in malesuada
                id.Lorem{" "}
              </p>
            </div>
            <div className="bg-white flex flex-col justify-center my-4 md:my-0 items-center w-56 h-56 rounded-xl shadow-xl  border border-gray-200 px-2">
              <img
                src={Illustration2}
                alt="illustration of users"
                className="hover:scale-110 h-2/5 "
              />
              <h2 className="font-semibold mt-3">Quick Fundraise</h2>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur. At consequat purus
                hendrerit proin risus Sit purus ante dictum in malesuada
                id.Lorem{" "}
              </p>
            </div>
            <div className="bg-white flex flex-col justify-center my-4 md:my-0 items-center w-56 h-56 rounded-xl shadow-xl  border border-gray-200 px-2">
              <img
                src={Illustration3}
                alt="illustration of users"
                className="hover:scale-110 h-2/5 "
              />
              <h2 className="font-semibold mt-3">Start Donating</h2>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur. At consequat purus
                hendrerit proin risus Sit purus ante dictum in malesuada
                id.Lorem{" "}
              </p>
            </div>
          </div>
          <button className="bg-mainColor rounded-full py-4  px-6 text-white mt-12 hover:bg-stone-700">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoMoreHomeless;

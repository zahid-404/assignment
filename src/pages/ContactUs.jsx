import { LuPhone } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
function ContactUs() {
  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(255,255,255,0.5) 0%, rgba(192, 232, 100,0.3) 200%)",
      }}
      className="w-full  pt-4 pb-16"
    >
      <div className=" w-full flex flex-col justify-center items-center">
        <div className="w-5/6  flex flex-col justify-center items-center">
          <h3 className="text-2xl font-semibold mt-5">
            Contact <span style={{ color: "#C0E864" }}>Us</span>{" "}
          </h3>
          <h2 className="text-2xl lg:text-4xl font-semibold mt-6">
            What can we help you with?
          </h2>
          <div className="flex w-5/6 lg:w-3/5 justify-center my-8">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for your query"
              className="bg-white text-sm py-4 px-4 rounded-l-full  border  border-gray-300 w-3/5"
            />
            <button
              className="rounded-r-full px-4 py-4 w-1/5 flex justify-center items-center"
              style={{ backgroundColor: "#C0E864" }}
            >
              Search
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#3d3d3d",
            position: "relative",
            marginTop: "10vw",
            marginBottom: "10vw",
          }}
          className="w-full h-full py-12 flex justify-start text-white"
        >
          <div className=" md:flex justify-center items-center px-5 sm:px-4 md:px-3">
            <div className=" md:w-3/6  flex flex-col  ">
              <div className="flex mb-2 mt-4" style={{ color: "#C0E864" }}>
                {" "}
                <LuPhone className="mt-1 mr-2" />
                <p>Call Us</p>
              </div>
              <p>+91 9234567899</p>
              <div className="flex mb-2 mt-4" style={{ color: "#C0E864" }}>
                {" "}
                <HiOutlineLocationMarker className="mt-1 mr-2" />
                <p>Location</p>
              </div>
              <p>
                Workingdom, Plot No 17, Sector-7, Palam Extension, Dwarka, New
                Delhi-110075 India
              </p>
              <div className="flex mb-2 mt-4" style={{ color: "#C0E864" }}>
                {" "}
                <IoMailOutline className="mt-1 mr-2" />
                <p>Email</p>
              </div>
              <p>Buddha@gmail.com</p>
            </div>
            <div className="bg-white md:w-3/6 mt-4  lg:hidden shadow-lg rounded-md px-8 py-8">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Name"
                className="bg-gray-100 p-2 w-full mt-5 hover:bg-gray-200"
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Your Email"
                className="bg-gray-100 p-2 w-full mt-5 hover:bg-gray-200"
              />
              <input
                type="phone"
                name=""
                id=""
                placeholder="Your Phone Number"
                className="bg-gray-100 p-2 w-full mt-5 hover:bg-gray-200"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
                className="bg-gray-100 p-2 w-full my-5 hover:bg-gray-200"
              ></textarea>
            </div>
          </div>
          <div
            className="bg-white w-3/6 hidden lg:block shadow-lg rounded-md px-14 py-8"
            style={{ position: "absolute", top: -70, right: 150 }}
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              className="bg-gray-100 p-5 w-full mt-5 hover:bg-gray-200"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className="bg-gray-100 p-5 w-full mt-5 hover:bg-gray-200"
            />
            <input
              type="phone"
              name=""
              id=""
              placeholder="Your Phone Number"
              className="bg-gray-100 p-5 w-full mt-5 hover:bg-gray-200"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Message"
              className="bg-gray-100 p-5 w-full my-5 hover:bg-gray-200"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

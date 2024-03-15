import smiley from "/smiley.png";
import heart from "/heart.png";
import group from "/Group.png";

function SmileyCard() {
  return (
    <div className="my-6 flex justify-center items-center">
      <div
        className=" w-5/6 rounded-xl shadow-sm py-6 md:py-12"
        style={{ backgroundColor: "#C0E864" }}
      >
        <h2 className="text-xl md:text-3xl text-center font-semibold mb-8 md:leading-10 hover:text-lime-700">
          Fundraising on Buddha Trust takes just <br /> a few minutes
        </h2>
        <div className="flex flex-wrap  justify-evenly">
          <div className="md:w-1/5 flex flex-col justify-center items-center px-4 text-center">
            <div className="bg-white w-20 h-20 rounded-full p-2">
              <img
                src={smiley}
                alt="smiley image"
                className="hover:rotate-180"
              />
            </div>
            <h3 className="my-3  font-semibold hover:scale-110">
              Give Happiness
            </h3>
            <p className="text-xs">
              Giving happiness to others is one of the most fulfilling things
              you can do in life.
            </p>
          </div>

          <div className="md:w-1/5 flex flex-col justify-center items-center px-4 text-center">
            <div className="bg-white w-20 h-20 rounded-full p-2">
              <img src={heart} alt="heart image" className="hover:rotate-180" />
            </div>
            <h3 className="my-3 font-semibold hover:scale-110">Share Love</h3>
            <p className="text-xs">
              When you share love with those around you, you create a ripple
              effect of kindness
            </p>
          </div>
          <div className="md:w-1/5 flex flex-col justify-center items-center px-4 text-center">
            <div className="bg-white w-20 h-20 rounded-full p-4">
              <img src={group} alt="Group image" className="hover:rotate-180" />
            </div>
            <h3 className="my-3 font-semibold hover:scale-110">
              Build Socially
            </h3>
            <p className="text-xs">
              Building socially requires not just connecting with others, but
              also actively contributing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmileyCard;

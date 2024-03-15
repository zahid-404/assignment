import facebookIcon from "/Group 14586.png";
import twitterIcon from "/Group 14584.png";
import instaIcon from "/Group 14585.png";
function Footer() {
  return (
    <footer
      className="w-full flex  justify-center text-white items-center "
      style={{ backgroundColor: "#033C2B" }}
    >
      <div className="w-5/6 flex flex-wrap lg:flex-nowrap justify-between py-14">
        <div className="lg:w-2/6">
          <p className="w-2/3">
            Lorem ipsum dolor sit amet consectetur. Magna integer enim vitae
            vulputate eu vitae tristique.
          </p>
        </div>
        <div className="w-full mt-3 lg:mt-0 lg:w-1/6">
          <h3 className="font-semibold text-lg mb-3">General</h3>
          <p className="my-2">About Us</p>
        </div>
        <div className="md:2/6 mt-3 lg:mt-0 lg:w-1/6">
          <h3 className="font-semibold text-lg mb-3">Policies</h3>
          <ul>
            <li className="my-2">Security safeguards</li>
            <li className="my-2">Terms of service</li>
            <li className="my-2">Privacy</li>
            <li className="my-2">Accessibility</li>
          </ul>
        </div>
        <div className="md:3/6 mt-3 lg:mt-0 lg:w-2/6">
          <h3 className="font-semibold text-lg mb-3">Get in touch</h3>
          <p className="w-2/3 my-2">
            Follow us on social media and stay updated with the latest
            information about our services
          </p>
          <div className="flex w-2/5">
            <img
              src={facebookIcon}
              alt="facebook icon"
              className="w-10 h-10 mx-1"
            />
            <img
              src={twitterIcon}
              alt="twitter icon"
              className="w-10 h-10 mx-1"
            />
            <img
              src={instaIcon}
              alt="instagram icon"
              className="w-10 h-10 mx-1"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

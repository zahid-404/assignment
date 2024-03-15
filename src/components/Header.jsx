import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="w-full h-16 md:flex justify-between items-center">
      <div className="w-1/3 bg-red-500">{""}</div>
      <nav className="navbar md:w-1/3 mt-6 mb-2 md:mt-0 md:mb-0 flex justify-center">
        <ul className="flex font-semibold">
          <li>
            <Link
              to="/home"
              className={location.pathname === "/home" ? "active-link" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutUs"
              className={location.pathname === "/aboutUs" ? "active-link" : ""}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contactUs"
              className={
                location.pathname === "/contactUs" ? "active-link" : ""
              }
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="mx-5 md:w-1/3  flex justify-center font-semibold ">
        <button className="rounded md:rounded-full text-xs md:text-base border border-mainColor hover:bg-stone-700 hover:text-white md:py-1 md:px-6 mx-2">
          Donate
        </button>
        <button className="bg-mainColor text-xs md:text-base rounded md:rounded-full p-1 md:py-2 md:px-6 hover:bg-stone-700 text-white">
          Sign In
        </button>
      </nav>
    </header>
  );
}

export default Header;

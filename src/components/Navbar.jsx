import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="container mx-auto">
      <div className="py-5 navbar bg-base-100">
        <div className="navbar-start">
          <div className="z-50 dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  className="text-[#444444] mx-2 hover:bg-[#FF3811] hover:text-white font-medium"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#444444] mx-2 hover:bg-[#FF3811] hover:text-white font-medium"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#444444] mx-2 hover:bg-[#FF3811] hover:text-white font-medium"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#444444] mx-2 hover:bg-[#FF3811] hover:text-white font-medium"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#444444] mx-2 hover:bg-[#FF3811] hover:text-white font-medium"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <img src={logo} alt="logo" className="w-[65px] cursor-pointer" />
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <Link
                className="text-[#444444] mx-2 hover:bg-[#FF3811] hover:text-white font-medium"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-[#444444] mx-2 hover:bg-[#FF3811] hover:text-white font-medium"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-[#444444] mx-2 hover:bg-[#FF3811] hover:text-white font-medium"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="text-[#444444] mx-2 hover:bg-[#FF3811] hover:text-white font-medium"
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-[#444444] mx-2 hover:bg-[#FF3811] hover:text-white font-medium"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="bg-transparent border-[#FF3811] btn text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
            Appointment
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logout, loading } = useContext(AuthContext);

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
          {loading ? (
            <span className="mx-5 bg-red-500 loading loading-dots loading-lg"></span>
          ) : (
            <>
              {user ? (
                <button
                  onClick={() => logout()}
                  className="mx-5 text-white bg-blue-500 border-blue-500 btn hover:bg-blue-600 hover:text-white"
                >
                  Logout
                </button>
              ) : (
                <div className="mx-4 space-x-4">
                  <Link
                    className="text-white bg-blue-500 border-blue-500 btn hover:bg-blue-600 hover:text-white"
                    to="/Login"
                  >
                    Login
                  </Link>
                  <Link
                    className=" border-[#FF3811] btn bg-[#FF3811] text-white hover:bg-red-600 hover:text-white"
                    to="/sign-up"
                  >
                    Sign Up
                  </Link>
                </div>
              )}{" "}
            </>
          )}

          <a className="bg-transparent border-[#FF3811] btn text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
            Appointment
          </a>
          {user && (
            <img
              src={user?.photoURL}
              alt="user-img"
              className="w-[40px] h-[40px] rounded-full object-cover ml-4"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

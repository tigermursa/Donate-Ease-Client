import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignJustify, FaMoon, FaSun } from "react-icons/fa6";
import { Link } from "react-scroll";
import { useDarkMode } from "@/Theme/DarkModeContext";
const NavbarPro = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <nav
      className={`bg-white dark:bg-gray-900  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ${
        isMenuOpen ? "open" : ""
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfz4gBB6dnwQ-nq1etaQI-dTIKXoiNPheAw&usqp=CAU"
            className="h-8 rounded-full"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black">
            Donate Ease
          </span>
        </a>

        <FaAlignJustify className="md:hidden" onClick={toggleMenu} />
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <div>
            {" "}
            <ul className=" cursor-pointer flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={2500}
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={800}
                  className="block py-2 px-3 md:hover:bg-transparent text-black md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="donation"
                  spy={true}
                  smooth={true}
                  duration={1500}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Donations
                </Link>
              </li>
              <li>
                <Link
                  to="footer"
                  spy={true}
                  smooth={true}
                  duration={2000}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleDarkMode}
                  className="text-blue-700 dark:text-white hover:text-blue-500 focus:outline-none"
                >
                  {isDarkMode ? (
                    <FaSun className="text-blue-600 text-xl" />
                  ) : (
                    <FaMoon className="text-blue-600  text-xl" />
                  )}
                </button>
              </li>
              <li>
                <div className=" md:hidden ">
                  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
                    {isLoggedIn ? (
                      <button
                        onClick={handleLogout}
                        type="button"
                        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Logout
                      </button>
                    ) : (
                      <NavLink to="/login">
                        <button className="text-white rounded-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Login
                        </button>
                      </NavLink>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className=" md:ms-5 hidden md:block ">
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  type="button"
                  className="btn-primary"
                >
                  Logout
                </button>
              ) : (
                <NavLink to="/login">
                  <button className="btn-primary">Login</button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPro;

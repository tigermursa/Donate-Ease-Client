import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    // Show SweetAlert2 confirmation dialog
    Swal.fire({
      title: "Are you sure you want to log out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");

        setIsLoggedIn(false);
      }
    });
  };

  return (
    <header>
      <nav className="flex justify-between w-full h-full mx-auto items-center p-[14px] bg-primary  text-white rounded-lg">
        <div>
          <p className="text-green-100 font-semibold text-sm md:text-4xl font-serif">
            Donate Ease
          </p>
        </div>

        <ul className="space-x-5 font-semibold cursor-pointer">
          <NavLink to="/">
            Home
          </NavLink>
          <Link to="all-donations" spy={true} smooth={true} duration={800}>
            All-Donations
          </Link>
          <Link to="about" spy={true} smooth={true} duration={800}>
            About us
          </Link>
          {isLoggedIn && <NavLink to="/dashboard">Dashboard</NavLink>}
        </ul>

        <div>
          {isLoggedIn ? (
            // If logged in, show Logout button
            <button className="btn-primary" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            // If not logged in, show Login button
            <NavLink to={"/login"}>
              <button className="btn-primary">Login</button>
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

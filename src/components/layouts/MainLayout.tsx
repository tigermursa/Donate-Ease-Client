import { Outlet } from "react-router-dom";
import Footer from "../../pages/Footer";
import Navbar from "./Navbar";
import NavbarPro from "./NavbarPro";

const MainLayout = () => {
  return (
    <div className="">
      <NavbarPro />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

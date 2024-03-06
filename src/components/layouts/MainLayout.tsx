import { Outlet } from "react-router-dom";
import Footer from "../../pages/Footer";

import NavbarPro from "./NavbarPro";

const MainLayout = () => {
  return (
    <div className="">
      <NavbarPro />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

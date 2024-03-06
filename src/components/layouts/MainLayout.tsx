import { Outlet } from "react-router-dom";
import Footer from "../../pages/Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

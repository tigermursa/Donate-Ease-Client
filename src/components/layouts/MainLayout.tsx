// MainLayout.js
import { Outlet } from "react-router-dom";
import Footer from "../../pages/Footer";
import NavbarPro from "./NavbarPro";
import { useDarkMode } from "@/Theme/DarkModeContext";

const MainLayout = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}>
      <NavbarPro />
      <Outlet />
      <div
        className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}
      ></div>
      <Footer />
    </div>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import Navbar from "./StaticLayout/Navbar";
import Footer from "./StaticLayout/Footer";

const MainLayout = () => {
  return (
    <div className="font-['AR_One_Sans']">
      <div className="max-w-screen-lg mx-5 xl:mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

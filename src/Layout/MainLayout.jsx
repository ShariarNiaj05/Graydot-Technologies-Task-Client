import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className=" min-h-[80vh]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {};

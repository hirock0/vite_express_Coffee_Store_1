import { Outlet } from "react-router-dom";
import App from "../App";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

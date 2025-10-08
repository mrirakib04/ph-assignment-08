import "./App.css";
import Navbar from "./Shared/Navbar";
import { Outlet } from "react-router";
import Footer from "./Shared/Footer";

function App() {
  return (
    <div className="flex flex-col items-center max-w-[1480px] mx-auto w-full h-screen">
      <Navbar></Navbar>
      <div className="w-full py-10"></div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

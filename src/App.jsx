import "./App.css";
import Navbar from "./Shared/Navbar";
import { Outlet } from "react-router";
import Footer from "./Shared/Footer";

function App() {
  return (
    <div className="flex flex-col items-center max-w-[1480px] mx-auto w-full">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;

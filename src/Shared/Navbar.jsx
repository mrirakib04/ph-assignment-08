import { Link, NavLink } from "react-router";
import logo from "/mrir_with_bg.jpg";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center gap-3 justify-between lg:px-12 md:px-8 px-5 py-5 w-full bg-white fixed shadow-md z-50">
      <div className="flex items-center gap-3">
        <Link to={"/"} className="group flex items-center gap-1">
          <img
            className="w-10 border-b-2 border-l-2 border-black rounded-tl-lg rounded-br-lg group-hover:border-purple-700 duration-300 group-hover:-rotate-5 group-hover:scale-105"
            src={logo}
            alt="logo"
          />
          <h1 className="md:text-xl text-lg font-bold sm:block hidden group-hover:text-purple-700 duration-300">
            RN Softwares
          </h1>
        </Link>
      </div>
      <ul className="md:flex items-center gap-3 text-lg font-medium hidden">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold hover:text-gray-600 text-purple-700 duration-300 py-1 px-3 shadow-lg hover:bg-gray-200 border-b-2 rounded-lg"
              : "hover:text-cyan-600 text-gray-700 duration-300 py-1 px-3 hover:bg-cyan-50 rounded-lg"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold hover:text-gray-600 text-purple-700 duration-300 py-1 px-3 shadow-lg hover:bg-gray-200 border-b-2 rounded-lg"
              : "hover:text-cyan-600 text-gray-700 duration-300 py-1 px-3 hover:bg-cyan-50 rounded-lg"
          }
          to={"/all-apps"}
        >
          Apps
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold hover:text-gray-600 text-purple-700 duration-300 py-1 px-3 shadow-lg hover:bg-gray-200 border-b-2 rounded-lg"
              : "hover:text-cyan-600 text-gray-700 duration-300 py-1 px-3 hover:bg-cyan-50 rounded-lg"
          }
          to={"/downloads"}
        >
          Installation
        </NavLink>
      </ul>
      <div>
        <a
          target="_blank"
          href="https://github.com/mrirakib04"
          className="flex items-center gap-1 py-2 font-semibold text-white sm:px-4 sm:text-base text-sm px-3 sm:rounded-xl rounded-lg bg-gradient-to-br from-purple-700 via-purple-600 to-purple-400 hover:from-purple-800 hover:via-purple-700 hover:to-cyan-500 duration-300 transition"
        >
          <FaGithub className="sm:text-2xl text-xl"></FaGithub> Contributions
        </a>
      </div>
    </div>
  );
};

export default Navbar;

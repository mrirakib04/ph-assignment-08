import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import heroPhoto from "./../../assets/hero.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* Header and Stats */}
      <div className="w-full">
        {/* Header */}
        <div className="w-full flex flex-col items-center gap-3 pt-10">
          <div className="flex items-center gap-3 flex-col text-center">
            <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
              We Build <br />
              <span className="bg-gradient-to-r from-indigo-700 to-purple-400 text-clip text-transparent bg-clip-text">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="max-w-4xl mx-auto text-gray-700">
              At RN Softwares (Rapid Next), we craft innovative apps designed to
              make everyday life simpler, smarter, and more exciting.Our goal is
              to turn your ideas into digital experiences that truly make an
              impact.
            </p>
          </div>
          <div className="flex items-center gap-3 w-fit mt-3">
            <a
              target="_blank"
              href="https://play.google.com/store/games?device=windows"
              className="flex items-center gap-1 py-2 font-semibold sm:px-4 sm:text-base text-sm px-3 sm:rounded-xl rounded-sm border-2 hover:border-teal-500 border-gray-600 hover:bg-teal-50 hover:scale-105 hover:text-teal-600 text-gray-700 duration-300 transition"
            >
              <IoLogoGooglePlaystore className="sm:text-2xl text-xl text-teal-700"></IoLogoGooglePlaystore>
              Play Store
            </a>
            <a
              target="_blank"
              href="https://www.apple.com/store"
              className="flex items-center gap-1 py-2 font-semibold sm:px-4 sm:text-base text-sm px-3 sm:rounded-xl rounded-sm border-2 hover:border-black border-gray-600 hover:bg-gray-300 hover:scale-105 hover:text-black text-gray-700 duration-300 transition"
            >
              <FaApple className="sm:text-2xl text-xl text-black"></FaApple>{" "}
              Apple Store
            </a>
          </div>
          <div className="max-w-3xl mx-auto">
            <img src={heroPhoto} alt="hero-image" />
          </div>
        </div>
        {/* Stats */}
        <div className="w-full"></div>
      </div>
      {/* Carts */}
      <div className="w-full"></div>
    </div>
  );
};

export default Home;

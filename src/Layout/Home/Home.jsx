import { FaApple, FaDownload, FaStar } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import heroPhoto from "./../../assets/hero.png";
import useDataFetch from "../../Hooks/useDataFetch";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import Loader from "../Loader/Loader";
import { Link } from "react-router";

const Home = () => {
  const { dataLoader } = useContext(MainContext);
  const { data } = useDataFetch();
  if (!dataLoader) console.log(data);

  return (
    <div className="flex flex-col items-center gap-10">
      {/* Header and Stats */}
      <div className="w-full">
        {/* Header */}
        <div className="w-full flex flex-col items-center gap-3 pt-10 lg:px-12 md:px-8 px-5 ">
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
        <div className="w-full lg:py-10 md:py-8 py-6 bg-gradient-to-r from-indigo-900 to-purple-700 text-white text-center flex flex-col items-center gap-5">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold">
            Trusted by Millions, Built <br className="sm:hidden" /> for You
          </h2>
          <div className="flex flex-wrap gap-10 lg:justify-evenly justify-center w-full">
            <div className="flex flex-col items-center gap-2">
              <span className="md:text-xl text-lg">Total Downloads</span>
              <p className="font-bold text-3xl md:text-4xl lg:text-5xl">
                29.6M
              </p>
              <p className="font-extralight md:text-lg text-base">
                21% more than last month
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="md:text-xl text-lg">Total Reviews</span>
              <p className="font-bold text-3xl md:text-4xl lg:text-5xl">906K</p>
              <p className="font-extralight md:text-lg text-base">
                46% more than last month
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="md:text-xl text-lg">Active Apps</span>
              <p className="font-bold text-3xl md:text-4xl lg:text-5xl">132+</p>
              <p className="font-extralight md:text-lg text-base">
                31 more will Launch
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Carts */}
      <div className="w-full lg:px-12 md:px-8 px-5 py-10 flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-2">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
            Trending Apps
          </h2>
          <p className="md:text-lg text-gray-700">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {dataLoader ? (
          <Loader></Loader>
        ) : (
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {data.slice(0, 8).map((app) => (
              <Link
                to={`/app/${app.id}`}
                key={app.id}
                className="p-5 rounded-lg bg-white flex flex-col gap-2 hover:shadow-lg duration-300 transition hover:scale-105"
              >
                <img
                  className="w-full rounded-md h-60 bg-gray-300 shadow-md object-cover"
                  src={app.image}
                  alt={app.title}
                />
                <h3 className="text-xl font-bold text-gray-900">
                  {app?.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="bg-green-100 rounded text-green-600 font-medium flex items-center gap-1 py-1 px-2">
                    <FaDownload></FaDownload>
                    {(app?.downloads / 1000000).toFixed(1)}M
                  </span>
                  <span className="bg-orange-100 rounded text-orange-600 font-medium flex items-center gap-1 py-1 px-2">
                    {app?.ratingAvg}
                    <FaStar></FaStar>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
        <Link
          to={"/apps"}
          className="flex items-center gap-1 py-2! font-semibold text-white sm:px-4 sm:text-base text-sm px-10! sm:rounded-xl rounded-lg bg-gradient-to-br from-purple-700 via-purple-600 to-purple-400 hover:from-purple-800 hover:via-purple-700 hover:to-cyan-800 duration-300 transition mt-5"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;

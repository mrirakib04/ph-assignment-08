import { useContext, useEffect, useState } from "react";
import useDataFetch from "../../Hooks/useDataFetch";
import Loader from "../Loader/Loader";
import { Link } from "react-router";
import { FaDownload, FaSearch, FaStar } from "react-icons/fa";
import MainContext from "../../Context/MainContext";
import nfImg from "./../../assets/App-Error.png";

const AllApps = () => {
  const { dataLoader, setDataLoader } = useContext(MainContext);
  const { data } = useDataFetch();

  // Data for display
  const [displayableData, setDisplayableData] = useState([]);

  useEffect(() => {
    setDisplayableData(data);
  }, [data]);

  const searchFiltering = (key) => {
    setDataLoader(true);
    setTimeout(() => {
      setDataLoader(false);
    }, 800);
    if (!key.trim()) return setDisplayableData(data);
    const regex = new RegExp(key, "i");
    const filtered = data.filter((app) => regex.test(app.title));
    setDisplayableData(filtered);
  };

  return (
    <div className="flex flex-col items-center gap-5 lg:px-12 md:px-8 px-5 py-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="lg:text-4xl md:text-3xl text-gray-900 text-2xl font-bold">
          Our All Applications
        </h2>
        <p className="md:text-lg text-gray-700">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>
      <div className="flex items-center gap-5 justify-between w-full">
        <p className="text-xl font-bold">
          ({displayableData.length}) Apps Found
        </p>
        <div className="flex items-center gap-1 border-2 shadow-md rounded-md shadow-gray-400">
          <label htmlFor="search">
            <FaSearch className="text-2xl pl-2"></FaSearch>
          </label>
          <input
            id="search"
            type="text"
            className="placeholder:text-gray-500 text-black py-1 px-2 min-w-40 outline-0 font-medium"
            placeholder="Search"
            onChange={(e) => searchFiltering(e.target.value)}
          />
        </div>
      </div>
      {dataLoader ? (
        <Loader></Loader>
      ) : displayableData.length > 0 ? (
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
          {displayableData.map((app) => (
            <Link
              to={`/app/${app.id}`}
              key={app.id}
              className="p-5 rounded-lg border-2 border-transparent hover:border-cyan-300 bg-white flex flex-col gap-2 hover:shadow-lg duration-300 transition hover:scale-105"
            >
              <img
                className="w-full rounded-md h-60 bg-gray-300 shadow-md object-cover"
                src={app.image}
                alt={app.title}
              />
              <h3 className="text-xl font-bold text-gray-900">{app?.title}</h3>
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
      ) : (
        <div className="px-6 flex flex-col items-center gap-2 w-full py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <img className="w-full" src={nfImg} alt="error-image" />
          </div>
          <h4 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-900">
            Oops, app not found!!!
          </h4>
          <p className="text-gray-600">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
        </div>
      )}
    </div>
  );
};

export default AllApps;

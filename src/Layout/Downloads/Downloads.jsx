import { useContext, useEffect, useState } from "react";
import MainContext from "../../Context/MainContext";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Downloads = () => {
  const { installed, setInstalled } = useContext(MainContext);
  const [sortedApps, setSortedApps] = useState(installed);
  const [appSortType, setAppSortType] = useState("");

  useEffect(() => {
    let sorted = [...installed];
    if (appSortType === "lh") {
      sorted.sort((a, b) => a.downloads - b.downloads);
    } else if (appSortType === "hl") {
      sorted.sort((a, b) => b.downloads - a.downloads);
    }
    setSortedApps(sorted);
  }, [appSortType, installed]);

  const sortFiltering = (value) => {
    setAppSortType(value);
  };

  const handleUninstall = (app) => {
    setInstalled((prev) => prev.filter((item) => item.id !== app.id));
    toast.error(`${app.title} uninstalled!`, {
      position: "top-right",
      autoClose: 2000,
      draggable: true,
    });
  };

  return (
    <div className="flex flex-col items-center gap-5 lg:px-12 md:px-8 px-5 py-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="lg:text-4xl md:text-3xl text-gray-900 text-2xl font-bold">
          Your Installed Apps
        </h2>
        <p className="md:text-lg text-gray-700">
          Explore All Trending Apps on the Market developed by us.
        </p>
      </div>
      <div className="flex items-center gap-5 justify-between w-full">
        <p className="text-xl font-bold">({installed.length}) Apps Found</p>
        <div className="flex items-center gap-1 border-2 shadow-md rounded-md shadow-gray-400">
          <select
            className="placeholder:text-gray-500 text-black py-1 px-2 min-w-40 outline-0 font-medium"
            onChange={(e) => sortFiltering(e.target.value)}
          >
            <option value="" defaultChecked>
              Sort by Size
            </option>
            <option value="lh">Low to High</option>
            <option value="hl">High to Low</option>
          </select>
        </div>
      </div>
      <div className="w-full mt-5 flex flex-col gap-8 items-center">
        {sortedApps.length > 0 ? (
          sortedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center gap-5 justify-between w-full p-3 bg-white rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3">
                <Link to={`/app/${app.id}`}>
                  <img
                    className="h-12 w-12 rounded hover:scale-105 duration-300 transition shadow-md"
                    src={app.image}
                    alt={app.title}
                  />
                </Link>
                <div className="flex flex-col justify-between h-full items-start gap-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {app.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <p className="font-medium text-emerald-700 flex items-center gap-1 bg-emerald-100">
                      <FaDownload></FaDownload>
                      {(app.downloads / 1000000).toFixed()}M
                    </p>
                    <p className="font-medium text-orange-700 flex items-center gap-1 bg-orange-100">
                      <FaStar></FaStar>
                      {app.ratingAvg}
                    </p>
                    <p className="font-medium text-gray-700 flex items-center gap-1 bg-gray-100">
                      {app.size}MB
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleUninstall(app)}
                className="text-white font-medium hover:scale-105 hover:shadow-md shadow-gray-400 transition duration-300 cursor-pointer from-emerald-700 to-teal-500 py-2 px-5 rounded bg-gradient-to-r hover:to-red-500"
              >
                Uninstall
              </button>
            </div>
          ))
        ) : (
          <p className="font-medium text-gray-700 text-xl">No Apps Here!</p>
        )}
      </div>
    </div>
  );
};

export default Downloads;

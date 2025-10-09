import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import useDataFetch from "../../Hooks/useDataFetch";
import Loader from "../Loader/Loader";
import { useParams } from "react-router";
import AppNotFound from "../AppNotFound/AppNotFound";
import icon1 from "./../../assets/icon-downloads.png";
import icon2 from "./../../assets/icon-ratings.png";
import icon3 from "./../../assets/icon-review.png";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "react-toastify";

const Details = () => {
  const { dataLoader, installed, setInstalled } = useContext(MainContext);
  const { data } = useDataFetch();
  const params = useParams();

  const appDetails = data.find((a) => a.id == params.id);
  const isInstalled = installed.some((a) => a.id == params.id);

  const installApp = () => {
    setInstalled((prev) => [...prev, appDetails]);

    toast.success(`${appDetails.title} - installed.`, {
      position: "top-right",
      autoClose: 2000,
      draggable: true,
    });
  };

  if (dataLoader) return <Loader></Loader>;
  if (!appDetails) return <AppNotFound></AppNotFound>;

  return (
    <div className="flex flex-col w-full lg:px-12 md:px-8 px-5 py-10 items-center gap-5">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 items-center w-full">
        <div className="col-span-1">
          <img
            className="w-full h-60 rounded"
            src={appDetails.image}
            alt={appDetails.title}
          />
        </div>
        <div className="lg:col-span-3 md:col-span-2 col-span-1 flex flex-col gap-3 items-start">
          <h5 className="text-xl font-bold text-gray-900 lg:text-2xl">
            {appDetails.title}
          </h5>
          <p className="font-medium text-gray-500">
            Developed By{" "}
            <span className="text-violet-700">{appDetails.companyName}</span>
          </p>
          <div className="w-full border border-gray-400"></div>
          <div className="flex items-start gap-5 flex-wrap">
            <div className="flex flex-col items-start gap-1">
              <img src={icon1} className="h-8" alt="icon" />
              <p className="text-gray-500">Downloads</p>
              <h6 className="text-3xl font-bold text-gray-800">
                {(appDetails.downloads / 1000000).toFixed()}M
              </h6>
            </div>
            <div className="flex flex-col items-start gap-1">
              <img src={icon2} className="h-8" alt="icon" />
              <p className="text-gray-500">Avg. Ratings</p>
              <h6 className="text-3xl font-bold text-gray-800">
                {appDetails.ratingAvg}
              </h6>
            </div>
            <div className="flex flex-col items-start gap-1">
              <img src={icon3} className="h-8" alt="icon" />
              <p className="text-gray-500">Net Reviews</p>
              <h6 className="text-3xl font-bold text-gray-800">
                {(appDetails.reviews / 1000).toFixed()}K
              </h6>
            </div>
          </div>
          <button
            disabled={isInstalled}
            onClick={installApp}
            className={`py-2 px-5 rounded bg-gradient-to-r ${
              isInstalled
                ? "from-green-900 to-green-700"
                : "from-emerald-700 to-teal-500"
            } text-white font-medium hover:scale-105 hover:shadow-md shadow-gray-400 transition duration-300 cursor-pointer`}
          >
            {isInstalled ? "Installed" : `Install Now (${appDetails.size} MB)`}
          </button>
        </div>
      </div>
      <div className="w-full border border-gray-400"></div>
      <div className="flex flex-col items-start gap-1 w-full">
        <h4 className="text-xl font-bold text-gray-700">Ratings</h4>
        <div className="w-full h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...(appDetails?.ratings || [])].reverse()}
              layout="vertical"
              margin={{ top: 10, right: 5, left: 0, bottom: 10 }}
            >
              <XAxis type="number" />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fontSize: 14, fill: "#000" }}
              />
              <Tooltip />
              <Bar dataKey="count" fill="#f25500" barSize={30} radius={2} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="w-full border border-gray-400"></div>
      <div className="flex flex-col w-full items-start gap-1">
        <h4 className="text-xl font-bold text-gray-700">Description</h4>
        <p className="text-gray-600">{appDetails.description}</p>
      </div>
    </div>
  );
};

export default Details;

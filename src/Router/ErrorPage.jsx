import { Link } from "react-router";
import errImage from "./../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="px-6 flex flex-col items-center gap-2 w-full py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <img className="w-full" src={errImage} alt="error-image" />
      </div>
      <h4 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-900">
        Oops, page not found!
      </h4>
      <p className="text-gray-600">
        The page you are looking for is not available.
      </p>
      <Link
        to={"/"}
        className="flex items-center gap-1 py-2 w-fit font-semibold text-white md:px-8 lg:px-10 sm:text-base text-sm sm:px-6 px-4 rounded-sm bg-gradient-to-br from-purple-800 via-purple-600 to-purple-500 hover:from-purple-900 hover:via-purple-800 hover:to-cyan-700 hover:scale-105 duration-300 transition"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;

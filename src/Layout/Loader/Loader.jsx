import { IoCloudDownloadOutline } from "react-icons/io5";
import logoLoader from "./../../assets/logo.png";

const Loader = () => {
  return (
    <div className="w-full h-full py-20 flex flex-col gap-3 items-center">
      <img
        src={logoLoader}
        alt="logoLoader"
        className="h-20 w-20 animate-spin mx-auto"
      />
      <IoCloudDownloadOutline className="text-5xl animate-pulse"></IoCloudDownloadOutline>
    </div>
  );
};

export default Loader;

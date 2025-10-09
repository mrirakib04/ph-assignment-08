import logoLoader from "./../../assets/logo.png";

const Loader = () => {
  return (
    <div className="w-full h-full py-20 flex flex-col items-center">
      <img
        src={logoLoader}
        alt="logoLoader"
        className="h-20 w-20 animate-spin mx-auto"
      />
    </div>
  );
};

export default Loader;

import PropTypes from "prop-types";
import MainContext from "./MainContext";
import { useEffect, useState } from "react";

const MainContextProvider = ({ children }) => {
  // Loaders
  const [navLoader, setNavLoader] = useState(false);
  const [dataLoader, setDataLoader] = useState(true);

  // Installed Apps Management
  const [installed, setInstalled] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("installed")) || [];
    } catch {
      return [];
    }
  });

  // Save in localStorage
  useEffect(() => {
    localStorage.setItem("installed", JSON.stringify(installed));
  }, [installed]);

  const contextNames = {
    navLoader,
    setNavLoader,
    dataLoader,
    setDataLoader,
    installed,
    setInstalled,
  };

  return (
    <MainContext.Provider value={contextNames}>{children}</MainContext.Provider>
  );
};

MainContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContextProvider;

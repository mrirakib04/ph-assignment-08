import { useContext, useEffect, useState } from "react";
import MainContext from "../Context/MainContext";

const useDataFetch = () => {
  const { setDataLoader } = useContext(MainContext);
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataLoader(true);
        const res = await fetch("/apps.json");
        const result = await res.json();
        setData(result);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setTimeout(() => {
          setDataLoader(false);
        }, 1500);
      }
    };

    fetchData();
  }, [setDataLoader]);

  return { data, errorMessage };
};

export default useDataFetch;

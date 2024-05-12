import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL, SNEAKERS_PATH } from "../constants/jsonServer";

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [sneakersData, setSneakersData] = useState([]);

  const get_sneakers_data = async (...obj) => {
    try {
      const response = await fetch(`${BASE_URL}/${SNEAKERS_PATH}`);
      const data = await response.json();
      setSneakersData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    get_sneakers_data();
  }, []);

  return (
    <AppContext.Provider value={{ sneakersData }}>
      {children}
    </AppContext.Provider>
  );
};

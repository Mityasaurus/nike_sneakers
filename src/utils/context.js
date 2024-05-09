import { createContext, useContext, useState } from "react";
import { BASE_URL } from "../constants/jsonServer";

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [sneakersData, setSneakersData] = useState([]);

  const get_sneakers_data = async (...obj) => {
    try {
      const response = await fetch(
        `${BASE_URL}${fetch_config.PATH_RATE}?${obj[0]}`
      );
      const data = await response.json();
      setRate(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

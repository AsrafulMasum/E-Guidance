import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const loadEventsData = async () => {
      const res = await fetch("/events.json");
      const data = await res.json();
      setEventsData(data);
    };
    loadEventsData();
  }, []);

  const allData = {
    eventsData,
  };

  return (
    <DataContext.Provider value={allData}>{children}</DataContext.Provider>
  );
};

export default DataProvider;

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

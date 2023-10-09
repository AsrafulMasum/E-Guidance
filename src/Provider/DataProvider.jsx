import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [eventsData, setEventsData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [placesData, setPlacesData] = useState([]);

  useEffect(() => {
    const loadEventsData = async () => {
      const res = await fetch("/events.json");
      const data = await res.json();
      setEventsData(data);
    };
    loadEventsData();
  }, []);

  useEffect(() => {
    const loadServicesData = async () => {
      const res = await fetch("/services.json");
      const data = await res.json();
      setServicesData(data);
    };
    loadServicesData();
  }, []);

  useEffect(() => {
    const loadPlacesData = async () => {
      const res = await fetch("/places.json");
      const data = await res.json();
      setPlacesData(data);
    };
    loadPlacesData();
  }, []);

  const allData = {
    eventsData,
    servicesData,
    placesData,
  };

  return (
    <DataContext.Provider value={allData}>{children}</DataContext.Provider>
  );
};

export default DataProvider;

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

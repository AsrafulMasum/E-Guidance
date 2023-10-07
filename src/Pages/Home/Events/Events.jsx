import { useContext } from "react";
import { DataContext } from "../../../Provider/DataProvider";
import EventsCard from "./EventsCard";

const Events = () => {
  const { eventsData } = useContext(DataContext);
  return (
    <div className="my-10">
      <h2 className="text-3xl text-[#A68D5B] text-center mb-10">Events That We Manage</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventsData?.map((data) => (
          <EventsCard key={data.id} data={data}></EventsCard>
        ))}
      </div>
    </div>
  );
};

export default Events;

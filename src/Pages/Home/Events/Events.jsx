import { useContext } from "react";
import { DataContext } from "../../../Provider/DataProvider";
import EventsCard from "./EventsCard";

const Events = () => {
  const { eventsData } = useContext(DataContext);
  return (
    <div className="my-10">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-[#A68D5B] mb-10 pb-2 border-b-4 border-[#9AB551] inline-block">
          Events That We Manage
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsData?.map((data) => (
          <EventsCard key={data.id} data={data}></EventsCard>
        ))}
      </div>
    </div>
  );
};

export default Events;

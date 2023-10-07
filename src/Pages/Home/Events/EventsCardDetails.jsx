import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../../Provider/DataProvider";

const EventsCardDetails = () => {
  const { id } = useParams();

  const { eventsData } = useContext(DataContext);

  const currentEvent = eventsData?.find((data) => data.id === parseInt(id));

  return (
    <div>
      <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 my-10">
        <img
          className="object-cover w-full h-full"
          src={currentEvent?.image}
          alt="Article"
        />

        <div className="p-6 flex justify-between items-center">
          <div>
            <p
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-gray-300"
              tabIndex="0"
              role="link"
            >
              {currentEvent?.name}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {currentEvent?.details}
            </p>
          </div>
          <button className="btn px-8">Book This Event</button>
        </div>
      </div>
    </div>
  );
};

export default EventsCardDetails;

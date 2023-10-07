import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EventsCard = ({ data }) => {

  return (
    <div>
      <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover w-full h-56"
          src={data?.image}
          alt="avatar"
        />

        <div className="py-5 text-center">
          <p
            href="#"
            className="block text-xl font-bold text-gray-800 dark:text-white"
            tabIndex="0"
            role="link"
          >
            {data?.name}
          </p>
          <Link to={`/events/${data?.id}`} className="btn btn-sm mt-5">See Details</Link>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;

EventsCard.propTypes = {
  data: PropTypes.object.isRequired,
};

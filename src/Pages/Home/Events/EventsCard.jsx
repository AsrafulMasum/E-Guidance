import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 200, // offset (in px) from the original trigger point
  delay: 50, // values from 0 to 3000, with step 50ms
  duration: 3000, // values from 0 to 3000, with step 50ms
  easing: "ease-in-out", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const EventsCard = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
    >
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
          <Link to={`/events/${data?.id}`} className="btn btn-sm mt-5">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;

EventsCard.propTypes = {
  data: PropTypes.object.isRequired,
};

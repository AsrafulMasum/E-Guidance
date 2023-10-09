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
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: "ease-in-out", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const PlacesCard = ({ data }) => {
  return (
    <div data-aos="fade-up">
      <div className="overflow-hidden flex flex-col h-full bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="px-4 py-2 grow">
          <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
            {data.name}
          </h1>
        </div>

        <img
          className="object-cover w-full h-48 mt-2"
          src={data.image_url}
          alt="NIKE AIR"
        />

        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-lg font-bold text-white">{data.category}</h1>
          <Link to={`/places/${data.id}`} className="btn btn-sm">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlacesCard;

PlacesCard.propTypes = {
  data: PropTypes.object.isRequired,
};

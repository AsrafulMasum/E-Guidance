import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaRegMoneyBillAlt } from "react-icons/fa";

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

const ServicesCard = ({ data }) => {
  return (
    <div data-aos="fade-up">
      <div className="h-full w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover object-center w-full h-56"
          src={data?.image}
          alt="avatar"
        />

        <div className="flex justify-between items-center px-4 py-3 bg-gray-900">
          <div>
            <FaRegMoneyBillAlt className="text-2xl text-slate-300"></FaRegMoneyBillAlt>
          </div>

          <h1 className="mx-3 text-lg font-semibold text-white">
            {data?.price}
          </h1>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {data?.name}
          </h1>

          <p className="py-2 text-gray-700 dark:text-gray-400">
            {data?.details.slice(0, 85)}...{" "}
            <Link
              to={`/services/${data?.id}`}
              className="text-[#A68D5B] font-bold"
            >
              See More
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

ServicesCard.propTypes = {
  data: PropTypes.object.isRequired,
};

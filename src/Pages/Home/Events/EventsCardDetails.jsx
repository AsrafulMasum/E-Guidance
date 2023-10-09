import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../../Provider/DataProvider";

import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
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
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const EventsCardDetails = () => {
  const { id } = useParams();

  const { eventsData } = useContext(DataContext);

  const [currentEvent, setCurrentEvent] = useState({});

  useEffect(() => {
    const eventData = eventsData?.find((data) => data.id === parseInt(id));
    setCurrentEvent(eventData);
  }, [eventsData, id]);

  return (
    <div>
      <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 my-10">
        <img
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          className="object-cover w-full h-full"
          src={currentEvent?.image}
          alt="Article"
        />

        <div className="p-6 flex flex-col md:flex-row text-center md:text-left justify-between items-center gap-4">
          <div>
            <p
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-gray-300"
              tabIndex="0"
              role="link"
            >
              {currentEvent?.name}
            </p>
            <p className="mt-2 text-sm md:w-5/6 lg:w-full text-gray-600 dark:text-gray-400">
              {currentEvent?.details}
            </p>
          </div>
          <button
            onClick={() => toast.success("Event has booked.")}
            className="btn px-8"
          >
            Book This Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsCardDetails;

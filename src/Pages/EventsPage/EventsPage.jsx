import { useContext } from "react";
import EventsCard from "../Home/Events/EventsCard";
import bg from "./../../assets/sectionbg.jpg";
import { DataContext } from "../../Provider/DataProvider";

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
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const EventsPage = () => {
  const { eventsData } = useContext(DataContext);

  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div
          data-aos="zoom-out-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="hero-content text-center text-neutral-content py-20"
        >
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Events</h1>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default EventsPage;

import { useContext } from "react";
import { DataContext } from "../../../Provider/DataProvider";
import { useParams } from "react-router-dom";

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

const ServicesCardDetails = () => {
  const { id } = useParams();

  const { servicesData } = useContext(DataContext);

  const currentService = servicesData?.find((data) => data.id === parseInt(id));

  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
    >
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-gray-600 rounded-lg shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src={currentService?.image}
              alt="Image"
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 -right-1 hidden h-full text-gray-600 lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-gray-600 lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#9AB551] uppercase rounded-full bg-[#2F4858]">
                {currentService?.price}
              </p>
            </div>
            <h5 className="mb-3 text-3xl text-[#A68D5B] font-extrabold leading-none sm:text-4xl">
              {currentService?.name}
            </h5>
            <p className="mb-5 text-gray-300">{currentService?.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCardDetails;

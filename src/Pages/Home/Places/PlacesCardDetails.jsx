import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../../Provider/DataProvider";

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

const PlacesCardDetails = () => {
  const { id } = useParams();

  const { placesData } = useContext(DataContext);

  const [currentVenues, setCurrentVenues] = useState({})

  useEffect(() => {
    const currentPlace = placesData?.find((data) => data.id === parseInt(id));
    setCurrentVenues(currentPlace)
  }, [placesData,id])

  // let currentPlace
  // if (placesData.length) {
  //   currentPlace = placesData?.find((data) => data.id === parseInt(id));
  // }

  return (
    <div>
      <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg"
          >
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                {currentVenues?.name}
              </h2>
              <h4 className="mb-6 font-bold text-xl">{currentVenues?.category}</h4>
              <p className="text-base text-gray-700 md:text-lg">
                {currentVenues?.description}
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            className="flex items-center justify-center"
          >
            <div className="items-end lg:pl-3 overflow-hidden">
              <img src={currentVenues?.image_url} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesCardDetails;

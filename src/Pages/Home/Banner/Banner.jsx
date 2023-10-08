import "./banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
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

const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        effect="fade"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide
          id="slide1"
          className="min-h-screen lg:min-h-[70vh] rounded-lg relative"
        >
          <div
            data-aos="zoom-out-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="absolute w-full h-full flex flex-col justify-center items-center text-center gap-2"
          >
            <p className="text-slate-300 font-bold text-lg italic w-1/2">
              We are the Event Management Specialists
            </p>
            <h2 className="text-4xl font-semibold text-white w-1/2">
              WE PERSONALIZE YOUR WEDDING EVENTS
            </h2>
            <Link to={"/allEvents"} className="btn normal-case px-6">
              View Events
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide2" className="min-h-[70vh] rounded-lg">
          <div
            data-aos="zoom-out-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="absolute w-full h-full flex flex-col justify-center items-center text-center gap-2"
          >
            <p className="text-slate-300 font-bold text-lg italic">
              We are the Event Management Specialists
            </p>
            <h2 className="text-4xl font-semibold text-white w-1/2">
              WE PERSONALIZE YOUR FAMILY EVENTS
            </h2>
            <Link to={"/allEvents"} className="btn normal-case px-6">
              View Events
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide3" className="min-h-[70vh] rounded-lg">
          <div
            data-aos="zoom-out-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="absolute w-full h-full flex flex-col justify-center items-center text-center gap-2"
          >
            <p className="text-slate-300 font-bold text-lg italic">
              We are the Event Management Specialists
            </p>
            <h2 className="text-4xl font-semibold text-white w-1/2">
              WE PERSONALIZE YOUR ENGAGEMENT EVENTS
            </h2>
            <Link to={"/allEvents"} className="btn normal-case px-6">
              View Events
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide4" className="min-h-[70vh] rounded-lg">
          <div
            data-aos="zoom-out-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="absolute w-full h-full flex flex-col justify-center items-center text-center gap-2"
          >
            <p className="text-slate-300 font-bold text-lg italic">
              We are the Event Management Specialists
            </p>
            <h2 className="text-4xl font-semibold text-white w-1/2">
              WE PERSONALIZE YOUR ANNIVERSARY EVENTS
            </h2>
            <Link to={"/allEvents"} className="btn normal-case px-6">
              View Events
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

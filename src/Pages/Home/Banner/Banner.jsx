import "./banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide id="slide1" className="min-h-[70vh] rounded-lg">
          <div className="absolute w-full h-full flex flex-col justify-center items-center text-center gap-2">
            <p className="text-slate-300 font-bold text-lg italic">
              We are the Event Management Specialists
            </p>
            <h2 className="text-4xl font-semibold text-white w-1/2">
              WE PERSONALIZE YOUR WEDDING EVENTS
            </h2>
            <button className="btn normal-case px-6">View Events</button>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide2" className="min-h-[70vh] rounded-lg">
          <div className="absolute w-full h-full flex flex-col justify-center items-center text-center gap-2">
            <p className="text-slate-300 font-bold text-lg italic">
              We are the Event Management Specialists
            </p>
            <h2 className="text-4xl font-semibold text-white w-1/2">
              WE PERSONALIZE YOUR FAMILY EVENTS
            </h2>
            <button className="btn normal-case px-6">View Events</button>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide3" className="min-h-[70vh] rounded-lg">
          <div className="absolute w-full h-full flex flex-col justify-center items-center text-center gap-2">
            <p className="text-slate-300 font-bold text-lg italic">
              We are the Event Management Specialists
            </p>
            <h2 className="text-4xl font-semibold text-white w-1/2">
              WE PERSONALIZE YOUR ENGAGEMENT EVENTS
            </h2>
            <button className="btn normal-case px-6">View Events</button>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide4" className="min-h-[70vh] rounded-lg">
          <div className="absolute w-full h-full flex flex-col justify-center items-center text-center gap-2">
            <p className="text-slate-300 font-bold text-lg italic">
              We are the Event Management Specialists
            </p>
            <h2 className="text-4xl font-semibold text-white w-1/2">
              WE PERSONALIZE YOUR ANNIVERSARY EVENTS
            </h2>
            <button className="btn normal-case px-6">View Events</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

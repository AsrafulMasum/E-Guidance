import { useContext } from "react";
import bg from "./../../assets/sectionbg.jpg";
import { DataContext } from "../../Provider/DataProvider";
import PlacesCard from "../Home/Places/PlacesCard";

const Venues = () => {
  const { placesData } = useContext(DataContext);

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
            <h1 className="mb-5 text-5xl font-bold">Venues</h1>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#A68D5B] my-10 pb-2 border-b-4 border-[#9AB551] inline-block">
            Choose a venues for your events
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placesData?.map((data) => (
            <PlacesCard key={data.id} data={data}></PlacesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Venues;

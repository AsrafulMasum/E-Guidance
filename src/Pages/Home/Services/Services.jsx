import { useContext } from "react";
import { DataContext } from "../../../Provider/DataProvider";
import ServicesCard from "./ServicesCard";
import { Link } from "react-router-dom";

const Services = () => {
  const { servicesData } = useContext(DataContext);
  return (
    <div className="my-10">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-[#A68D5B] mb-10 pb-2 border-b-4 border-[#9AB551] inline-block">
          Services That We Provide
        </h2>
        <p className="text-xl md:w-2/3 mx-auto text-[#A68D5B] font-medium mb-10">
          From Wedding Functions to Birthday Parties or Corporate Events to
          Musical Functions, We offer full range of Events Management Services
          that scale to your needs & budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData?.slice(0, 6).map((data) => (
          <ServicesCard key={data.id} data={data}></ServicesCard>
        ))}
      </div>

      <div className="text-center"><Link to={"/allServices"} className="btn btn-secondary normal-case px-6 my-10">See All Services</Link></div>
    </div>
  );
};

export default Services;

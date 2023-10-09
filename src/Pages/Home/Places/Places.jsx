import { useContext } from "react";
import { DataContext } from "../../../Provider/DataProvider";
import PlacesCard from "./PlacesCard";
import { Link } from "react-router-dom";


const Places = () => {

  const {placesData} = useContext(DataContext)

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-[#A68D5B] mb-10 pb-2 border-b-4 border-[#9AB551] inline-block">
        Choose a venues for your events
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          placesData?.slice(0, 6).map(data => <PlacesCard key={data.id} data={data}></PlacesCard>)
        }
      </div>
      <div className="text-center"><Link to={"/venues"} className="btn btn-secondary normal-case px-6 my-10">See All Places</Link></div>
    </div>
  );
};

export default Places;
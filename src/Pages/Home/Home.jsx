import Banner from "./Banner/Banner";
import Events from "./Events/Events";
import Services from "./Services/Services";


const Home = () => {
  return (
    <div className="pt-10">
      <Banner></Banner>
      <Events></Events>
      <Services></Services>
    </div>
  );
};

export default Home;
import Banner from "./Banner/Banner";
import Events from "./Events/Events";
import Services from "./Services/Services";
import Welcome from "./Welcome/Welcome";


const Home = () => {
  return (
    <div className="pt-10">
      <Banner></Banner>
      <Welcome></Welcome>
      <Events></Events>
      <Services></Services>
    </div>
  );
};

export default Home;
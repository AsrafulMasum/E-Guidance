import { useContext } from "react";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import Events from "./Events/Events";
import Places from "./Places/Places";
import Services from "./Services/Services";
import Welcome from "./Welcome/Welcome";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="pt-10">
      <Banner></Banner>
      <Welcome></Welcome>
      <Events></Events>
      <Services></Services>
      <Places></Places>
      {user && <ContactUs></ContactUs>}
    </div>
  );
};

export default Home;

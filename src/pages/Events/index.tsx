import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import AllEvents from "./AllEvents";
import Banner from "./Banner";

const Events = () => {
  return (
    <div className="w-full h-full ">
      <Nav />
      <Banner />
      <AllEvents />
      <Footer />
    </div>
  );
};

export default Events;

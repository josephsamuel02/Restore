import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Banner from "./Banner";
import Causes from "./Causes";
import Events from "./Events";
import Up_comingEvents from "./Up_comingEvents";
import Video from "./Video";
import WhatWeDo from "./What_we_do";

const Home = () => {
  return (
    <div className="w-full h-full ">
      <Nav />
      <Banner />
      <Causes />
      <WhatWeDo />
      <Events />
      <Video />
      <Up_comingEvents />
      {/* <Faq /> */}
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
};

export default Home;

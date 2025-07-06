import Nav from "../../components/Nav";
import Banner from "./Banner";
import Causes from "./Causes";
import WhatWeDo from "./What_we_do";

const Home = () => {
  return (
    <div className="w-full h-full ">
      <Nav />
      <Banner />
      <Causes />
      <WhatWeDo />
      {/* <AboutUs /> */}
      {/* <Faq /> */}
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

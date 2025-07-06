const WhatWeDo = () => {
  return (
    <div className=" h-auto  w-full mx-auto my-10   items-Center flex-col bg-White flex px-10 ">
      <h3 className="text-center text-3xl my-8 text-black">What we do</h3>
      <div className="w-4/5 m-auto py-10 h-auto items-Center flex-row bg-White flex px-10 rounded-xl shadow-xl">
        <img src="./images/Main restore logo.jpg" alt="" className=" flex w-42 h-20 m-4" />
        <div className="w-auto h-auto mx-auto items-Center flex-col bg-White flex px-10 ">
          <p className="text-lg text-center mb-8 text-gray-700">
            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to
            "Naviglio" where you can enjoy the main night life in Barcelona. We are a
            non-profit organization dedicated to making a positive impact in our community. Our
            mission is to provide support, resources, and opportunities for those in need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

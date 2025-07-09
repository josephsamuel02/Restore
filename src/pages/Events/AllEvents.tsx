/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
const AllEvents = () => {
  const data = [
    {
      imagelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imagelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imagelink:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      imagelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      imagelink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      imagelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
    {
      imagelink:
        "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
    },
    {
      imagelink: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
    },
    {
      imagelink:
        "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
    },
  ];
  const [active, setActive] = useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );

  return (
    <div className="w-full h-auto bg-white">
      <div className="w-full h-auto flex flex-col items-center p-4">
        <div className="w-full max-w-4xl bg-gray-100 p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-2">Outreach to Jos</h4>
          <p className="text-gray-700 mb-4">
            Event description goes here. This is a brief overview of the event.
          </p>
          <p className="text-gray-500">Date: January 1, 2023</p>
          <p className="text-gray-500">Location: Jos, Nigeria</p>
        </div>

        <div className="grid gap-4  m-10">
          <div>
            <img
              className="h-auto w-full max-w-full rounded-md object-cover object-center md:h-[480px]"
              src={active}
              alt=""
            />
          </div>
          <div className="grid grid-cols-5 md:grid-cols-8 gap-4">
            {data.map(({ imagelink }, index) => (
              <div key={index}>
                <img
                  onClick={() => setActive(imagelink)}
                  src={imagelink}
                  className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                  alt="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col  p-4">
        <h3 className="text-bold text-xl text-black">Up Coming Events</h3>
        <div className="w-auto h-auto flex flex-row items-center ">
          <div className=" w-72 mt-6 p-3 shadow-lg rounded-lg">
            <div color="blue-gray" className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">UI/UX Review Check</h3>
              <p className="text-gray-700 mb-4">
                The place is close to Barceloneta Beach and bus stop just 2 min by walk and
                near to &quot;Naviglio&quot; where you can enjoy the main night life in
                Barcelona.
              </p>
            </div>
            <div className="pt-0">
              <button className="my-2 py-2 px-6 text-center font-Poppins text-white bg-green-600 hover:bg-green-500 rounded-lg">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;

import Masonry from "react-masonry-css";

const Events = () => {
  const events = [
    {
      title: "Community Cleanup",
      date: "March 15, 2024",
      description: "Join us for a community cleanup event to beautify our local parks.",
      image: "/images/event1.jpg",
    },
    {
      title: "Fundraising Gala",
      date: "April 20, 2024",
      description: "Attend our annual fundraising gala to support our ongoing projects.",
      image: "/images/event2.jpg",
    },
    {
      title: "Volunteer Training",
      date: "May 10, 2024",
      description:
        "Training session for new volunteers to learn about our mission and activities.",
      image: "/images/event3.jpg",
    },
    {
      title: "Community Cleanup",
      date: "March 15, 2024",
      description: "Join us for a community cleanup event to beautify our local parks.",
      image: "/images/event1.jpg",
    },
  ];
  const breakpointColumns = {
    default: 4, // Number of columns for large screens
    1100: 3, // Number of columns for medium screens
    768: 1, // Number of columns for tablets
    480: 1, // Number of columns for small screens
  };
  return (
    <div className="w-full h-auto bg-white flex flex-col items-center py-10">
      <h3 className="text-center text-3xl font-bold my-1 text-black"> Events</h3>
      <div className="flex items-center w-full h-auto py-16 pb-10 px-6 bg-white ">
        <Masonry
          breakpointCols={breakpointColumns}
          className="  flex w-full mx-auto items-center justify-center"
          //   className="flex w-full px-10"
          //   columnClassName="masonry-grid_column"
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col mx-3 p-3 my-6  bg-white rounded-lg border shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-62 h-40 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-xl text-green-900 font-semibold mb-2">{event.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{event.date}</p>
              <p className="text-sm text-gray-700">{event.description}</p>
            </div>
          ))}
        </Masonry>
      </div>

      <button className="w-72 h-auto text-xl py-3 px-6 bg-green-800 hover:bg-green-600 text-white font-Raleway rounded-md">
        More..
      </button>
    </div>
  );
};

export default Events;

import Masonry from "react-masonry-css";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";

const Events = () => {
  const events = [
    {
      title: "Outreach to Bassa (Plateau State)",
      // date: "January 1, 2025",
      description:
        "We were able to positively impact the lives of approximately 1,000 community members in various ways",
      image: "/images/20.jpg",
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
              <h4 className="text-xl text-primary font-semibold mb-2">{event.title}</h4>
              {/* <p className="text-sm text-gray-600 mb-2">{event.date}</p> */}
              <p className="text-sm text-gray-700">{event.description}</p>
            </div>
          ))}
        </Masonry>
      </div>

      <a href={PUBLIC_ROUTES.EVENTS}>
        <button className="w-72 h-auto text-xl py-3 px-6 bg-primary hover:bg-hover text-white font-Raleway rounded-md">
          More..
        </button>
      </a>
    </div>
  );
};

export default Events;

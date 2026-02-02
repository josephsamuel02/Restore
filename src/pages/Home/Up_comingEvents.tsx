/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Masonry from "react-masonry-css";
import { ClipboardCopy, Check } from "lucide-react"; // for icons
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { MdEmail, MdPhone } from "react-icons/md";
import { motion } from "motion/react";

const Up_comingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const events = [
    {
      title: "Outreach & Empowerment Kwal Village",
      date: "October, 2025",
      location: "Kwal Village, Bassa LGA, Plateau State, Nigeria",
      description:
        "Join us to support and empower the community through a comprehensive program that addresses their physical, educational, and spiritual needs.",
      image: "/images/event1.jpg",
      contact: {
        phone: "+234 814 551 7222",
        email: "noachhelpinghandsfoundation@gmail.com",
      },
    },
  ];

  const breakpointColumns = {
    default: 4,
    1100: 3,
    768: 1,
    480: 1,
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <div className="w-full h-auto bg-white flex flex-col items-center py-10">
        <h3 className="text-center text-3xl font-bold my-1 text-black">Upcoming Events</h3>

        {/* Event Grid */}
        <div className="flex items-center w-full h-auto py-16 px-6 bg-white">
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex w-full mx-auto items-center justify-center"
          >
            {events.map((event, index) => (
              <div
                key={index}
                className=" flex flex-col mx-3 p-3 my-6 bg-white rounded-xl border shadow-md hover:shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedEvent(event)}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-1">{event.title}</h4>
                <p className="text-sm text-gray-600">{event.date}</p>
                <p className="text-sm text-gray-500 italic mb-2">{event.location}</p>
                <p className="text-sm text-gray-700 line-clamp-3">{event.description}</p>
                <button className="mt-4 bg-primary hover:bg-hover text-white py-2 px-4 rounded-lg font-medium transition">
                  Support
                </button>
              </div>
            ))}
          </Masonry>
        </div>

        {/* Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative animate-fadeIn">
              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>

              {/* Event Content */}
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h4 className="text-2xl font-bold mb-2 text-gray-900">{selectedEvent.title}</h4>
              <p className="text-sm text-gray-600 mb-1">{selectedEvent.date}</p>
              <p className="text-sm text-gray-500 italic mb-3"> {selectedEvent.location}</p>
              <p className="text-base text-gray-700 mb-4">{selectedEvent.description}</p>

              {/* Contact Info with Copy */}
              <div className="bg-gray-100 p-4 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-800 font-medium flex items-center">
                    <MdPhone className="mx-2 " size={20} /> {selectedEvent.contact.phone}
                  </p>
                  <button
                    onClick={() => handleCopy(selectedEvent.contact.phone, "phone")}
                    className="text-gray-500 hover:text-green-600"
                  >
                    {copied === "phone" ? (
                      <Check size={18} className="text-green-600" />
                    ) : (
                      <ClipboardCopy size={18} />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <p className="text-sm text-gray-800 font-medium flex items-center">
                    <MdEmail className="mx-2 " size={20} /> {selectedEvent.contact.email}
                  </p>
                  <button
                    onClick={() => handleCopy(selectedEvent.contact.email, "email")}
                    className="text-gray-500 hover:text-green-600"
                  >
                    {copied === "email" ? (
                      <Check size={18} className="text-green-600" />
                    ) : (
                      <ClipboardCopy size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* More Button */}
        <a href={PUBLIC_ROUTES.EVENTS}>
          <button className="w-72 text-xl py-3 px-6 bg-primary hover:bg-hover text-white font-Raleway rounded-md mt-6">
            More..
          </button>
        </a>
      </div>
      <motion.section
        {...({} as any)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className=" flex mx-auto px-6 md:px-20 py-20 bg-white"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.img
            {...({} as any)}
            src="./images/Leader.jpg"
            alt="Founder - Samuel Afang"
            className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
          {/* Founder Details */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">Samuel Afang</h3>
            <p className="text-gray-600 mb-4">Founder / Director</p>
            <p className="text-gray-800 max-w-lg leading-relaxed mb-6">
              Samuel Afang is a missionary whose deep conviction to bring hope, support,
              empowerment, and spiritual growth to crisis-affected communities lead him to
              found Noach Helping Hands Foundation. His passion for service continues to drive
              the mission of the foundation.
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Contact:</strong> +2348145517222, +2349042614572
              </p>
              <p>
                <strong>Email:</strong> afangsamuel@gmail.com
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Up_comingEvents;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";
import { ClipboardCopy, Check } from "lucide-react";

const AllEvents: React.FC = () => {
  const data = Array.from({ length: 22 }, (_, i) => ({
    imagelink: `./images/${i + 1}.jpg`,
  }));

  const [active, setActive] = useState(data[0].imagelink);
  const [showLightbox, setShowLightbox] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const imgRef = useRef<HTMLImageElement | null>(null);

  const eventDate = "January 1, 2023";
  const eventLocation = "Bassa, Plateau State, Nigeria";

  const upcomingEvent = {
    title: "Outreach & Empowerment Kwal Village",
    date: "October, 2025",
    location: "Kwal Village, Bassa LGA, Plateau State, Nigeria",
    description:
      "Our objective is to support and empower the community through a comprehensive program that addresses their physical, educational, and spiritual needs.",
    image: "./images/6.jpg",
    program: [
      "Food & Toiletry Support: Provide essentials for vulnerable members.",
      "Skill Acquisition Program: Equip women with vocational and business skills.",
      "Education Support: Sponsor children for quality schooling.",
      "Discipleship Training: Foster spiritual growth and development.",
    ],
    contact: {
      phone: "+234 814 551 7222",
      email: "noachhelpinghandsfoundation@gmail.com",
    },
  };

  // Intersection observer for lazy-loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="w-full h-auto bg-white px-4 py-8">
      {/* EVENT TITLE, DATE, LOCATION */}
      <div className="md:ml-28 flex flex-col w-full py-10 mb-4">
        <h4 className="text-2xl font-bold mb-3">Outreach to Bassa (Plateau State)</h4>
        <div className="text-md text-gray-700">
          <p className="font-medium">
            Date: <span className="text-gray-700">{eventDate}</span>
          </p>
          <p className="font-medium">
            Location: <span className="text-gray-700">{eventLocation}</span>
          </p>
        </div>
      </div>

      {/* IMAGES SECTION */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="mb-6">
          <img
            ref={imgRef}
            src={isVisible ? active : ""}
            alt="active event"
            onClick={() => setShowLightbox(true)}
            className="w-full h-[420px] md:h-[520px] object-cover rounded-lg shadow-md cursor-pointer"
          />
        </div>

        {/* Thumbnails → horizontal scroll on mobile */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible gap-3 grid-cols-none md:grid-cols-8 scrollbar-hide">
          {data.map(({ imagelink }, index) => (
            <button
              key={index}
              onClick={() => setActive(imagelink)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setActive(imagelink);
              }}
              className={`flex-shrink-0 overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 transform transition-transform duration-150
                ${
                  active === imagelink ? "ring-2 ring-indigo-300 scale-105" : "hover:scale-105"
                }
              `}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={imagelink}
                alt={`gallery-${index + 1}`}
                loading="lazy"
                className="h-20 w-28 md:w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* WRITE-UP SECTION */}
      <div className="w-full md:w-1/2 mx-auto mt-10">
        <div className="bg-[#faf9f969] p-6 rounded-lg shadow-md">
          {/* ... (existing outreach write-up content stays unchanged) ... */}
        </div>
      </div>

      {/* UPCOMING EVENTS CARD */}
      <div className="w-full h-auto items-center mt-10 p-4">
        <h3 className="font-semibold text-center text-2xl text-black mb-6">Upcoming Events</h3>

        <div className="w-full md:w-3/4 mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Banner Image */}
          <div className="relative h-56 w-full">
            <img
              src={upcomingEvent.image}
              alt="Kwal Outreach"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-lg md:text-2xl text-center break-words font-bold">
                {upcomingEvent.title}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="flex flex-col text-gray-600 text-sm">
              <p>
                <span className="font-medium">Date:</span> {upcomingEvent.date}
              </p>
              <p>
                <span className="font-medium">Location:</span> {upcomingEvent.location}
              </p>
            </div>

            <p className="text-gray-700">{upcomingEvent.description}</p>

            <div>
              <h4 className="font-semibold mb-2">Program Components:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {upcomingEvent.program.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-primary p-4 rounded-md">
              <p className="text-gray-800">
                <strong>Call to Action:</strong> Partner with us through financial donations to
                make a lasting impact in Kwal Village.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setShowPopup(true)}
                className="py-3 px-6 w-full md:w-auto text-center font-Poppins text-white bg-primary hover:bg-hover rounded-lg shadow-md"
              >
                Support This Outreach
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {showLightbox && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setShowLightbox(false)}
        >
          <img
            src={active}
            alt="lightbox"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* SUPPORT POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative animate-fadeIn">
            {/* Close */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            {/* Event */}
            <img
              src={upcomingEvent.image}
              alt={upcomingEvent.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h4 className="text-2xl font-bold mb-2 text-gray-900">{upcomingEvent.title}</h4>
            <p className="text-sm text-gray-600 mb-1">{upcomingEvent.date}</p>
            <p className="text-sm text-gray-500 italic mb-3">📍 {upcomingEvent.location}</p>
            <p className="text-base text-gray-700 mb-4">{upcomingEvent.description}</p>

            {/* Contact Info */}
            <div className="bg-gray-100 p-4 rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-800 font-medium">
                  📞 {upcomingEvent.contact.phone}
                </p>
                <button
                  onClick={() => handleCopy(upcomingEvent.contact.phone, "phone")}
                  className="text-gray-500 hover:text-green-600"
                >
                  {copied === "phone" ? (
                    <Check size={18} className="text-green-600" />
                  ) : (
                    <ClipboardCopy size={18} />
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-800 font-medium">
                  📧 {upcomingEvent.contact.email}
                </p>
                <button
                  onClick={() => handleCopy(upcomingEvent.contact.email, "email")}
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
    </div>
  );
};

export default AllEvents;

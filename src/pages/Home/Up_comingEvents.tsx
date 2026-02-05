/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
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

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <div className="w-full h-auto bg-white flex flex-col items-center py-12 md:py-20">
        <h3 className="text-center text-3xl md:text-4xl font-bold mb-10 text-primary">Upcoming Events</h3>
        <br />        <br />

        {/* Event List */}
        <div className="w-full px-6 flex flex-col items-center space-y-8">
          {events.map((event, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              key={index}
              className="group w-full max-w-6xl bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row cursor-pointer transition-all duration-300"
              onClick={() => setSelectedEvent(event)}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent opacity-80 md:opacity-0 transition-opacity" />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center space-x-2 text-sm text-primary font-semibold mb-2">
                  <span className="bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">{event.date}</span>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                  {event.title}
                </h4>

                <p className="text-base text-gray-500 italic mb-4 flex items-center">
                  <span className="mr-2">📍</span> {event.location}
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-6 line-clamp-3 md:line-clamp-none">
                  {event.description}
                </p>

                <button className="self-start bg-primary hover:bg-hover text-white py-3 px-8 rounded-full font-medium shadow-md transition-transform transform active:scale-95">
                  Support This Cause
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <br />

        {/* Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedEvent(null); }}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-white shadow transition-all"
              >
                ✕
              </button>

              {/* Event Content */}
              <div className="relative h-64 md:h-80 w-full">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-2xl md:text-3xl font-bold shadow-black drop-shadow-md">{selectedEvent.title}</h4>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-lg text-primary font-semibold mb-1">{selectedEvent.date}</p>
                <p className="text-gray-500 italic mb-6 flex items-center">
                  <span className="mr-2">📍</span> {selectedEvent.location}
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {selectedEvent.description}
                </p>

                {/* Contact Info with Copy */}
                <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl space-y-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Contact Organizer</h5>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <p className="text-gray-800 font-medium flex items-center">
                      <MdPhone className="mr-3 text-primary" size={22} />
                      <span className="select-all">{selectedEvent.contact.phone}</span>
                    </p>
                    <button
                      onClick={() => handleCopy(selectedEvent.contact.phone, "phone")}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      title="Copy Phone"
                    >
                      {copied === "phone" ? (
                        <Check size={20} className="text-green-600" />
                      ) : (
                        <ClipboardCopy size={20} className="text-gray-400 hover:text-primary" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <p className="text-gray-800 font-medium flex items-center truncate">
                      <MdEmail className="mr-3 text-primary" size={22} />
                      <span className="select-all truncate">{selectedEvent.contact.email}</span>
                    </p>
                    <button
                      onClick={() => handleCopy(selectedEvent.contact.email, "email")}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      title="Copy Email"
                    >
                      {copied === "email" ? (
                        <Check size={20} className="text-green-600" />
                      ) : (
                        <ClipboardCopy size={20} className="text-gray-400 hover:text-primary" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* More Button */}
        <div className="mt-12 text-center">
          <a href={PUBLIC_ROUTES.EVENTS}>
            <button className="text-lg py-3 px-10 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full transition-all duration-300">
              View All Events
            </button>
          </a>
        </div>

      </div>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full bg-gray-50 py-24 px-6 md:px-20 relative overflow-hidden"
      >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20 md:gap-32 relative z-10">

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative flex-shrink-0"
          >
            <div className="absolute inset-0 bg-primary rounded-2xl transform rotate-6 scale-95 opacity-20 transition-transform group-hover:rotate-3"></div>
            <img
              src="/images/Leader.jpg"
              alt="Samuel Afang - Founder"
              className="w-72 h-80 md:w-80 md:h-96 object-cover rounded-2xl shadow-2xl relative z-10"
            />
          </motion.div>

          {/* Founder Details */}
          <div className="text-center md:text-left flex-1">
            <div className="mb-6">
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Meet the Founder</h4>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Samuel Afang</h3>
              <p className="text-xl text-gray-500 font-medium">Director & Visionary</p>
            </div>

            <p className="text-gray-700 text-lg leading-loose mb-8 max-w-2xl mx-auto md:mx-0">
              Samuel Afang is a missionary whose deep conviction to bring hope, support,
              empowerment, and spiritual growth to crisis-affected communities led him to
              found <span className="font-semibold text-primary">Noach Helping Hands Foundation</span>.
              His passion for service continues to drive the mission of the foundation, touching lives one community at a time.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6">
              <a href="tel:+2348145517222" className="flex items-center space-x-3 bg-white px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                  <MdPhone size={20} className="text-primary group-hover:text-white" />
                </div>
                <span className="font-semibold text-gray-800">+234 814 551 7222</span>
              </a>

              <a href="mailto:afangsamuel@gmail.com" className="flex items-center space-x-3 bg-white px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                  <MdEmail size={20} className="text-primary group-hover:text-white" />
                </div>
                <span className="font-semibold text-gray-800">afangsamuel@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Up_comingEvents;

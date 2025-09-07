/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";

const AllEvents: React.FC = () => {
  const data = Array.from({ length: 22 }, (_, i) => ({
    imagelink: `./images/${i + 1}.jpg`,
  }));

  const [active, setActive] = useState(data[0].imagelink);
  const [showLightbox, setShowLightbox] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const eventDate = "January 1, 2023";
  const eventLocation = "Bassa, Plateau State, Nigeria";

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
          <div className="mb-4 space-y-3 text-base">
            <p>
              Our recent outreach program in{" "}
              <strong>Bassa Local Government Area, Plateau State</strong>
              was a resounding success, as we were able to positively impact the lives of
              approximately
              <strong className="text-black"> 1,000 community members</strong> in various ways.
            </p>

            <div>
              <h5 className="font-medium">Outreach Highlights:</h5>
              <ul className="list-disc list-inside ml-2 text-gray-700">
                <li>
                  <strong className="text-black">Food Distribution:</strong> We provided
                  essential food items to families in need, ensuring they had access to basic
                  nutrition.
                </li>
                <li>
                  <strong className="text-black">Educational Support:</strong> Educational and
                  learning materials were distributed to children, aiming to enhance their
                  academic performance and foster a love for learning.
                </li>
                <li>
                  <strong className="text-black">Medical Care:</strong> A team of dedicated
                  medical professionals — including nurses, doctors, and lab technicians —
                  provided proper medical attention. This included diagnoses, treatments, and
                  health education.
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium">Community Engagement:</h5>
              <ul className="list-disc list-inside ml-2 text-gray-700">
                <li>
                  <strong className="text-black">Evangelism & Spiritual Support:</strong> We
                  shared the message of hope and love through evangelism, while also offering
                  counseling sessions. This allowed us to connect with the community on a
                  spiritual level and provide emotional support.
                </li>
                <li>
                  <strong className="text-black">Personal Interactions:</strong> Volunteers
                  engaged directly with residents, listening to their stories, offering words
                  of encouragement, and building trust to better understand their needs and
                  provide effective support.
                </li>
              </ul>
            </div>

            <p>
              Overall, our outreach program in <strong>Bassa Local Government</strong> was a
              testament to the power of compassion and community. We are deeply grateful for
              the opportunity to serve and look forward to continuing this work to restore hope
              and dignity in the lives of those affected.
            </p>
          </div>
        </div>
      </div>

      {/* UPCOMING EVENTS CARD */}
      <div className="w-full h-auto items-center mt-10 p-4">
        <h3 className="font-semibold text-center text-2xl text-black mb-6">Upcoming Events</h3>

        <div className="w-full md:w-3/4 mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Banner Image */}
          <div className="relative h-56 w-full">
            <img
              src="./images/6.jpg"
              alt="Kwal Outreach"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-lg md:text-2xl text-center break-words font-bold">
                Outreach & Empowerment <br /> Kwal Village
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Date & Location */}
            <div className="flex flex-col text-gray-600 text-sm">
              <p>
                <span className="font-medium">Date:</span> October, 2025
              </p>
              <p>
                <span className="font-medium">Location:</span> Kwal Village, Bassa LGA, Plateau
                State, Nigeria
              </p>
            </div>

            {/* Brief Intro */}
            <p className="text-gray-700">
              Our objective is to support and empower the community through a comprehensive
              program that addresses their{" "}
              <strong>physical, educational, and spiritual needs.</strong>
            </p>

            {/* Program Components */}
            <div>
              <h4 className="font-semibold mb-2">Program Components:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <strong>Food & Toiletry Support:</strong> Provide essentials for vulnerable
                  members.
                </li>
                <li>
                  <strong>Skill Acquisition Program:</strong> Equip women with vocational and
                  business skills.
                </li>
                <li>
                  <strong>Education Support:</strong> Sponsor children for quality schooling.
                </li>
                <li>
                  <strong>Discipleship Training:</strong> Foster spiritual growth and
                  development.
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-md">
              <p className="text-gray-800">
                <strong>Call to Action:</strong> Partner with us through financial donations to
                make a lasting impact in Kwal Village.
              </p>
            </div>

            <div className="pt-4">
              <button className="py-3 px-6 w-full md:w-auto text-center font-Poppins text-white bg-green-600 hover:bg-green-500 rounded-lg shadow-md">
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
    </div>
  );
};

export default AllEvents;

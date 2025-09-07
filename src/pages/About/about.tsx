/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

const AboutUs = () => {
  const coreValues = [
    {
      title: "Compassion",
      desc: "Demonstrating empathy and care for those affected by crisis.",
    },
    {
      title: "Empowerment",
      desc: "Equipping individuals with skills, knowledge, and resources to rebuild their lives.",
    },
    {
      title: "Spiritual Growth",
      desc: "Nurturing faith and spiritual development in those we serve.",
    },
    {
      title: "Resilience",
      desc: "Fostering strength and hope in the face of adversity.",
    },
    {
      title: "Community",
      desc: "Building relationships and partnerships to support and uplift those in need.",
    },
    {
      title: "Integrity",
      desc: "Operating with transparency, accountability, and honesty in all our endeavors.",
    },
  ];

  return (
    <div className="w-full h-auto bg-white">
      {/* Banner Section */}
      <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
        <img
          src="./images/24.jpg"
          alt="About Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            {...({} as any)}
            className="text-white text-3xl md:text-5xl font-bold text-center"
          >
            <span className=" flex justify-start text-md pb-10">About Us </span> <br />
            Noach Helping Hands Foundation
          </motion.h1>
        </div>
      </div>

      {/* Mission Statement */}
      <motion.section
        className="max-w-5xl mx-auto px-6 py-12 text-center"
        {...({} as any)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
          Mission Statement
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          To provide holistic support, empowerment, and training to crisis-affected Christians
          in Nigerian communities, fostering spiritual growth, skill development, and
          resilience, as we work together to restore hope, dignity, and purpose in the lives of
          those we serve.
        </p>
      </motion.section>

      {/* Core Values */}
      <section className="bg-gray-50 py-12 px-6">
        <motion.h2
          {...({} as any)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-8"
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              {...({} as any)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-lg font-bold mb-2 text-gray-900">{value.title}</h3>
              <p className="text-gray-700 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <motion.section
        className="max-w-5xl mx-auto px-6 py-12"
        {...({} as any)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At <strong>Noach Helping Hands Foundation</strong>, we are dedicated to serving
          crisis-affected Christians in Nigerian communities. Our mission is to provide
          holistic support, empowerment, and training to help individuals and communities
          rebuild their lives, grow in faith, and thrive.
        </p>
      </motion.section>

      {/* What We Do */}
      <motion.section
        {...({} as any)}
        className="bg-gray-50 py-12 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-8">
          What We Do
        </h2>
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            We provide practical and spiritual support to individuals and families affected by
            crises. Through compassion and dedication, we focus on restoring dignity and hope.
          </p>
          <ul className="list-disc text-left list-inside text-gray-700 text-lg">
            <li>
              <strong className="text-gray-900">Feeding:</strong> Providing emergency food
              assistance to individuals and families in crisis, ensuring they have access to
              nutritious food and can focus on rebuilding their lives.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Founder Section */}
      <motion.section
        {...({} as any)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-6 md:px-20 py-20 bg-white"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Founder Image */}
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
            <p className="text-gray-700 max-w-lg leading-relaxed mb-6">
              Samuel Afang founded Noach Helping Hands Foundation out of a deep conviction to
              bring hope, empowerment, and spiritual growth to crisis-affected communities. His
              passion for service continues to drive the mission of the foundation.
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Contact:</strong> +2348145517222, +2349042614572
              </p>
              <p>
                <strong>Email:</strong> afangsamue@gmail.com
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;

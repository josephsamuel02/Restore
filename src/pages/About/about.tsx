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
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex items-center">
          <div className="max-w-5xl mx-auto px-6 py-12 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              {...({} as any)}
              className="text-white text-3xl md:text-5xl font-bold text-center md:text-left"
            >
              <span className="inline-block text-sm md:text-base uppercase tracking-wide text-white/80">
                About Us
              </span>
              <br />
              Noach Helping Hands Foundation
            </motion.h1>
          </div>
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
          To provide holistic support, empowerment, and training to crisis-affected
          communities, fostering growth, skill development, and resilience, as we work together
          to restore hope, dignity, and purpose in the lives of those we serve.
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
          crisis-affected communities. Our mission is to provide holistic support, empowerment,
          and training to help individuals and communities rebuild their lives, grow, and
          thrive.
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

        <div className="max-w-4xl mx-auto space-y-6 text-left">
          <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            We serve communities who have been deeply affected by violence, displacement, and
            crisis. Our heart is to walk with people as they heal from trauma, rebuild their
            lives, and rediscover hope through faith, compassion, and practical support. We
            respond to urgent needs while helping individuals and families regain stability,
            dignity, and purpose.
          </p>

          <hr className="border-gray-200" />

          <h4 className="text-lg font-semibold mt-4">
            Trauma Healing and Discipleship Growth
          </h4>
          <p className="text-gray-700 mt-2">
            At the center of our work is the belief that healing is both spiritual and
            emotional. Many carry deep wounds from loss, fear, and displacement. Through our
            Trauma Healing and Discipleship Growth program, we create safe spaces where people
            can process their pain in the light of Scripture and experience restoration through
            Christ. We lead trauma healing sessions grounded in biblical truth, provide group
            and personal counseling, and equip church leaders and caregivers with the tools to
            support ongoing care.
          </p>

          <hr className="border-gray-200" />

          <h4 className="text-lg font-semibold mt-4">Compassion and Community Outreach</h4>
          <p className="text-gray-700 mt-2">
            We go directly to where the need is greatest, meeting people in moments of
            vulnerability with love and practical care. Our outreach includes:
          </p>
          <ul className="list-disc list-inside ml-6 mt-2 text-gray-700 space-y-1">
            <li>
              Village and IDP (Internally Displaced Persons) outreach : Food, clothing, and
              relief
            </li>
            <li>
              Orphanage support : Food, toiletries, clothing, educational materials, and
              consistent care
            </li>
            <li>Prison outreach : Prayer, counseling, and discipleship</li>
            <li>
              Hospital outreach : Assistance with bills, prescriptions, and comfort when
              possible
            </li>
          </ul>

          <hr className="border-gray-200" />

          <h4 className="text-lg font-semibold mt-4">Empowerment and Livelihood Support</h4>
          <p className="text-gray-700 mt-2">
            We offer skills training, small-business support, and basic financial guidance to
            help widows and young people start sustainable livelihoods. We also provide
            mentorship so beneficiaries can grow in confidence and independence rather than
            remain dependent on short-term aid.
          </p>

          <hr className="border-gray-200" />

          <h4 className="text-lg font-semibold mt-4">
            Education Support for Vulnerable Children
          </h4>
          <p className="text-gray-700 mt-2">
            We support children from vulnerable families by helping cover school fees,
            uniforms, textbooks, and learning materials when possible. Beyond academics, we
            provide guidance and moral support to help children heal from trauma and believe in
            a better tomorrow.
          </p>

          <hr className="border-gray-200" />

          <h4 className="text-lg font-semibold mt-4">Strengthening Local Communities</h4>
          <p className="text-gray-700 mt-2">
            Lasting change happens when communities are empowered. We train local church
            leaders and community members in trauma care, discipleship, and compassionate
            response, and we work with trusted partners to ensure accountability and cultural
            understanding so local care continues long-term.
          </p>
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

      {/* Co-Founders Section */}
      <section className="bg-gray-50 px-6 md:px-20 py-16">
        <motion.h2
          {...({} as any)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-12"
        >
          Co-Founders
        </motion.h2>

        <div className="w-1/2  py-20 mx-auto flex flex-col md:flex-row items-center justify-center gap-40">
          {/* Co-Founder 1 */}
          <motion.div
            {...({} as any)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto flex flex-col items-center md:items-start text-center md:text-left gap-5 flex-1"
          >
            <motion.img
              {...({} as any)}
              src="./images/d2 (2).jpg"
              alt="Co-Founder - Meredith Puff Hofmann"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
            <div>
              <h3 className="text-2xl font-semibold text-center md:text-left text-gray-800">
                Meredith Puff Hofmann
              </h3>
              <p className="text-gray-600 text-center md:text-left mb-4">Co-Founder</p>
            </div>
          </motion.div>

          {/* Co-Founder 2 */}
          <motion.div
            {...({} as any)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto flex flex-col items-center md:items-start text-center md:text-left gap-5 flex-1"
          >
            <motion.img
              {...({} as any)}
              src="./images/d2 (1).jpg"
              alt="Co-Founder - Sharon L."
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Sharon L.</h3>
              <p className="text-gray-600 mb-4">Co-Founder</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

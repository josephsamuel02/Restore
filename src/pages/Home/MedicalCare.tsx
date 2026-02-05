import { motion } from "motion/react";
import { HeartPulse, Stethoscope } from "lucide-react";

const MedicalCare = () => (
  <section className="w-full py-20 px-6 bg-gradient-to-b from-white to-red-50 relative overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

    <div className="max-w-4xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-red-50 hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="inline-flex items-center justify-center p-4 bg-red-50 rounded-full mb-6 text-primary animate-pulse">
          <HeartPulse size={40} strokeWidth={1.5} />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 flex items-center justify-center gap-3">
          Medical Care <Stethoscope className="text-primary hidden md:block" size={28} />
        </h2>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          We provide <span className="text-primary font-medium">medical support</span> to those affected by crisis, helping with hospital bills,
          prescriptions, and essential care. Our commitment is to ensure that vulnerable
          individuals and families receive the treatment and comfort they need during difficult
          times.
        </p>

        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium text-gray-500">
          <span className="flex items-center gap-2">🏥 Hospital Support</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-2">💊 Prescriptions</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-2">❤️ Essential Care</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MedicalCare;

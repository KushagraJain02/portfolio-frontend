import React, { useState } from "react";
import { motion } from "framer-motion";

const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const features = [
    {
      icon: "🚀",
      label: "Fast Turnaround",
      desc: "Deliver quality work quickly",
    },
    {
      icon: "💡",
      label: "Creative Solutions",
      desc: "Innovative & unique approaches",
    },
    {
      icon: "🎯",
      label: "Focused Results",
      desc: "Goal-oriented collaboration",
    },
    {
      icon: "🔧",
      label: "Technical Excellence",
      desc: "Best practices & clean code",
    },
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-24 px-8 lg:px-32 my-20 lg:my-32 overflow-hidden bg-linear-to-b from-white via-indigo-50/30 to-white">
      {/* Animated Background Elements */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-linear-to-br from-indigo-200 to-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-linear-to-br from-purple-200 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-linear-to-br from-pink-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
          >
            {/* Animated Gradient Border */}
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:blur-2xl"></div>

            {/* Main Image Container */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-white h-96 lg:h-full min-h-96"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Image with gradient overlay */}
              <img
                src="/Connect_Me.png"
                alt="Professional collaboration"
                loading="lazy"
                onError="console.error('Image failed to load:', this.src); this.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'; this.alt='Image unavailable';"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-indigo-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Floating Stats Cards */}
              <motion.div
                animate={{ y: isHovered ? -20 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-2xl border border-white/50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      Available Now
                    </p>
                    <p className="text-2xl font-bold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Let's Build Together
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="text-3xl"
                  >
                    ✨
                  </motion.div>
                </div>
              </motion.div>

              {/* Corner Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-6 right-6 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Open for Work
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-16 -right-16 w-40 h-40 bg-linear-to-br from-indigo-300/30 to-purple-300/30 rounded-full blur-2xl"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-16 -left-16 w-40 h-40 bg-linear-to-tr from-pink-300/30 to-rose-300/30 rounded-full blur-2xl"
            ></motion.div>
          </motion.div>

          {/* Right Side - Content Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-linear-to-r from-indigo-100 to-pink-100 border border-indigo-200/50 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              <span className="text-sm font-bold bg-linear-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                Let's Create Magic ✨
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                <span className="block text-gray-900">Ready to turn your</span>
                <span className="block bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ideas into reality?
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                Let's collaborate on something extraordinary. Whether it's a web
                app, design system, or innovative solution – I'm here to bring
                your vision to life with precision and creativity.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => setActiveFeature(idx)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeFeature === idx
                      ? "bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <p
                    className={`font-bold text-sm ${activeFeature === idx ? "text-white" : "text-gray-900"}`}
                  >
                    {feature.label}
                  </p>
                  <p
                    className={`text-xs leading-relaxed ${activeFeature === idx ? "text-white/90" : "text-gray-600"}`}
                  >
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Primary Button */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-2xl overflow-hidden"
              >
                {/* Shine Effect */}
                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

                <span className="relative z-10 flex items-center gap-2">
                  Contact Me
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>

                {/* Glow */}
                <span className="absolute inset-0 rounded-2xl bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 blur-lg scale-0 group-hover:scale-100 transition-transform duration-500 opacity-50 -z-10"></span>
              </motion.a>

              {/* Secondary Button */}
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-6 border-t border-gray-200"
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Animated Elements */}
        

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute top-1/3 -right-8 w-16 h-16 rounded-2xl bg-linear-to-br from-cyan-400 to-blue-500 shadow-lg hidden lg:flex items-center justify-center text-3xl"
        >
          ✨
        </motion.div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default CTA;

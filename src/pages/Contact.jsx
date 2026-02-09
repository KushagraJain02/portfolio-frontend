import { motion } from "framer-motion";

const CONTACT_INFO = [
  { type: "Phone", value: "+91-8233655820", icon: "📱" },
  {
    type: "Email",
    value: "kushagraj555@gmail.com",
    icon: "✉️",
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/kushagra-jain",
    url: "https://www.linkedin.com/in/kushagra-jain-369ab1304/",
    icon: "💼",
  },
  {
    type: "GitHub",
    value: "github.com/KushagraJain02",
    url: "https://github.com/KushagraJain02",
    icon: "💻",
  },
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kushagra-jain-369ab1304/",
    icon: "🔗",
  },
  {
    name: "GitHub",
    url: "https://github.com/KushagraJain02",
    icon: "🐙",
  },
  {
    name: "Email",
    url: "mailto:kushagraj555@gmail.com",
    icon: "📧",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-linear-to-br from-indigo-600/30 to-purple-600/30 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-linear-to-tr from-blue-600/30 to-cyan-600/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-linear-to-l from-purple-600/20 to-indigo-600/20 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16"
        >
          <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 tracking-tight"
            >
              Let's Work Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out through any of the channels
              below.
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Left Side - Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center"
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

                  {/* Image Container */}
                  <div className="relative bg-linear-to-br from-slate-800 to-slate-700 rounded-3xl p-2 sm:p-3 border border-slate-700/50 shadow-2xl">
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-indigo-500/30 to-purple-500/30 border border-slate-600/50">
                      <img
                        src="https://copilot.microsoft.com/th/id/BCO.4b76ba18-4c10-4585-a5c5-f76fe93d5578.png"
                        alt="Kushagra Jain"
                        loading="lazy"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.background =
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                          e.target.style.display = "none";
                        }}
                      />
                      {/* Fallback gradient if image fails */}
                      <div className="absolute inset-0 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 hidden items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-4">👨‍💻</div>
                          <p className="text-white/80 text-sm font-medium">
                            Kushagra Jain
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute bottom-6 right-6 bg-emerald-500 rounded-full p-3 shadow-lg border-4 border-slate-900">
                    <div className="w-3 h-3 bg-emerald-300 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-6 sm:space-y-8"
              >
                {/* Name and Title */}
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                    Kushagra Jain
                  </h2>
                  <p className="text-lg sm:text-xl text-indigo-400 font-semibold">
                    Competitive Programmer & Developer
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Passionate about solving complex problems and building
                  innovative solutions. Let's collaborate and create something
                  amazing together.
                </p>

                {/* Contact Cards */}
                <div className="space-y-3 sm:space-y-4">
                  {CONTACT_INFO.map((info, index) => (
                    <motion.div
                      key={info.type}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="bg-slate-800/50 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group cursor-pointer hover:bg-slate-800/80"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <span className="text-2xl sm:text-3xl mt-1 group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                            {info.type}
                          </p>
                          {info.url ? (
                            <a
                              href={info.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm sm:text-base font-medium text-indigo-400 hover:text-indigo-300 transition-colors break-all"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm sm:text-base font-medium text-white break-all">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-4 sm:pt-6">
                  <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">
                    Connect With Me
                  </p>
                  <div className="flex gap-3 sm:gap-4">
                    {SOCIAL_LINKS.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target={social.name !== "Email" ? "_blank" : undefined}
                        rel={
                          social.name !== "Email"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-linear-to-br from-indigo-600/30 to-purple-600/30 hover:from-indigo-600/50 hover:to-purple-600/50 backdrop-blur-sm flex items-center justify-center text-2xl sm:text-3xl transition-all duration-300 border border-indigo-500/30 hover:border-indigo-500/60 shadow-lg"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 8s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @media (max-width: 640px) {
          .animate-blob {
            animation: blob 6s infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;

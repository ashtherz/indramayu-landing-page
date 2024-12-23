import React from "react";
import { motion } from "framer-motion";
import ProgramGraph from "../components/ProgramGraph";
import { Navbar } from "../components/Navbar";
import InteractiveBackground from "../components/InteractiveBackground";

const GraphTitle = ({ title, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive ? "bg-blue-600 text-white" : "bg-white/10 text-blue-100 hover:bg-white/20"
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {title}
  </motion.button>
);

const Grafik = () => {
  const [activeProgram, setActiveProgram] = React.useState("DE-KAT");
  const [activeGraphType, setActiveGraphType] = React.useState("bar");

  return (
    <div className="relative min-h-screen bg-[#7faaf0] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#114599] via-[#2b62b1] to-[#114599]">
        <InteractiveBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <Navbar />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
              Program Analytics
            </h1>
            <p className="text-blue-100 text-lg">
              Visualisasi data program unggulan Kabupaten Indramayu
            </p>
          </motion.div>

          {/* Graph Container */}
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-5xl mx-auto mb-8"
          >
            <ProgramGraph />
          </motion.div>

          {/* Legend or Additional Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
            {[
              { label: "Total Program", value: "1,800+" },
              { label: "Pertumbuhan", value: "+15%" },
              { label: "Status", value: "Active" },
            ].map(({ label, value }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg"
              >
                <p className="text-blue-200 text-sm uppercase tracking-wider font-medium">{label}</p>
                <p className="text-white text-2xl font-semibold mt-2">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grafik;
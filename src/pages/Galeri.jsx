import React from "react";
import GaleriCarousel from "../components/GaleriCarousel";
import { Navbar } from "../components/Navbar";
import InteractiveBackground from "../components/InteractiveBackground";

const Galeri = () => {
  return (
    <div className="relative min-h-screen bg-blue-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#114599] via-[#2b62b1] to-[#114599]">
        <InteractiveBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <GaleriCarousel />
      </div>
    </div>
  );
};

export default Galeri;

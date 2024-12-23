import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import InteractiveBackground from "../components/InteractiveBackground";

const Statistics = () => {
  useEffect(() => {
    // Dynamically load the Tableau embedding script
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://boarding.peruri.co.id/javascripts/api/tableau.embedding.3.latest.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup the script on unmount
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-blue-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#114599] via-[#2b62b1] to-[#114599]">
        <InteractiveBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="p-4">
          <h1 className="text-white text-center text-2xl font-bold mb-4">
            Statistics Dashboard
          </h1>
          <div className="flex justify-center">
            <tableau-viz
              id="tableau-viz"
              src="https://boarding.peruri.co.id/views/Indramayu/Summary"
              width="1191"
              height="3527"
              hide-tabs
              toolbar="bottom"
            ></tableau-viz>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

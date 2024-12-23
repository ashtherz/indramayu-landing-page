import React, { useState } from 'react';
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const programData = [
  { name: "DE-KAT", description: "Desa Kabeh Terang" },
  { name: "LE-DIG", description: "Lebu Digital" },
  { name: "BERSU-LING", description: "Bersih dan Sehat Lingkungan" },
  { name: "LA-DA", description: "Lacak Aset Daerah" },
  { name: "DOK-MARU", description: "Dokter Masuk Rumah" },
  { name: "KRUW-CIL", description: "Kredit Usaha Warung Kecil" },
  { name: "JA-KET", description: "Kejar Paket" },
  { name: "PE-RI", description: "Perempuan Berdikari" },
];

const generateProgramImages = (count) => {
  return Array(count).fill('/assets/background.svg');
};

const programGalleries = programData.reduce((acc, program) => {
  acc[program.name] = generateProgramImages(5);
  return acc;
}, {});

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg transform translate-x-1/2 transition-all duration-300 hover:scale-110 hover:bg-gray-50 focus:outline-none"
  >
    <ChevronRight className="w-6 h-6 text-[#114599]" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg transform -translate-x-1/2 transition-all duration-300 hover:scale-110 hover:bg-gray-50 focus:outline-none"
  >
    <ChevronLeft className="w-6 h-6 text-[#114599]" />
  </button>
);

const GaleriCarousel = () => {
  const [activeProgram, setActiveProgram] = useState(programData[0].name);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    dotsClass: "slick-dots !bottom-[-40px]",
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12">
      <div className="container mx-auto px-4 py-8 bg-white rounded-3xl shadow-lg">
        <h2 className="text-4xl font-bold text-center text-[#114599] mb-8 animate-fade-in">
          Galeri Program
        </h2>
        
        {/* Program Toggle Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {programData.map((program) => (
            <button
              key={program.name}
              onClick={() => setActiveProgram(program.name)}
              className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 
                ${activeProgram === program.name
                  ? 'bg-[#114599] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow'
                }`}
            >
              {program.name}
            </button>
          ))}
        </div>

        {/* Active Program Description */}
        <div className="text-center mb-10">
          <p className="text-gray-600 text-lg font-medium animate-fade-in">
            {programData.find(p => p.name === activeProgram)?.description}
          </p>
        </div>

        {/* Carousel Container with shadow */}
        <div className="relative px-16">
          <Slider {...settings}>
            {programGalleries[activeProgram].map((imageSrc, index) => (
              <div key={index} className="p-4">
                <div 
                  className="bg-white rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    boxShadow: '0 10px 30px -10px rgba(17, 69, 153, 0.2)',
                  }}
                >
                  <div className="relative group">
                    <img
                      src={imageSrc}
                      alt={`${activeProgram} gallery image ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-[#114599] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Custom styles for Slick dots */}
        <style jsx global>{`
          .slick-dots li button:before {
            font-size: 12px;
            color: #114599;
            opacity: 0.25;
            transition: all 0.3s ease;
          }
          .slick-dots li.slick-active button:before {
            color: #114599;
            opacity: 1;
          }
          .slick-slide {
            opacity: 0.5;
            transition: all 0.3s ease;
          }
          .slick-current {
            opacity: 1;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default GaleriCarousel;
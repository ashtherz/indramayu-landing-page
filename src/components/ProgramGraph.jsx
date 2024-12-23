import React, { useState } from "react";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const programData = {
  "DE-KAT": [
    { year: "2024", value: 450 },
    { year: "2023", value: 350 },
    { year: "2022", value: 600 },
    { year: "2021", value: 400 },
  ].reverse(),
  "LE-DIG": [
    { year: "2024", value: 200, type: "Internet Desa" },
    { year: "2024", value: 100, type: "Aplikasi Wajib Desa" },
    { year: "2024", value: 150, type: "Anjungan Desa Mandiri" },
    { year: "2024", value: 50, type: "Aplikasi Layanan Desa" },
    { year: "2024", value: 100, type: "Website Desa" },
    { year: "2024", value: 50, type: "Kawasan Desa Digital" },
    { year: "2024", value: 50, type: "Aplikasi Indramayu.id" },
    { year: "2024", value: 0, type: "Padi Box" },
    { year: "2024", value: 0, type: "AyuTVCC" },
    { year: "2023", value: 100, type: "Internet Desa" },
  ].reverse(),
  "BERSU-LING": [
    { year: "2024", value: 479 },
    { year: "2023", value: 365 },
    { year: "2022", value: 600 },
    { year: "2021", value: 400 },
    { year: "2020", value: 250 },
    { year: "2019", value: 175 },
    { year: "2018", value: 465 },
    { year: "2017", value: 375 },
    { year: "2016", value: 350 },
    { year: "2015", value: 250 },
  ].reverse(),
  "LA-DA": [
    { year: "2024", value: 100000000, type: "Tanah", objects: 20 },
    { year: "2024", value: 350000000, type: "Kendaraan", objects: 1 },
    { year: "2023", value: 75000000, type: "Tanah", objects: 15 },
    { year: "2023", value: 150000000, type: "Tanah", objects: 30 },
    { year: "2022", value: 100000000, type: "Tanah", objects: 20 },
    { year: "2022", value: 450000000, type: "Kendaraan", objects: 1 },
    { year: "2021", value: 750000000, type: "Kendaraan", objects: 2 },
    { year: "2021", value: 650000000, type: "Kendaraan", objects: 2 },
    { year: "2020", value: 100000000, type: "Tanah", objects: 20 },
    { year: "2020", value: 125000000, type: "Tanah", objects: 25 },
  ].reverse(),
  "DOK-MARU": [
    { year: "2024", value: 365, type: "PSC" },
    { year: "2024", value: 400, type: "Non PSC" },
    { year: "2024", value: 450, type: "Dirujuk Ke RS" },
    { year: "2023", value: 245, type: "PSC" },
    { year: "2023", value: 350, type: "Non PSC" },
    { year: "2023", value: 125, type: "Dirujuk Ke RS" },
    { year: "2022", value: 230, type: "PSC" },
    { year: "2022", value: 250, type: "Non PSC" },
    { year: "2022", value: 190, type: "Dirujuk Ke RS" },
    { year: "2021", value: 200, type: "PSC" },
  ].reverse(),
  "KRUW-CIL": [
    { year: "2024", value: 365, amount: 1150000000 },
    { year: "2023", value: 400, amount: 1250000000 },
    { year: "2022", value: 450, amount: 1450000000 },
    { year: "2021", value: 245, amount: 950000000 },
    { year: "2020", value: 350, amount: 1100000000 },
  ].reverse(),
  "JA-KET": [
    { year: "2024", value: 365, type: "Paket A" },
    { year: "2024", value: 400, type: "Paket B" },
    { year: "2024", value: 450, type: "Paket C" },
    { year: "2023", value: 245, type: "Paket A" },
    { year: "2023", value: 350, type: "Paket B" },
    { year: "2023", value: 125, type: "Paket C" },
    { year: "2022", value: 230, type: "Paket A" },
    { year: "2022", value: 250, type: "Paket B" },
    { year: "2022", value: 190, type: "Paket C" },
    { year: "2021", value: 200, type: "Paket A" },
  ].reverse(),
  "PE-RI": [
    { year: "2024", value: 479 },
    { year: "2023", value: 365 },
    { year: "2022", value: 600 },
    { year: "2021", value: 400 },
    { year: "2020", value: 250 },
    { year: "2019", value: 175 },
    { year: "2018", value: 465 },
    { year: "2017", value: 375 },
    { year: "2016", value: 350 },
    { year: "2015", value: 250 },
  ].reverse(),
};

const ProgramGraph = () => {
  const [selectedProgram, setSelectedProgram] = useState("DE-KAT");
  const [activeChart, setActiveChart] = useState("bar");

  const data = programData[selectedProgram];

  const renderChart = () => {
    switch (activeChart) {
      case "bar":
        return <BarChart data={data} />;
      case "line":
        return <LineChart data={data} />;
      case "pie":
        return <PieChart data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center text-[#114599] mb-6">
          {selectedProgram} - Grafik Program
        </h2>

        {/* Program Toggle */}
        <div className="flex justify-center gap-4 mb-6">
          {Object.keys(programData).map((program) => (
            <button
              key={program}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                selectedProgram === program
                  ? "bg-[#114599] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedProgram(program)}
            >
              {program}
            </button>
          ))}
        </div>

        {/* Chart Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          {[
            { type: "bar", icon: FaChartBar, label: "Bar Chart" },
            { type: "line", icon: FaChartLine, label: "Line Chart" },
            { type: "pie", icon: FaChartPie, label: "Pie Chart" },
          ].map(({ type, icon: Icon, label }) => (
            <button
              key={type}
              onClick={() => setActiveChart(type)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeChart === type
                  ? "bg-[#114599] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Icon className="text-lg" />
              {label}
            </button>
          ))}
        </div>

        {/* Chart Container */}
        <div className="w-full h-[400px]">
          {renderChart()}
        </div>
      </div>
    </div>
  );
};

export default ProgramGraph;
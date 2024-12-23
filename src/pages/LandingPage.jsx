import React from 'react';
import { 
  FaTruck, 
  FaChartBar, 
  FaUsers, 
  FaSearch, 
  FaLightbulb,
  FaUserMd, 
  FaShoppingCart, 
  FaBook, 
  FaFemale, 
  FaWalking 
} from 'react-icons/fa';
import { Navbar } from '../components/Navbar';
import background from '../assets/background.svg';
import ProgramCard from '../components/ProgramCard';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { motion } from 'framer-motion';
import NumberTicker from '../components/ui/NumberTicker';
import WaveBackground from '../components/WaveBackground';
import InteractiveBackground from '../components/InteractiveBackground';

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const programs = [
    {
      title: "I-CETA",
      description: "INDRAMAYU CEPAT TANGGAP",
      Icon: FaTruck,
      summary: "Sebuah Program Untuk Memberikan Solusi Pertolongan Pertama Bagi Permasalahan Kemanusiaan Dan Kedaruratan, Warga Melapor Melalui Nomor Telepon, Whatsapp, Facebook, Instagram Dan Atau Twitter."
    },
    {
      title: "LE-DIG",
      description: "LEBU DIGITAL",
      Icon: FaChartBar,
      summary: "Sebuah Program Untuk Mewujudkan Smart Village Atau Desa Cerdas, Dengan Dilakukan Pemasangan Wi-Fi Di Setiap Balai Desa Yang Terintegrasi Dengan Program I- CETA."
    },
    {
      title: "BERSU-LING",
      description: "BERJAMAAH SUBUH KELILING",
      Icon: FaUsers,
      summary: "Sebuah Program Berjamaah Shubuh Keliling Yang Dilakukan Di Kecamatan Untuk Berkomunikasi Langsung Dengan Masyarakat Di Pedesaan Serta Mendengarkan Suara, Keluhan Dan Masukan Dari Masyarakat."
    },
    {
      title: "LA-DA",
      description: "LACAK ASET DAERAH",
      Icon: FaSearch,
      summary: "Program Yang Bertujuan Untuk Mendata Dan Menginventarisasi Barang Milik Daerah (BMD) Sehingga Aset- Aset Yang Dikuasai Oleh Pemerintah Daerah Dapat Lebih Tertata Dan Lebih Termanfaatkan Serta Dapat Dipertanggungjawabkan Dan Lebih Diberdayakan Oleh Perangkat Daerah."
    },
    {
      title: "DE-KAT",
      description: "DESA KABEH TERANG",
      Icon: FaLightbulb,
      summary: "Sebuah Program Untuk Mengurangi Angka Kriminalitas Dan Kecelakaan Dengan Membangun 1.000 (Seribu) Titik Penerangan Jalan Umum (PJU) Di Tingkat Desa."
    },
    {
      title: "DOK-MARU",
      description: "DOKTER MASUK RUMAH",
      Icon: FaUserMd,
      summary: "Sebuah Program Layanan Kesehatan Yang Menghadirkan Bentuk Pelayanan Langsung Ke Rumah Warga."
    },
    {
      title: "KRUW-CIL",
      description: "KREDIT USAHA WARUNG KECIL",
      Icon: FaShoppingCart,
      summary: "Sebuah Program Yang Memberikan Kredit Kepada Warung Kecil Dan UMKM Untuk Mendorong Perekonomian Wong Cilik, Melalui Kerjasama Dengan Bank Perkreditan Rakyat Daerah, Yang Nilainya Mulai Rp. 500.000,- (Lima Ratus Ribu Rupiah) Sampai Dengan Rp. 5.000.000,- (Lima Juta Rupiah)."
    },
    {
      title: "JA-KET",
      description: "KEJAR PAKET",
      Icon: FaBook,
      summary: "Program Kejar Paket Yang Meliputi Kelompok Belajar (Kejar) Paket A, B Dan C Yang Diselenggarakan Pemerintah Untk Pemerataan Pendidikan Secara Gratis."
    },
    {
      title: "PE-RI",
      description: "PEREMPUAN BERDIKARI",
      Icon: FaFemale,
      summary: "Sebuah Program Pemberdayaan Ekonomi Yang Diberikan Kepada Para Perempuan Purna Pekerja Migran Indonesia Dalam Bentuk Pelatihan Keterampilan Dan Pemberian Modal."
    },
    {
      title: "A-LUR",
      description: "ALUN-ALUN RAKYAT",
      Icon: FaWalking,
      summary: "Sebuah Program Untuk Mengembalikan Alun- Alun Pendopo Kantor Bupati Indramayu Sebagai Ikon Dan Symbol Kedekatan Pemimpin Dan Rakyatnya Dengan Membongkar Seluruh Pagar Alun-Alun."
    }
  ];
// Hero Section
const HeroSection = () => {
    return (
      <div className="container mx-auto px-4 py-16 flex items-center justify-center"> 
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full"> 
          <div className="text-white lg:w-1/2 text-center lg:text-left">
            <h1 className="relative">
              <span className="block text-6xl font-bold leading-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {/* Added leading-tight for better line height control */}
                Portal 10 Program
                <br /> {/* Added line break */}
                Unggulan
              </span>
              <br /> {/* Added line break */}
              <span className="block text-5xl font-bold mb-6 text-blue-200">
                Pemerintah Kabupaten Indramayu
              </span>
            </h1>
            <p className="text-xl mt-8 leading-relaxed text-blue-100 font-light">
              Selamat Datang di Situs Resmi Portal 10 Program Unggulan
              <br />
              Pemerintah Kabupaten Indramayu
            </p>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400/10 rounded-3xl blur-2xl"></div>
              <img
                src={background}
                alt="Illustration"
                className="relative w-full h-auto rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    );
};
  

// Programs Grid Section
const ProgramsGrid = () => (
  <div className="container mx-auto px-4 py-16">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
      {programs.slice(0, 5).map((program, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <ProgramCard {...program} />
        </motion.div>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {programs.slice(5, 10).map((program, index) => (
        <motion.div
          key={index + 5}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <ProgramCard {...program} />
        </motion.div>
      ))}
    </div>
  </div>
);

// Stats Section
const StatsSection = () => {
  const stats = [
    { label: 'Total Program', value: 10, suffix: '+' },
    { label: 'Desa Terjangkau', value: 500, suffix: '+' },
    { label: 'Masyarakat Terbantu', value: 10000, suffix: '+' },
    { label: 'Tingkat Kepuasan', value: 95, suffix: '%' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg"
          >
            <div className="text-4xl font-bold text-white mb-2 flex justify-center items-baseline">
              <NumberTicker value={stat.value} />
              <span className="ml-1">{stat.suffix}</span>
            </div>
            <div className="text-blue-200 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Landing Page
const LandingPage = () => (
    <div className="relative min-h-screen bg-blue-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#114599] via-[#2b62b1] to-[#114599]">
      <InteractiveBackground /> {/* Add interactive particles */}
        </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <ProgramsGrid />
      </div>
    </div>
  );

export default LandingPage;

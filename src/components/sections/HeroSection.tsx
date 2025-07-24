"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ gunakan ini, bukan `* as motion`

export default function HeroSection() {
  return (
    <>
      {/* <motion.div
        className="py-20"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        id="beranda"
      >
        <h1 className="sm:text-6xl/tight text-5xl/tight sm:text-center text-left font-bold text-gray-800">
          Driving Your Journey,
          <br /> Delivering Comfort
        </h1>
      </motion.div> */}

      <div className="w-full h-screen bg-[url('/herosec.jpg')] bg-cover bg-center relative">
        {/* Konten kamu di sini */}
      </div>
    </>
  );
}

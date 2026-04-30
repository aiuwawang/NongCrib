import { useState, useEffect } from "react"; // TAMBAHKAN INI
import { motion, AnimatePresence } from "framer-motion"; // TAMBAHKAN INI

export default function Hero() {

  const images = [
      "/assets/pub1.jpg",
      "/assets/pub2.jpg", 
      "/assets/pub3.jpg"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 7000); // Ganti setiap 7 detik
      return () => clearInterval(timer);
    }, [images.length]);  
  return (

    <section className="relative h-screen flex flex-col justify-center px-8 md:px-64 overflow-hidden">
      {/* 1. Div khusus Background Image */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={index} // Key penting agar Framer Motion tahu gambar berubah
            src={images[index]}
            alt="British Pub"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Overlay tetap di depan gambar yang sedang gerak */}
        <div className="absolute inset-0 bg-slate-900/60 shadow-inner z-10"></div>
      </div>

      {/* 3. Konten (Harus dikasih z-10 agar berada di depan foto) */}
      <div className="relative z-10">
        <h2 className="text-sm font-bold tracking-widest text-blue-300 uppercase mb-4">
          British Traditional Pub based in Bandung
        </h2>
        <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none text-white">
          HELLO!!! <br /> FANCY SEEING YOU THERE...
        </h1>
        <p className="mt-10 text-lg text-slate-200 max-w-lg">
          Alright mate, <br />
          Come here Nongkrong in my Crib.
        </p>
      </div>
    </section>
  )
}
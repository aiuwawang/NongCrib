import { BookingInfo } from '../../features/booking/components/bookingInfo';
import { BookingForm } from '../../features/booking/components/bookingForm';

export default function MainContent() {
  return (
    <div className="bg-white">
      {/* 1. Bagian Teks (TETAP SESUAI PUNYAMU - CIRI KHAS) */}
      <section className="py-32 px-8 md:px-64 text-center">
        <h2 className="text-xl text-[#720e0e] font-bold font-serif tracking-tight">
            Established in 2026 in the heart of Bandung, NongCrib brings the timeless warmth of a proper British pub to the city's vibrant social scene.
            We specialize in serving authentic British culinary traditions, from hearty hand-pressed pies to quintessential classic brews, all set within a rustic timber interior that feels like a home away from home.
            Whether you're looking for a cozy spot to unwind or a place to gather with mates, NongCrib offers a unique fusion of British heritage and Bandung's welcoming soul.
        </h2>
      </section>
      
      {/* 2. Pembungkus Konten */}
      <div className="px-8 md:px-64 pb-32">
        
        {/* Tombol Navigasi */}
        <div className="flex justify-start uppercase font-bold gap-4 mb-8">
          <a href="#profile" className="hidden md:block bg-[#720e0e] border border-[#720e0e] px-7 py-4 rounded-none text-white hover:bg-transparent hover:text-[#720e0e] transition-all duration-500">
            Book A Table
          </a>

          <a href="#location" className="hidden md:block border border-[#720e0e]/30 px-7 py-4 rounded-none text-[#720e0e] hover:bg-[#720e0e] hover:text-white transition-all duration-500">
            View Our Menus
          </a>
        </div>

        {/* 3. Kotak Jam & Form (Memanggil komponen yang sudah dipecah) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans max-w-full items-start">
          <BookingInfo />
          <BookingForm />
        </div>
        
      </div>
    </div>
  );
}
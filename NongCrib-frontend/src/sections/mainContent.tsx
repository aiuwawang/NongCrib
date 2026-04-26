import { useState } from 'react';
import { Clock, UtensilsCrossed, ChevronDown, ChevronUp, Calendar} from 'lucide-react';

export default function MainContent() {

  const [isOpenOpening, setIsOpenOpening] = useState(false);
  const [isOpenServing, setIsOpenServing] = useState(false);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const todayIndex = new Date().getDay(); 
  const todayName = days[todayIndex];

  return (
    <div className="bg-white">
      {/* 1. Bagian Teks (Tetap sesuai punyamu) */}
      <section className="py-32 px-8 md:px-64 text-center">
        <h2 className="text-xl text-[#720e0e] font-bold font-serif tracking-tight">
            Established in 2026 in the heart of Bandung, NongCrib brings the timeless warmth of a proper British pub to the city's vibrant social scene.
            We specialize in serving authentic British culinary traditions, from hearty hand-pressed pies to quintessential classic brews, all set within a rustic timber interior that feels like a home away from home.
            Whether you're looking for a cozy spot to unwind or a place to gather with mates, NongCrib offers a unique fusion of British heritage and Bandung's welcoming soul.
        </h2>
      </section>
      
      {/* 2. Pembungkus Konten (Biar Tombol & Jam Sejajar) */}
      <div className="px-8 md:px-64 pb-32">
        
        {/* Tombol (Ganti pl-68 jadi pl-0 karena sudah dibantu max-w di atas) */}
        <div className="flex justify-start uppercase font-bold gap-4 mb-8">
          <a href="#profile" className="hidden md:block bg-[#720e0e] border border-[#720e0e] px-7 py-4 rounded-none text-white hover:bg-transparent hover:text-[#720e0e] transition-all duration-500">
            Book A Table
          </a>

          <a href="#location" className="hidden md:block border border-[#720e0e]/30 px-7 py-4 rounded-none text-[#720e0e] hover:bg-[#720e0e] hover:text-white transition-all duration-500">
            View Our Menus
          </a>
        </div>

        {/* 3. Kotak Jam (Taruh langsung di bawah div tombol agar deketan) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans max-w-full items-start">
          {/* Kotak Opening */}
          <div className="bg-[#720e0e] p-8 text-white h-fit">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenOpening(!isOpenOpening)}
            >
              <div className="flex items-center gap-3">
                <Clock size={20} />
                <span className="font-bold uppercase tracking-widest text-sm">Opening Hours</span>
              </div>
              {isOpenOpening ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            {/* Baris "Today" (Selalu Muncul) */}
            <div className="flex justify-between items-end mt-8">
              <p className="font-bold text-sm">Today <span className="font-normal opacity-70">({todayName})</span></p>
              <p className="text-sm font-bold">11:00am - 11:00pm</p>
            </div>

            {/* List Hari Lainnya (Hanya muncul jika isOpenOpening = true) */}
            <div className={`grid transition-all duration-500 ease-in-out ${
              isOpenOpening ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
            }`}>
              <div className="overflow-hidden">
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex justify-between text-sm opacity-80">
                    <span>Thursday</span>
                    <span>11:00am - 11:30pm</span>
                  </div>
                  <div className="flex justify-between text-sm opacity-80">
                    <span>Friday</span>
                    <span>11:00am - 11:30pm</span>
                  </div>
                  <div className="flex justify-between text-sm opacity-80">
                    <span>Saturday</span>
                    <span>10:00am - 11:30pm</span>
                  </div>
                  <div className="flex justify-between text-sm opacity-80">
                    <span>Sunday</span>
                    <span>11:00am - 11:00pm</span>
                  </div>
                  <div className="flex justify-between text-sm opacity-80">
                    <span>Monday</span>
                    <span>11:00am - 11:00pm</span>
                  </div>
                  <div className="flex justify-between text-sm opacity-80">
                    <span>Tuesday</span>
                    <span>11:00am - 11:00pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kotak Serving */}
          <div className="bg-[#720e0e] p-8 text-white h-fit">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenServing(!isOpenServing)}
            >
              <div className="flex items-center gap-3">
                <UtensilsCrossed size={20} />
                <span className="font-bold uppercase tracking-widest text-sm">Serving Hours</span>
              </div>
              {isOpenServing ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            <div className="flex justify-between items-end mt-8">
              <p className="font-bold text-sm">Today <span className="font-normal opacity-70">({todayName})</span></p>
              <p className="text-sm font-bold">11:00am - 10:00pm</p>
            </div>

            <div className={`grid transition-all duration-500 ease-in-out ${
              isOpenServing ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
            }`}>
              <div className="overflow-hidden">
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex justify-between text-sm opacity-80">
                    <span>Thursday</span>
                    <span>11:00am - 11:30pm</span>
                  </div>
                  <div className="flex justify-between text-sm opacity-80">
                    <span>Friday</span>
                    <span>11:00am - 11:30pm</span>
                  </div>
                  <div className="flex justify-between text-sm opacity-80">
                    <span>Saturday</span>
                    <span>10:00am - 11:30pm</span>
                  </div>
                  <div className="flex justify-between text-sm opacity-80">
                    <span>Sunday</span>
                    <span>11:00am - 11:00pm</span>
                  </div>
                  <div className="flex justify-between text-sm opacity-80">
                    <span>Monday</span>
                    <span>11:00am - 11:00pm</span>
                  </div>
                  <div className="flex justify-between text-sm opacity-80">
                    <span>Tuesday</span>
                    <span>11:00am - 11:00pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#fcfcfc] border border-[#720e0e]/20 p-8 h-full">
            <div className="flex items-center gap-3 mb-8">
              <Calendar size={20} className="text-[#720e0e]" />
              <span className="font-bold uppercase tracking-widest text-sm text-[#720e0e]">Book A Table</span>
            </div>
            
            <form className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-[10px] font-bold text-[#720e0e]/60 mb-1">ADULTS *</label>
                  <input 
                    type="number" 
                    defaultValue="2" 
                    min="1"
                    className="w-full border border-[#720e0e]/20 p-2 text-sm focus:outline-none focus:border-[#720e0e]" 
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[10px] font-bold text-[#720e0e]/60 mb-1">CHILDREN *</label>
                  <input 
                    type="number" 
                    defaultValue="0" 
                    min="0"
                    className="w-full border border-[#720e0e]/20 p-2 text-sm focus:outline-none focus:border-[#720e0e]" 
                  />
                </div>
              </div>

              {/* Bagian Input Date dengan Simbol Kalender */}
              <div>
                <label className="block text-[10px] font-bold text-[#720e0e]/60 mb-1">DATE *</label>
                <div className="relative group">
                  <input 
                    type="date" 
                    className="w-full border border-[#720e0e]/20 p-2 text-sm text-[#720e0e] focus:outline-none focus:border-[#720e0e] appearance-none bg-transparent relative z-10 cursor-pointer"
                    style={{ colorScheme: 'light' }} // Biar teks internal kalender browser kelihatan jelas
                  />
                  {/* Ikon Kalender yang muncul di sebelah kanan */}
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none z-0">
                    <Calendar size={18} className="text-[#720e0e]/60 group-focus-within:text-[#720e0e]" />
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#720e0e] text-white py-3 font-bold uppercase text-xs tracking-widest hover:bg-[#5a0b0b] transition-all">
                Search
              </button>
            </form>
          </div>
          
        </div>
        

      </div>
    </div>
  );
}
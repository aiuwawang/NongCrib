import { Calendar } from 'lucide-react';

export const BookingForm = () => {
  return (
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

        <div>
          <label className="block text-[10px] font-bold text-[#720e0e]/60 mb-1">DATE *</label>
          <div className="relative group">
            <input 
              type="date" 
              className="w-full border border-[#720e0e]/20 p-2 text-sm text-[#720e0e] focus:outline-none focus:border-[#720e0e] appearance-none bg-transparent relative z-10 cursor-pointer"
              style={{ colorScheme: 'light' }}
            />
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
  );
};
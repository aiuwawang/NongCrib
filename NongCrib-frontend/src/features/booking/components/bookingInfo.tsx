import { useState } from 'react';
import { Clock, UtensilsCrossed, ChevronUp, ChevronDown } from 'lucide-react';

export const BookingInfo = () => {
  const [isOpenOpening, setIsOpenOpening] = useState(false);
  const [isOpenServing, setIsOpenServing] = useState(false);
  const todayName = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(new Date());

  return (
    <>
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

        <div className="flex justify-between items-end mt-8">
          <p className="font-bold text-sm">Today <span className="font-normal opacity-70">({todayName})</span></p>
          <p className="text-sm font-bold">11:00am - 11:00pm</p>
        </div>

        <div className={`grid transition-all duration-500 ease-in-out ${
          isOpenOpening ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
        }`}>
          <div className="overflow-hidden">
            <div className="pt-4 border-t border-white/10 space-y-3">
              {['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday'].map((day) => (
                <div key={day} className="flex justify-between text-sm opacity-80">
                  <span>{day}</span>
                  <span>{day === 'Saturday' ? '10:00am - 11:30pm' : '11:00am - 11:30pm'}</span>
                </div>
              ))}
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
              {['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday'].map((day) => (
                <div key={day} className="flex justify-between text-sm opacity-80">
                  <span>{day}</span>
                  <span>11:00am - 10:00pm</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
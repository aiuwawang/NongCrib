interface HeaderProps {
    onOpenSidebar: () => void;
}

export default function Header({ onOpenSidebar }: HeaderProps) {
    return (
        <nav className="fixed top-0 w-full z-40 bg-[#e5e7eb] border-b border-[#720e0e]/10 px-8 py-8 flex justify-between items-center shadow-md">
            <div className="text-4xl font-black tracking-tighter text-[#720e0e] italic">
                NongCrib
            </div>

            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-[#720e0e]/70">
                <a href="#profile" className="hidden md:block bg-[#720e0e] border border-[#720e0e] px-6 py-2 rounded-full text-white hover:bg-transparent hover:text-[#720e0e] transition-all duration-500">
                Book Now
                </a>

                <a href="#profile" className="hidden md:block border border-[#720e0e]/30 px-6 py-2 rounded-full text-[#720e0e] hover:bg-[#720e0e] hover:text-white transition-all duration-500">
                Live Sports
                </a>
                <a href="#location" className="hidden md:block border border-[#720e0e]/30 px-6 py-2 rounded-full text-[#720e0e] hover:bg-[#720e0e] hover:text-white transition-all duration-500">
                Location
                </a>
                
                {/* Tombol Menu untuk memicu Sidebar */}
                <button 
                onClick={onOpenSidebar}
                className="cursor-pointer border border-[#720e0e]/30 px-6 py-2 rounded-full text-[#720e0e] hover:bg-[#720e0e] hover:text-white uppercase transition-all duration-500"
                >
                Menu
                </button>
            </div>
        </nav>
    )
}
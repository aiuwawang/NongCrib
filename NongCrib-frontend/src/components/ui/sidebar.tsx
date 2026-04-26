interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay: Layar hitam transparan saat sidebar muncul */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />

      {/* Konten Sidebar */}
      <aside className={`fixed top-0 right-0 h-full w-150 bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8">
          <button onClick={onClose} className="cursor-pointer hidden md:block font-bold border border-[#720e0e]/30 mb-8 px-6 py-2 rounded-full text-[#720e0e] hover:bg-[#720e0e] hover:text-white transition-all duration-500">
            ✕ Close
          </button>
          
          <nav className="flex flex-col gap-6 text-[#720e0e] font-black text-2xl">
            <a href="#" onClick={onClose} className="transition-all duration-500 ease-in-out hover:tracking-widest hover:opacity-70">EAT</a>
            <a href="#" onClick={onClose} className="transition-all duration-500 ease-in-out hover:tracking-widest hover:opacity-70">DRINK</a>
          </nav>
        </div>
      </aside>
    </>
  )
}
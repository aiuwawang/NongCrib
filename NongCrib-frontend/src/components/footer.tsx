const Footer = () => {
    return (
        <footer className="bg-[#2f353b]/10 backdrop-blur-md border-t border-[#720e0e]/20 py-12 mt-20">
            <div className="w-full px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                
                    {/* Bagian Brand & Deskripsi Singkat */}
                    <div className="max-w-xs">
                        <h2 className="text-3xl font-black tracking-tighter text-[#720e0e] italic mb-8">
                            NongCrib
                        </h2>
                        <p className="text-xs text-[#720e0e]/60 leading-relaxed uppercase tracking-widest">
                            A refined sanctuary for the modern soul. Experience the essence of British elegance in every corner.
                        </p>
                    </div>

                    <div className="max-w-xs">
                        <h1 className="text-xl font-semibold tracking-widest text-[#720e0e] mb-5 font-serif">
                            Jl. Sumur Bandung Simpang No.5, RW.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132
                        </h1>
                    </div>

                    {/* Navigasi Footer */}
                    <div className="flex gap-16">
                        <div className="flex flex-col gap-4">
                        <h3 className="text-[14px] font-bold uppercase tracking-widest text-[#720e0e]">Navigation</h3>
                        <ul className="text-[14px] uppercase tracking-widest text-[#720e0e]/50 flex flex-col gap-2">
                            <li><a href="#profile" className="hover:text-[#720e0e] transition-colors">Profile</a></li>
                            <li><a href="#location" className="hover:text-[#720e0e] transition-colors">Location</a></li>
                            <li><a href="#menu" className="hover:text-[#720e0e] transition-colors">Catalogue</a></li>
                        </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                        <h3 className="text-[14px] font-bold uppercase tracking-widest text-[#720e0e]">Inquiry</h3>
                        <ul className="text-[14px] uppercase tracking-widest text-[#720e0e]/50 flex flex-col gap-2">
                            <li><a href="#instagram" className="hover:text-[#720e0e] transition-colors">Instagram</a></li>
                            <li><a href="#whatsapp" className="hover:text-[#720e0e] transition-colors">WhatsApp</a></li>
                            <li><a href="#email" className="hover:text-[#720e0e] transition-colors">email</a></li>
                        </ul>
                        </div>
                    </div>
                </div>

                {/* Garis Bawah & Copyright */}
                <div className="border-t border-[#720e0e]/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#720e0e]/40">
                        © 2026 NongCrib. All Rights Reserved.
                    </p>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#720e0e]/40">
                        Based in Bandung
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
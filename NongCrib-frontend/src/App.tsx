import { useState } from 'react'
import Header from './components/ui/header'
import Hero from './sections/hero'
import MainContent from './sections/mainContent'
import Sidebar from './components/ui/sidebar'
import Footer from './components/ui/footer'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-yellow-200 overflow-x-hidden">
      {/* Kirim fungsi pembuka ke Navbar */}
      <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
      
      {/* Kirim status dan fungsi penutup ke Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="pt-10"> {/* Tambah padding top karena navbar fixed */}
        <Hero />
        <MainContent />
      </main>

      {/* Footer diletakkan di luar main agar menjadi penutup halaman */}
      <Footer />
    </div>
  )
}

export default App
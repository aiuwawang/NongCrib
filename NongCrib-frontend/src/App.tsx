import { useState } from 'react'
import { Routes, Route } from 'react-router-dom' 
import Header from './components/ui/header'
import Hero from './sections/hero'
import MainContent from './sections/mainContent'
import Sidebar from './components/ui/sidebar'
import Footer from './components/ui/footer'
import AdminLogin from './pages/admin/login' 

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <Routes>
      {/* 3. Rute untuk Landing Page (URL: /) */}
      <Route path="/" element={
        <div className="bg-white min-h-screen font-sans selection:bg-yellow-200 overflow-x-hidden">
          <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <main className="pt-10">
            <Hero />
            <MainContent />
          </main>
          <Footer />
        </div>
      } />

      {/* 4. Rute untuk Login Admin (URL: /login-admin) */}
      <Route path="/login-admin" element={<AdminLogin />} />
    </Routes>
  )
}

export default App
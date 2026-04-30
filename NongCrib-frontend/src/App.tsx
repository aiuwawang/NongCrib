import { useState } from 'react'
import { Routes, Route } from 'react-router-dom' 
import Header from './components/header'
import Hero from './pages/landing/hero'
import MainContent from './pages/landing/mainContent'
import Sidebar from './components/sidebar'
import Footer from './components/footer'
import AdminLogin from './features/auth/components/login' 

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
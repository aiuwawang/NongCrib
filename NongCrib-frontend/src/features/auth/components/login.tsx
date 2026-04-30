import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });

      
      const token = response.data.access_token;
      localStorage.setItem('nongcrib_token', token);

      console.log("Login sukses!");
      
      navigate('/admin/dashboard'); 
      
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Check your credentials.');
    }
  };

  return (
    // Main Container: Pake warna background krem sangat pucat ala gambar contoh
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] px-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden">
        
        {/* Header: Warna Marun Gelap Total (#6a0a0a) */}
        <div className="bg-[#2f353b]/17 backdrop-blur-md py-12 px-10 text-center border-b-4 border-[#720e0e]">
          {/* Logo: Pake Font Serif tebal ala gambar, warna emas redup */}
          <h1 className="text-4xl font-black tracking-tighter text-[#720e0e] italic">
            NongCrib
          </h1>
          {/* Subtitle: Kecil, Emas Redup */}
          <p className="text-[#121212] text-xs mt-4 uppercase tracking-[0.4em] font-medium">
            Workers Only!!!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-7 bg-white">
          {/* Alert Error: Disesuaikan biar warnanya nggak terlalu norak */}
          {error && (
            <div className="bg-[#fff1f0] border-l-4 border-[#d13b3b] p-3 text-[#d13b3b] text-sm font-medium">
              {error}
            </div>
          )}

          {/* Input Email */}
          <div className="space-y-1">
            {/* Label: Abu-abu redup, kapital, tracking lebar ala gambar */}
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // Input: Krem sangat muda, rounded, transisi smooth
              // FOCUS: Kita ganti jadi warna Marun Gelap yang lu mau (#720e0e)
              className="w-full px-5 py-4 bg-[#fafbfc] border border-gray-200 rounded-lg text-sm text-[#333] transition-all focus:ring-2 focus:ring-[#720e0e] focus:border-[#720e0e] outline-none"
              required
            />
          </div>

          {/* Input Password */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // Input: Krem sangat muda, rounded, transisi smooth
              // FOCUS: Kita ganti jadi warna Marun Gelap yang lu mau (#720e0e)
              className="w-full px-5 py-4 bg-[#fafbfc] border border-gray-200 rounded-lg text-sm transition-all focus:ring-2 focus:ring-[#720e0e] focus:border-[#720e0e] outline-none"
              required
            />
          </div>

          {/* Tombol Login: GANTI TOTAL BUKAN BIRU LAGI */}
          {/* Pake warna Marun Gelap, Tulisan Emas Redup */}
          <button
            type="submit"
            className="w-full bg-[#6a0a0a] hover:bg-[#5a0909] text-[#fafbfc] font-bold py-5 rounded-lg shadow-md transition-all active:scale-[0.98] tracking-widest uppercase text-sm"
          >
            Login
          </button>
        </form>
        
        {/* Footer login kecil buat nambah estetika */}
        <div className="bg-[#f3f4f6] py-4 text-center border-t border-gray-100">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">
              © 2026 NONG CRIB. ALL RIGHTS RESERVED.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
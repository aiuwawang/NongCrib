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
    <div className="min-h-screen flex items-center justify-center bg-[#fdfcfb] px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
        
        <div className="bg-[#4a0404] py-10 px-8 text-center border-b-4 border-[#d4af37]">
          <h1 className="text-4xl font-serif font-extrabold text-[#d4af37] tracking-widest uppercase">
            Nong<span className="text-white">Crib</span>
          </h1>
          <p className="text-gray-300 text-xs mt-3 uppercase tracking-[0.3em]">Admin Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Alert Error kalau login gagal */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-3 text-red-700 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-1">
            <label className="block text-xs font-bold text-gray-500 uppercase">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4a0404] outline-none"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold text-gray-500 uppercase">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4a0404] outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1a2b4b] hover:bg-[#0f1a2e] text-[#d4af37] font-bold py-4 rounded-lg shadow-lg transition-all active:scale-[0.98]"
          >
            ENTER THE CRIB
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
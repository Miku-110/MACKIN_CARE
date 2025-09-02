// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Form.css';

const Login = () => {
  const [role, setRole] = useState('dokter');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Inisialisasi hook navigasi

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Login:', { role, ...formData });
    
    // --- TAMBAHKAN LOGIKA INI ---
    if (role === 'admin') {
      alert(`Login sebagai admin berhasil! Anda akan diarahkan ke Dashboard.`);
      // Arahkan ke dashboard admin
      navigate('/admin/dashboard'); 
    } else {
      alert(`Login sebagai dokter berhasil!`);
      // Arahkan ke halaman dokter (jika sudah ada nanti)
      // navigate('/dokter/profil'); 
    }
    // Di sini logika untuk verifikasi login ke server
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {/* ... sisa kode JSX tidak berubah ... */}
      <div className="role-selector">
        <button
          className={role === 'dokter' ? 'active' : ''}
          onClick={() => setRole('dokter')}
        >
          Dokter
        </button>
        <button
          className={role === 'admin' ? 'active' : ''}
          onClick={() => setRole('admin')}
        >
          Admin
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
      <p>
        Belum punya akun? <Link to="/register">Register di sini</Link>
      </p>
    </div>
  );
};

export default Login;
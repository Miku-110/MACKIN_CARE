// src/pages/Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { rumahSakit, spesialisasiDokter } from '../data/mockData';
import './Form.css'; // Kita akan buat file CSS ini nanti

const Register = () => {
  const [role, setRole] = useState('dokter'); // Default role is 'dokter'
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    spesialisasi: '',
    rumahSakit: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === 'dokter') {
      // Pastikan semua field dokter terisi
      if (!formData.username || !formData.email || !formData.password || !formData.spesialisasi || !formData.rumahSakit) {
        alert('Harap isi semua data untuk pendaftaran dokter!');
        return;
      }
    } else {
      // Pastikan semua field admin terisi
      if (!formData.username || !formData.email || !formData.password) {
        alert('Harap isi semua data untuk pendaftaran admin!');
        return;
      }
    }
    console.log('Data Pendaftaran:', { role, ...formData });
    alert(`Pendaftaran sebagai ${role} berhasil!`);
    // Di aplikasi nyata, Anda akan mengirim data ini ke server
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
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
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
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

        {/* Kolom tambahan khusus untuk Dokter */}
        {role === 'dokter' && (
          <>
            <div className="form-group">
              <label>Spesialisasi</label>
              <select
                name="spesialisasi"
                value={formData.spesialisasi}
                onChange={handleInputChange}
                required
              >
                <option value="">Pilih Spesialisasi</option>
                {spesialisasiDokter.map((spesialis, index) => (
                  <option key={index} value={spesialis}>{spesialis}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Rumah Sakit</label>
              <select
                name="rumahSakit"
                value={formData.rumahSakit}
                onChange={handleInputChange}
                required
              >
                <option value="">Pilih Rumah Sakit</option>
                {rumahSakit.map((rs, index) => (
                  <option key={index} value={rs}>{rs}</option>
                ))}
              </select>
            </div>
          </>
        )}

        <button type="submit" className="submit-btn">Register</button>
      </form>
      <p>
        Sudah punya akun? <Link to="/login">Login di sini</Link>
      </p>
    </div>
  );
};

export default Register;
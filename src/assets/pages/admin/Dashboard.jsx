// src/pages/admin/Dashboard.jsx
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-content">
      <h1>Selamat Datang, Admin!</h1>
      <p>Ini adalah halaman utama dashboard Anda. Anda bisa mengelola data dari sini.</p>
      
      <div className="dashboard-widgets">
        <div className="widget">
          <h2>150</h2>
          <p>Total Dokter</p>
        </div>
        <div className="widget">
          <h2>1,200</h2>
          <p>Total Pasien</p>
        </div>
        <div className="widget">
          <h2>5</h2>
          <p>Admin Terdaftar</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
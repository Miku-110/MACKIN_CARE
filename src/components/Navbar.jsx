import React from 'react';
import { Link } from 'react-router-dom';

// Gaya CSS yang telah dimodifikasi untuk membuat navbar "melayang"
const NavbarStyles = () => (
  <style>{`
    /* Mengimpor font Poppins dari Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    /* --- Gaya utama untuk navbar (MODIFIKASI DI SINI) --- */
    .navbar {
      /* 1. Mengatur posisi agar melayang dan tetap di atas */
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000; /* Memastikan navbar selalu di lapisan terdepan */

      /* 2. Mengubah latar belakang menjadi semi-transparan */
      background-color: rgba(31, 43, 108, 0.25); /* Warna #1F2B6C dengan transparansi 25% */
      backdrop-filter: blur(8px); /* Efek "kaca buram" yang modern (opsional) */
      -webkit-backdrop-filter: blur(8px); /* Untuk browser Safari */

      /* 3. Styling tata letak yang sudah ada */
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2.5rem;
      font-family: 'Poppins', sans-serif;
      
      /* 4. Mengganti box-shadow dengan border-bottom agar lebih pas untuk navbar transparan */
      border-bottom: 1px solid rgba(191, 210, 248, 0.2);
      transition: background-color 0.3s ease;
    }
    
    .navbar:hover {
        background-color: rgba(31, 43, 108, 0.4); /* Latar belakang sedikit lebih gelap saat hover */
    }

    /* Gaya untuk brand/logo */
    .nav-brand {
      font-size: 1.75rem;
      font-weight: 700;
      color: #BFD2F8;
      text-decoration: none;
    }

    /* Kontainer untuk link navigasi */
    .nav-links {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    /* Gaya dasar untuk link biasa */
    .nav-link-item {
      color: #FEFEFE;
      text-decoration: none;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    /* Efek hover untuk link biasa */
    .nav-link-item:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    /* Gaya khusus untuk tombol "Register" */
    .nav-button {
      color: #1F2B6C;
      background-color: #BFD2F8;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 600;
      padding: 0.5rem 1.5rem;
      border-radius: 6px;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }

    /* Efek hover untuk tombol "Register" */
    .nav-button:hover {
      background-color: #FEFEFE;
      transform: translateY(-2px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  `}</style>
);

const Navbar = () => {
  return (
    <>
      <NavbarStyles />
      <nav className="navbar">
        <Link to="/" className="nav-brand">MACKIN CARE</Link>
        <div className="nav-links">
          <Link to="/login" className="nav-link-item">Login</Link>
          <Link to="/register" className="nav-button">Register</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
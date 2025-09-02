import React from 'react';

// Baris ini sekarang diaktifkan untuk mengimpor gambar dari file lokal Anda.
// Pastikan path '../assets/pages/Screenshot 2025-09-01 111948.png' sudah benar.
import BackgroundImageFromFile from 'D:/Kuliah/Magang/Project/react-login-register/src/assets/pages/Screenshot 2025-09-01 155413.png';

// Komponen ini berisi semua gaya CSS untuk halaman utama.
const HomeStyles = () => (
  <style>{`
    /* Mengimpor font 'Poppins' untuk tampilan yang modern dan bersih */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    /* Kontainer utama yang menutupi seluruh layar (full view) */
    .home-container {
      position: relative;
      height: 100vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-family: 'Poppins', sans-serif;
      background-size: cover;
      background-position: center;
      overflow: hidden;
    }

    /* Lapisan gelap transparan di atas gambar latar */
    .home-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }

    /* Konten teks yang berada di atas lapisan overlay */
    .home-content {
      position: relative;
      color: white;
      padding: 20px;
      z-index: 2;
    }

    .home-content h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    }

    .home-content p {
      font-size: 1.25rem;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
    }
    
    /* Penyesuaian untuk layar kecil (mobile) */
    @media (max-width: 768px) {
      .home-content h1 {
        font-size: 2.2rem;
      }
      .home-content p {
        font-size: 1rem;
      }
    }
  `}</style>
);

const Home = () => {
  // Sekarang kita menggunakan gambar yang diimpor dari file lokal.
  const backgroundImageUrl = BackgroundImageFromFile;
  
  // Baris yang menggunakan URL dari internet dinonaktifkan.
  // const backgroundImageUrl = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop';


  return (
    <>
      <HomeStyles />
      <div 
        className="home-container" 
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="home-overlay"></div>

        <div className="home-content">
          <h1>
            Selamat Datang di Sistem MACK<span style={{ color: '#1F2B6C' }}>IN</span>{' '}
            CARE
          </h1>
          <p>Silakan login atau register untuk melanjutkan.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
// src/App.jsx
import React from 'react';
import {createBrowserRouter, RouterProvider,Outlet,} from 'react-router-dom';
import Navbar from 'D:/Kuliah/Magang/Project/react-login-register/src/components/Navbar';
import DashboardLayout from 'D:/Kuliah/Magang/Project/react-login-register/src/layouts/DashboardLayouts';
import Home from 'D:/Kuliah/Magang/Project/react-login-register/src/assets/pages/Home';
import Login from 'D:/Kuliah/Magang/Project/react-login-register/src/assets/pages/Login';
import Register from 'D:/Kuliah/Magang/Project/react-login-register/src/assets/pages/Register';
import Dashboard from 'D:/Kuliah/Magang/Project/react-login-register/src/assets/pages/admin/Dashboard';

import './App.css';

// Layout untuk Halaman Publik (dengan Navbar)
const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Ini akan merender Home, Login, atau Register */}
      </main>
    </>
  );
};

// Konfigurasi Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />, // Semua rute di sini akan punya Navbar
    children: [
      {
        index: true, // Ini untuk path '/'
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/admin',
    element: <DashboardLayout />, // Semua rute di sini akan punya Sidebar
    children: [
      {
        // Path default untuk /admin akan dialihkan ke /admin/dashboard
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      // Tambahkan rute admin lainnya di sini nanti
      // {
      //   path: 'doctors',
      //   element: <ManajemenDokter />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
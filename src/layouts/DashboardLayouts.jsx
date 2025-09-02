// src/layouts/DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from 'D:/Kuliah/Magang/Project/react-login-register/src/components/Sidebar';
import './DashboardLayouts';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main-content">
        {/* Outlet akan merender komponen anak dari Route (misal: Dashboard.jsx) */}
        <Outlet /> 
      </div>
    </div>
  );
};

export default DashboardLayout;
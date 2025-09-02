// src/components/Sidebar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';
import { FaTachometerAlt, FaUserMd, FaUserShield, FaHospital } from 'react-icons/fa'; // Contoh ikon

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <h3>Admin Panel</h3>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            {/* NavLink akan memberi class 'active' jika path-nya cocok */}
            <NavLink to="/admin/dashboard" end>
              <FaTachometerAlt className="nav-icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/doctors">
              <FaUserMd className="nav-icon" />
              <span>Manajemen Dokter</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/admins">
              <FaUserShield className="nav-icon" />
              <span>Manajemen Admin</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/hospitals">
              <FaHospital className="nav-icon" />
              <span>Manajemen RS</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
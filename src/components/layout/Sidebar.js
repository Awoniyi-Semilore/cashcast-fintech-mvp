import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiLayout, 
  FiFileText, 
  FiTrendingUp, 
  FiBell, 
  FiSettings, 
  FiLogOut,
  FiPlus,
  FiX,
  FiMenu
} from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import './Sidebar.css';

const Sidebar = ({ onAddInvoice, mobileOpen, onMobileClose }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: FiLayout, label: 'Dashboard', path: '/dashboard' },
    { icon: FiFileText, label: 'Invoices', path: '/invoices' },
    { icon: FiTrendingUp, label: 'Predictions', path: '/predictions' },
    { icon: FiBell, label: 'Reminders', path: '/reminders' },
    { icon: FiSettings, label: 'Settings', path: '/settings' },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Close mobile sidebar on route change
  useEffect(() => {
    if (onMobileClose) onMobileClose();
  }, [location.pathname]);

  const sidebarContent = (
    <>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="7" fill="url(#sidebar-logo-gradient)" />
            <path d="M8 14h12M14 8v12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <defs>
              <linearGradient id="sidebar-logo-gradient" x1="0" y1="0" x2="28" y2="28">
                <stop stopColor="#00d4aa" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          <span className="sidebar-logo-text">CashCast</span>
        </div>
        {/* Mobile close button inside sidebar */}
        <button className="sidebar-mobile-close" onClick={onMobileClose}>
          <FiX />
        </button>
      </div>

      <div className="sidebar-quick-action">
        <button className="sidebar-add-btn" onClick={onAddInvoice}>
          <FiPlus />
          <span>New Invoice</span>
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
            onClick={() => { if (window.innerWidth < 1024) onMobileClose(); }}
          >
            <item.icon className="sidebar-link-icon" />
            <span className="sidebar-link-label">{item.label}</span>
            {({ isActive }) => isActive && (
              <motion.div
                className="sidebar-active-indicator"
                layoutId="sidebar-active"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-user-avatar">
            {user?.displayName?.[0] || user?.email?.[0] || 'U'}
          </div>
          <div className="sidebar-user-info">
            <span className="sidebar-user-name">{user?.displayName || 'User'}</span>
            <span className="sidebar-user-email">{user?.email}</span>
          </div>
        </div>
        <button className="sidebar-logout" onClick={handleLogout}>
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar — always visible */}
      <aside className="sidebar-desktop">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar — overlay with backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="sidebar-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onMobileClose}
            />
            <motion.aside
              className="sidebar-mobile"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;


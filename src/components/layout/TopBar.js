import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, 
  FiBell, 
  FiMenu,
  FiX,
  FiChevronDown
} from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import './TopBar.css';

const TopBar = ({ onMenuClick, notificationCount = 3 }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const notifications = [
    { id: 1, message: 'TechFlow payment predicted for May 16', time: '2h ago', type: 'prediction' },
    { id: 2, message: 'StartupNest paid $1,500 early', time: '5h ago', type: 'payment' },
    { id: 3, message: 'DataPulse flagged as high risk', time: '1d ago', type: 'risk' },
  ];

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="topbar-menu-btn" onClick={onMenuClick}>
          <FiMenu />
        </button>
        <div className="topbar-search">
          <FiSearch className="topbar-search-icon" />
          <input 
            type="text" 
            placeholder="Search invoices, clients..." 
            className="topbar-search-input"
          />
        </div>
      </div>

      <div className="topbar-right">
        <div className="topbar-notifications">
          <button 
            className="topbar-icon-btn"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
          >
            <FiBell />
            {notificationCount > 0 && (
              <span className="topbar-badge">{notificationCount}</span>
            )}
          </button>

          <AnimatePresence>
            {notificationsOpen && (
              <motion.div
                className="topbar-dropdown"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="topbar-dropdown-header">
                  <h4>Notifications</h4>
                  <span>{notificationCount} new</span>
                </div>
                <div className="topbar-dropdown-list">
                  {notifications.map((notif) => (
                    <div key={notif.id} className={`topbar-notification-item topbar-notification-${notif.type}`}>
                      <p>{notif.message}</p>
                      <span>{notif.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="topbar-user">
          <div className="topbar-user-avatar">
            {user?.displayName?.[0] || user?.email?.[0] || 'U'}
          </div>
          <div className="topbar-user-info">
            <span className="topbar-user-name">{user?.displayName || 'User'}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;

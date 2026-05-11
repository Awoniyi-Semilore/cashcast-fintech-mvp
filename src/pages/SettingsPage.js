import React from 'react';
import { motion } from 'framer-motion';
import { FiSettings } from 'react-icons/fi';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import Card from '../components/ui/Card';
import './SettingsPage.css';

const SettingsPage = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className={`dashboard-main ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <div className="dashboard-content">
          <motion.div
            className="settings-header"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="settings-title">
              <FiSettings className="settings-icon" />
              <div>
                <h1>Settings</h1>
                <p>Manage your account preferences</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="settings-card">
              <div className="settings-section">
                <h3>Account Settings</h3>
                <p className="settings-placeholder">
                  Profile settings, notification preferences, and integration options 
                  would be configured here in the full production version.
                </p>
              </div>

              <div className="settings-section">
                <h3>AI Preferences</h3>
                <p className="settings-placeholder">
                  Configure prediction sensitivity, reminder timing, and 
                  communication channel preferences.
                </p>
              </div>

              <div className="settings-section">
                <h3>Billing</h3>
                <p className="settings-placeholder">
                  Subscription management, payment methods, and invoice history.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

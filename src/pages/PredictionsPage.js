import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCpu } from 'react-icons/fi';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import PredictionCard from '../components/predictions/PredictionCard';
import { mockInvoices } from '../data/mockData';
import './PredictionsPage.css';

const PredictionsPage = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pendingInvoices = mockInvoices.filter(inv => inv.status === 'pending');

  return (
    <div className="dashboard-page">
      <Sidebar 
        mobileOpen={mobileSidebarOpen}
        onMobileClose={() => setMobileSidebarOpen(false)}
      />
      
      <div className="dashboard-main">
        <TopBar onMenuClick={() => setMobileSidebarOpen(true)} />
        
        <div className="dashboard-content">
          <motion.div
            className="predictions-header"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="predictions-title">
              <FiCpu className="predictions-icon" />
              <div>
                <h1>AI Predictions</h1>
                <p>Payment predictions powered by machine learning</p>
              </div>
            </div>
          </motion.div>

          <div className="predictions-summary">
            <motion.div
              className="predictions-summary-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="summary-label">Total Predicted</span>
              <span className="summary-value">$28,400</span>
            </motion.div>
            <motion.div
              className="predictions-summary-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="summary-label">Avg. Confidence</span>
              <span className="summary-value">74%</span>
            </motion.div>
            <motion.div
              className="predictions-summary-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="summary-label">High Risk</span>
              <span className="summary-value summary-risk">1</span>
            </motion.div>
          </div>

          <div className="predictions-grid">
            {pendingInvoices.map((invoice, index) => (
              <PredictionCard 
                key={invoice.id} 
                invoice={invoice} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionsPage;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiDollarSign, 
  FiClock, 
  FiCheckCircle, 
  FiAlertTriangle,
  FiTrendingUp,
  FiActivity
} from 'react-icons/fi';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import StatCard from '../components/dashboard/StatCard';
import CashflowChart from '../components/dashboard/CashflowChart';
import InvoiceList from '../components/invoices/InvoiceList';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import AddInvoiceModal from '../components/invoices/AddInvoiceModal';
import { mockInvoices, mockStats, mockActivity } from '../data/mockData';
import './DashboardPage.css';

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [invoices, setInvoices] = useState(mockInvoices);

  const handleAddInvoice = (newInvoice) => {
    setInvoices([newInvoice, ...invoices]);
  };

  const pendingInvoices = invoices.filter(inv => inv.status === 'pending');
  const paidInvoices = invoices.filter(inv => inv.status === 'paid');

  return (
    <div className="dashboard-page">
      <Sidebar onAddInvoice={() => setAddModalOpen(true)} />

      <div className={`dashboard-main ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <div className="dashboard-content">
          <motion.div
            className="dashboard-header"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h1>Dashboard</h1>
              <p>Here's what's happening with your cashflow</p>
            </div>
          </motion.div>

          <div className="stats-grid">
            <StatCard
              title="Expected Income"
              value={`$${mockStats.totalExpected.toLocaleString()}`}
              subtitle="Next 30 days"
              icon={FiDollarSign}
              trend="up"
              trendValue={12.5}
              delay={0}
            />
            <StatCard
              title="Pending Invoices"
              value={mockStats.activeInvoices.toString()}
              subtitle={`$${mockStats.totalPending.toLocaleString()} total`}
              icon={FiClock}
              delay={0.1}
            />
            <StatCard
              title="Paid This Month"
              value={`$${mockStats.totalPaid.toLocaleString()}`}
              subtitle="3 invoices cleared"
              icon={FiCheckCircle}
              trend="up"
              trendValue={8.2}
              delay={0.2}
            />
            <StatCard
              title="High Risk"
              value={mockStats.highRiskCount.toString()}
              subtitle="Requires attention"
              icon={FiAlertTriangle}
              delay={0.3}
            />
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-main-col">
              <CashflowChart />

              <div className="dashboard-section">
                <InvoiceList 
                  invoices={pendingInvoices} 
                  title="Pending Invoices" 
                />
              </div>
            </div>

            <div className="dashboard-side-col">
              <ActivityFeed activities={mockActivity} />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="prediction-accuracy-card">
                  <div className="prediction-accuracy-header">
                    <FiTrendingUp />
                    <h4>AI Accuracy</h4>
                  </div>
                  <div className="prediction-accuracy-value">
                    <span className="accuracy-percent">{mockStats.predictionAccuracy}%</span>
                    <span className="accuracy-label">Prediction accuracy this month</span>
                  </div>
                  <div className="prediction-accuracy-bar">
                    <div 
                      className="prediction-accuracy-fill" 
                      style={{ width: `${mockStats.predictionAccuracy}%` }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="avg-payment-card">
                  <div className="avg-payment-header">
                    <FiActivity />
                    <h4>Avg. Payment Time</h4>
                  </div>
                  <div className="avg-payment-value">
                    <span className="avg-days">{mockStats.avgPaymentTime}</span>
                    <span className="avg-label">days from invoice to payment</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <AddInvoiceModal 
        isOpen={addModalOpen} 
        onClose={() => setAddModalOpen(false)} 
        onAdd={handleAddInvoice}
      />
    </div>
  );
};

export default DashboardPage;

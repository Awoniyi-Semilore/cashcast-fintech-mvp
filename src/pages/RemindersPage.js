import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBell, FiMessageCircle, FiMail, FiSmartphone, FiSend } from 'react-icons/fi';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import ReminderPreview from '../components/reminders/ReminderPreview';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { mockInvoices } from '../data/mockData';
import './RemindersPage.css';

const RemindersPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(mockInvoices[0]);
  const pendingInvoices = mockInvoices.filter(inv => inv.status === 'pending');

  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className={`dashboard-main ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <div className="dashboard-content">
          <motion.div
            className="reminders-header"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="reminders-title">
              <FiBell className="reminders-icon" />
              <div>
                <h1>Smart Reminders</h1>
                <p>AI-generated follow-up messages for your clients</p>
              </div>
            </div>
          </motion.div>

          <div className="reminders-grid">
            <div className="reminders-invoices">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="reminders-list-card">
                  <h3>Pending Invoices</h3>
                  <p className="reminders-list-subtitle">
                    Select an invoice to generate a personalized reminder
                  </p>

                  <div className="reminders-invoice-list">
                    {pendingInvoices.map((invoice, index) => (
                      <motion.div
                        key={invoice.id}
                        className={`reminders-invoice-item ${selectedInvoice.id === invoice.id ? 'reminders-invoice-active' : ''}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        onClick={() => setSelectedInvoice(invoice)}
                      >
                        <div className="reminders-invoice-info">
                          <h4>{invoice.clientName}</h4>
                          <span className="reminders-invoice-desc">{invoice.description}</span>
                        </div>
                        <div className="reminders-invoice-meta">
                          <span className="reminders-invoice-amount">
                            ${invoice.amount.toLocaleString()}
                          </span>
                          <Badge 
                            variant={invoice.aiPrediction.riskLevel === 'high' ? 'danger' : 'warning'} 
                            size="sm"
                          >
                            {invoice.aiPrediction.riskLevel}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="reminders-stats-card">
                  <h3>Reminder Stats</h3>
                  <div className="reminders-stat-row">
                    <span>Sent this month</span>
                    <span className="reminders-stat-value">24</span>
                  </div>
                  <div className="reminders-stat-row">
                    <span>Response rate</span>
                    <span className="reminders-stat-value reminders-stat-good">68%</span>
                  </div>
                  <div className="reminders-stat-row">
                    <span>Avg. time saved</span>
                    <span className="reminders-stat-value">4.2 hrs/week</span>
                  </div>
                </Card>
              </motion.div>
            </div>

            <div className="reminders-preview-area">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <ReminderPreview invoice={selectedInvoice} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="reminders-schedule-card">
                  <h3>Schedule Settings</h3>
                  <p className="reminders-schedule-desc">
                    AI automatically determines the best time to send reminders based on:
                  </p>
                  <ul className="reminders-schedule-list">
                    <li>
                      <FiMessageCircle /> Client timezone and active hours
                    </li>
                    <li>
                      <FiMail /> Previous response patterns
                    </li>
                    <li>
                      <FiSmartphone /> Preferred communication channel
                    </li>
                    <li>
                      <FiSend /> Invoice urgency and risk level
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemindersPage;

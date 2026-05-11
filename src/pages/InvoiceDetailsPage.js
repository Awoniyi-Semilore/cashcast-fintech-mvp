import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiArrowLeft, 
  FiMail, 
  FiCalendar, 
  FiDollarSign, 
  FiFileText,
  FiTrendingUp,
  FiAlertTriangle,
  FiCheckCircle,
  FiClock,
  FiSend
} from 'react-icons/fi';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import PredictionCard from '../components/predictions/PredictionCard';
import ReminderPreview from '../components/reminders/ReminderPreview';
import { mockInvoices } from '../data/mockData';
import './InvoiceDetailsPage.css';

const InvoiceDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const invoice = mockInvoices.find(inv => inv.id === id) || mockInvoices[0];

  const statusConfig = {
    pending: { icon: FiClock, color: 'warning', label: 'Pending' },
    paid: { icon: FiCheckCircle, color: 'success', label: 'Paid' },
    overdue: { icon: FiAlertTriangle, color: 'danger', label: 'Overdue' },
  };

  const config = statusConfig[invoice.status];
  const StatusIcon = config.icon;

  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className={`dashboard-main ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <div className="dashboard-content">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button className="back-btn" onClick={() => navigate('/dashboard')}>
              <FiArrowLeft /> Back to Dashboard
            </button>
          </motion.div>

          <div className="invoice-details-grid">
            <div className="invoice-details-main">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="invoice-details-card" padding="xl">
                  <div className="invoice-details-header">
                    <div className="invoice-details-title">
                      <h1>Invoice #{invoice.id}</h1>
                      <Badge variant={config.color} size="md">
                        <StatusIcon /> {config.label}
                      </Badge>
                    </div>
                    <div className="invoice-details-amount">
                      <span className="amount-currency">{invoice.currency}</span>
                      <span className="amount-value">{invoice.amount.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="invoice-details-info">
                    <div className="info-row">
                      <div className="info-item">
                        <FiFileText />
                        <div>
                          <span className="info-label">Description</span>
                          <span className="info-value">{invoice.description}</span>
                        </div>
                      </div>
                    </div>

                    <div className="info-row">
                      <div className="info-item">
                        <FiMail />
                        <div>
                          <span className="info-label">Client Email</span>
                          <span className="info-value">{invoice.clientEmail}</span>
                        </div>
                      </div>
                      <div className="info-item">
                        <FiCalendar />
                        <div>
                          <span className="info-label">Due Date</span>
                          <span className="info-value">{invoice.dueDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="info-row">
                      <div className="info-item">
                        <FiCalendar />
                        <div>
                          <span className="info-label">Issued Date</span>
                          <span className="info-value">{invoice.issuedDate}</span>
                        </div>
                      </div>
                      {invoice.paidDate && (
                        <div className="info-item">
                          <FiCheckCircle />
                          <div>
                            <span className="info-label">Paid Date</span>
                            <span className="info-value">{invoice.paidDate}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {invoice.status === 'pending' && (
                    <div className="invoice-details-actions">
                      <Button variant="primary" icon={FiSend}>
                        Send Reminder
                      </Button>
                      <Button variant="secondary" icon={FiDollarSign}>
                        Mark as Paid
                      </Button>
                    </div>
                  )}
                </Card>
              </motion.div>

              {invoice.status === 'pending' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <PredictionCard invoice={invoice} />
                </motion.div>
              )}
            </div>

            <div className="invoice-details-side">
              {invoice.status === 'pending' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <ReminderPreview invoice={invoice} />
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="client-history-card">
                  <h3>Client History</h3>
                  <div className="client-history-item">
                    <span className="history-label">Total Invoices</span>
                    <span className="history-value">8</span>
                  </div>
                  <div className="client-history-item">
                    <span className="history-label">Avg. Payment Time</span>
                    <span className="history-value">2.3 days</span>
                  </div>
                  <div className="client-history-item">
                    <span className="history-label">Reliability Score</span>
                    <span className="history-value history-good">95%</span>
                  </div>
                  <div className="client-history-item">
                    <span className="history-label">Late Payments</span>
                    <span className="history-value history-good">0</span>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetailsPage;

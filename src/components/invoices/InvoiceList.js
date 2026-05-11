import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiClock, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import './InvoiceList.css';

const InvoiceList = ({ invoices, title = "Recent Invoices", showViewAll = true }) => {
  const navigate = useNavigate();
  const displayInvoices = invoices.slice(0, 5);

  const statusConfig = {
    pending: { icon: FiClock, color: 'warning', label: 'Pending' },
    paid: { icon: FiCheckCircle, color: 'success', label: 'Paid' },
    overdue: { icon: FiAlertCircle, color: 'danger', label: 'Overdue' },
  };

  return (
    <Card className="invoice-list-card">
      <div className="invoice-list-header">
        <h3>{title}</h3>
        {showViewAll && (
          <button className="invoice-list-view-all" onClick={() => navigate('/invoices')}>
            View All <FiArrowRight />
          </button>
        )}
      </div>

      <div className="invoice-list">
        {displayInvoices.map((invoice, index) => {
          const config = statusConfig[invoice.status];
          const StatusIcon = config.icon;

          return (
            <motion.div
              key={invoice.id}
              className="invoice-list-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => navigate(`/invoice/${invoice.id}`)}
            >
              <div className="invoice-list-item-main">
                <div className={`invoice-list-status invoice-list-status-${invoice.status}`}>
                  <StatusIcon />
                </div>
                <div className="invoice-list-info">
                  <h4>{invoice.clientName}</h4>
                  <p>{invoice.description}</p>
                </div>
              </div>

              <div className="invoice-list-item-meta">
                <span className="invoice-list-amount">
                  ${invoice.amount.toLocaleString()}
                </span>
                <Badge variant={config.color} size="sm">
                  {config.label}
                </Badge>
                <span className="invoice-list-date">
                  Due {invoice.dueDate}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
};

export default InvoiceList;

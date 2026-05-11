import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiFileText, FiPlus, FiSearch, FiFilter } from 'react-icons/fi';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import InvoiceList from '../components/invoices/InvoiceList';
import AddInvoiceModal from '../components/invoices/AddInvoiceModal';
import { mockInvoices } from '../data/mockData';
import './InvoicesListPage.css';

const InvoicesListPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [invoices, setInvoices] = useState(mockInvoices);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const handleAddInvoice = (newInvoice) => {
    setInvoices([newInvoice, ...invoices]);
  };

  const filteredInvoices = filter === 'all' 
    ? invoices 
    : invoices.filter(inv => inv.status === filter);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'pending', label: 'Pending' },
    { id: 'paid', label: 'Paid' },
  ];

  return (
    <div className="dashboard-page">
      <Sidebar onAddInvoice={() => setAddModalOpen(true)} />

      <div className={`dashboard-main ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <div className="dashboard-content">
          <motion.div
            className="invoices-header"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="invoices-title">
              <FiFileText className="invoices-icon" />
              <div>
                <h1>Invoices</h1>
                <p>Manage and track all your invoices</p>
              </div>
            </div>
            <button 
              className="invoices-add-btn"
              onClick={() => setAddModalOpen(true)}
            >
              <FiPlus /> New Invoice
            </button>
          </motion.div>

          <div className="invoices-filters">
            <div className="invoices-filter-tabs">
              {filters.map((f) => (
                <button
                  key={f.id}
                  className={`invoices-filter-tab ${filter === f.id ? 'invoices-filter-active' : ''}`}
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}
                  <span className="invoices-filter-count">
                    {f.id === 'all' ? invoices.length : invoices.filter(inv => inv.status === f.id).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <InvoiceList 
              invoices={filteredInvoices} 
              title="" 
              showViewAll={false}
            />
          </motion.div>
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

export default InvoicesListPage;

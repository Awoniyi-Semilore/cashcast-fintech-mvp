import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { FiUser, FiMail, FiDollarSign, FiFileText, FiCalendar } from 'react-icons/fi';
import './AddInvoiceModal.css';

const AddInvoiceModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    amount: '',
    description: '',
    dueDate: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.clientName.trim()) newErrors.clientName = 'Client name is required';
    if (!formData.clientEmail.trim()) newErrors.clientEmail = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.clientEmail)) {
      newErrors.clientEmail = 'Invalid email address';
    }
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Valid amount is required';
    }
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.dueDate) newErrors.dueDate = 'Due date is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newInvoice = {
      id: `inv_${Date.now()}`,
      clientName: formData.clientName,
      clientEmail: formData.clientEmail,
      amount: parseFloat(formData.amount),
      currency: 'USD',
      status: 'pending',
      dueDate: formData.dueDate,
      issuedDate: new Date().toISOString().split('T')[0],
      description: formData.description,
      aiPrediction: {
        confidence: Math.floor(Math.random() * 40) + 60,
        predictedDate: formData.dueDate,
        riskLevel: Math.random() > 0.7 ? 'high' : Math.random() > 0.4 ? 'medium' : 'low',
        tags: ['new invoice', 'manual entry']
      }
    };

    onAdd(newInvoice);
    setFormData({ clientName: '', clientEmail: '', amount: '', description: '', dueDate: '' });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Invoice" size="md">
      <form onSubmit={handleSubmit} className="add-invoice-form">
        <Input
          label="Client Name"
          name="clientName"
          placeholder="e.g. TechFlow Solutions"
          value={formData.clientName}
          onChange={handleChange}
          error={errors.clientName}
          icon={FiUser}
        />

        <Input
          label="Client Email"
          name="clientEmail"
          type="email"
          placeholder="accounts@company.com"
          value={formData.clientEmail}
          onChange={handleChange}
          error={errors.clientEmail}
          icon={FiMail}
        />

        <Input
          label="Amount"
          name="amount"
          type="number"
          placeholder="0.00"
          value={formData.amount}
          onChange={handleChange}
          error={errors.amount}
          icon={FiDollarSign}
        />

        <Input
          label="Description"
          name="description"
          placeholder="e.g. Website redesign project"
          value={formData.description}
          onChange={handleChange}
          error={errors.description}
          icon={FiFileText}
        />

        <Input
          label="Due Date"
          name="dueDate"
          type="date"
          value={formData.dueDate}
          onChange={handleChange}
          error={errors.dueDate}
          icon={FiCalendar}
        />

        <div className="add-invoice-actions">
          <Button variant="ghost" onClick={onClose} type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Create Invoice
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddInvoiceModal;

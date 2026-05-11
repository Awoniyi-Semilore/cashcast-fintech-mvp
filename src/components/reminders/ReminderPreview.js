import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCopy, FiCheck, FiMessageCircle, FiMail, FiSmartphone } from 'react-icons/fi';
import Card from '../ui/Card';
import Button from '../ui/Button';
import './ReminderPreview.css';

const ReminderPreview = ({ invoice }) => {
  const [activeTab, setActiveTab] = useState('whatsapp');
  const [copied, setCopied] = useState(false);
  const [generated, setGenerated] = useState(false);

  const clientName = invoice?.clientName || 'Tunde';
  const projectName = invoice?.description || 'logo project';
  const amount = invoice?.amount || 1500;

  const messages = {
    whatsapp: `Hi ${clientName}, just checking in on the ${projectName}. Hope all is well. Here's a secure payment link whenever you're ready: cashcast.app/pay/abc123`,
    email: `Subject: Gentle Reminder - Invoice for ${projectName}

Dear ${clientName},

I hope this message finds you well. I wanted to follow up on the invoice for the ${projectName} ($${amount.toLocaleString()}).

If you have any questions or need anything from my end, please don't hesitate to reach out.

Secure payment link: cashcast.app/pay/abc123

Best regards,
Your Name`,
    sms: `Hi ${clientName}, quick reminder about the ${projectName} invoice ($${amount.toLocaleString()}). Payment link: cashcast.app/pay/abc123. Thanks!`
  };

  const tabs = [
    { id: 'whatsapp', label: 'WhatsApp', icon: FiMessageCircle },
    { id: 'email', label: 'Email', icon: FiMail },
    { id: 'sms', label: 'SMS', icon: FiSmartphone },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(messages[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerateLink = () => {
    setGenerated(true);
    setTimeout(() => setGenerated(false), 3000);
  };

  return (
    <Card className="reminder-preview">
      <h3 className="reminder-preview-title">AI-Generated Reminder</h3>
      <p className="reminder-preview-subtitle">
        Personalized message based on client communication style
      </p>

      <div className="reminder-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`reminder-tab ${activeTab === tab.id ? 'reminder-tab-active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <tab.icon />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="reminder-message-container"
        >
          {activeTab === 'whatsapp' && (
            <div className="reminder-whatsapp">
              <div className="reminder-whatsapp-header">
                <div className="reminder-whatsapp-avatar">{clientName[0]}</div>
                <span>{clientName}</span>
              </div>
              <div className="reminder-whatsapp-bubble">
                <p>{messages.whatsapp}</p>
                <span className="reminder-whatsapp-time">Now</span>
              </div>
            </div>
          )}

          {activeTab === 'email' && (
            <div className="reminder-email">
              <pre>{messages.email}</pre>
            </div>
          )}

          {activeTab === 'sms' && (
            <div className="reminder-sms">
              <div className="reminder-sms-bubble">
                <p>{messages.sms}</p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="reminder-actions">
        <Button variant="secondary" size="sm" onClick={handleCopy} icon={copied ? FiCheck : FiCopy}>
          {copied ? 'Copied!' : 'Copy Message'}
        </Button>
        <Button 
          variant="primary" 
          size="sm" 
          onClick={handleGenerateLink}
          loading={generated}
        >
          {generated ? 'Link Generated!' : 'Generate Payment Link'}
        </Button>
      </div>
    </Card>
  );
};

export default ReminderPreview;

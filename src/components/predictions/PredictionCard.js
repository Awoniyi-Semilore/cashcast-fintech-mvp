import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiAlertTriangle, FiCheckCircle, FiClock } from 'react-icons/fi';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import './PredictionCard.css';

const PredictionCard = ({ invoice, index = 0 }) => {
  const { aiPrediction, clientName, amount, dueDate } = invoice;
  const { confidence, predictedDate, riskLevel, tags } = aiPrediction;

  const riskConfig = {
    low: { icon: FiCheckCircle, color: 'success', label: 'Low Risk' },
    medium: { icon: FiClock, color: 'warning', label: 'Medium Risk' },
    high: { icon: FiAlertTriangle, color: 'danger', label: 'High Risk' },
  };

  const config = riskConfig[riskLevel];
  const RiskIcon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="prediction-card" glow={riskLevel === 'high'}>
        <div className="prediction-header">
          <div className="prediction-client">
            <h4>{clientName}</h4>
            <span className="prediction-amount">${amount.toLocaleString()}</span>
          </div>
          <Badge variant={config.color}>{config.label}</Badge>
        </div>

        <div className="prediction-confidence">
          <div className="prediction-confidence-header">
            <span>AI Confidence</span>
            <span className="prediction-confidence-value">{confidence}%</span>
          </div>
          <div className="prediction-confidence-bar">
            <motion.div
              className={`prediction-confidence-fill prediction-confidence-${riskLevel}`}
              initial={{ width: 0 }}
              animate={{ width: `${confidence}%` }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </div>

        <div className="prediction-details">
          <div className="prediction-detail">
            <FiTrendingUp className="prediction-detail-icon" />
            <div>
              <span className="prediction-detail-label">Predicted Payment</span>
              <span className="prediction-detail-value">{predictedDate}</span>
            </div>
          </div>
          <div className="prediction-detail">
            <FiClock className="prediction-detail-icon" />
            <div>
              <span className="prediction-detail-label">Due Date</span>
              <span className="prediction-detail-value">{dueDate}</span>
            </div>
          </div>
        </div>

        <div className="prediction-tags">
          {tags.map((tag, i) => (
            <Badge key={i} variant="default" size="sm">{tag}</Badge>
          ))}
        </div>

        <div className={`prediction-insight prediction-insight-${riskLevel}`}>
          <RiskIcon />
          <p>
            {riskLevel === 'low' && `85% chance payment arrives between ${predictedDate} and due date.`}
            {riskLevel === 'medium' && `Payment may be delayed by 2-3 days. Consider gentle reminder.`}
            {riskLevel === 'high' && `High probability of late payment. Proactive follow-up recommended.`}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default PredictionCard;

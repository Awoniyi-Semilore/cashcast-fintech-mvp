import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiCheckCircle, FiBell, FiAlertTriangle, FiFileText } from 'react-icons/fi';
import Card from '../ui/Card';
import './ActivityFeed.css';

const ActivityFeed = ({ activities }) => {
  const iconMap = {
    brain: FiCpu,
    check: FiCheckCircle,
    bell: FiBell,
    alert: FiAlertTriangle,
    file: FiFileText,
  };

  const typeColors = {
    prediction: '#8b5cf6',
    payment: '#10b981',
    reminder: '#3b82f6',
    risk: '#ef4444',
    invoice: '#f59e0b',
  };

  return (
    <Card className="activity-feed">
      <h3 className="activity-feed-title">Recent Activity</h3>
      <div className="activity-feed-list">
        {activities.map((activity, index) => {
          const Icon = iconMap[activity.icon];
          const color = typeColors[activity.type];

          return (
            <motion.div
              key={activity.id}
              className="activity-feed-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="activity-feed-icon" style={{ background: `${color}15`, color }}>
                <Icon />
              </div>
              <div className="activity-feed-content">
                <p className="activity-feed-message">{activity.message}</p>
                <span className="activity-feed-time">{activity.time}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
};

export default ActivityFeed;

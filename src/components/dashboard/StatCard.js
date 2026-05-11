import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import './StatCard.css';

const StatCard = ({ title, value, subtitle, icon: Icon, trend, trendValue, delay = 0 }) => {
  const trendPositive = trend === 'up';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <Card className="stat-card">
        <div className="stat-card-header">
          <div className="stat-card-icon">
            <Icon />
          </div>
          {trend && (
            <span className={`stat-card-trend stat-card-trend-${trendPositive ? 'up' : 'down'}`}>
              {trendPositive ? '+' : '-'}{trendValue}%
            </span>
          )}
        </div>
        <div className="stat-card-body">
          <h3 className="stat-card-value">{value}</h3>
          <p className="stat-card-title">{title}</p>
          {subtitle && <p className="stat-card-subtitle">{subtitle}</p>}
        </div>
      </Card>
    </motion.div>
  );
};

export default StatCard;

import React from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { mockCashflowData } from '../../data/mockData';
import './CashflowChart.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p className="chart-tooltip-label">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="chart-tooltip-row">
            <span className="chart-tooltip-dot" style={{ background: entry.color }} />
            <span className="chart-tooltip-name">{entry.name}:</span>
            <span className="chart-tooltip-value">
              ${entry.value?.toLocaleString() || 'N/A'}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const CashflowChart = () => {
  return (
    <motion.div
      className="cashflow-chart"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cashflow-chart-header">
        <div>
          <h3>Cashflow Forecast</h3>
          <p>AI-powered income prediction vs actual receipts</p>
        </div>
        <div className="cashflow-chart-legend">
          <div className="legend-item">
            <span className="legend-dot legend-predicted" />
            <span>Predicted</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot legend-actual" />
            <span>Actual</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot legend-received" />
            <span>Received</span>
          </div>
        </div>
      </div>

      <div className="cashflow-chart-container">
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={mockCashflowData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="receivedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis 
              dataKey="month" 
              stroke="#64748b" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#64748b" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="predicted"
              name="Predicted"
              stroke="#8b5cf6"
              strokeWidth={2}
              fill="url(#predictedGradient)"
            />
            <Area
              type="monotone"
              dataKey="actual"
              name="Actual"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#actualGradient)"
            />
            <Area
              type="monotone"
              dataKey="received"
              name="Received"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#receivedGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CashflowChart;

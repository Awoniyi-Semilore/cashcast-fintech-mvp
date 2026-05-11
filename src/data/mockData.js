// src/data/mockCashflowData.js



// ============================================================
// MOCK DATA - Realistic fintech dataset for MVP demonstration
// ============================================================

export const mockInvoices = [
  {
    id: 'inv_001',
    clientName: 'TechFlow Solutions',
    clientEmail: 'accounts@techflow.io',
    amount: 4500,
    currency: 'USD',
    status: 'pending',
    dueDate: '2026-05-18',
    issuedDate: '2026-04-18',
    description: 'Website redesign & development',
    aiPrediction: {
      confidence: 87,
      predictedDate: '2026-05-16',
      riskLevel: 'low',
      tags: ['regular client', 'on-time history']
    }
  },
  {
    id: 'inv_002',
    clientName: 'GreenLeaf Agency',
    clientEmail: 'finance@greenleaf.co',
    amount: 2800,
    currency: 'USD',
    status: 'pending',
    dueDate: '2026-05-22',
    issuedDate: '2026-04-22',
    description: 'Brand identity package',
    aiPrediction: {
      confidence: 62,
      predictedDate: '2026-05-25',
      riskLevel: 'medium',
      tags: ['new client', 'first invoice']
    }
  },
  {
    id: 'inv_003',
    clientName: 'DataPulse Inc',
    clientEmail: 'payments@datapulse.com',
    amount: 7200,
    currency: 'USD',
    status: 'pending',
    dueDate: '2026-05-15',
    issuedDate: '2026-04-15',
    description: 'Data pipeline architecture',
    aiPrediction: {
      confidence: 45,
      predictedDate: '2026-05-20',
      riskLevel: 'high',
      tags: ['delayed before', 'large amount']
    }
  },
  {
    id: 'inv_004',
    clientName: 'StartupNest',
    clientEmail: 'hello@startupnest.io',
    amount: 1500,
    currency: 'USD',
    status: 'paid',
    dueDate: '2026-04-30',
    issuedDate: '2026-03-30',
    paidDate: '2026-04-28',
    description: 'Landing page optimization',
    aiPrediction: {
      confidence: 92,
      predictedDate: '2026-04-28',
      riskLevel: 'low',
      tags: ['early payer', 'small amount']
    }
  },
  {
    id: 'inv_005',
    clientName: 'CloudBridge Systems',
    clientEmail: 'billing@cloudbridge.dev',
    amount: 5600,
    currency: 'USD',
    status: 'paid',
    dueDate: '2026-04-25',
    issuedDate: '2026-03-25',
    paidDate: '2026-04-24',
    description: 'Cloud migration consulting',
    aiPrediction: {
      confidence: 89,
      predictedDate: '2026-04-24',
      riskLevel: 'low',
      tags: ['enterprise', 'consistent']
    }
  },
  {
    id: 'inv_006',
    clientName: 'PixelCraft Studio',
    clientEmail: 'admin@pixelcraft.design',
    amount: 3200,
    currency: 'USD',
    status: 'pending',
    dueDate: '2026-05-28',
    issuedDate: '2026-04-28',
    description: 'Motion graphics package',
    aiPrediction: {
      confidence: 78,
      predictedDate: '2026-05-27',
      riskLevel: 'low',
      tags: ['creative agency', 'reliable']
    }
  },
  {
    id: 'inv_007',
    clientName: 'Meridian Health',
    clientEmail: 'procurement@meridian.health',
    amount: 8900,
    currency: 'USD',
    status: 'pending',
    dueDate: '2026-05-20',
    issuedDate: '2026-04-20',
    description: 'Healthcare app development',
    aiPrediction: {
      confidence: 55,
      predictedDate: '2026-05-23',
      riskLevel: 'medium',
      tags: ['enterprise', 'slow process']
    }
  },
  {
    id: 'inv_008',
    clientName: 'Quantum Labs',
    clientEmail: 'finance@quantum-labs.ai',
    amount: 4100,
    currency: 'USD',
    status: 'paid',
    dueDate: '2026-04-20',
    issuedDate: '2026-03-20',
    paidDate: '2026-04-19',
    description: 'AI model integration',
    aiPrediction: {
      confidence: 95,
      predictedDate: '2026-04-19',
      riskLevel: 'low',
      tags: ['tech company', 'fast payer']
    }
  }
];

export const mockCashflowData = [
  { month: 'Jan', predicted: 12000, actual: 11500, received: 11000 },
  { month: 'Feb', predicted: 13500, actual: 14200, received: 13800 },
  { month: 'Mar', predicted: 11000, actual: 10800, received: 10500 },
  { month: 'Apr', predicted: 15000, actual: 14800, received: 15200 },
  { month: 'May', predicted: 18500, actual: null, received: 4200 },
  { month: 'Jun', predicted: 16000, actual: null, received: null },
];

export const mockPaymentHistory = [
  { date: '2026-04-28', amount: 1500, client: 'StartupNest', status: 'early' },
  { date: '2026-04-24', amount: 5600, client: 'CloudBridge Systems', status: 'on-time' },
  { date: '2026-04-19', amount: 4100, client: 'Quantum Labs', status: 'early' },
  { date: '2026-04-15', amount: 2300, client: 'BrightMedia', status: 'late' },
  { date: '2026-04-10', amount: 1800, client: 'CodeWave', status: 'on-time' },
  { date: '2026-04-05', amount: 6700, client: 'Nexus Digital', status: 'on-time' },
];

export const mockActivity = [
  { id: 1, type: 'prediction', message: 'AI predicts TechFlow payment by May 16', time: '2 hours ago', icon: 'brain' },
  { id: 2, type: 'payment', message: 'StartupNest paid $1,500 (2 days early)', time: '5 hours ago', icon: 'check' },
  { id: 3, type: 'reminder', message: 'Reminder sent to GreenLeaf Agency', time: '1 day ago', icon: 'bell' },
  { id: 4, type: 'risk', message: 'DataPulse flagged as high risk', time: '1 day ago', icon: 'alert' },
  { id: 5, type: 'invoice', message: 'New invoice created for PixelCraft', time: '2 days ago', icon: 'file' },
];

export const mockStats = {
  totalExpected: 28400,
  totalPending: 28400,
  totalPaid: 11200,
  avgPaymentTime: 3.2,
  predictionAccuracy: 94,
  activeInvoices: 5,
  highRiskCount: 1,
  monthlyGrowth: 12.5
};

export const mockClients = [
  { name: 'TechFlow Solutions', reliability: 95, avgDelay: 0.5, totalInvoices: 8 },
  { name: 'GreenLeaf Agency', reliability: 70, avgDelay: 2.1, totalInvoices: 2 },
  { name: 'DataPulse Inc', reliability: 45, avgDelay: 4.5, totalInvoices: 3 },
  { name: 'CloudBridge Systems', reliability: 92, avgDelay: 0.2, totalInvoices: 6 },
  { name: 'PixelCraft Studio', reliability: 85, avgDelay: 1.0, totalInvoices: 4 },
];

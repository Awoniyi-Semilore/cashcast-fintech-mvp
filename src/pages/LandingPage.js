import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiArrowRight, 
  FiTrendingUp, 
  FiCpu, 
  FiBell, 
  FiShield,
  FiCheckCircle,
  FiBarChart2,
  FiZap
} from 'react-icons/fi';
import Navbar from '../components/layout/Navbar';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FiCpu,
      title: 'AI Payment Prediction',
      description: 'Our AI analyzes client behavior patterns to predict exactly when payments will arrive with 94% accuracy.',
    },
    {
      icon: FiBell,
      title: 'Smart Reminders',
      description: 'Automated, personalized reminder messages sent at the optimal time based on each client\'s communication style.',
    },
    {
      icon: FiTrendingUp,
      title: 'Cashflow Forecasting',
      description: 'Visualize your expected income months ahead with AI-powered cashflow predictions and trend analysis.',
    },
    {
      icon: FiShield,
      title: 'Risk Detection',
      description: 'Early warning system identifies clients likely to delay payments, allowing proactive intervention.',
    },
    {
      icon: FiBarChart2,
      title: 'Analytics Dashboard',
      description: 'Beautiful, intuitive dashboard showing payment trends, client reliability scores, and financial health.',
    },
    {
      icon: FiZap,
      title: 'Instant Insights',
      description: 'Real-time notifications and actionable insights delivered exactly when you need them.',
    },
  ];

  const steps = [
    { number: '01', title: 'Upload Invoices', description: 'Simply upload or create your invoices in seconds.' },
    { number: '02', title: 'AI Analysis', description: 'Our AI analyzes client history and payment patterns.' },
    { number: '03', title: 'Get Predictions', description: 'Receive accurate payment date predictions with confidence scores.' },
    { number: '04', title: 'Automated Follow-ups', description: 'Smart reminders sent at the perfect time for each client.' },
  ];

  return (
    <div className="landing-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-glow hero-glow-1" />
          <div className="hero-glow hero-glow-2" />
        </div>
        
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <FiZap />
              <span>AI-Powered Payment Intelligence</span>
            </div>
            
            <h1 className="hero-title">
              Predict your payments
              <br />
              <span className="gradient-text">before they arrive.</span>
            </h1>
            
            <p className="hero-subtitle">
              CashCast uses advanced AI to predict when clients will pay, 
              automate follow-ups, and give you complete cashflow visibility.
              Built for freelancers and agencies who want financial peace of mind.
            </p>
            
            <div className="hero-cta">
              <Button variant="primary" size="lg" onClick={() => navigate('/signup')}>
                Get Started Free <FiArrowRight />
              </Button>
              <Button variant="ghost" size="lg" onClick={() => document.getElementById('features').scrollIntoView()}>
                Learn More
              </Button>
            </div>
            
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-value">94%</span>
                <span className="hero-stat-label">Prediction Accuracy</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-value">$2.4M+</span>
                <span className="hero-stat-label">Payments Tracked</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-value">3.2x</span>
                <span className="hero-stat-label">Faster Payments</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-dashboard-preview"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="hero-dashboard-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span /><span /><span />
              </div>
            </div>
            <div className="mockup-content">
              <div className="mockup-sidebar" />
              <div className="mockup-main">
                <div className="mockup-stats">
                  <div className="mockup-stat" />
                  <div className="mockup-stat" />
                  <div className="mockup-stat" />
                  <div className="mockup-stat" />
                </div>
                <div className="mockup-chart" />
                <div className="mockup-list">
                  <div className="mockup-list-item" />
                  <div className="mockup-list-item" />
                  <div className="mockup-list-item" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Everything you need to<br /><span className="gradient-text">master your cashflow</span></h2>
            <p>Powerful AI-driven tools designed specifically for modern freelancers and agencies.</p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="feature-card" padding="xl">
                  <div className="feature-icon">
                    <feature.icon />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>How It <span className="gradient-text">Works</span></h2>
            <p>Get started in minutes. No complex setup required.</p>
          </motion.div>

          <div className="steps">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="step"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < steps.length - 1 && <div className="step-connector" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Prediction Showcase */}
      <section id="ai-prediction" className="ai-showcase">
        <div className="section-container">
          <div className="ai-showcase-grid">
            <motion.div
              className="ai-showcase-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="ai-badge">
                <FiCpu />
                <span>AI Prediction Engine</span>
              </div>
              <h2>Know exactly when<br /><span className="gradient-text">payments will arrive</span></h2>
              <p>
                Our proprietary AI analyzes over 50 data points per client including 
                payment history, communication patterns, industry trends, and seasonal 
                behaviors to predict payment dates with remarkable accuracy.
              </p>
              <ul className="ai-features-list">
                <li><FiCheckCircle /> 94% prediction accuracy rate</li>
                <li><FiCheckCircle /> 3-5 day prediction window</li>
                <li><FiCheckCircle /> Risk scoring per invoice</li>
                <li><FiCheckCircle /> Confidence intervals</li>
              </ul>
            </motion.div>

            <motion.div
              className="ai-showcase-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="ai-prediction-demo" glow>
                <div className="ai-demo-header">
                  <FiCpu className="ai-demo-icon" />
                  <span>AI Prediction</span>
                </div>
                <div className="ai-demo-client">
                  <div className="ai-demo-avatar">T</div>
                  <div>
                    <h4>TechFlow Solutions</h4>
                    <span>$4,500 • Due May 18</span>
                  </div>
                </div>
                <div className="ai-demo-confidence">
                  <div className="ai-demo-confidence-header">
                    <span>Confidence</span>
                    <span className="ai-demo-confidence-value">87%</span>
                  </div>
                  <div className="ai-demo-bar">
                    <motion.div 
                      className="ai-demo-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: '87%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>
                <div className="ai-demo-prediction">
                  <FiTrendingUp />
                  <div>
                    <span className="ai-demo-label">Predicted Payment</span>
                    <span className="ai-demo-date">May 16, 2026</span>
                  </div>
                </div>
                <div className="ai-demo-tags">
                  <span className="ai-demo-tag">Regular Client</span>
                  <span className="ai-demo-tag">On-time History</span>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reminder Showcase */}
      <section className="reminder-showcase">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Smart reminders that<br /><span className="gradient-text">actually work</span></h2>
            <p>AI-generated, personalized messages sent through WhatsApp, Email, or SMS.</p>
          </motion.div>

          <motion.div
            className="reminder-phone-mockup"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="phone-avatar">T</div>
                  <span>Tunde • TechFlow</span>
                </div>
                <div className="phone-chat">
                  <div className="phone-message">
                    <p>Hi Tunde, just checking in on the logo project. Hope all is well. Here's a secure payment link whenever you're ready.</p>
                    <span className="phone-time">Now</span>
                  </div>
                  <div className="phone-link-bubble">
                    <span>cashcast.app/pay/abc123</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to predict your<br /><span className="gradient-text">cashflow?</span></h2>
            <p>Join thousands of freelancers and agencies who trust CashCast.</p>
            <div className="cta-buttons">
              <Button variant="primary" size="lg" onClick={() => navigate('/signup')}>
                Start Free Trial <FiArrowRight />
              </Button>
              <Button variant="ghost" size="lg" onClick={() => navigate('/login')}>
                Sign In
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="8" fill="url(#footer-logo-gradient)" />
                <path d="M8 14h12M14 8v12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="28" y2="28">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
              <span>CashCast</span>
            </div>
            <p>AI-powered payment prediction for modern businesses.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#how-it-works">How It Works</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <span>About</span>
              <span>Blog</span>
              <span>Careers</span>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <span>Privacy</span>
              <span>Terms</span>
              <span>Security</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 CashCast. All rights reserved.</span>
          <span className="footer-mvp">MVP Prototype</span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

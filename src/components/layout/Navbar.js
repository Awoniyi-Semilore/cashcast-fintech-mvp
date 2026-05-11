import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'AI Prediction', href: '#ai-prediction' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="url(#logo-gradient)" />
              <path d="M8 14h12M14 8v12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="28" y2="28">
                  <stop stopColor="#6366f1" />
                  <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="navbar-logo-text">CashCast</span>
        </Link>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="navbar-link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          {user ? (
            <Button variant="primary" size="sm" onClick={() => navigate('/dashboard')}>
              Dashboard <FiArrowRight />
            </Button>
          ) : (
            <>
              <Link to="/login" className="navbar-link">Sign In</Link>
              <Button variant="primary" size="sm" onClick={() => navigate('/signup')}>
                Get Started
              </Button>
            </>
          )}
        </div>

        <button className="navbar-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="navbar-mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="navbar-mobile-actions">
              {user ? (
                <Button variant="primary" fullWidth onClick={() => { navigate('/dashboard'); setIsOpen(false); }}>
                  Dashboard
                </Button>
              ) : (
                <>
                  <Button variant="ghost" fullWidth onClick={() => { navigate('/login'); setIsOpen(false); }}>
                    Sign In
                  </Button>
                  <Button variant="primary" fullWidth onClick={() => { navigate('/signup'); setIsOpen(false); }}>
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

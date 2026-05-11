import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import InvoicesListPage from './pages/InvoicesListPage';
import InvoiceDetailsPage from './pages/InvoiceDetailsPage';
import PredictionsPage from './pages/PredictionsPage';
import RemindersPage from './pages/RemindersPage';
import SettingsPage from './pages/SettingsPage';
import './styles/global.css';

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          } />
          <Route path="/invoices" element={
            <PrivateRoute>
              <InvoicesListPage />
            </PrivateRoute>
          } />
          <Route path="/invoice/:id" element={
            <PrivateRoute>
              <InvoiceDetailsPage />
            </PrivateRoute>
          } />
          <Route path="/predictions" element={
            <PrivateRoute>
              <PredictionsPage />
            </PrivateRoute>
          } />
          <Route path="/reminders" element={
            <PrivateRoute>
              <RemindersPage />
            </PrivateRoute>
          } />
          <Route path="/settings" element={
            <PrivateRoute>
              <SettingsPage />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

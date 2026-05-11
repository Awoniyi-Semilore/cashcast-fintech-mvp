# CashCast - AI-Powered Payment Prediction Platform

## Overview

CashCast is a modern fintech MVP prototype that uses AI to predict when clients will pay their invoices, automate follow-up reminders, and provide complete cashflow visibility for freelancers and agencies.

**Design Philosophy:**
- **Dark gradients** reduce eye strain and convey premium fintech sophistication
- **Deep navy + purple gradients** evoke trust, stability, and AI innovation
- **Inter font** provides modern SaaS readability and professional credibility
- **Generous spacing** reduces cognitive load and creates visual rhythm

---

## Tech Stack

- **React 18** - UI framework
- **React Router 6** - Client-side routing
- **Firebase Authentication** - User authentication (email/password)
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Icon library
- **Recharts** - Data visualization charts
- **CSS Modules** - Component styling

---

## Project Structure

```
cashcast/
├── public/
│   └── index.html              # HTML template with Inter font
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.js       # Landing page navigation
│   │   │   ├── Sidebar.js      # Dashboard sidebar
│   │   │   └── TopBar.js       # Dashboard top bar
│   │   ├── dashboard/
│   │   │   ├── StatCard.js     # Dashboard stat cards
│   │   │   ├── CashflowChart.js # Area chart for cashflow
│   │   │   └── ActivityFeed.js # Recent activity list
│   │   ├── invoices/
│   │   │   ├── InvoiceList.js  # Invoice list component
│   │   │   └── AddInvoiceModal.js # Create invoice modal
│   │   ├── predictions/
│   │   │   └── PredictionCard.js # AI prediction display
│   │   ├── reminders/
│   │   │   └── ReminderPreview.js # WhatsApp/Email/SMS preview
│   │   └── ui/
│   │       ├── Button.js       # Reusable button
│   │       ├── Card.js         # Glassmorphism card
│   │       ├── Badge.js        # Status badges
│   │       ├── Input.js        # Form inputs
│   │       └── Modal.js        # Modal dialog
│   ├── pages/
│   │   ├── LandingPage.js      # Marketing landing page
│   │   ├── LoginPage.js        # Sign in page
│   │   ├── SignupPage.js       # Registration page
│   │   ├── DashboardPage.js    # Main dashboard
│   │   ├── InvoicesListPage.js # All invoices view
│   │   ├── InvoiceDetailsPage.js # Single invoice view
│   │   ├── PredictionsPage.js  # AI predictions view
│   │   ├── RemindersPage.js    # Reminder automation
│   │   └── SettingsPage.js     # User settings
│   ├── context/
│   │   └── AuthContext.js      # Firebase auth provider
│   ├── data/
│   │   └── mockData.js         # Realistic mock dataset
│   ├── styles/
│   │   └── global.css          # Design system & CSS variables
│   ├── firebase.js             # Firebase configuration
│   ├── App.js                  # Router & route definitions
│   └── index.js                # App entry point
├── package.json
└── presentation.html           # Implementation proposal deck
```

---

## Installation & Setup

### Step 1: Create React App

```bash
npx create-react-app cashcast
cd cashcast
```

### Step 2: Install Dependencies

```bash
npm install react-router-dom framer-motion react-icons recharts firebase
```

### Step 3: Replace Default Files

Copy all generated files into the project directory, replacing the default `src` folder contents.

### Step 4: Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Add Project"** and name it **"CashCast"**
3. Disable Google Analytics (not needed for MVP)
4. Click the **web icon** (</>) to register your app
5. Copy the `firebaseConfig` values
6. Open `src/firebase.js` and replace the placeholder values:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

7. In Firebase Console, go to **Authentication > Sign-in method**
8. Enable **Email/Password** provider
9. Save

### Step 5: Start the App

```bash
npm start
```

The app will open at `http://localhost:3000`

---

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | LandingPage | Marketing page with hero, features, CTA |
| `/login` | LoginPage | Email/password sign in |
| `/signup` | SignupPage | Account creation |
| `/dashboard` | DashboardPage | Main dashboard (protected) |
| `/invoices` | InvoicesListPage | All invoices with filters |
| `/invoice/:id` | InvoiceDetailsPage | Single invoice view |
| `/predictions` | PredictionsPage | AI prediction cards |
| `/reminders` | RemindersPage | Smart reminder generator |
| `/settings` | SettingsPage | Account preferences |

---

## Key Components

### Layout Components
- **Navbar** - Fixed top navigation with mobile hamburger menu
- **Sidebar** - Collapsible dashboard navigation with user info
- **TopBar** - Dashboard header with search and notifications

### Dashboard Components
- **StatCard** - Animated stat cards with trend indicators
- **CashflowChart** - Recharts area chart with custom tooltip
- **ActivityFeed** - Recent activity timeline

### Feature Components
- **PredictionCard** - AI prediction with confidence bar and risk badge
- **ReminderPreview** - WhatsApp/Email/SMS message preview with copy/generate
- **InvoiceList** - Sortable invoice list with status badges
- **AddInvoiceModal** - Form modal for creating new invoices

### UI Components
- **Button** - Multiple variants (primary, secondary, ghost, danger)
- **Card** - Glassmorphism card with hover effects
- **Badge** - Status indicators (success, warning, danger, info)
- **Input** - Form inputs with icons and validation
- **Modal** - Animated modal with backdrop blur

---

## Design System

### Colors
- **Background**: `#0a0e27` (deep navy)
- **Card Background**: `rgba(20, 27, 61, 0.6)` with blur
- **Primary Gradient**: `#6366f1` → `#8b5cf6` → `#a855f7`
- **Success**: `#10b981` (green)
- **Warning**: `#f59e0b` (orange)
- **Danger**: `#ef4444` (red)
- **Text Primary**: `#f8fafc` (white)
- **Text Secondary**: `#94a3b8` (gray)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Scale**: 8px base grid system

### Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px

---

## Mock Data

All data is realistic and designed for demonstration:
- **8 invoices** with varied statuses, amounts, and clients
- **6 months** of cashflow data (predicted vs actual)
- **5 activity items** showing prediction, payment, reminder events
- **AI predictions** with confidence scores and risk levels

---

## Firebase Authentication

The app uses Firebase Auth with email/password:
- Sign up creates new user with display name
- Login persists session via Firebase
- Logout clears auth state
- Protected routes redirect to login

**Note**: For demo purposes without Firebase setup, you can bypass auth by modifying `PrivateRoute` in `App.js` to always return children.

---

## Presentation

Open `presentation.html` in any browser to view the implementation proposal deck.

**To export as PDF:**
1. Open in Chrome
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Select "Save as PDF"
4. Set margins to "None"
5. Enable "Background graphics"
6. Save

---

## Deployment

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm run build
# Drag 'build' folder to Netlify deploy
```

### Option 3: Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

---

## Screenshot Recommendations

**Desktop (Primary - 1440x900px):**
1. Dashboard full view
2. AI Prediction cards
3. Invoice Details with reminder preview
4. Landing page hero section

**Mobile (Secondary - iPhone 14 Pro):**
1. Dashboard responsive view
2. Sidebar collapsed state

**Browser**: Chrome at 100% zoom, dark mode preferred

---

## Next Steps

1. **Capture screenshots** and replace placeholders in `presentation.html`
2. **Set up real Firebase** project and update config
3. **Deploy frontend** to Vercel/Netlify for live demo
4. **Build backend API** for real AI predictions and data persistence
5. **Integrate payment APIs** (Stripe, PayPal) for payment links
6. **Add WhatsApp Business API** for real reminder delivery

---

## License

MVP Prototype - For demonstration and presentation purposes.

---

Built with React, Firebase, and AI-powered design decisions.

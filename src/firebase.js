// ============================================================
// FIREBASE CONFIGURATION
// 
// SETUP INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com
// 2. Click "Add Project" and name it "CashCast"
// 3. Disable Google Analytics (not needed for MVP)
// 4. Click the web icon (</>) to register app
// 5. Copy the firebaseConfig object values below
// 6. Enable Authentication > Sign-in method > Email/Password
// 7. Enable it (no need to enable email link)
// ============================================================

import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyDh551fcmPQkIROUZ33sixbHF9PBGs4YYQ",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "cashcast-6da2a.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "cashcast-6da2a",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "cashcast-6da2a.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "412003284200",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:412003284200:web:ed5c4dded13e7c63e1455d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { 
  auth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
};
export default app;

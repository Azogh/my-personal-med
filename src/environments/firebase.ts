import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD4nMIXEzk691jnOzM23arX9C-dPpKpepU",
  authDomain: "my-personal-med.firebaseapp.com",
  projectId: "my-personal-med",
  storageBucket: "my-personal-med.firebasestorage.app",
  messagingSenderId: "162135104017",
  appId: "1:162135104017:web:d3258a2a647af163a4efb0",
  measurementId: "G-CW3CB6RFF3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
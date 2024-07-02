import React from 'react'
import ReactDOM from 'react-dom/client'

import { initializeApp } from "firebase/app";

import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyCxfLBX32AxTwlV5-PO3USBjoC3CFd3cDY",
  authDomain: "proyectofinalreactjs-2d2ea.firebaseapp.com",
  projectId: "proyectofinalreactjs-2d2ea",
  storageBucket: "proyectofinalreactjs-2d2ea.appspot.com",
  messagingSenderId: "412805325597",
  appId: "1:412805325597:web:171b526cf4257298d0b7f4"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

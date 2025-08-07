import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}


import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ForCustomer from "./pages/ForCustomer";
import ForProvider from "./pages/ForProvider";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= ROUTES ================= */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/customer" element={<ForCustomer />} />

        <Route path="/provider" element={<ForProvider />} />

        <Route path="/how-it-works" element={<HowItWorks />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}


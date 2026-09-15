
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
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* SERVICES */}
        <Route path="/services" element={<Services />} />

        {/* HOW IT WORKS */}
        <Route path="/how-it-works" element={<HowItWorks />} />

        {/* FOR CUSTOMER */}
        <Route path="/for-customer" element={<ForCustomer />} />

        {/* FOR PROVIDER */}
        <Route path="/for-provider" element={<ForProvider />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />

        {/* OPTIONAL: OLD ROUTES */}
        {/* These keep old links working too */}
        <Route path="/customer" element={<ForCustomer />} />
        <Route path="/provider" element={<ForProvider />} />
      </Routes>
    </>
  );
}


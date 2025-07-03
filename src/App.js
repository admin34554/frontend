import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CustomerMaster from './components/CustomerMaster';
import ProductMaster from './components/ProductMaster'; // ✅ Add this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customer-master" element={<CustomerMaster />} />
        <Route path="/product-master" element={<ProductMaster />} /> {/* ✅ Added route */}
      </Routes>
    </Router>
  );
}

export default App;

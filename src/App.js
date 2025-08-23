import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CustomerMaster from './components/CustomerMaster';
import ProductMaster from './components/ProductMaster';
import TaxMaster from './components/TaxMaster'; // ✅ Import TaxMaster
import AccountsMaster from './components/AccountsMaster';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customer-master" element={<CustomerMaster />} />
        <Route path="/product-master" element={<ProductMaster />} />
        <Route path="/tax-master" element={<TaxMaster />} /> {/* ✅ Added route */}
        <Route path="/accounts-master" element={<AccountsMaster />} />
      </Routes>
    </Router>
  );
}

export default App;

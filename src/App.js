import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CustomerMaster from './components/CustomerMaster';
import ProductMaster from './components/ProductMaster';
import TaxMaster from './components/TaxMaster'; // ✅ Import TaxMaster
import AccountsMaster from './components/AccountsMaster';
import SupplierMaster from './components/SupplierMaster';
import LorryMaster from './components/LorryMaster';
import BrokerMaster from "./components/BrokerMaster";
import CompanyMaster from "./components/CompanyMaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customer-master" element={<CustomerMaster />} />
        <Route path="/product-master" element={<ProductMaster />} />
        <Route path="/tax-master" element={<TaxMaster />} /> {/* ✅ Added route */}
        <Route path="/accounts-master" element={<AccountsMaster />} />
        <Route path="/supplier-master" element={<SupplierMaster />} />
        <Route path="/lorry-master" element={<LorryMaster />} />
        <Route path="/broker-master" element={<BrokerMaster />} />
        <Route path="/company-master" element={<CompanyMaster />} />
      </Routes>
    </Router>
  );
}

export default App;

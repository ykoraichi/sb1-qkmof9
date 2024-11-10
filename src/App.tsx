import React from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Equipment } from './components/Equipment';
import { Maintenance } from './components/Maintenance';
import { Calibration } from './components/Calibration';
import { Reports } from './components/Reports';
import { Settings } from './components/Settings';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/calibration" element={<Calibration />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import Redux selector
import { ToastContainer } from "react-toastify";
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

// Payout Components
// import Dashboard from './components/payout/Dashboard';
// import Beneficiaries from './components/payout/Beneficiaries';
// import InstantTransfer from './components/payout/InstantTransfer';
// import BulkTransfer from './components/payout/BulkTransfer';
// import AccountStatements from './components/payout/AccountStatements';
// import Reports from './components/payout/Reports';
import Dashboard from './components/Dashboard';
import Beneficiaries from './components/Beneficieries';
import InstantTransfer from './components/InstantTransfer';
import BulkTransfer from './components/BulkTransfer';
import AccountStatements from './components/AccountStatements';
import Reports from './components/reports';


// Payin Components
// import PayinDashboard from './components/payin/DashboardPayin';
// import PayinTransactions from './components/payin/Transactions';
// import PayinReports from './components/payin/Reports';
import DashboardPayin from './components/payin/DashboardPayin';
import ReportsPayin from './components/payin/ReportsPayin';
import SettlementPayin from './components/payin/SettlementPayin';
import TransactionsPayin from './components/payin/TransactionsPayin';

// Common Components
import ProfileUpdate from './components/ProfileUpdate';
import LoginHistory from './components/LoginHistory';
import MobileRecharge from './components/services/MobileRecharge/MobileRecharge';
import DTHRecharge from './components/services/dthRecharge/DthRecharge';
import MobileBillTransactions from './components/services/mobileBill/MobileBillTransactions';
import MobileBill from './components/services/mobileBill/MobileBill';

function App() {
  const mode = useSelector((state) => state.payMode.mode); // Get current mode (payin/payout)

  return (
    <Router>
      <Routes>
        
        {/* Login and SignUp Routes (without Header and Sidebar) */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Protected Routes with Sidebar & Header */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Sidebar />
              <Routes>
                {/* Routes for Payout */}
                {mode === "payout" ? (
                  <>
                    <Route path="/payout/dashboard" element={<Dashboard />} />
                    <Route path="/beneficiaries" element={<Beneficiaries />} />
                    <Route path="/instant-transfer" element={<InstantTransfer />} />
                    <Route path="/bulk-transfer" element={<BulkTransfer />} />
                    <Route path="/account-statements" element={<AccountStatements />} />
                    <Route path="/reports" element={<Reports />} />

                    <Route path="/mobile-recharge" element={<MobileRecharge />} />
                    <Route path="/dth-recharge" element={<DTHRecharge />} />
                    <Route path="/mobile-bills" element={<MobileBill />} />



                  </>
                ) : (
                  /* Routes for Payin */
                  <>
                    <Route path="/payin/dashboard" element={<DashboardPayin />} />
                    <Route path="/payin/transactions" element={<TransactionsPayin />} />
                    <Route path="/payin/settlement" element={<SettlementPayin />} />
                  </>
                )}

                {/* Common Routes for Both Payin and Payout */}
                <Route path="/reports" element={<Reports />} />
                <Route path="/profile" element={<ProfileUpdate />} />
                <Route path="/login-history" element={<LoginHistory />} />
              </Routes>
            </>
          }
        />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;

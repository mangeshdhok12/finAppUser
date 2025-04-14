
import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
 import { ToastContainer } from "react-toastify";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'react-datepicker/dist/react-datepicker.css';
 import SkeletonLoader from './components/layout/SkeletonLoader';

const Login = lazy(() => import('./components/auth/Login'));
const SignUp = lazy(() => import('./components/auth/SignUp'));
const Header = lazy(() => import('./components/layout/Header'));
const Sidebar = lazy(() => import('./components/layout/Sidebar'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Beneficiaries = lazy(() => import('./components/Beneficieries'));
const InstantTransfer = lazy(() => import('./components/InstantTransfer'));
const BulkTransfer = lazy(() => import('./components/BulkTransfer'));
const AccountStatements = lazy(() => import('./components/AccountStatements'));
const Reports = lazy(() => import('./components/reports'));
const DashboardPayin = lazy(() => import('./components/payin/DashboardPayin'));
const SettlementPayin = lazy(() => import('./components/payin/SettlementPayin'));
const TransactionsPayin = lazy(() => import('./components/payin/TransactionsPayin'));
const ProfileUpdate = lazy(() => import('./components/ProfileUpdate'));
const LoginHistory = lazy(() => import('./components/LoginHistory'));

// Services
const MobileRecharge = lazy(() => import('./components/services/MobileRecharge/MobileRecharge'));
const DTHRecharge = lazy(() => import('./components/services/dthRecharge/DthRecharge'));
const MobileBill = lazy(() => import('./components/services/mobileBill/MobileBill'));
const UtilityBills = lazy(() => import('./components/services/utilityBills/UtilityBills'));

//Banking Searvices
const Dmt = lazy(() => import('./components/bankingServices/Dmt'));
const AepsServices = lazy(() => import('./components/bankingServices/aeps/AepsServices'));
const AepsTransaction = lazy(() => import('./components/bankingServices/aeps/AepsTransaction'));
const CmsService = lazy(() => import('./components/bankingServices/cmsService/CmsService'));

//Payments
const PaymentRequest = lazy(() => import('./components/payments//PaymentRequest'));
const CheckPayments = lazy(() => import('./components/payments//CheckPayments'));
const PaymentsReport = lazy(() => import('./components/payments//PaymentsReport'));

//Reports
const AccountLedger = lazy(() => import('./components/reports//AccountLedger'));
const TransactionHistory = lazy(() => import('./components/reports//TransactionHistory'));
const PendingTransactions = lazy(() => import('./components/reports//PendingTransactions'));
const RefundedTransactions = lazy(() => import('./components/reports//RefundedTransactions'));
const DmtTransactions = lazy(() => import('./components/reports//DmtTransactions'));
const PayoutTransactions = lazy(() => import('./components/reports//PayoutTransactions'));



function App() {
  const mode = useSelector((state) => state.payMode.mode); // Get current mode (payin/payout)

  return (
    <>
    <Router>
      <Suspense fallback={<SkeletonLoader />}>
        <Routes>
          {/* Login and SignUp Routes (without Header and Sidebar) */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} /> */}
  
   {/* Default redirect from root to /users */}
   <Route path="/" element={<Navigate to="/users" replace />} />

{/* Login and Signup */}
<Route path="/login" element={<Login />} />
<Route path="/sign-up" element={<SignUp />} />

{/* Redirect /users to /users/payout/dashboard */}
<Route path="/users" element={<Navigate to="/users/payout/dashboard" replace />} />
         
          {/* Protected Routes with Sidebar & Header */}
          <Route
            path="/users/*"
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
                     
                     {/*  Services */}
                      <Route path="/mobile-recharge" element={<MobileRecharge />} />
                      <Route path="/dth-recharge" element={<DTHRecharge />} />
                      <Route path="/mobile-bills" element={<MobileBill />} />
                      <Route path="/utility-bills" element={<UtilityBills />} />

                     {/* Banking Services */}
                      <Route path="/dmt" element={<Dmt />} />
                      <Route path="/aeps-services" element={<AepsServices />} />
                      <Route path="/aeps-transaction" element={<AepsTransaction />} />
                      <Route path="/cms-service" element={<CmsService />} />

                      {/* Payments */}
                      <Route path="/payment-request" element={<PaymentRequest />} />
                      <Route path="/check-payments" element={<CheckPayments />} />
                      <Route path="/payments-report" element={<PaymentsReport />} />

                      {/* Reports */}
                      <Route path="/account-ledger" element={<AccountLedger />} />
                      <Route path="/transaction-history" element={<TransactionHistory />} />
                      <Route path="/pending-transactions" element={<PendingTransactions />} />
                      <Route path="/refunded-transactions" element={<RefundedTransactions />} />
                      <Route path="/dmt-transactions" element={<DmtTransactions />} />
                      <Route path="/payouts-transactions" element={<PayoutTransactions />} />

                      

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
      </Suspense>
      <ToastContainer />
    </Router>
    </>
  );
}

export default App;

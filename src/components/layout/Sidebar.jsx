
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux"; // Import Redux state
// import logo from "../../assets/manare_bg_free.png";
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const Sidebar = () => {
//   const [isSidebarVisible, setIsSidebarVisible] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   // const [isShown, setIsShown] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const toggleDropdown = (key) => {
//     setOpenDropdown((prev) => (prev === key ? null : key));
//   };


//   const mode = useSelector((state) => state.payMode.mode); // Get current mode (payin/payout)

//   // const toggleShow = () => {
//   //   setIsShown((prevState) => !prevState);
//   // };

//   const handleMouseEnter = () => {
//     if (!isSidebarVisible) {
//       setIsHovered(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (!isSidebarVisible) {
//       setIsHovered(false);
//     }
//   };

//   const handleLinkClick = () => {
//     setIsSidebarVisible(true);
//   };

//   const handleSidebarMinimize = () => {
//     setIsSidebarVisible(false);
//     setIsHovered(false);
//   };

//   return (
//     <div
//       className={`sidebar ${isSidebarVisible || isHovered ? "expand" : "minimized"}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="sidebar-head">
//         <div className="sidebar-header">
//           <Link to={`/${mode}/dashboard`} className="sidebar-logo">
//             <img src={logo} alt="logo" className="large-py" />
//             <img src={logo} alt="logo" className="small-py" />
//           </Link>

//           <a
//             id="contentMenu"
//             href="#."
//             className="content-menu d-none d-lg-flex"
//             onClick={handleSidebarMinimize}
//           >
//             <span></span>
//           </a>
//         </div>

//         <div className="sidebar-body">
//           <ul className="nav-sidebar" onClick={handleLinkClick}>
//             {mode === "payout" ? (
//               <>
//                 <li className="nav-item show">
//                   <Link to="/payout/dashboard" className="nav-link">
//                     <i className="bi bi-clipboard-data"></i>
//                     <span style={{ paddingLeft: '15px' }}>Dashboard</span>
//                   </Link>
//                 </li>

//                 <li
//                 className={`nav-item ${openDropdown === "compliance" ? "show" : ""}`}
//                 onClick={() => toggleDropdown("compliance")}
//                  >
//                   <a href="#" className="nav-link with-sub">
//                     <i className="bi bi-gear"></i>
//                     <span style={{ paddingLeft: '15px' }}>Compliance</span>
//                   </a>
//                   <nav className="nav-sub  scrollable-submenu">
//                     <Link to="/authorize-kyc" className="sub-link">Authorize KYC</Link>
//                     <Link to="/authorizet-accounts" className="sub-link">Authorize Accounts</Link>
//                     <Link to="/upload-kyc" className="sub-link">Upload KYC</Link>
//                     <Link to="/search-kyc" className="sub-link">Search KYC</Link>
//                     <Link to="/view-kyc" className="sub-link">View KYC</Link>
//                     <Link to="/view-settlement-accounts" className="sub-link">View Settlement Accounts</Link>
//                     <Link to="/manage-payout-agents" className="sub-link">Manage Payout Agents</Link>
//                     <Link to="/manage-agent-services" className="sub-link">Manage Agent Services</Link>


//                   </nav>
//                 </li>

//                 {/* <li className={`nav-item ${isShown ? "show" : ""}`} onClick={toggleShow}>
//                   <a href="#" className="nav-link with-sub">
//                     <i className="bi bi-gear"></i>
//                     <span style={{ paddingLeft: '15px' }}>Services</span>
//                   </a>
//                   <nav className="nav-sub">
//                     <Link to="/mobile-recharge" className="sub-link">Mobile Recharge</Link>
//                     <Link to="/dth-recharge" className="sub-link">DTH Recharge</Link>
//                     <Link to="/mobile-bills" className="sub-link">Mobile Bills</Link>
//                     <Link to="/utility-bills" className="sub-link">Utility Bills</Link>
//                     <Link to="/utility-bills" className="sub-link">Utility Bills</Link>
//                     <Link to="/utility-bills" className="sub-link">Utility Bills</Link>

//                     <Link to="/utility-bills" className="sub-link">Utility Bills</Link>

//                   </nav>
//                 </li> */}

//                 {/* <li className={`nav-item ${isShown ? "show" : ""}`} onClick={toggleShow}>
//                   <a href="#" className="nav-link with-sub">
//                     <i className="bi bi-gear"></i>
//                     <span style={{ paddingLeft: '15px' }}>Banking Services</span>
//                   </a>
//                   <nav className="nav-sub">
//                     <Link to="/mobile-recharge" className="sub-link">Mobile Recharge</Link>
//                     <Link to="/dth-recharge" className="sub-link">DTH Recharge</Link>
//                     <Link to="/mobile-bills" className="sub-link">Mobile Bills</Link>
//                     <Link to="/utility-bills" className="sub-link">Utility Bills</Link>
//                   </nav>
//                 </li> */}
//                 <li
//                 className={`nav-item ${openDropdown === "compliance" ? "show" : ""}`}
//                 onClick={() => toggleDropdown("compliance")}
//                  >
//                   <a href="#" className="nav-link with-sub">
//                     <i className="bi bi-gear"></i>
//                     <span style={{ paddingLeft: '15px' }}>Compliance</span>
//                   </a>
//                   <nav className="nav-sub  scrollable-submenu">
//                     <Link to="/authorize-kyc" className="sub-link">Authorize KYC</Link>
//                     <Link to="/authorizet-accounts" className="sub-link">Authorize Accounts</Link>
//                     <Link to="/upload-kyc" className="sub-link">Upload KYC</Link>
//                     <Link to="/search-kyc" className="sub-link">Search KYC</Link>
//                     <Link to="/view-kyc" className="sub-link">View KYC</Link>
//                     <Link to="/view-settlement-accounts" className="sub-link">View Settlement Accounts</Link>
//                     <Link to="/manage-payout-agents" className="sub-link">Manage Payout Agents</Link>
//                     <Link to="/manage-agent-services" className="sub-link">Manage Agent Services</Link>


//                   </nav>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/reports" className="nav-link">
//                     <i className="bi bi-journal-album"></i>
//                     <span style={{ paddingLeft: '15px' }}>Reports</span>
//                   </Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item show">
//                   <Link to="/payin/dashboard" className="nav-link">
//                     <i className="bi bi-clipboard-data"></i>
//                     <span style={{ paddingLeft: '15px' }}>Dashboard</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/payin/transactions" className="nav-link">
//                     <i className="bi bi-cash"></i>
//                     <span style={{ paddingLeft: '15px' }}>Transactions</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/payin/settlement" className="nav-link">
//                     <i className="bi bi-cash"></i>
//                     <span style={{ paddingLeft: '15px' }}>Settlement</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/reports" className="nav-link">
//                     <i className="bi bi-journal-text"></i>
//                     <span style={{ paddingLeft: '15px' }}>Reports</span>
//                   </Link>
//                 </li>
//               </>
//             )}

// <li
//             className={`nav-item ${openDropdown === "settings" ? "show" : ""}`}
//             onClick={() => toggleDropdown("settings")}
//              >
//               <a href="#" className="nav-link with-sub">
//                 <i className="bi bi-gear"></i>
//                 <span style={{ paddingLeft: '15px' }}>Settings</span>
//               </a>
//               <nav className="nav-sub">
//                 <Link to="/profile" className="sub-link">Profile Details</Link>
//                 <Link to="/login-history" className="sub-link">Login History</Link>
//                 <Link to="/developer-api" className="sub-link">Developer API</Link>
                
//               </nav>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import Redux state
import logo from "../../assets/manare_bg_free.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };
  const mode = useSelector((state) => state.payMode.mode); // Get current mode (payin/payout)

  const handleMouseEnter = () => {
    if (!isSidebarVisible) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isSidebarVisible) {
      setIsHovered(false);
    }
  };

  const handleLinkClick = () => {
    setIsSidebarVisible(true);
  };

  const handleSidebarMinimize = () => {
    setIsSidebarVisible(false);
    setIsHovered(false);
  };

  return (
    <div
      className={`sidebar ${isSidebarVisible || isHovered ? "expand" : "minimized"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sidebar-head">
        <div className="sidebar-header">
          <Link to={`/${mode}/dashboard`} className="sidebar-logo">
            <img src={logo} alt="logo" className="large-py" />
            <img src={logo} alt="logo" className="small-py" />
          </Link>

          <a
            id="contentMenu"
            href="#."
            className="content-menu d-none d-lg-flex"
            onClick={handleSidebarMinimize}
          >
            <span></span>
          </a>
        </div>

        <div className="sidebar-body">
          <ul className="nav-sidebar" onClick={handleLinkClick}>
            {mode === "payout" ? (
              <>
                <li className="nav-item show">
                  <Link to="/payout/dashboard" className="nav-link">
                    <i className="bi bi-clipboard-data"></i>
                    <span style={{ paddingLeft: '15px' }}>Dashboard</span>
                  </Link>
                </li>
                <li
                className={`nav-item ${openDropdown === "services" ? "show" : ""}`}
                onClick={() => toggleDropdown("services")}
                 >
                   <a href="#" className="nav-link with-sub">
                   <i className="bi bi-gear"></i>
                     <span style={{ paddingLeft: '15px' }}>Services</span>
                   </a>
                   <nav className="nav-sub  scrollable-submenu">
                     <Link to="/mobile-recharge" className="sub-link">Mobile Recharge</Link>
                    <Link to="/dth-recharge" className="sub-link">DTH Recharge</Link>
                    <Link to="/mobile-bills" className="sub-link">Mobile Bills</Link>
                     <Link to="/utility-bills" className="sub-link">Utility Bills</Link>
                  </nav>
                </li> 

                <li
                className={`nav-item ${openDropdown === "Banking-services" ? "show" : ""}`}
                onClick={() => toggleDropdown("Banking-services")}
                 >
                   <a href="#" className="nav-link with-sub">
                   <i className="bi bi-gear"></i>
                     <span style={{ paddingLeft: '15px' }}>Banking Services</span>
                   </a>
                   <nav className="nav-sub  scrollable-submenu">
                     <Link to="/mobile-recharge" className="sub-link">DMT</Link>
                    <Link to="/dth-recharge" className="sub-link">AEPS</Link>
                    <Link to="/mobile-bills" className="sub-link">Insurance</Link>
                     <Link to="/utility-bills" className="sub-link">CMS Services</Link>
                  </nav>
                </li> 

                <li
                className={`nav-item ${openDropdown === "payments" ? "show" : ""}`}
                onClick={() => toggleDropdown("payments")}
                 >
                   <a href="#" className="nav-link with-sub">
                   <i className="bi bi-gear"></i>
                     <span style={{ paddingLeft: '15px' }}>Payments</span>
                   </a>
                   <nav className="nav-sub  scrollable-submenu">
                     <Link to="/mobile-recharge" className="sub-link">Payment Request</Link>
                    <Link to="/dth-recharge" className="sub-link">Check Payments</Link>
                    <Link to="/mobile-bills" className="sub-link">Payments Report</Link>
                  </nav>
                </li> 

                {/* <li
  className={`nav-item ${openDropdown === "reports" ? "show" : ""}`}
  onClick={() => toggleDropdown("reports")}
>
  <a href="#" className="nav-link with-sub">
    <i className="bi bi-gear"></i>
    <span style={{ paddingLeft: "15px" }}>Reports</span>
  </a>
  <nav className="nav-sub">
    <Link to="/account-ledger" className="sub-link">Account ledger</Link>
    <Link to="/transaction-report" className="sub-link">Transaction report</Link>
    <Link to="/payment-report" className="sub-link">Payments report</Link>
    <Link to="/payment-status-report" className="sub-link">Payment Status report</Link>
  </nav>
</li> */}
<li
  className={`nav-item ${openDropdown === "reports" ? "show" : ""}`}
  onClick={() => toggleDropdown("reports")}
>
  <a href="#" className="nav-link with-sub">
    <i className="bi bi-gear"></i>
    <span style={{ paddingLeft: "15px" }}>Reports</span>
  </a>
  <nav className="nav-sub scrollable-submenu">
    <Link to="/account-ledger" className="sub-link">Account ledger</Link>
    <Link to="/transaction-report" className="sub-link">Transaction report</Link>
    <Link to="/payment-report" className="sub-link">Payments report</Link>
    <Link to="/payment-status-report" className="sub-link">Payment Status report</Link>
    <Link to="/reversal-payment-report" className="sub-link">Reversal payment reports</Link>
    <Link to="/dmt-transactiont" className="sub-link">DMT transactions</Link>
    <Link to="/payout-transaction" className="sub-link">Payout transactions</Link>
    <Link to="/aeps-transaction" className="sub-link">AEPS transaction</Link>
    <Link to="/matm-transaction" className="sub-link">Matm transaction</Link>

  </nav>
</li>
<li
                className={`nav-item ${openDropdown === "Helpdesk" ? "show" : ""}`}
                onClick={() => toggleDropdown("Helpdesk")}
                 >
                   <a href="#" className="nav-link with-sub">
                   <i className="bi bi-gear"></i>
                     <span style={{ paddingLeft: '15px' }}>Helpdesk</span>
                   </a>
                   <nav className="nav-sub  scrollable-submenu">
                     <Link to="/book-compaint" className="sub-link">Book Compaint</Link>
                    <Link to="/view-compaint" className="sub-link">View Compaint</Link>
                  </nav>
                </li> 
              </>
            ) : (
              <>
                <li className="nav-item show">
                  <Link to="/payin/dashboard" className="nav-link">
                    <i className="bi bi-clipboard-data"></i>
                    <span style={{ paddingLeft: '15px' }}>Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/payin/transactions" className="nav-link">
                    <i className="bi bi-cash"></i>
                    <span style={{ paddingLeft: '15px' }}>Transactions</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/payin/settlement" className="nav-link">
                    <i className="bi bi-cash"></i>
                    <span style={{ paddingLeft: '15px' }}>Settlement</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/reports" className="nav-link">
                    <i className="bi bi-journal-text"></i>
                    <span style={{ paddingLeft: '15px' }}>Reports</span>
                  </Link>
                </li>
              </>
            )}

            <li
            className={`nav-item ${openDropdown === "settings" ? "show" : ""}`}
            onClick={() => toggleDropdown("settings")}
             >
              <a href="#" className="nav-link with-sub">
                <i className="bi bi-gear"></i>
                <span style={{ paddingLeft: '15px' }}>Settings</span>
              </a>
              <nav className="nav-sub">
                <Link to="/profile" className="sub-link">Profile Details</Link>
                <Link to="/login-history" className="sub-link">Login History</Link>
                <Link to="/developer-api" className="sub-link">Developer API</Link>
                
              </nav>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


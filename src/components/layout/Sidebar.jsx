
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
// import logo from "../../assets/manare_bg_free.png";
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { expandSidebar, collapseSidebar } from '../../store/sidebarSlice';
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoMdClose } from "react-icons/io";

// const Sidebar = () => {

//   const dispatch = useDispatch();
//   const isSidebarVisible = useSelector((state) => state.sidebar.isExpanded);

//   // const [isSidebarVisible, setIsSidebarVisible] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [showMenu, setShowMenu] = useState(false);


//   const toggleDropdown = (key) => {
//     setOpenDropdown((prev) => (prev === key ? null : key));
//   };
//   const mode = useSelector((state) => state.payMode.mode); // Get current mode (payin/payout)
 
//   // Redux state for manual sidebar toggle (via hamburger)
//   // const isSidebarVisible = useSelector((state) => state.sidebar.isExpanded);  
  
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
//     // setIsSidebarVisible(true);
//     dispatch(expandSidebar());

//   };

//   const handleSidebarMinimize = () => {
//     // setIsSidebarVisible(false);
//     dispatch(collapseSidebar());

//     setIsHovered(false);
//   };

//   //hamburger onCLick function
//   // const handleButtonToggle=()=>{
//   //   setShowMenu(!showMenu)
//   //   dispatch(expandSidebar());
//   // }

//   const handleButtonToggle = () => {
//     if (showMenu) {
//       // Collapse
//       dispatch(collapseSidebar());
//       setShowMenu(false);
//     } else {
//       // Expand
//       dispatch(expandSidebar());
//       setShowMenu(true);
//     }
//   };

//   return (
//     // <div
//     //   // className={`sidebar ${isSidebarVisible || isHovered || showMenu ? "expand" : "minimized"}`}
//     //   className={`sidebar ${isSidebarVisible || isHovered || showMenu ? "expand" : "minimized"}`}

//     //   onMouseEnter={handleMouseEnter}
//     //   onMouseLeave={handleMouseLeave}
//     // >
//     <>
//     <div
//   className={`sidebar ${
//     (window.innerWidth < 992 && showMenu) ||
//     (window.innerWidth >= 992 && (isSidebarVisible || isHovered))
//       ? "expand"
//       : "minimized"
//   }`}
//   onMouseEnter={handleMouseEnter}
//   onMouseLeave={handleMouseLeave}
// >

//       <div className="sidebar-head  ">
//         <div className="sidebar-header">
//           <Link to={`/users/${mode}/dashboard`} className="sidebar-logo">
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

//         {/* <div className="sidebar-body"> */}
//         <div className={`sidebar-body  ${showMenu ? "menu-mobile" : "menu-web" }`}>
//         {/* <div className={ showMenu ? "menu-mobile" : "menu-web"}> */}


//           <ul className="nav-sidebar" onClick={handleLinkClick}>
//             {mode === "payout" ? (
//               <>
//                 <li className="nav-item show">
//                   <Link to="/users/payout/dashboard" className="nav-link">
//                     <i className="bi bi-clipboard-data"></i>
//                     <span style={{ paddingLeft: '15px' }}>Dashboard</span>
//                   </Link>
//                 </li>
//                 <li
//                 className={`nav-item ${openDropdown === "services" ? "show" : ""}`}
//                 onClick={() => toggleDropdown("services")}
//                  >
//                    <a href="#" className="nav-link with-sub">
//                    <i className="bi bi-gear"></i>
//                      <span style={{ paddingLeft: '15px' }}>Services</span>
//                    </a>
//                    <nav className="nav-sub  scrollable-submenu">
//                      <Link to="/users/mobile-recharge" className="sub-link">Mobile Recharge</Link>
//                     <Link to="/dth-recharge" className="sub-link">DTH Recharge</Link>
//                     <Link to="/mobile-bills" className="sub-link">Mobile Bills</Link>
//                      <Link to="/utility-bills" className="sub-link">Utility Bills</Link>
//                   </nav>
//                 </li> 

//                 <li
//                 className={`nav-item ${openDropdown === "Banking-services" ? "show" : ""}`}
//                 onClick={() => toggleDropdown("Banking-services")}
//                  >
//                    <a href="#" className="nav-link with-sub">
//                    <i className="bi bi-gear"></i>
//                      <span style={{ paddingLeft: '15px' }}>Banking Services</span>
//                    </a>
//                    <nav className="nav-sub  scrollable-submenu">
//                      <Link to="/dmt" className="sub-link">DMT</Link>
//                     <Link to="/aeps-transaction" className="sub-link">AEPS</Link>
//                     <Link to="/mobile-bills" className="sub-link">Insurance</Link>
//                      <Link to="/cms-service" className="sub-link">CMS Services</Link>
//                   </nav>
//                 </li> 

//                 <li
//                 className={`nav-item ${openDropdown === "payments" ? "show" : ""}`}
//                 onClick={() => toggleDropdown("payments")}
//                  >
//                    <a href="#" className="nav-link with-sub">
//                    <i className="bi bi-gear"></i>
//                      <span style={{ paddingLeft: '15px' }}>Payments</span>
//                    </a>
//                    <nav className="nav-sub  scrollable-submenu">
//                      <Link to="/payment-request" className="sub-link">Payment Request</Link>
//                     <Link to="/check-payments" className="sub-link">Check Payments</Link>
//                     <Link to="/payments-report" className="sub-link">Payments Report</Link>
//                   </nav>
//                 </li> 

// <li
//   className={`nav-item ${openDropdown === "reports" ? "show" : ""}`}
//   onClick={() => toggleDropdown("reports")}
// >
//   <a href="#" className="nav-link with-sub">
//     <i className="bi bi-gear"></i>
//     <span style={{ paddingLeft: "15px" }}>Reports</span>
//   </a>
//   <nav className="nav-sub scrollable-submenu">
//     <Link to="/account-ledger" className="sub-link">Account ledger</Link>
//     <Link to="/transaction-history" className="sub-link">Transaction report</Link>
//     <Link to="/pending-transactions" className="sub-link">Pending Transactions</Link>
//     {/* <Link to="/payment-status-report" className="sub-link">Payment Status report</Link> */}
//     <Link to="/refunded-transactions" className="sub-link">Refunded Transactions</Link>
//     <Link to="/dmt-transactions" className="sub-link">DMT transactions</Link>
//     <Link to="/payouts-transactions" className="sub-link">Payout transactions</Link>
//     <Link to="/aeps-transaction" className="sub-link">AEPS transaction</Link>
//     <Link to="/matm-transaction" className="sub-link">Matm transaction</Link>

//   </nav>
// </li>
// <li
//                 className={`nav-item ${openDropdown === "Helpdesk" ? "show" : ""}`}
//                 onClick={() => toggleDropdown("Helpdesk")}
//                  >
//                    <a href="#" className="nav-link with-sub">
//                    <i className="bi bi-gear"></i>
//                      <span style={{ paddingLeft: '15px' }}>Helpdesk</span>
//                    </a>
//                    <nav className="nav-sub  scrollable-submenu">
//                      <Link to="/book-compaint" className="sub-link">Book Compaint</Link>
//                     <Link to="/view-compaint" className="sub-link">View Compaint</Link>
//                   </nav>
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

//             <li
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
//         {/* <div className="ham-menu">
//   <button onClick={handleButtonToggle}>
//     {showMenu ? <IoMdClose /> : <RxHamburgerMenu />}
//   </button>
// </div> */}
//       </div>
//     </div>
//     <div className="ham-menu d-lg-none">
//   <button onClick={handleButtonToggle}>
//     {showMenu ? <IoMdClose /> : <RxHamburgerMenu />}
//   </button>
// </div>
//     </>
//   );
// };

// export default Sidebar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import logo from "../../assets/manare_bg_free.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { expandSidebar, collapseSidebar, setSidebarHover } from '../../store/sidebarSlice';
import Hamburger from 'hamburger-react';
import { CiBank } from "react-icons/ci";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { MdOutlineDashboard, MdOutlinePayment } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarVisible = useSelector((state) => state.sidebar.isExpanded);
  const mode = useSelector((state) => state.payMode.mode);
  const isHovered = useSelector((state) => state.sidebar.isHovered); // ✅ add this


  // const [isHovered, setIsHovered] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setOpen] = useState(false); // controls hamburger-react

  useEffect(() => {
    if (isOpen) {
      setShowMenu(true);
      dispatch(expandSidebar());
    } else {
      setShowMenu(false);
      dispatch(collapseSidebar());
    }
  }, [isOpen]);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const handleMouseEnter = () => {
    if (!isSidebarVisible) {
      // setIsHovered(true);
      dispatch(setSidebarHover(true));

    }
  };

  const handleMouseLeave = () => {
    if (!isSidebarVisible) {
      // setIsHovered(false);
      dispatch(setSidebarHover(false));

    }
  };

  const handleLinkClick = () => {
    dispatch(expandSidebar());
  };

  const handleSidebarMinimize = () => {
    dispatch(collapseSidebar());
    dispatch(setSidebarHover(false));

    // setIsHovered(false);
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 992;

  return (
    <>
      <div
        className={`sidebar ${
          (isMobile && showMenu) || (!isMobile && (isSidebarVisible || isHovered))
            ? "expand"
            : "minimized"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="sidebar-head">
          <div className="sidebar-header">
            <Link to={`/users/${mode}/dashboard`} className="sidebar-logo">
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

          <div className={`sidebar-body ${showMenu ? "menu-mobile" : "menu-web"}`}>
            <ul className="nav-sidebar" onClick={handleLinkClick}>
              {/* Payout or Payin navigation */}
              {mode === "payout" ? (
                <>
                  <li className="nav-item show">
                    <Link to="/users/payout/dashboard" className="nav-link">
                    <MdOutlineDashboard />
                    <span style={{ paddingLeft: '15px' }}>Dashboard</span>
                    </Link>
                  </li>
                  {/* ...rest of payout items... */}

                  <li
                className={`nav-item ${openDropdown === "services" ? "show" : ""}`}
                onClick={() => toggleDropdown("services")}
                 >
                   <a href="#" className="nav-link with-sub">
                   <LiaMoneyBillWaveSolid />                     <span style={{ paddingLeft: '15px' }}>Services</span>
                   </a>
                   <nav className="nav-sub  scrollable-submenu">
                     <Link to="/users/mobile-recharge" className="sub-link">Mobile Recharge</Link>
                    <Link to="/users/dth-recharge" className="sub-link">DTH Recharge</Link>
                    <Link to="/users/mobile-bills" className="sub-link">Mobile Bills</Link>
                     <Link to="/users/utility-bills" className="sub-link">Utility Bills</Link>
                  </nav>
                </li> 

                <li
                className={`nav-item ${openDropdown === "Banking-services" ? "show" : ""}`}
                onClick={() => toggleDropdown("Banking-services")}
                 >
                   <a href="#" className="nav-link with-sub">
                   {/* <i class="bi bi-bank"></i> */}
                   <CiBank />
                     <span style={{ paddingLeft: '15px' }}>Banking Services</span>
                   </a>
                   <nav className="nav-sub  scrollable-submenu">
                     <Link to="/users/dmt" className="sub-link">DMT</Link>
                    <Link to="/users/aeps-transaction" className="sub-link">AEPS</Link>
                    <Link to="/users/mobile-bills" className="sub-link">Insurance</Link>
                     <Link to="/users/cms-service" className="sub-link">CMS Services</Link>
                  </nav>
                </li> 

                <li
                className={`nav-item ${openDropdown === "payments" ? "show" : ""}`}
                onClick={() => toggleDropdown("payments")}
                 >
                   <a href="#" className="nav-link with-sub">
                   <MdOutlinePayment />
                     <span style={{ paddingLeft: '15px' }}>Payments</span>
                   </a>
                   <nav className="nav-sub  scrollable-submenu">
                     <Link to="/users/payment-request" className="sub-link">Payment Request</Link>
                    <Link to="/users/check-payments" className="sub-link">Check Payments</Link>
                    <Link to="/users/payments-report" className="sub-link">Payments Report</Link>
                  </nav>
                </li> 

<li
  className={`nav-item ${openDropdown === "reports" ? "show" : ""}`}
  onClick={() => toggleDropdown("reports")}
>
  <a href="#" className="nav-link with-sub">
  <TbReport />
      <span style={{ paddingLeft: "15px" }}>Reports</span>
  </a>
  <nav className="nav-sub scrollable-submenu">
    <Link to="/users/account-ledger" className="sub-link">Account ledger</Link>
    <Link to="/users/transaction-history" className="sub-link">Transaction report</Link>
    <Link to="/users/pending-transactions" className="sub-link">Pending Transactions</Link>
    {/* <Link to="/payment-status-report" className="sub-link">Payment Status report</Link> */}
    <Link to="/users/refunded-transactions" className="sub-link">Refunded Transactions</Link>
    <Link to="/users/dmt-transactions" className="sub-link">DMT transactions</Link>
    <Link to="/users/payouts-transactions" className="sub-link">Payout transactions</Link>
    <Link to="/users/aeps-transaction" className="sub-link">AEPS transaction</Link>
    <Link to="/users/matm-transaction" className="sub-link">Matm transaction</Link>

  </nav>
</li>
<li
                className={`nav-item ${openDropdown === "Helpdesk" ? "show" : ""}`}
                onClick={() => toggleDropdown("Helpdesk")}
                 >
                   <a href="#" className="nav-link with-sub">
                   <FaHandsHelping />
                   <span style={{ paddingLeft: '15px' }}>Helpdesk</span>
                   </a>
                   <nav className="nav-sub  scrollable-submenu">
                     <Link to="/users/book-complaint" className="sub-link">Book Compaint</Link>
                    <Link to="/users/view-complaint" className="sub-link">View Compaint</Link>
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
                  {/* ...rest of payin items... */}
                </>
              )}

              {/* Settings */}
              <li
                className={`nav-item ${openDropdown === "settings" ? "show" : ""}`}
                onClick={() => toggleDropdown("settings")}
              >
                <a href="#" className="nav-link with-sub">
                  <i className="bi bi-gear"></i>
                  <span style={{ paddingLeft: '15px' }}>Settings</span>
                </a>
                <nav className="nav-sub">
                  <Link to="/users/profile" className="sub-link">Profile Details</Link>
                  <Link to="/users/login-history" className="sub-link">Login History</Link>
                  {/* <Link to="/users/developer-api" className="sub-link">Developer API</Link> */}
                </nav>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 🍔 Hamburger only on mobile */}
      <div className="ham-menu d-lg-none">
        <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
      </div>
    </>
  );
};

export default Sidebar;


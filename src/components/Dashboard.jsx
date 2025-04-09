// import { useRef, useState } from "react";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { Popover, OverlayTrigger, Button } from "react-bootstrap";
// import calender from '../assets/icons/calendar-icon.svg'
// import search from '../assets/icons/search.svg'
// import successfulIcon from '../assets/icons/success.svg'
// import pendingIcon from '../assets/icons/pending.svg'
// import failureIcon from '../assets/icons/failure.svg'
// import refresh from '../assets/icons/refresh.svg'
// import ApexCharts from 'react-apexcharts';

// const Dashboard = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const statusArray = ["Successful", "Pending", "Failure"];

//   const getIcon = (status) => {
//     switch (status.toLowerCase()) {
//       case 'successful':
//         return successfulIcon;
//       case 'pending':
//         return pendingIcon;
//       case 'failure':
//         return failureIcon;
//       default:
//         return null;
//     }
//   };
//   // Data
//   const dates = ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan'];
//   const transactionValue = [5432987, 6543876, 7654765, 8765654, 9876543, 10987432, 11098321, 12209210, 10320109, 11050099];
//   const transactionCount = [50, 155, 120, 100, 80, 90, 100, 150, 100, 110];

//   const combinedData = transactionValue.map((value, index) => value); // Using transactionValue for plotting

//   // Line chart options
//   const lineChartOptions = {
//     chart: {
//       type: 'area',
//       height: 400,
//       selection: false,
//       toolbar: {
//         show: false // Hide the top right toolbar
//       },
//       zoom: {
//         enabled: false // Disable zooming
//       },
//     },
//     series: [{
//       name: 'GTV Amount (₹)',
//       data: combinedData
//     }],
//     xaxis: {
//       categories: dates
//     },
//     // yaxis: [
//     //   // Transaction Count y-axis
//     //   {
//     //     title: {
//     //       text: 'Transaction Count'
//     //     },
//     //     labels: {
//     //       formatter: function(value) {
//     //         return value.toFixed(0); // Round off the values for better readability
//     //       }
//     //     },
//     //     min: Math.min(...transactionCount),
//     //     max: Math.max(...transactionCount),
//     //     forceNiceScale: true,
//     //     logarithmic: false, // Explicitly disable logarithmic scaling
//     //   },
//     //   // GTV Amount y-axis
//     //   {
//     //     opposite: true, // This ensures the GTV axis is on the opposite side
//     //     title: {
//     //       text: 'GTV Amount (₹)'
//     //     },
//     //     logarithmic: false, // Explicitly disable logarithmic scaling
//     //   }
//     // ],
//     legend: {
//       position: 'bottom',
//       horizontalAlign: 'center'
//     },
//     stroke: {
//       width: [3], // Border size for the line
//       curve: 'smooth' // Smooth stroke
//     },
//     markers: {
//       size: 5,
//       colors: ['#203bea'],
//       strokeWidth: 3,
//       strokeColors: '#fff',
//       hover: {
//         size: 7
//       }
//     },
//     colors: ['#203bea'],
//     dataLabels: {
//       enabled: false // Disable numbers on markers
//     },
//     tooltip: {
//       custom: function ({ series, seriesIndex, dataPointIndex, w }) {
//         return `
//         <div class="arrow_box">
//           <span>Transaction Value</span>
//           <span>₹ ${transactionValue[dataPointIndex]}</span>
          
//           <span>Transaction Count</span>
//           <span>${transactionCount[dataPointIndex]}</span>
//         </div>`;
//       }
//     }
//   };

//   // Donut chart options
//   const donutChartOptions = {
//     series: [90, 0, 10],
//     chart: {
//       width: "100%",
//       type: 'pie'
//     },
//     legend: {
//       position: 'bottom',
//     },
//     dataLabels: {
//       enabled: true,
//       offsetX: 0,
//       offsetY: 0
//     },
//     colors: ['#1db9aa', '#ffa937', '#fe6061'],
//     labels: ['Success', 'Pending', 'Failed'],
//     responsive: [{
//       breakpoint: 768,
//       options: {
//         chart: {
//           width: '100%'
//         },
//         legend: {
//           position: 'bottom'
//         }
//       }
//     }]
//   };

//   return (
//     <div className="layout content">
//       <div className="content-body">

//         <div className="statescards">

//           <div className="cardfilterbard">
//             <span>Filter By Date</span>
//             <div className="dateinput iconright">
//               <input type="text" id="reportrange" placeholder="Date Range" />
//               <span className="showhidepsd">
//                 <img src={calender} alt="Calendar" />
//               </span>
//             </div>
//           </div>

//           <div className="cardsrows">
//             <div className="walletcard">
//               <div className="wallet-row-1">
//                 <div className="balance--">
//                   <span>₹ 2,87,859.00</span>
//                   <a href="#">
//                     <img src={refresh} alt="Refresh" />
//                   </a>
//                 </div>
//                 <div className="addbalance">
//                   {/* Use OverlayTrigger and Popover from react-bootstrap */}
//                   <OverlayTrigger
//                     trigger="click"
//                     placement="bottom"
//                     overlay={
//                       <Popover id="popover-basic">
//                         <Popover.Header as="h3">Add Money</Popover.Header>
//                         <Popover.Body>
//                           Transfer funds using IMPS, NEFT, or RTGS. Balance updates within 30 minutes. NEFT/RTGS may take longer.
//                         </Popover.Body>
//                       </Popover>
//                     }
//                   >
//                     <Button variant="link" className="p-0">
//                       Add Money
//                     </Button>
//                   </OverlayTrigger>
//                 </div>
//               </div>
//               <div className="walletacdetails">
//                 <div className="asname">
//                   <p>gencash Corporation Private Limited</p>
//                 </div>
//                 <div className="acinfo">
//                   <div className="ac-num">
//                     <span>Account No:</span>
//                     <p>9389895613528</p>
//                   </div>
//                   <div className="ac-num">
//                     <span>IFSC Code:</span>
//                     <p>UTIB0CCH274</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {statusArray.map((status, index) => (
//               <div key={index} className={`statecard sc-${index + 2} py-card p-0`}>
//                 <div className="statescard-row flex-between">
//                   <h3>{status} Transactions</h3>
//                   <img src={getIcon(status)} alt={status} />
//                 </div>
//                 <div className="statescard-row pyinstats">
//                   <div className="pyindpair">
//                     <span>₹ 4,56,756.00</span>
//                     <span>Total Amount</span>
//                   </div>
//                   <div className="pyindpair">
//                     <span>756</span>
//                     <span>Total Count</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="pair-block-py-1">
//           <div className="py-card mt20 p-0">
//             <div className="blockhead">
//               <h3 className="h3heading m-0">Gross Transaction Value (Last 10 days)</h3>
//             </div>
//             <div className="blockbody pt20">
//               <div id="chart"> <ApexCharts options={lineChartOptions} series={lineChartOptions.series} type="area" height={400} /></div>
//             </div>
//           </div>
//           <div className="py-card mt20 p-0">
//             <div className="blockhead">
//               <h3 className="h3heading m-0">Transactions Analytics</h3>
//             </div>
//             <div className="blockbody p20">
//               <div className="chart-container">
//                 <div id="pieChart" className="chart pt50"> <ApexCharts options={donutChartOptions} series={donutChartOptions.series} type="pie" width="100%" /></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="py-table-wrap bg-white shadow radius-5 overflow-hidden mt20">
//           <div className="py-table-head pair-tw0">
//             <div className="pytbl1">
//               <h3 className="h3heading m-0">Latest Transactions</h3>
//             </div>
//             <div className="pytbl2">
//               <div className="solsearch">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 {/* this should dynamically. If user type then should show clear */}
//                 <button>
//                   <img className="button-icon" src={search} alt="Search" />
//                 </button>
//                 {/* <button onClick={() => setSearchTerm("")}>Clear</button> */}
//               </div>
//               <div className="pair-btn-2">
//                 <a href="#" className="lighticon text-btn">
//                   View All
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="tablebody-py">
//             <table className="table py-table">
//               <thead>
//                 <tr>
//                   {["Date & Time", "Transaction ID", "Merchant Ref No", "Bank Ref No", "Amount", "A/C Name", "A/C Number", "IFSC Code", "Status"].map((header, index) => (
//                     <th key={index} scope="col">{header}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>

//                 {[
//                   { date: "05 Apr 2022, 06:54 PM", id: "4578547854", refNo: "180172155", bankRef: "8532569856", amount: "₹ 200.00", name: "Anil Kumar", acc: "489456231656", ifsc: "HDFC000542", status: "Success" },
//                   { date: "04 Apr 2022, 06:54 PM", id: "8574856985", refNo: "1472583698", bankRef: "7879654135", amount: "₹ 500.00", name: "Suman Kant", acc: "16792191034216", ifsc: "SYNB0009015", status: "Failed" },
//                   { date: "04 Apr 2022, 06:54 PM", id: "8585145625", refNo: "8960120145", bankRef: "0142536525", amount: "₹ 600.00", name: "Piyush Chavala", acc: "309005200478", ifsc: "RTNA0000213", status: "Pending" },
//                 ].map((row, index) => (
//                   <tr key={index}>
//                     {Object.entries(row).map(([key, value], idx) => {
//                       // Apply Bootstrap text color classes for status
//                       const statusClass = key === 'status' ?
//                         value === 'Success' ? 'green' :
//                           value === 'Pending' ? 'orange' : 'red' : '';

//                       return (
//                         <td key={idx}>
//                           <div className={`tbdata statuslable ${statusClass}`}>{value}</div>
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 ))}

//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import mobileRechargeIcon from "../assets/userIcons/mobile_recharge.png"
import DTHRechargeIcon from "../assets/userIcons/dth_recharge.png"
import mobileBillsIcon from "../assets/userIcons/mobile_bills.png"
import utilitybillsIcon from "../assets/userIcons/utility_bills.png"
import dmtIcon from "../assets/userIcons/dmt.png"
import payoutsIcon from "../assets/userIcons/payouts.png"
import aepsIcon from "../assets/userIcons/aeps.png"
import matmIcon from "../assets/userIcons/matm.png"
import flightIcon from "../assets/userIcons/flight.png"
import busIcon from "../assets/userIcons/bus.png"
import cmsServicesIcon from "../assets/userIcons/cmsServices.png"
import insuranceIcon from "../assets/userIcons/insurance.png"
import cardIcon from "../assets/userIcons/card.png"
import cmsServicesIcon2 from "../assets/userIcons/cmsServices.png"
import qrIcon from "../assets/userIcons/qr.png"
import pancardIcon from "../assets/userIcons/pan_card.png"
import { Link } from 'react-router-dom';
import ActivityDetails from './dashboardComponents/ActivityDetails';
import LatestTransactions from './dashboardComponents/LatestTransactions';
import Footer from './layout/Footer';




const ServicesCard = () => {
  return (
    <div className="layout content">
  <div className="content-body">
    <div className="card card-custom">
      <div className="card-body">
        <div className="row rowTop">
          {/* First Row of Services */}
          <div className="col-6 col-sm-4 col-md-3 col-lg-1-5 mb-3"
>
            <div className="d-flex flex-column align-items-center text-center">
              <Link to="/mobile-recharge" className="symbol-container">
                <span className="symbol-label">
                  <img
                    src={mobileRechargeIcon}
                    className="symbol-image img-fluid"
                    alt="Mobile Recharge"
                  />
                </span>
                <span className="symbol-title text-primary font-weight-bold">Mobile</span>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-1-5 mb-3"
>
            <div className="d-flex flex-column align-items-center text-center">
              <Link to="/dth-recharge" className="symbol-container">
                <span className="symbol-label">
                  <img
                    src={DTHRechargeIcon}
                    className="symbol-image img-fluid"
                    alt="DTH Recharge"
                  />
                </span>
                <span className="symbol-title text-primary font-weight-bold">DTH</span>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-1-5 mb-3"
>
            <div className="d-flex flex-column align-items-center text-center">
              <Link to="/mobile-bills" className="symbol-container">
                <span className="symbol-label">
                  <img
                    src={mobileBillsIcon}
                    className="symbol-image img-fluid"
                    alt="Mobile Bills"
                  />
                </span>
                <span className="symbol-title text-primary font-weight-bold">Mobile Bills</span>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-1-5 mb-3"
>
            <div className="d-flex flex-column align-items-center text-center">
              <Link to="/utility-bills" className="symbol-container">
                <span className="symbol-label">
                  <img
                    src={utilitybillsIcon}
                    className="symbol-image img-fluid"
                    alt="Utility Bills"
                  />
                </span>
                <span className="symbol-title text-primary font-weight-bold">Utility Bills</span>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-1-5 mb-3"
>
            <div className="d-flex flex-column align-items-center text-center">
              <Link to="/dmt" className="symbol-container">
                <span className="symbol-label">
                  <img
                    src={dmtIcon}
                    className="symbol-image img-fluid"
                    alt="DMT"
                  />
                </span>
                <span className="symbol-title text-primary font-weight-bold">DMT</span>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-1-5 mb-3"
>
            <div className="d-flex flex-column align-items-center text-center">
              <Link to="/payouts" className="symbol-container">
                <span className="symbol-label">
                  <img
                    src={payoutsIcon}
                    className="symbol-image img-fluid"
                    alt="Payouts"
                  />
                </span>
                <span className="symbol-title text-primary font-weight-bold">Payouts</span>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-1-5 mb-3"
>
            <div className="d-flex flex-column align-items-center text-center">
              <Link to="/aeps-recharge"className="symbol-container">
                <span className="symbol-label">
                  <img
                    src={aepsIcon}
                    className="symbol-image img-fluid"
                    alt="AEPS"
                  />
                </span>
                <span className="symbol-title text-primary font-weight-bold">AEPS</span>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-1-5 mb-3"
>
            <div className="d-flex flex-column align-items-center text-center">
              <Link to="/m-atm" className="symbol-container">
                <span className="symbol-label">
                  <img
                    src={matmIcon}
                    className="symbol-image img-fluid"
                    alt="M ATM"
                  />
                </span>
                <span className="symbol-title text-primary font-weight-bold">M ATM</span>
              </Link>
            </div>
          </div>
          {/* Second Row of Services */}
          <div className="col-6 col-sm-4 col-md-3 col-lg-1-5 mb-3"
>
            <div className="d-flex flex-column align-items-center text-center">
              <Link to="/flight-tickets" className="symbol-container">
                <span className="symbol-label">
                  <img
                    src={flightIcon}
                    className="symbol-image img-fluid"
                    alt="Flight Tickets"
                  />
                </span>
                <span className="symbol-title text-primary font-weight-bold">Flight Tickets</span>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-1-5 mb-3"
>
            <div className="d-flex flex-column align-items-center text-center">
              <Link to="/bus-tickets" className="symbol-container">
                <span className="symbol-label">
                  <img
                    src={busIcon}
                    className="symbol-image img-fluid"
                    alt="Bus Tickets"
                  />
                </span>
                <span className="symbol-title text-primary font-weight-bold">Bus Tickets</span>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-1-5 mb-3"
>
            <div className="d-flex flex-column align-items-center text-center">
              <Link to="/cms-service" className="symbol-container">
                <span className="symbol-label">
                  <img
                    src={cmsServicesIcon}
                    className="symbol-image img-fluid"
                    alt="CMS Service"
                  />
                </span>
                <span className="symbol-title text-primary font-weight-bold">CMS Service</span>
              </Link>
            </div>
          </div>
         
           {/* Second Row of Services */}
           <div className="col-6 col-sm-4 col-md-3 col-lg-1-5 mb-3"
>
            <div className="d-flex flex-column align-items-center text-center">
              <Link to="/insurance" className="symbol-container">
                <span className="symbol-label">
                  <img
                    src={insuranceIcon}
                    className="symbol-image img-fluid"
                    alt="Insurance"
                  />
                </span>
                <span className="symbol-title text-primary font-weight-bold">Insurance</span>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-1-5 mb-3"
>
            <div className="d-flex flex-column align-items-center text-center">
              <Link to="/creditCard-bills" className="symbol-container">
                <span className="symbol-label">
                  <img
                    src={cardIcon}
                    className="symbol-image img-fluid"
                    alt="Credit Card Bills"
                  />
                </span>
                <span className="symbol-title text-primary font-weight-bold">
                  Credit Card
                  <br />
                  Bills
                </span>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-1-5 mb-3"
>
            <div className="d-flex flex-column align-items-center text-center">
              <Link to="/load-request" className="symbol-container">
                <span className="symbol-label">
                  <img
                    src={cmsServicesIcon2}
                    className="symbol-image img-fluid"
                    alt="Load Request"
                  />
                </span>
                <span className="symbol-title text-primary font-weight-bold">
                  Load
                  <br />
                  Request
                </span>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-1-5 mb-3"
>
            <div className="d-flex flex-column align-items-center text-center">
              <Link to="/scan-qr" className="symbol-container">
                <span className="symbol-label">
                  <img
                    src={qrIcon}
                    className="symbol-image img-fluid"
                    alt="Scan QR"
                  />
                </span>
                <span className="symbol-title text-primary font-weight-bold">Scan QR</span>
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-1-5 mb-3"
>
            <div className="d-flex flex-column align-items-center text-center">
              <Link to="/pancard" className="symbol-container">
                <span className="symbol-label">
                  <img
                    src={pancardIcon}
                    className="symbol-image img-fluid"
                    alt="Pancard"
                  />
                </span>
                <span className="symbol-title text-primary font-weight-bold">Pancard</span>
              </Link>
            </div>
          </div>
        </div>
        {/* End of Second Row of Services */}
      </div>
    </div>
    <div className="row rowTop">
          {/* Activity Details Component */}
          <div className="col-md-6">
            <ActivityDetails />
          </div>
          {/* Latest Transactions Component */}
          <div className="col-md-6">
            <LatestTransactions />
          </div>
        </div>
      
  </div>
  <Footer/>
</div>


  );
};

export default ServicesCard;


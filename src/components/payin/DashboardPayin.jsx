
// import React from "react";

// const PayinDashboard = () => {
//   return (
//     <div className="layout content">
//       {/* Content Body */}
//       <div className="content-body">
//         {/* Dashboard */}
//         <div className="statescards">
//           <div className="cardfilterbard">
//             <span>Filter By Date</span>
//             <div className="dateinput iconright">
//               <input type="text" id="reportrange" placeholder="Date Range" />
//               <span className="showhidepsd">
//                 <img src="/images/icons/calendar-icon.svg" alt="" />
//               </span>
//             </div>
//           </div>
//           <div className="cardsrows">
//             {/* Transaction Card */}
//             <div className="pyincards py-card">
//               <div className="pyintitle">
//                 <span>Transactions</span>
//                 <span><img src="/images/icons/all-txn.svg" alt="img" /></span>
//               </div>
//               <div className="pyinstats">
//                 <div className="pyindpair">
//                   <span>₹ 5,54,756.00</span>
//                   <span>Total Amount</span>
//                 </div>
//                 <div className="pyindpair">
//                   <span>554</span>
//                   <span>Transaction Count</span>
//                 </div>
//               </div>
//             </div>
//             {/* Settlement Card */}
//             <div className="pyincards py-card">
//               <div className="pyintitle">
//                 <span>Settlement</span>
//                 <span><img src="/images/icons/success.svg" alt="img" /></span>
//               </div>
//               <div className="pyinstats">
//                 <div className="pyindpair">
//                   <span>₹ 4,56,756.00</span>
//                   <span>Total Amount</span>
//                 </div>
//                 <div className="pyindpair">
//                   <span>446</span>
//                   <span>Settlement Count</span>
//                 </div>
//               </div>
//             </div>
//             {/* Refunds Card */}
//             <div className="pyincards py-card">
//               <div className="pyintitle">
//                 <span>Refunds</span>
//                 <span><img src="/images/icons/return.svg" alt="img" /></span>
//               </div>
//               <div className="pyinstats">
//                 <div className="pyindpair">
//                   <span>₹ 15,698.00</span>
//                   <span>Total Amount</span>
//                 </div>
//                 <div className="pyindpair">
//                   <span>05</span>
//                   <span>Refund Count</span>
//                 </div>
//               </div>
//             </div>
//             {/* Chargeback Card */}
//             <div className="pyincards py-card">
//               <div className="pyintitle">
//                 <span>Chargeback</span>
//                 <span><img src="/images/icons/circlerupee.svg" alt="img" /></span>
//               </div>
//               <div className="pyinstats">
//                 <div className="pyindpair">
//                   <span>₹ 5,696.00</span>
//                   <span>Total Amount</span>
//                 </div>
//                 <div className="pyindpair">
//                   <span>01</span>
//                   <span>Chargeback Count</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Transaction Chart */}
//         <div className="pair-block-py-1">
//           {/* Block 1 */}
//           <div className="py-card mt20 p-0">
//             <div className="blockhead">
//               <h3 className="h3heading m-0">Gross Transaction Value (Last 10 days)</h3>
//             </div>
//             <div className="blockbody pt20">
//               <div id="chart"></div>
//             </div>
//           </div>
//           {/* Block 2 */}
//           <div className="py-card mt20 p-0">
//             <div className="blockhead">
//               <h3 className="h3heading m-0">Transactions Analytics</h3>
//             </div>
//             <div className="blockbody p20">
//               <div className="chart-container">
//                 <div id="pieChart" className="chart pt50"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="py-table-wrap bg-white shadow radius-5 overflow-hidden mt20">
//           {/* Table Head */}
//           <div className="py-table-head pair-tw0">
//             <div className="pytbl1">
//               <h3 className="h3heading m-0">Latest Transactions</h3>
//             </div>
//             <div className="pytbl2">
//               <div className="solsearch">
//                 <input type="text" placeholder="Search..." id="searchInput" className="no-shadow" />
//                 <button id="clearBtn">
//                   <span className="iconify" data-icon="carbon:clear"></span>
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* Table Body */}
//           <div className="py-table-body">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Transaction ID</th>
//                   <th>Amount</th>
//                   <th>Status</th>
//                   <th>Mode</th>
//                   <th>Initiated On</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Rows will be inserted dynamically */}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PayinDashboard;

import React, { useState } from "react";
import calenderIcon from '../../assets/icons/calendar-icon.svg'
import allTxn from '../../assets/icons/all-txn.svg'
import returnIcon from '../../assets/icons/return.svg'
import successIcon from '../../assets/icons/success.svg'
import circlerupee from '../../assets/icons/circlerupee.svg'
import searchIcon from '../../assets/icons/search.svg'


const DashboardPayin = () => {
  // Sample transaction data
  const [transactions] = useState([
    {
      date: "05 Apr 2022, 06:54 PM",
      txnId: "9638521470",
      orderId: "3214459658",
      customer: "Rajesh Kumar",
      mobile: "9784362641",
      email: "rajeshkumar@gmail.com",
      amount: "₹50,562.00",
      status: "Process",
      settlement: "Pending",
    },
    {
      date: "04 Apr 2022, 08:12 PM",
      txnId: "9632589632",
      orderId: "1680611182",
      customer: "Dinesh Bajiya",
      mobile: "9929999653",
      email: "dineshb25@gmail.com",
      amount: "₹10,258.00",
      status: "Success",
      settlement: "Settled",
    },
  ]);

  // Card data
  const cardData = [
    { title: "Transactions", amount: "₹ 5,54,756.00", count: "554", icon: allTxn },
    { title: "Settlement", amount: "₹ 4,56,756.00", count: "446", icon: successIcon },
    { title: "Refunds", amount: "₹ 15,698.00", count: "05", icon: returnIcon },
    { title: "Chargeback", amount: "₹ 5,696.00", count: "01", icon: circlerupee },
  ];

  return (
    <div className="layout content">
    <div className="content-body">
      {/* Filter Bar */}
      <div className="statescards">
        <div className="cardfilterbard">
          <span>Filter By Date</span>
          <div className="dateinput iconright">
            <input type="text" placeholder="Date Range" />
            <span className="showhidepsd">
              <img src={calenderIcon} alt="calendar" />
            </span>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="cardsrows">
          {cardData.map((card, index) => (
            <div key={index} className="pyincards py-card">
              <div className="pyintitle">
                <span>{card.title}</span>
                <span>
                  <img src={`${card.icon}`} alt="icon" />
                </span>
              </div>
              <div className="pyinstats">
                <div className="pyindpair">
                  <span>{card.amount}</span>
                  <span>Total Amount</span>
                </div>
                <div className="pyindpair">
                  <span>{card.count}</span>
                  <span>Transaction Count</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts */}
      <div className="pair-block-py-1">
        <div className="py-card mt20 p-0">
          <div className="blockhead">
            <h3 className="h3heading m-0">Gross Transaction Value (Last 10 days)</h3>
          </div>
          <div className="blockbody pt20">
            <div id="chart"> {/* Add Chart Component Here */} </div>
          </div>
        </div>
        <div className="py-card mt20 p-0">
          <div className="blockhead">
            <h3 className="h3heading m-0">Transactions Analytics</h3>
          </div>
          <div className="blockbody p20">
            <div className="chart-container">
              <div id="pieChart" className="chart pt50">{/* Pie Chart Component */}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="py-table-wrap bg-white shadow radius-5 overflow-hidden mt20">
        <div className="py-table-head pair-tw0">
          <div className="pytbl1">
            <h3 className="h3heading m-0">Latest Transactions</h3>
          </div>
          <div className="pytbl2">
            <div className="solsearch">
              <input type="text" placeholder="Search..." className="no-shadow" />
              <button><img src={searchIcon} alt="search" /></button>
              {/* <button><img src="/images/icons/clear.svg" alt="clear" /></button> */}
            </div>
            <div className="pair-btn-2">
              <a href="#" className="lighticon text-btn">View All</a>
            </div>
          </div>
        </div>

        <div className="tablebody-py">
          <table className="table py-table">
            <thead>
              <tr>
                <th>Txn Initiation Date</th>
                <th>Txn ID</th>
                <th>Merchant Order ID</th>
                <th>Customer Name</th>
                <th>Mobile</th>
                <th>Email ID</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Settlement Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, index) => (
                <tr key={index}>
                  <td><div className="tbdata">{txn.date}</div></td>
                  <td><div className="tbdata">{txn.txnId}</div></td>
                  <td><div className="tbdata">{txn.orderId}</div></td>
                  <td><div className="tbdata">{txn.customer}</div></td>
                  <td><div className="tbdata">{txn.mobile}</div></td>
                  <td><div className="tbdata">{txn.email}</div></td>
                  <td><div className="tbdata">{txn.amount}</div></td>
                  <td><div className={`tbdata statuslable ${txn.status === "Success" ? "green" : "orange"}`}>{txn.status}</div></td>
                  <td><div className={`tbdata statuslable ${txn.settlement === "Settled" ? "green" : "orange"}`}>{txn.settlement}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DashboardPayin;


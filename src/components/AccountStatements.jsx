import React, { useState } from "react";
import download from '../assets/icons/download.svg'
import search from '../assets/icons/search.svg'


const AccountStatements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const transactions = [
    {
      dateTime: "05 Apr 2022, 06:54 PM",
      referenceId: "IMPS2627202304052",
      details: "454564231566",
      debit: "₹100.00",
      credit: "₹100.00",
      balance: "₹50,000.00",
    },
    {
        dateTime: "05 Apr 2022, 06:54 PM",
        referenceId: "IMPS2627202304052",
        details: "454564231566",
        debit: "₹100.00",
        credit: "₹100.00",
        balance: "₹50,000.00",
      },
      {
        dateTime: "05 Apr 2022, 06:54 PM",
        referenceId: "IMPS2627202304052",
        details: "454564231566",
        debit: "₹100.00",
        credit: "₹100.00",
        balance: "₹50,000.00",
      },
      {
        dateTime: "05 Apr 2022, 06:54 PM",
        referenceId: "IMPS2627202304052",
        details: "454564231566",
        debit: "₹100.00",
        credit: "₹100.00",
        balance: "₹50,000.00",
      },
    // Add more transactions here...
  ];

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.referenceId.includes(searchTerm)
  );

  return (
    <div className="layout content">
    <div className="content-body">
      <div className="py-table-wrap bg-white shadow radius-5 overflow-hidden">
        <div className="py-table-head pair-tw0">
          <div className="pytbl1">
            <div className="pytb-button">
              <div className="blockheading">All Statements</div>
            </div>
          </div>
          <div className="pytbl2">
            <div className="solsearch">
              <input
                type="text"
                placeholder="Search..."
                className="no-shadow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button onClick={() => setSearchTerm("")}>
                {/* This should be dynamic. If something is typed it should show clear or cross */}
                <img src={search} alt="search"/>
              </button>
            </div>
            <div className="pair-btn-2">
              <a href="#" className="lighticon">
                <img src={download} alt="Download" />
              </a>
            </div>
          </div>
        </div>

        <div className="tablebody-py pscroll fhd">
          <table className="table py-table">
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Reference ID</th>
                <th>Transaction Details</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Closing Balance</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.dateTime}</td>
                  <td>{transaction.referenceId}</td>
                  <td>{transaction.details}</td>
                  <td>{transaction.debit}</td>
                  <td>{transaction.credit}</td>
                  <td>{transaction.balance}</td>
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

export default AccountStatements;

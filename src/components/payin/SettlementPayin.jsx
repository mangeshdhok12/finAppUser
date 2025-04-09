

import React, { useState } from 'react';
import searchIcon from "../../assets/icons/search.svg"
import calenderIcon from "../../assets/icons/calendar-icon.svg"
import downloadIcon from "../../assets/icons/download.svg"


const SettlementPayin = () => {
  // Sample data, you can replace this with actual dynamic data
  const data = [
    {
      txnInitiationDate: "05 Apr 2022, 06:54 PM",
      settlementId: "2688202207",
      utrNo: "2688202207",
      txnAmount: "₹50,000.00",
      deductions: "₹50,000.00",
      gstCharges: "₹50,000.00",
      settledAmount: "₹50,000.00",
      status: "Pending",
    },
    {
      txnInitiationDate: "06 Apr 2022, 08:00 PM",
      settlementId: "2688202208",
      utrNo: "2688202208",
      txnAmount: "₹60,000.00",
      deductions: "₹60,000.00",
      gstCharges: "₹60,000.00",
      settledAmount: "₹60,000.00",
      status: "Success",
    },
  ];

  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search functionality here (filter data based on `searchTerm`)
    console.log("Searching for: ", searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="layout content">
    <div className="content-body">
      <div className="py-table-wrap bg-white shadow radius-5 overflow-hidden">
        <div className="py-table-head pair-tw0">
          <div className="pytbl1">
            <div className="solsearch">
              <input
                type="text"
                placeholder="Search..."
                id="searchInput"
                className="no-shadow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button id="searchButton" onClick={handleSearch}>
                <img
                  className="button-icon"
                  src={searchIcon}
                  alt="search"
                />
              </button>
              <button id="clearButton" onClick={handleClear}>
                <img
                  className="button-icon"
                  src="/images/icons/clear.svg"
                  alt="clear"
                />
              </button>
            </div>
          </div>
          <div className="pytbl2">
            <div className="pair-btn-2">
              <div className="dateinput iconright">
                <input type="text" placeholder="Date Range" name="daterange" />
                <span className="showhidepsd">
                  <img src={calenderIcon} alt="calendar" />
                </span>
              </div>
              <a href="#" className="lighticon">
                <img
                  src={downloadIcon}
                  alt="download"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="tablebody-py pscroll fhd">
          <table className="table py-table">
            <thead>
              <tr>
                <th scope="col">Txn Initiation Date:</th>
                <th scope="col">Settlement ID</th>
                <th scope="col">UTR No</th>
                <th scope="col">Txn Amount</th>
                <th scope="col">Deductions</th>
                <th scope="col">GST Charges</th>
                <th scope="col">Settled Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) =>
                  item.settlementId.includes(searchTerm) ||
                  item.utrNo.includes(searchTerm)
                )
                .map((row, index) => (
                  <tr key={index}>
                    <td>
                      <div className="tbdata">{row.txnInitiationDate}</div>
                    </td>
                    <td>
                      <div className="tbdata data-icon">
                        <span>{row.settlementId}</span>
                        <span className="copy">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 13 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 6.52941C10 4.86563 10 4.03374 9.47279 3.51687C8.94558 3 8.09706 3 6.4 3H4.6C2.90294 3 2.05442 3 1.52721 3.51687C0.999999 4.03374 1 4.86563 1 6.52941V9.47059C1 11.1344 0.999999 11.9663 1.52721 12.4831C2.05442 13 2.90294 13 4.6 13H6.4C8.09706 13 8.94558 13 9.47279 12.4831C10 11.9663 10 11.1344 10 9.47059V6.52941Z"
                              stroke="#575473"
                            />
                            <path
                              d="M10.2 11C11.1941 11 12 10.2099 12 9.23529V5.70588C12 3.48751 12 2.37832 11.2971 1.68916C10.5941 1 9.46274 1 7.2 1H4.8C3.80589 1 3 1.79009 3 2.76471"
                              stroke="#575473"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="tbdata">{row.utrNo}</div>
                    </td>
                    <td>
                      <div className="tbdata">{row.txnAmount}</div>
                    </td>
                    <td>
                      <div className="tbdata">{row.deductions}</div>
                    </td>
                    <td>
                      <div className="tbdata">{row.gstCharges}</div>
                    </td>
                    <td>
                      <div className="tbdata">{row.settledAmount}</div>
                    </td>
                    <td>
                      <div className="tbdata">
                        <div className={`statuslable ${row.status === 'Pending' ? 'orange' : 'green'}`}>
                          {row.status}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="action-options d-flex gap-15">
                        <a className="tableicons lighticon">
                          <img
                            src="/images/icons/download.svg"
                            alt="download"
                          />
                        </a>
                      </div>
                    </td>
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

export default SettlementPayin;

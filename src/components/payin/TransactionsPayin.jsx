
import React, { useState } from 'react';
import searchIcon from "../../assets/icons/search.svg"
import calenderIcon from "../../assets/icons/calendar-icon.svg"
import downloadIcon from "../../assets/icons/download.svg"


const TransactionsPayin = () => {
  // State for search input and date range
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search functionality here
    console.log('Searching for: ', searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    // Clear search results or reset table data
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
                placeholder="Search by Transaction ID or UTR"
                id="searchInput"
                className="no-shadow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button id="searchButton" onClick={handleSearch}>
                <img
                  className="button-icon"
                  src={searchIcon}
                  alt="search icon"
                />
              </button>
              <button id="clearButton" onClick={handleClear}>
                <img
                  className="button-icon"
                  src="/images/icons/clear.svg"
                  alt="clear icon"
                />
              </button>
            </div>
          </div>
          <div className="pytbl2">
            <div className="pair-btn-2">
              <div className="dateinput iconright">
                <input
                  type="text"
                  placeholder="Date Range"
                  name="daterange"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                />
                <span className="showhidepsd">
                  <img src={calenderIcon} alt="calendar icon" />
                </span>
              </div>
              <a href="#" className="lighticon">
                <img
                  src={downloadIcon}
                  alt="download icon"
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
                <th scope="col">Txn ID</th>
                <th scope="col">Merchant Order ID </th>
                <th scope="col">Customer Name </th>
                <th scope="col">Mobile</th>
                <th scope="col">Email ID</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Settlement Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="tbdata"> 05 Apr 2022, 06:54 PM </div>
                </td>
                <td>
                  <div className="tbdata">
                    <a
                      data-bs-toggle="offcanvas"
                      href="#tdr-details"
                      className="sol-link"
                    >
                      2376894534
                    </a>
                  </div>
                </td>
                <td>
                  <div className="tbdata"> 6576894534 </div>
                </td>
                <td>
                  <div className="tbdata"> ANIL KUMAR</div>
                </td>
                <td>
                  <div className="tbdata"> 9784362641 </div>
                </td>
                <td>
                  <div className="tbdata"> anilkumar@hotmail.com </div>
                </td>
                <td>
                  <div className="tbdata"> ₹50,000.00 </div>
                </td>
                <td>
                  <div className="tbdata">
                    <div className="statuslable orange"> Process </div>
                  </div>
                </td>
                <td>
                  <div className="tbdata">
                    <div className="statuslable orange"> Pending </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="tbdata"> 05 Apr 2022, 06:54 PM </div>
                </td>
                <td>
                  <div className="tbdata">
                    <a
                      data-bs-toggle="offcanvas"
                      href="#tdr-details"
                      className="sol-link"
                    >
                      2376894534
                    </a>
                  </div>
                </td>
                <td>
                  <div className="tbdata"> 6576894534 </div>
                </td>
                <td>
                  <div className="tbdata"> ANIL KUMAR</div>
                </td>
                <td>
                  <div className="tbdata"> 9784362641 </div>
                </td>
                <td>
                  <div className="tbdata"> anilkumar@hotmail.com </div>
                </td>
                <td>
                  <div className="tbdata"> ₹50,000.00 </div>
                </td>
                <td>
                  <div className="tbdata">
                    <div className="statuslable green"> Success </div>
                  </div>
                </td>
                <td>
                  <div className="tbdata">
                    <div className="statuslable green"> Settled </div>
                  </div>
                </td>
              </tr>
              {/* Additional rows can go here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TransactionsPayin;

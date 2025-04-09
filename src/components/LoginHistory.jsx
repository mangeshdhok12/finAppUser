import React, { useState } from "react";
import Chrome from "../assets/browser/chrome.svg"

const LoginHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const loginHistory = [
    {
      lastLogin: "27 Oct 2023, 02:31 PM",
      ipAddress: "61.0.30.253",
      latitude: "27.274338",
      longitude: "75.718910",
      deviceType: "Desktop",
      os: "Windows 11",
      browser: "Chrome",
      browserIcon: Chrome,
    },
  ];

  return (
    <div className="layout content">
    <div className="content-body">
      <div className="py-table-wrap bg-white shadow radius-5 overflow-hidden">
        {/* Table Head */}
        <div className="py-table-head pair-tw0">
          <div className="pytbl1">
            <div className="pytb-button">
              <div className="blockheading">Login History</div>
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
              <button onClick={() => setSearchTerm("")}>Clear</button>
            </div>
            <div className="pair-btn-2">
              <button className="lighticon dropdown-toggle" data-bs-toggle="dropdown">
                <img src="images/icons/download.svg" alt="Download" />
              </button>
              <div className="dropdown-menu top10">
                <a className="dropdown-item" href="#">Download Excel</a>
              </div>
            </div>
          </div>
        </div>
        {/* Table Body */}
        <div className="tablebody-py pscroll fhd">
          <table className="table py-table">
            <thead>
              <tr>
                <th>Last Login</th>
                <th>IP Address</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Device Type</th>
                <th>OS</th>
                <th>Browser</th>
              </tr>
            </thead>
            <tbody>
              {loginHistory.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.lastLogin}</td>
                  <td>{entry.ipAddress}</td>
                  <td>{entry.latitude}</td>
                  <td>{entry.longitude}</td>
                  <td>{entry.deviceType}</td>
                  <td>{entry.os}</td>
                  <td>
                    <div className="icon-label">
                    <img  src={entry.browserIcon} alt="browser" /> {entry.browser}
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

export default LoginHistory;
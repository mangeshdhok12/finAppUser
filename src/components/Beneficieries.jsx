
import React, { useState } from "react";
import search from '../assets/icons/search.svg'
import download from '../assets/icons/download.svg'
import './styles.css'

const Beneficiaries = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data] = useState([
    {
      name: "Rakesh Kumar",
      email: "anilkumar@hotmail.com",
      phone: "9784362641",
      account: "456456121656",
      ifsc: "HDFC00002156",
      pincode: "203202",
      city: "Jaipur",
      state: "Rajasthan",
    },
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="layout content">
    <div className="content-body">
      <div className="py-table-wrap bg-white shadow radius-5 overflow-hidden">
        <div className="py-table-head pair-tw0">
          <div className="pytbl1">
            <div className="pytb-button">
              <a href="#Create-New-Entry" className="sw-btn py-btn-2 titlebtn" data-bs-toggle="offcanvas">
                Create
              </a>
            </div>
          </div>
          <div className="pytbl2">
            <div className="solsearch">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                className="no-shadow"
              />
              <button onClick={clearSearch}>
                {/* add dynamically */}
                <img className="button-icon" src={search} alt="Clear" />
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
                <th>Customer Name</th>
                <th>Email ID</th>
                <th>Phone No</th>
                <th>Account Number</th>
                <th>IFSC Code</th>
                <th>Pincode</th>
                <th>City</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) =>
                  item.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.account}</td>
                    <td>{item.ifsc}</td>
                    <td>{item.pincode}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
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

export default Beneficiaries;


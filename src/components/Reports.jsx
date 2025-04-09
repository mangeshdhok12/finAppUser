import React, { useState } from "react";
import download from '../assets/icons/download.svg'
import deleteIcon from '../assets/icons/delete-icon.svg'


const Reports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([
    {
      name: "Rakesh Kumar",
      phone: "9784362641",
      email: "anilkumar@hotmail.com",
      account: "456456121656",
      ifsc: "HDFC00002156",
      zip: "203202",
      state: "Rajasthan",
      city: "Jaipur",
    },
  ]);

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="layout content">
    <div className="content-body">
      <div className="py-table-wrap bg-white shadow radius-5 overflow-hidden">
        <div className="py-table-head pair-tw0 flex justify-between p-4">
          <button className="sw-btn py-btn-2 titlebtn">Generate Report</button>
          <div className="solsearch flex gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="no-shadow border p-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => setSearchTerm("")}>Clear</button>
          </div>
        </div>
        <div className="tablebody-py pscroll fhd overflow-auto">
          <table className="table py-table w-full border-collapse">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone No</th>
                <th>Email ID</th>
                <th>Account Number</th>
                <th>IFSC Code</th>
                <th>Zip</th>
                <th>State</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.account}</td>
                  <td>{item.ifsc}</td>
                  <td>{item.zip}</td>
                  <td>{item.state}</td>
                  <td className="flex gap-2">
                    <button className="lighticon">
                        <img src={deleteIcon} alt="" />
                    </button>
                    <button className="lighticon"><img src={download} alt="" /></button>
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

export default Reports;

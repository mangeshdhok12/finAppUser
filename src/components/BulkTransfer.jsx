
// import React, { useState } from "react";
// import search from '../assets/icons/search.svg';
// import download from '../assets/icons/download.svg';
// import calender from "../assets/icons/calendar-icon.svg";
// import clear from "../assets/icons/clear.svg";
// import view from "../assets/icons/view-1.svg";
// import cloudUpload from "../assets/icons/cloud_upload.svg";
// import downloadFile from "../assets/icons/download-file.svg";

// const BulkTransfer = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [dateRange, setDateRange] = useState("");
//   const [file, setFile] = useState(null);  // State for file upload
//   const [showOffcanvas, setShowOffcanvas] = useState(false);  // State for offcanvas visibility
//   const [showSummary, setShowSummary] = useState(false);

//   const transactions = [
//     {
//       batchName: "July-salary-2024",
//       batchId: "180172155456",
//       createdAt: "05 Apr 2022, 06:54 PM",
//       successRatio: { success: 4, total: 10 },
//       status: "Success",
//     },
//   ];

//   // Handle file change
//   const handleFileChange = (e) => {
//     const uploadedFile = e.target.files[0];
//     if (uploadedFile) {
//       setFile(uploadedFile);
//     }
//   };

//   // Open the offcanvas sidebar
//   const openOffcanvas = () => setShowOffcanvas(true);

//   // Close the offcanvas sidebar
//   const closeOffcanvas = () => setShowOffcanvas(false);

//   return (
//     <div className="layout content">
//       <div className="content-body">
//         {/* Trigger Button for Bulk Transfer */}
//         <div className="py-table-wrap bg-white shadow radius-5 overflow-hidden">
//           <div className="py-table-head pair-tw0">
//             <div className="pytbl1">
//               <div className="pytb-button">
//                 <button
//                   onClick={openOffcanvas}
//                   className="sw-btn py-btn-2 titlebtn"
//                 >
//                   Bulk Transfer
//                 </button>
//               </div>
//             </div>
//             <div className="pytbl2">
//               <div className="dateinput iconright">
//                 <input
//                   type="text"
//                   placeholder="Date Range"
//                   value={dateRange}
//                   onChange={(e) => setDateRange(e.target.value)}
//                 />
//                 <span className="showhidepsd">
//                   <img src={calender} alt="calendar" />
//                 </span>
//               </div>
//               <div className="solsearch">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 {/* make below dynamically. clear or search once type */}
//                 <button>
//                   <img className="button-icon" src={search} alt="search" />
//                 </button>
//                 {/* <button onClick={() => setSearchTerm("")}>
//                   <img className="button-icon" src={clear} alt="clear" />
//                 </button> */}
//               </div>
//               <div className="pair-btn-2">
//                 <a href="#" className="lighticon">
//                   <img src={download} alt="download" />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="tablebody-py pscroll fhd">
//             <table className="table py-table">
//               <thead>
//                 <tr>
//                   <th>Batch Name</th>
//                   <th>Batch ID</th>
//                   <th>Created At</th>
//                   <th>Success Ratio</th>
//                   <th>Batch Status</th>
//                   <th>More Details</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactions.map((txn, index) => (
//                   <tr key={index}>
//                     <td>{txn.batchName}</td>
//                     <td>{txn.batchId}</td>
//                     <td>{txn.createdAt}</td>
//                     <td>
//                       <div className="pairstatus">
//                         <div className="statuslable green">{txn.successRatio.success}</div>
//                         /
//                         <div className="statuslable blue">{txn.successRatio.total}</div>
//                       </div>
//                     </td>
//                     <td>
//                       <div className="statuslable green">{txn.status}</div>
//                     </td>
//                     <td>
//                       <a href="#viewsummary" className="statuslable blue">
//                         <img src={view} alt="view" /> summary
//                       </a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* Offcanvas Sidebar */}
//       <div
//         className={`pyoffcanvas offcanvas offcanvas-end ${showOffcanvas ? 'show' : ''}`}
//         tabIndex="-1"
//         id="bulkTransfer"
//         aria-labelledby="bulkTransferLabel"
//       >
//         <div className="offcanvas-header">
//           <h5>Instant Fund Transfer</h5>
//           <button
//             type="button"
//             className="btn-close text-reset"
//             aria-label="Close"
//             onClick={closeOffcanvas}
//           />
//         </div>

//         {/* Sidebar Body */}
//         <div className="offcanvas-body">
//           <div className="formblocksidebar">
//             <div className="form-body-py">
//               <form>
//                 <div className="fieldsets row">
//                   <div className="formtitles mb10">Transfer Mode: IMPS/NEFT/RTGS/UPI</div>

//                   <div className="col-md-12 form-group">
//                     <div className="floating-label">
//                       <input
//                         type="text"
//                         placeholder=" "
//                         required="required"
//                         className="floating-input"
//                       />
//                       <label>Batch Name <span className="red">*</span></label>
//                     </div>
//                   </div>

//                   <div className="formtitles mb10">File Upload</div>

//                   <div className="col-sm-12 form-group">
//                     <div className="file-input-container">
//                       <div className="custom-file-input">
//                         <input
//                           type="file"
//                           id="file-input"
//                           accept=".xls,.xlsx,.xlsm,.xlsb,.csv"
//                           onChange={handleFileChange}
//                         />
//                         <div className="file-input-text">
//                           <img
//                             src={cloudUpload}
//                             alt="img"
//                           />
//                           <p>
//                             <span>Click to upload</span> or drag and drop
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {file && (
//                     <p className="file-info">File: {file.name}</p>
//                   )}

//                   <a
//                     href="path-to-your-template-file"
//                     className="filedownload"
//                   >
//                     <img
//                       src={downloadFile}
//                       alt="img"
//                     />
//                     <span>Download Template</span>
//                   </a>
//                 </div>

//                 {/* Form Buttons */}
//                 <div className="formfooterblock">
//                   <div className="buttonpair">
//                     <button
//                       type="reset"
//                       className="sw-btn py-btn-3 clearbtn w-100"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       className="sw-btn py-btn-2 w-100"
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Backdrop */}
//       {showOffcanvas && (
//         <div className="offcanvas-backdrop fade show" onClick={closeOffcanvas} />
//       )}
//     </div>
//   );
// };

// export default BulkTransfer;


import React, { useState } from "react";
import search from '../assets/icons/search.svg';
import download from '../assets/icons/download.svg';
import calender from "../assets/icons/calendar-icon.svg";
import clear from "../assets/icons/clear.svg";
import view from "../assets/icons/view-1.svg";
import cloudUpload from "../assets/icons/cloud_upload.svg";
import downloadFile from "../assets/icons/download-file.svg";

const BulkTransfer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [file, setFile] = useState(null);  // State for file upload
  const [showOffcanvas, setShowOffcanvas] = useState(false);  // State for offcanvas visibility

  const transactions = [
    {
      batchName: "July-salary-2024",
      batchId: "180172155456",
      createdAt: "05 Apr 2022, 06:54 PM",
      successRatio: { success: 4, total: 10 },
      status: "Success",
    },
  ];

  // Handle file change
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  // Open the offcanvas sidebar
  const openOffcanvas = () => setShowOffcanvas(true);

  // Close the offcanvas sidebar
  const closeOffcanvas = () => setShowOffcanvas(false);

  return (
    <div className="layout content">
      <div className="content-body">
        {/* Trigger Button for Bulk Transfer */}
        <div className="py-table-wrap bg-white shadow radius-5 overflow-hidden">
          <div className="py-table-head pair-tw0">
            <div className="pytbl1">
              <div className="pytb-button">
                <button
                  onClick={openOffcanvas}
                  className="sw-btn py-btn-2 titlebtn"
                >
                  Bulk Transfer
                </button>
              </div>
            </div>
            <div className="pytbl2">
              <div className="dateinput iconright">
                <input
                  type="text"
                  placeholder="Date Range"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                />
                <span className="showhidepsd">
                  <img src={calender} alt="calendar" />
                </span>
              </div>
              <div className="solsearch">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* make below dynamically. clear or search once type */}
                <button>
                  <img className="button-icon" src={search} alt="search" />
                </button>
                {/* <button onClick={() => setSearchTerm("")}>
                  <img className="button-icon" src={clear} alt="clear" />
                </button> */}
              </div>
              <div className="pair-btn-2">
                <a href="#" className="lighticon">
                  <img src={download} alt="download" />
                </a>
              </div>
            </div>
          </div>
          <div className="tablebody-py pscroll fhd">
            <table className="table py-table">
              <thead>
                <tr>
                  <th>Batch Name</th>
                  <th>Batch ID</th>
                  <th>Created At</th>
                  <th>Success Ratio</th>
                  <th>Batch Status</th>
                  <th>More Details</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn, index) => (
                  <tr key={index}>
                    <td>{txn.batchName}</td>
                    <td>{txn.batchId}</td>
                    <td>{txn.createdAt}</td>
                    <td>
                      <div className="pairstatus">
                        <div className="statuslable green">{txn.successRatio.success}</div>
                        /
                        <div className="statuslable blue">{txn.successRatio.total}</div>
                      </div>
                    </td>
                    <td>
                      <div className="statuslable green">{txn.status}</div>
                    </td>
                    <td>
                      <a href="#viewsummary" className="statuslable blue">
                        <img src={view} alt="view" /> summary
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Offcanvas Sidebar */}
      <div
        className={`pyoffcanvas offcanvas offcanvas-end ${showOffcanvas ? 'show' : ''}`}
        tabIndex="-1"
        id="bulkTransfer"
        aria-labelledby="bulkTransferLabel"
      >
        <div className="offcanvas-header">
          <h5>Instant Fund Transfer</h5>
          <button
            type="button"
            className="btn-close text-reset"
            aria-label="Close"
            onClick={closeOffcanvas}
          />
        </div>

        {/* Sidebar Body */}
        <div className="offcanvas-body">
          <div className="formblocksidebar">
            <div className="form-body-py">
              <form>
                <div className="fieldsets row">
                  <div className="formtitles mb10">Transfer Mode: IMPS/NEFT/RTGS/UPI</div>

                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        required="required"
                        className="floating-input"
                      />
                      <label>Batch Name <span className="red">*</span></label>
                    </div>
                  </div>

                  <div className="formtitles mb10">File Upload</div>

                  <div className="col-sm-12 form-group">
                    <div className="file-input-container">
                      <div className="custom-file-input">
                        <input
                          type="file"
                          id="file-input"
                          accept=".xls,.xlsx,.xlsm,.xlsb,.csv"
                          onChange={handleFileChange}
                        />
                        <div className="file-input-text">
                          <img
                            src={cloudUpload}
                            alt="img"
                          />
                          <p>
                            <span>Click to upload</span> or drag and drop
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {file && (
                    <p className="file-info">File: {file.name}</p>
                  )}

                  <a
                    href="path-to-your-template-file"
                    className="filedownload"
                  >
                    <img
                      src={downloadFile}
                      alt="img"
                    />
                    <span>Download Template</span>
                  </a>
                </div>

                {/* Form Buttons */}
                <div className="formfooterblock">
                  <div className="buttonpair">
                    <button
                      type="reset"
                      className="sw-btn py-btn-3 clearbtn w-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="sw-btn py-btn-2 w-100"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {showOffcanvas && (
        <div className="offcanvas-backdrop fade show" onClick={closeOffcanvas} />
      )}
    </div>
  );
};

export default BulkTransfer;

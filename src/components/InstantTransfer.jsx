import React, { useState } from "react";
import search from '../assets/icons/search.svg';
import download from '../assets/icons/download.svg';
import calender from "../assets/icons/calendar-icon.svg";

const InstantTransfer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [showOffcanvas, setShowOffcanvas] = useState(false);  // To control offcanvas visibility

  const transactions = [
    {
      createdAt: "05 Apr 2022, 06:54 PM",
      referenceId: "2688202207",
      amount: "₹50,000.00",
      transactionId: "IMPS2688202207",
      bankRefNo: "2688202207",
      accountNo: "50100145587963",
      ifsc: "HDFC0000504",
      status: "Success",
    },
  ];

  // To open the offcanvas
  const openOffcanvas = () => {
    setShowOffcanvas(true);
  };

  // To close the offcanvas
  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  return (
    <div className="layout content">
      <div className="content-body">
        <div className="py-table-wrap bg-white shadow radius-5 overflow-hidden">
          <div className="py-table-head pair-tw0">
            <div className="pytbl1">
              <div className="pytb-button">
                <button
                  className="sw-btn py-btn-2 titlebtn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#InstantTransfer"
                  onClick={openOffcanvas}  // Trigger offcanvas open
                >
                  Instant Transfer
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
                  <img src={calender} alt="calender" />
                </span>
              </div>
              <div className="solsearch">
                <input
                  type="text"
                  placeholder="Search by Transaction ID or UTR"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="no-shadow"
                />
                <button onClick={() => setSearchTerm("")}>
                  <img className="button-icon" src={search} alt="clear" />
                </button>
              </div>
              <div className="pair-btn-2">
                <a href="#" className="lighticon">
                  <img className="button-icon" src={download} alt="download" />
                </a>
              </div>
            </div>
          </div>
          <div className="tablebody-py pscroll fhd">
            <table className="table py-table">
              <thead>
                <tr>
                  <th>Created At</th>
                  <th>Reference ID</th>
                  <th>Amount</th>
                  <th>Transaction ID</th>
                  <th>Bank Reference No</th>
                  <th>Account No</th>
                  <th>IFSC</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, index) => (
                  <tr key={index}>
                    <td>{tx.createdAt}</td>
                    <td>{tx.referenceId}</td>
                    <td>{tx.amount}</td>
                    <td>{tx.transactionId}</td>
                    <td>{tx.bankRefNo}</td>
                    <td>{tx.accountNo}</td>
                    <td>{tx.ifsc}</td>
                    <td>
                      <div className={`statuslable ${tx.status === "Success" ? "green" : "red"}`}>
                        {tx.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Instant Transfer Offcanvas */}
      <div
        className={`pyoffcanvas offcanvas offcanvas-end ${showOffcanvas ? 'show' : ''}`}
        id="InstantTransfer"
        tabIndex="-1"
        aria-labelledby="InstantTransferLabel"
      >
        <div className="offcanvas-header">
          <h5>Instant Fund Transfer</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={closeOffcanvas} // Close offcanvas
          />
        </div>

        <div className="offcanvas-body">
          <div className="formblocksidebar">
            <div className="form-body-py">
              <form>
                <div className="fieldsets row">
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <select required="required" className="floating-select error" aria-invalid="true">
                        <option value="">&nbsp;</option>
                        <option value="Success">Rajasthan</option>
                        <option value="Failed">Delhi</option>
                      </select>
                      <label>Select Bank Account <span className="red">*</span></label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <select required="required" className="floating-select error" aria-invalid="true">
                        <option value="">&nbsp;</option>
                        <option value="Success">Rajasthan</option>
                        <option value="Failed">Delhi</option>
                      </select>
                      <label>Select Beneficiaries <span className="red">*</span></label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label customamount">
                      <input type="text" placeholder=" " required="required" class="floating-input" />
                      <label>Amount <span className="red">*</span></label>
                      <div className="rupeesign">₹</div>
                      <div className="AVAILBAL"><span>AVAIL BAL</span><span>₹1,252</span></div>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <select required="required" className="floating-select error" aria-invalid="true">
                        <option value="">&nbsp;</option>
                        <option value="Success">Rajasthan</option>
                        <option value="Failed">Delhi</option>
                      </select>
                      <label>Payment Mode <span className="red">*</span></label>
                    </div>
                  </div>
                </div>

                <div className="formfooterblock">
                  <div className="buttonpair">
                    <button type="reset" className="sw-btn py-btn-3 clearbtn w-100">Cancel</button>
                    <button type="submit" className="sw-btn py-btn-2 w-100">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop to close offcanvas when clicked outside */}
      {showOffcanvas && (
        <div className="offcanvas-backdrop fade show" onClick={closeOffcanvas} />
      )}
    </div>
  );
};

export default InstantTransfer;

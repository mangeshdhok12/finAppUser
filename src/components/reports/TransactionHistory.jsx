import React, { useState } from 'react';

const TransactionHistory = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [operator, setOperator] = useState('All Operator');
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit with:', { fromDate, toDate, operator });
  };

  const handleExcelExport = () => {
    console.log('Exporting to Excel with:', { fromDate, toDate, operator });
  };

  return (
    <div className="layout content">
  <div className="content-body">
    <div className="row rowTop">
      <div className="col-md-12">
        <div className="card card-custom">
          <div className="card-header d-flex justify-content-between align-items-center  bg-dark">
            <div className="card-title d-flex align-items-center">
              <span className="card-icon mr-2">
                <i className="flaticon2-chat-1 text-primary" />
              </span>
              <div>
                <h5 className="card-label mb-0  text-white">Transaction History</h5>
                {/* <small>Transaction History</small> */}
              </div>
            </div>
            <div className="card-toolbar">
              <button
                className="btn btn-sm btn-success font-weight-bold marginRight"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <i className="flaticon2-cube" /> Apply Filter
              </button>
              <button
                className="btn btn-sm btn-primary marginRight"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="btn btn-sm btn-success"
                onClick={handleExcelExport}
              >
                Excel
              </button>
            </div>
          </div>

          <div className="card-body">
            {isFilterOpen && (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="form-group">
                      <label>From Date</label>
                      <div className="input-group date">
                        <input
                          type="date"
                          className="form-control"
                          value={fromDate}
                          onChange={(e) => setFromDate(e.target.value)}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="la la-calendar text-primary font-weight-bold"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="form-group">
                      <label>To Date</label>
                      <div className="input-group date">
                        <input
                          type="date"
                          className="form-control"
                          value={toDate}
                          onChange={(e) => setToDate(e.target.value)}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="la la-calendar text-primary font-weight-bold"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="form-group">
                      <label>Operator</label>
                      <select
                        className="form-control"
                        value={operator}
                        onChange={(e) => setOperator(e.target.value)}
                      >
                        <option>All Operator</option>
                        <option value="2">AIRTEL</option>
                        <option value="3">BSNL TOPUP</option>
                        <option value="4">BSNL VALIDITY</option>
                        <option value="5">IDEA</option>
                        <option value="6">MTNL DELHI TOPUP</option>
                        {/* Add rest of the options here or map from a constant array */}
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default TransactionHistory;

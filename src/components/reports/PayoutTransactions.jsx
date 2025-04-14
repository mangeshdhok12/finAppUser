

import React, { useState } from 'react';

const PayoutTransactions = () => {
  const [fromDate, setFromDate] = useState('2025-04-11');
  const [toDate, setToDate] = useState('2025-04-11');
  const [beneficiaryNo, setBeneficiaryNo] = useState('');

  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted with:', { fromDate, toDate, beneficiaryNo });
  };

  const handleExportExcel = () => {
    console.log('Exporting to Excel with:', { fromDate, toDate,beneficiaryNo });
  };
  
  return (
    <div className="layout content">
  <div className="content-body">
    <div className="row rowTop">
      <div className="col-md-12">
        <div className="card card-custom">
          <div className="card-header d-flex justify-content-between align-items-center bg-dark">
            <div className="card-title d-flex align-items-center">
              <span className="card-icon mr-2">
                <i className="flaticon2-chat-1 text-primary"></i>
              </span>
              <div >
                <h5 className="card-label mb-0 text-white">Report</h5>
                <small className='text-white'> Payout Transactions</small>
              </div>
            </div>
            <div className="card-toolbar">
              <button
                className="btn btn-sm btn-success font-weight-bold marginRight"
                onClick={() => setIsFilterVisible(!isFilterVisible)}
              >
                <i className="flaticon2-cube"></i> Apply Filter
              </button>
              <button
                className="btn btn-sm btn-primary marginRight"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="btn btn-sm btn-success marginRight"
                onClick={handleExportExcel}
              >
                Excel
              </button>
            
            </div>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                {isFilterVisible && (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className="form-group has-feedback">
                          <label htmlFor="fromDate">From Date</label>
                          <div className="input-group date">
                            <input
                              type="date"
                              className="form-control"
                              value={fromDate}
                              onChange={(e) => setFromDate(e.target.value)}
                              autoComplete="off"
                            />
                          
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className="form-group has-feedback">
                          <label htmlFor="toDate">To Date</label>
                          <div className="input-group date">
                            <input
                              type="date"
                              className="form-control"
                              value={toDate}
                              onChange={(e) => setToDate(e.target.value)}
                              autoComplete="off"
                            />
                       
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className="form-group has-feedback">
                          <label htmlFor="toDate">Beneficiary Number</label>
                          <div className="input-group date">
                            <input
                              type="number"
                              className="form-control"
                              onChange={(e) => setBeneficiaryNo(e.target.value)}
                            />
                       
                          </div>
                        </div>
                      </div>

                    </div>
                  </form>
                )}
              </div>
            </div>

            <div className="row rowTop">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div>{/* Additional content goes here */}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem animi perferendis rem libero officiis quasi culpa a, debitis nemo ab optio quibusdam? Voluptatum nihil pariatur dolore optio iste, voluptatem architecto.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
  );
};

export default PayoutTransactions;

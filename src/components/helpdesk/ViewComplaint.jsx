import React, { useState } from 'react';
import LayoutWrapper from '../layout/LayoutWrapper';

const ViewComplaint = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [showFilter, setShowFilter] = useState(true);

  const handleToggleFilter = () => {
    setShowFilter(prev => !prev);
  };

  const handleSubmit = () => {
    // Add your logic here to fetch or filter data
    console.log('Submitted with:', { fromDate, toDate });
  };

  return (
    <LayoutWrapper>
    <div className="row rowTop">
      <div className="col-md-12">
        <div className="card card-custom">
          <div className="card-header d-flex justify-content-between align-items-center bg-light border-bottom py-2 px-3  bg-dark">
            <div className="card-title d-flex align-items-center">
              {/* <span className="card-icon mr-2">
                <i className="flaticon2-chat-1 text-primary"></i>
              </span> */}
              <h5 className="card-label mb-0 text-white">
                Report <small className="d-block">Complaint History</small>
              </h5>
            </div>
              {/* <Card.Header className="bg-light border-bottom py-2 px-3  bg-dark ">
          <Card.Title className="mb-0 text-white">Latest Transactions</Card.Title>
        </Card.Header> */}
            <div className="card-toolbar">
              <button
                className="btn btn-sm btn-success font-weight-bold marginRight"
                onClick={handleToggleFilter}
              >
                <i className="flaticon2-cube"></i> Apply Filter
              </button>
              <button
                className="btn btn-sm btn-primary "
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-12">
                {showFilter && (
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group has-feedback">
                        <label>From Date</label>
                        <div className="input-group date">
                          <input
                            type="date"
                            className="form-control"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                          />
                        
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group has-feedback">
                        <label>To Date</label>
                        <div className="input-group date">
                          <input
                            type="date"
                            className="form-control"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                          />
                       
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Placeholder for table */}
            <div className="row mt-4">
              <div className="col-12">
                <div className="table-responsive">
                  {/* Your table or data display goes here */}
                  <p className="text-muted">No data available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </LayoutWrapper>
  );
};

export default ViewComplaint;

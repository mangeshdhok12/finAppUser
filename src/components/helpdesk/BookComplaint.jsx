import React, { useState } from 'react';
import LayoutWrapper from '../layout/LayoutWrapper';

const BookComplaint = () => {
  const [complaintType, setComplaintType] = useState('');
  const [complaintCategory, setComplaintCategory] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [remark, setRemark] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      complaintType,
      complaintCategory,
      transactionId,
      remark,
    });
  };

  const handleReset = () => {
    setComplaintType('');
    setComplaintCategory('');
    setTransactionId('');
    setRemark('');
  };

  return (
    <LayoutWrapper>
    <div className="row rowTop">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="card card-custom gutter-b example example-compact">
          <div className="card-header bg-light border-bottom py-2 px-3  bg-dark">
            <h5 className="card-title mb-0 text-white">Book Complaints</h5>
          </div>
        
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              {/* Complaint Type */}
              <div className="form-group">
                <label>Complaint Type</label>
                <select
                  className="form-control"
                  value={complaintType}
                  onChange={(e) => setComplaintType(e.target.value)}
                >
                  <option value="">Select Complaint Type</option>
                  <option value="1">Transactions Related</option>
                  <option value="2">Service Related</option>
                  <option value="3">Payment Related</option>
                </select>
              </div>

              {/* Complaint Category */}
              <div className="form-group">
                <label>Complaint Category</label>
                <select
                  className="form-control"
                  value={complaintCategory}
                  onChange={(e) => setComplaintCategory(e.target.value)}
                >
                  <option value="">Select Complaint Category</option>
                  {/* Populate based on type, or hardcode if needed */}
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                </select>
              </div>

              {/* Transaction ID */}
              <div className="form-group">
                <label>TransactionId</label>
                <input
                  type="text"
                  maxLength="20"
                  className="form-control"
                  placeholder="TransactionId"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                />
              </div>

              {/* Remark */}
              <div className="form-group">
                <label>Remark</label>
                <input
                  type="text"
                  maxLength="100"
                  className="form-control"
                  placeholder="Complaint Remark"
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                />
              </div>
            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-primary float-right mr-2">
                Book Now
              </button>
              <button type="button" className="btn btn-secondary" onClick={handleReset}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </LayoutWrapper>
  );
};

export default BookComplaint;

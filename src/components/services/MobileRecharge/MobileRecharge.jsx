import React, { useState } from 'react';
import PlanSelector from './PlanSelector';
import LatestTransactions from './LatestTransactions';

const MobileRecharge = () => {
  const [customerNumber, setCustomerNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ customerNumber, operator, amount });
  };

  return (
    <div className="layout content">
  <div className="content-body">
    <div className="row rowTop">
      <div className="col-md-5">
        <div className="card card-custom gutter-b example example-compact">
        <div className="bg-light border-bottom py-2 px-3  bg-dark">
      <h5 className="mb-0 text-white">Mobile Recharge</h5>
    </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="customerNumber">Customer Number</label>
                <input
                  type="text"
                  id="customerNumber"
                  maxLength="10"
                  className="form-control"
                  placeholder="Customer Mobile Number"
                  value={customerNumber}
                  onChange={(e) => setCustomerNumber(e.target.value)}
                />
                <span className="form-text text-muted">
                  We'll never share your data with anyone else.
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="operator">Operator</label>
                <select
                  id="operator"
                  className="form-control"
                  value={operator}
                  onChange={(e) => setOperator(e.target.value)}
                >
                  <option value="">Select Operator</option>
                  <option value="AIRTEL">AIRTEL</option>
                  <option value="BSNL_TOPUP">BSNL TOPUP</option>
                  <option value="BSNL_VALIDITY">BSNL VALIDITY</option>
                  <option value="IDEA">IDEA</option>
                  <option value="MTNL_DELHI_TOPUP">MTNL DELHI TOPUP</option>
                  <option value="MTNL_DELHI_VALIDITY">MTNL DELHI VALIDITY</option>
                  <option value="MTNL_MUMBAI_TOPUP">MTNL MUMBAI TOPUP</option>
                  <option value="MTNL_MUMBAI_VALIDITY">MTNL MUMBAI VALIDITY</option>
                  <option value="RELIANCE_JIO">RELIANCE JIO</option>
                  <option value="VODAFONE">VODAFONE</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  id="amount"
                  maxLength="5"
                  className="form-control"
                  placeholder="Recharge Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary float-right mr-2">
                  Proceed
                </button>
                <button type="reset" className="btn btn-secondary">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Additional components for Plan selection and Latest Transactions can be created similarly */}
      <PlanSelector/>
      <LatestTransactions/>
    </div>
    </div></div>
  );
};

export default MobileRecharge;

import React from 'react';
import { Card, Form, Button, Row, Col, Table } from 'react-bootstrap';
import Footer from '../../layout/Footer';
import MobileBillTransactions from './MobileBillTransactions';

const MobileBill = () => {

    const transactions = [
        { id: '1325315', date: '21.06.2024 20:20:35', customer: '9348002739', amount: '1.00', operator: 'MONEY TRANSFER', operatorId: '', status: 'Successful' },
        { id: '1325313', date: '21.06.2024 20:18:50', customer: '9348002739', amount: '1.00', operator: 'MONEY TRANSFER', operatorId: '', status: 'Successful' },
        { id: '1325312', date: '21.06.2024 20:17:06', customer: '9348002739', amount: '1.00', operator: 'MONEY TRANSFER', operatorId: '', status: 'Successful' },
        { id: '1321734', date: '28.05.2024 15:42:50', customer: '9853186870', amount: '10.00', operator: 'RELIANCE JIO', operatorId: '', status: 'Failed' },
        { id: '1305616', date: '19.04.2024 19:19:55', customer: '9937764941', amount: '65.00', operator: 'AIRTEL', operatorId: '4375830', status: 'Successful' },
      ];
      const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        // console.log({ customerNumber, operator, amount });
      };
    return (

<div className="layout content">
  <div className="content-body">
    <div className="row rowTop">
      <div className="col-md-5">
        <div className="card card-custom gutter-b example example-compact">
        <div className="bg-light border-bottom py-2 px-3  bg-dark">
      <h5 className="mb-0 text-white">Mobile Bill Payments</h5>
    </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="customerNumber"> Customer Number</label>
                <input
                  type="text"
                  id="subscriberId"
                  maxLength="10"
                  className="form-control"
                  placeholder="Customer Number"
                //   value={customerNumber}
                //   onChange={(e) => setCustomerNumber(e.target.value)}
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
                 
                //   value={operator}
                //   onChange={(e) => setOperator(e.target.value)}
                >
    <option value="">Select Operator</option>
//                   <option value="166">AIRTEL POSTPAID</option>
//                   <option value="19">BSNL MOBILE POSTPAID</option>
//                   <option value="167">IDEA POSTPAID</option>
//                   <option value="20">JIO POSTPAID</option>
//                   <option value="21">VODAFONE POSTPAID</option>
//                   <option value="22">TATA DOCOMO POSTPAID</option>
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
                //   value={amount}
                //   onChange={(e) => setAmount(e.target.value)}
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
      {/* <PlanSelector/>
      <LatestTransactions/> */}
      <MobileBillTransactions/>
     
    </div>
    
    </div>
    <Footer/></div>
    );
  };
  
  export default MobileBill;
  
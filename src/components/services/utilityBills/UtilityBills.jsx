

import React, { useState } from 'react'
 import { Card, Form, Button, InputGroup, Alert } from 'react-bootstrap';
import UtilityBillTrans from './UtilityBillTrans';
import Footer from '../../layout/Footer';


 export default function UtilityBills() {


      const [billerCategory, setBillerCategory] = useState('');
    const [billerName, setBillerName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [error, setError] = useState('');
  
    // const handleFetchBill = () => {
    //   // Implement bill fetching logic here
    //   // Update customerName and dueDate based on fetched data
    // };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Implement form submission logic here
    };

  return (

    <div className="layout content">
      <div className="content-body">
        <div className="row rowTop">
           <div className="col-md-5">
        <Card className="card-custom gutter-b example example-compact">
          {/* <Card.Header>
            <Card.Title>Utility Bill Payments</Card.Title>
          </Card.Header> */}
            <div className="bg-light border-bottom py-2 px-3  bg-dark">
      <h5 className="mb-0 text-white">Utility Bill Payments</h5>
    </div>
          <Form onSubmit={handleSubmit}>
            <Card.Body>
              <Form.Group controlId="billerCategory">
                <Form.Label>Biller Category</Form.Label>
                <Form.Control
                  as="select"
                  value={billerCategory}
                  onChange={(e) => setBillerCategory(e.target.value)}
                  required
                >
                  <option value="">Select Biller Category</option>
                  <option value="6">Gas Bill Payments</option>
                  <option value="8">Electricity Bill Payments</option>
                  <option value="7">Water Bill Payments</option>
                </Form.Control>
              </Form.Group>
  
              <Form.Group controlId="billerName">
                <Form.Label>Biller Name</Form.Label>
                <Form.Control
                  as="select"
                  value={billerName}
                  onChange={(e) => setBillerName(e.target.value)}
                  required
                >
                  <option value="">Select Biller</option>
                  {/* Populate this based on selected biller category */}
                </Form.Control>
              </Form.Group>
  
              <Form.Group controlId="accountNumber">
                <Form.Label>Consumer Account Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Consumer Account Number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  maxLength="25"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your data with anyone else.
                </Form.Text>
              </Form.Group>
  
              <Form.Group controlId="amount">
                <Form.Label>Amount</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Recharge Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    maxLength="5"
                    required
                  />
                  {/* <InputGroup.Append> */}
                    <Button variant="success"
                    //  onClick={handleFetchBill}
                     >
                      Get Bill Amount
                    </Button>
                  {/* </InputGroup.Append> */}
                </InputGroup>
              </Form.Group>
            </Card.Body>
            <div className="text-center">
              <span style={{ fontWeight: 'bold' }}>
                {/* {customerName} */}
                </span>
              <span style={{ fontWeight: 'bold' }}>
                {/* {dueDate} */}
                </span>
            </div>
            {error && (
              <div className="row">
                <div className="col-lg-12">
                  <Alert variant="danger" className="text-center">
                    {error}
                  </Alert>
                </div>
              </div>
            )}
            <Card.Footer>
              <Button variant="primary" type="submit" className="mr-5">
                Submit
              </Button>
              <Button variant="secondary" type="reset" className='ml-5'>
                Cancel
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </div>
          {/* Additional components for Plan selection and Latest Transactions can be created similarly */}
          {/* <PlanSelector/>
          <LatestTransactions/> */}
          <UtilityBillTrans/>
          {/* <MobileBillTransactions/> */}
         
        </div>
        
        </div>
        <Footer/>
        </div>
        );
      };


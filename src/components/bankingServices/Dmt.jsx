import React, { useState } from 'react';
import { Card, Button, Form, Modal, InputGroup, Dropdown, Table } from 'react-bootstrap';

const Dmt = () => {
  const [customerNumber, setCustomerNumber] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCustomerNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setCustomerNumber(value);
    }
  };

  const handleAccountNumberChange = (e) => setAccountNumber(e.target.value);
  const handleIfscCodeChange = (e) => setIfscCode(e.target.value);
  const handleBeneficiaryNameChange = (e) => setBeneficiaryName(e.target.value);

  const handleProceed = () => {
    // Implement proceed logic here
  };

  const handleReset = () => {
    setCustomerNumber('');
    // Implement additional reset logic if needed
  };

  const handleVerifyAccount = () => {
    // Implement account verification logic here
  };

  const handleCreateBeneficiary = () => {
    // Implement beneficiary creation logic here
    setShowModal(false);
  };

  return (
    <div className="layout content">
  <div className="content-body">
  <div className="row rowTop">
    <div className="col-md-12">
      <Card className="card-custom">
        <Card.Header>
          <Card.Title>Customer Details</Card.Title>
          <div className="card-toolbar">
            <Button variant="success" href="DMTINC.aspx">
              Change Number<i className="icon-pen6"></i>
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <div id="ContentPlaceHolder1_dvCheckSender">
            <Form>
              <Form.Group controlId="customerNumber">
                <Form.Label className="font-weight-semibold">Customer Number</Form.Label>
                <Form.Control
                  type="text"
                  maxLength="10"
                  placeholder="Customer Mobile Number"
                  value={customerNumber}
                  onChange={handleCustomerNumberChange}
                />
                <Form.Text className="text-danger">
                  {/* Validation messages can be handled here */}
                </Form.Text>
              </Form.Group>
              <div className="d-flex justify-content-between align-items-center rowTop">
                <Button variant="secondary" onClick={handleReset}>
                  Dashboard
                </Button>
                <Button variant="primary" onClick={handleProceed}>
                  Proceed
                </Button>
              </div>
            </Form>
          </div>
          <br />
          <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static" keyboard={false}>
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Beneficiary Registration</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="accountNumber">
                    <Form.Label className="font-weight-semibold">Account Number</Form.Label>
                    <Form.Control
                      type="text"
                      maxLength="40"
                      placeholder="Account Number"
                      value={accountNumber}
                      onChange={handleAccountNumberChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="selectBank">
                    <Form.Label className="font-weight-semibold">Select Bank</Form.Label>
                    <Dropdown>
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        {/* Display selected bank or default text */}
                        Select Bank
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {/* Map through bank options here */}
                        <Dropdown.Item href="#/action-1">Bank 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Bank 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Bank 3</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                  <Form.Group controlId="ifscCode">
                    <Form.Label className="font-weight-semibold">IFSC Code</Form.Label>
                    <Form.Control
                      type="text"
                      maxLength="11"
                      placeholder="IFSC Code"
                      value={ifscCode}
                      onChange={handleIfscCodeChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="beneficiaryName">
                    <Form.Label className="font-weight-semibold">Beneficiary Name</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        maxLength="40"
                        placeholder="Beneficiary Name"
                        value={beneficiaryName}
                        onChange={handleBeneficiaryNameChange}
                      />
                     
                        <Button variant="primary" onClick={handleVerifyAccount}>
                          Verify A/C
                        </Button>
                    
                    </InputGroup>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleCreateBeneficiary}>
                  Create Now
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal>
        </Card.Body>
      </Card>
    </div>
    <div className="row rowTop">
    <div className="col-md-12">
      <Card className="card-custom gutter-b card-stretch">
        <Card.Header className="bg-light border-bottom py-2 px-3  bg-dark">
          <Card.Title as="h5" className="mb-0 text-white">Latest Transaction</Card.Title>
        </Card.Header>
        {/* <div className="bg-light border-bottom py-2 px-3  bg-dark">
      <h5 className="mb-0 text-white">Dth Recharge</h5>
    </div> */}
        <Card.Body className="py-0">
          <div className="table-responsive">
            <Table striped className="text-nowrap table-full-width">
              <tbody>
                {/* Table rows will go here */}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
    </div>
    </div>
    </div>
    </div>

  );
};

export default Dmt;

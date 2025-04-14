import React, { useState } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt, FaCube } from 'react-icons/fa';

const AccountLedger = () => {
  const [walletType, setWalletType] = useState('0');
  const [status, setStatus] = useState('Agent Mobile Number');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [filterOpen, setFilterOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log({ walletType, status, fromDate, toDate });
  };

  return (
    <div className="layout content">
  <div className="content-body">
    <div className="row">
    <div className="col-md-12">
      {/* <div className="card card-custom">
        <div className="card-header">
          <div className="card-title d-flex align-items-center">
            <span className="card-icon mr-2">
              <i className="flaticon2-chat-1 text-primary"></i>
            </span>
            <h3 className="card-label mb-0">
              Report <small className="text-muted">Account Ledger</small>
            </h3>
          </div>
          <div className="card-toolbar">
            <Button
              variant="success"
              size="sm"
              className="font-weight-bold mr-2"
              onClick={() => setFilterOpen(!filterOpen)}
              aria-expanded={filterOpen}
            >
              <FaCube className="mr-1" />
              Apply Filter
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="mr-2"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button variant="success" size="sm">
              Excel
            </Button>
          </div>
        </div> */}

                <div className="card card-custom">
                      <div className="card-header d-flex justify-content-between align-items-center  bg-dark">
                        <div className="card-title d-flex align-items-center gap-2">
                          <span className="card-icon">
                            <i className="flaticon2-chat-1 text-primary"></i>
                          </span>
                          <h5 className="card-label mb-0 text-white">
                          Account Ledger
                          </h5>
                        </div>
                  
                        <div className="card-toolbar">
                        <Button
              variant="success"
              size="sm"
              className="font-weight-bold marginRight"
              onClick={() => setFilterOpen(!filterOpen)}
              aria-expanded={filterOpen}
            >
              <FaCube className="marginRight" />
              Apply Filter
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="marginRight"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button variant="success" size="sm">
              Excel
            </Button>
                        </div>
                      </div>

        <div className="card-body">
          {filterOpen && (
            <Form>
              <div className="row">
                {/* Wallet Type */}
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <Form.Group controlId="walletType">
                    <Form.Label>Wallet</Form.Label>
                    <Form.Control
                      as="select"
                      value={walletType}
                      onChange={(e) => setWalletType(e.target.value)}
                    >
                      <option value="0">Wallet</option>
                      <option value="1">Cashout</option>
                    </Form.Control>
                  </Form.Group>
                </div>

                {/* From Date */}
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <Form.Group controlId="fromDate">
                    <Form.Label>From Date</Form.Label>
                    <InputGroup>
                      <DatePicker
                        selected={fromDate}
                        onChange={(date) => setFromDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="form-control"
                        placeholderText="Select From Date"
                      />
                      <InputGroup.Text>
                        <FaCalendarAlt className="text-primary font-weight-bold" />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </div>

                {/* To Date */}
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <Form.Group controlId="toDate">
                    <Form.Label>To Date</Form.Label>
                    <InputGroup>
                      <DatePicker
                        selected={toDate}
                        onChange={(date) => setToDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="form-control"
                        placeholderText="Select To Date"
                      />
                      <InputGroup.Text>
                        <FaCalendarAlt className="text-primary font-weight-bold" />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </div>

                {/* Status */}
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <Form.Group controlId="status">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                      as="select"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="Agent Mobile Number">
                        Agent Mobile Number
                      </option>
                      <option value="9853186870">
                       1234567890 ( John Doe )
                      </option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
            </Form>
          )}

          {/* Placeholder for table or additional content */}
          <div className="row mt-4">
            <div className="col-12">
              {/* Implement your table or other content here */}
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

export default AccountLedger;

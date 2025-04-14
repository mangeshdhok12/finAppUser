import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Collapse, Button, Form, InputGroup } from 'react-bootstrap';
import { FaCube, FaCalendarAlt } from 'react-icons/fa';

const PaymentsReport = () => {
  const [open, setOpen] = useState(true);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  return (
    <div className="layout content">
  <div className="content-body">
    <div >
      <div id="ContentPlaceHolder1_UpdatePanel1">
        <div className="row rowTop">
          <div className="col-md-12">
            <div className="card card-custom">
              <div className="card-header d-flex justify-content-between align-items-center  bg-dark">
                <div className="card-title d-flex align-items-center gap-2">
                  <span className="card-icon">
                    <i className="flaticon2-chat-1 text-primary"></i>
                  </span>
                  <h5 className="card-label mb-0 text-white">
                  Payments Report 
                  </h5>
                </div>
          
                <div className="card-toolbar">
                  <Button
                    variant="success"
                    size="sm"
                    className="font-weight-bold marginRight"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                  >
                    <FaCube className="marginRight" />
                    Apply Filter
                  </Button>
                  <Button variant="primary" size="sm" className="marginRight">
                    Submit
                  </Button>
                </div>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <Collapse in={open}>
                      <div id="collapseExample">
                        <div className="row">
                         
<div className="col-lg-4 col-md-4 col-sm-4">
        <div className="form-group has-feedback">
          <label>From Date</label>
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
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-4">
        <div className="form-group has-feedback">
          <label>To Date</label>
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
        </div>
      </div>

                          <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="form-group">
                              <label>Select RMN</label>
                              <Form.Control as="select">
                                <option value="Agent Mobile Number">Agent Mobile Number</option>
                                <option value="9853186870">1234567890 ( John Doe )</option>
                              </Form.Control>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="table-responsive">
                      <div>{/* Table data or dynamic render goes here */}</div>
                    </div>
                  </div>
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

export default PaymentsReport;

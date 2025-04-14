import React, { useState } from 'react';
import { Card, Button, Collapse, Form, Row, Col, InputGroup } from 'react-bootstrap';
import { FaCalendarAlt, FaCube, FaComments } from 'react-icons/fa';

function CheckPayments() {
  const [open, setOpen] = useState(true);

  return (
    <div className="layout content">
  <div className="content-body">
    <div >
      <div className="row rowTop">
        <div className="col-md-12">
          <Card className="card-custom">
            <Card.Header className="d-flex justify-content-between align-items-center bg-light border-bottom py-2 px-3  bg-dark">
              <div className="card-title d-flex align-items-center">
                <FaComments className="text-primary marginRight" />
                  <h5 className="mb-0 text-white">Check Payments</h5>
  
              </div>

              <div className="card-toolbar">
                <Button
                  variant="success"
                  size="sm"
                  className="font-weight-bold marginRight "
                  onClick={() => setOpen(!open)}
                  aria-expanded={open}
                >
                  <FaCube className="marginRight" />
                  Apply Filter
                </Button>
                <Button variant="primary" size="sm" className="marginRight">
                  Submit
                </Button>
                <Button variant="success" size="sm">
                  Excel
                </Button>
              </div>
            </Card.Header>

            <Card.Body>
              <Row>
                <Col xs={12}>
                  <Collapse in={open}>
                    <div>
                      <Row>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Label>From Date</Form.Label>
                            <InputGroup>
                              <Form.Control type="text" className="am_datepicker__3" placeholder="yyyy-mm-dd" />
                                <InputGroup.Text>
                                  <FaCalendarAlt className="text-primary font-weight-bold" />
                                </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Label>To Date</Form.Label>
                            <InputGroup>
                              <Form.Control type="text" className="am_datepicker__3" placeholder="yyyy-mm-dd" />
                                <InputGroup.Text>
                                  <FaCalendarAlt className="text-primary font-weight-bold" />
                                </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>
                  </Collapse>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <div className="table-responsive">
                    {/* Table content goes here */}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default CheckPayments;

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import manaLogo from "../../assets/mana_icon.png"
import sbiLogo from "../../assets/sbi.webp"
import boiLogo from "../../assets/boi.webp"


function PaymentRequest() {
    const [showPaymentModeModal, setShowPaymentModeModal] = useState(false);
    const [showPaymentRequestModal, setShowPaymentRequestModal] = useState(false);
  
    const handlePaymentModeClose = () => setShowPaymentModeModal(false);
    const handlePaymentModeShow = () => setShowPaymentModeModal(true);
    const handlePaymentRequestClose = () => setShowPaymentRequestModal(false);
    const handlePaymentRequestShow = () => setShowPaymentRequestModal(true);
  
    return (
        <div className="layout content">
  <div className="content-body">
      <Container className='rowTop'>
        {/* Main Card */}
        <Card className="card-preview" id="mainCard">
          <Card.Header className="bg-light border-bottom py-2 px-3  bg-dark">
            <h5 className="mb-0 text-white">Request for Load</h5>
          </Card.Header>
        
          <Card.Body>
            <Row>
              {/* Bank Cards */}
              {[
                {
                  imgSrc: manaLogo,
                  title: 'CREDIT',
                  account: 'XXXXXX',
                  ifsc: 'CRID0000000',
                  onClick: handlePaymentModeShow,
                },
                {
                  imgSrc: sbiLogo,
                  title: 'SBI BANK',
                  account: '0000000000',
                  ifsc: 'SBIN000000',
                  onClick: handlePaymentModeShow,
                },
                {
                  imgSrc: manaLogo,
                  title: 'BANK OF INDIA',
                  account: '93500000000',
                  ifsc: 'BKID0000000',
                  onClick: handlePaymentModeShow,
                },
              ].map((bank, index) => (
                <Col sm={4} key={index}>
                  <Card className="border square square-sm">
                    <Card.Img
                      variant="top"
                      src={bank.imgSrc}
                      style={{ width: '35%', alignSelf: 'center' }}
                    />
                    <Card.Body style={{ alignSelf: 'center' }}>
                      <Card.Title className="text-center">{bank.title}</Card.Title>
                      <Card.Text className="text-center">A/C : {bank.account}</Card.Text>
                      <Card.Text className="text-center">IFSC : {bank.ifsc}</Card.Text>
                      <Button
                        variant="primary"
                        className="d-block mx-auto"
                        onClick={bank.onClick}
                      >
                        Request Load
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
  
        {/* Payment Mode Modal */}
        <Modal show={showPaymentModeModal} onHide={handlePaymentModeClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Select Payment Mode</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <table className="table table-orders">
                <thead className="tb-odr-head">
                  <tr className="tb-odr-item">
                    <th className="tb-odr">
                      <span className="tb-odr-id">Payment Mode</span>
                    </th>
                    <th className="tb-odr">&nbsp;</th>
                  </tr>
                </thead>
                <tbody className="tb-odr-body">
                  {/* Payment modes can be mapped here */}
                </tbody>
              </table>
            </Row>
          </Modal.Body>
        </Modal>
  
        {/* Payment Request Modal */}
        <Modal show={showPaymentRequestModal} onHide={handlePaymentRequestClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Payment Request</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="depositAmount">
                    <Form.Label>Deposited Amount</Form.Label>
                    <Form.Control type="number" placeholder="Deposit Amount" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="depositDate">
                    <Form.Label>Deposit Date</Form.Label>
                    <Form.Control type="text" placeholder="Deposit Date" required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="bankReference">
                    <Form.Label>Bank Reference</Form.Label>
                    <Form.Control type="text" placeholder="Bank Transaction Id" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="remarks">
                    <Form.Label>Remarks</Form.Label>
                    <Form.Control type="text" placeholder="Remarks" required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="paymentSlip">
                    <Form.Label>Payment Slip</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handlePaymentRequestClose}>
              Confirm <i className="icon ni ni-arrow-right-circle"></i>
            </Button>
            <Button variant="secondary" onClick={handlePaymentRequestClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      </div>
      </div>

    );
  }
  
  export default PaymentRequest;
  
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


function CmsService() {
    return (
        <div className="layout content">
  <div className="content-body">
      <Container>
        <Row className='rowTop'>
          <Col md={12}>
            <Card className="card-custom">
              <Card.Header className="bg-light border-bottom py-2 px-3  bg-dark">
                <Card.Title as="h5" className="mb-0 text-white">CMS Service</Card.Title>
              </Card.Header>
              
              <Card.Body>
                <Row>
                  <Col xs={12}>
                    <span id="ContentPlaceHolder1_lblError" style={{ color: 'red', fontSize: 'larger', fontWeight: 'bold' }}></span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
      </div>
    );
  }
  
  export default CmsService;
  
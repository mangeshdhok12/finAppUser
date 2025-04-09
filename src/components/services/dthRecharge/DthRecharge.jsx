import React from 'react';
import { Card, Form, Button, Row, Col, Table } from 'react-bootstrap';
import DthTransactions from './DthTransactions';
import Footer from '../../layout/Footer';

const DTHRecharge = () => {

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
//         <div className="layout content">
//   <div className="content-body">
//     <div className="content">
//         <div className="row rowTop">
//             <div className='className="col-md-7"'>
//       <Col md={5}>
//         <Card className="card-custom gutter-b example example-compact">
//            <Card.Header className="bg-light border-bottom py-2 px-3  bg-dark ">
//                 <Card.Title className="mb-0 text-white">Dth Recharge</Card.Title>
//               </Card.Header>
//           <Form>
//             <Card.Body>
//               <Form.Group controlId="subscriberId">
//                 <Form.Label>SubscriberId</Form.Label>
//                 <Form.Control
//                   type="text"
//                   maxLength="15"
//                   placeholder="SubscriberId"
//                 />
//                 <Form.Text className="text-muted">
//                   We'll never share your data with anyone else.
//                 </Form.Text>
//               </Form.Group>
//               <Form.Group controlId="operator">
//                 <Form.Label>Operator</Form.Label>
//                 <Form.Control as="select">
//                   <option value="">Select Operator</option>
//                   <option value="166">AIRTEL DIGITAL</option>
//                   <option value="19">DISH TV</option>
//                   <option value="167">RELIANCE DIGITAL</option>
//                   <option value="20">SUN DIRECT TV</option>
//                   <option value="21">TATA SKY</option>
//                   <option value="22">VIDEOCON D2H</option>
//                 </Form.Control>
//               </Form.Group>
//               <Form.Group controlId="amount">
//                 <Form.Label>Amount</Form.Label>
//                 <Form.Control
//                   type="text"
//                   maxLength="5"
//                   placeholder="Recharge Amount"
//                 />
//               </Form.Group>
//             </Card.Body>
//             <Row>
//               <Col className="text-center">
//                 <span id="lblError"></span>
//               </Col>
//             </Row>
//             <Card.Footer>
//               <Button variant="primary" type="submit" className="mr-2">
//                 Submit
//               </Button>
//               <Button variant="secondary" type="reset">
//                 Cancel
//               </Button>
//             </Card.Footer>
//           </Form>
//         </Card>
//       </Col>
//       </div>
//       {/* <DthTransactions/> */}
//       <div className="col-md-7">
//       <Card className="card-custom gutter-b card-stretch">
//         <Card.Header>
//           <Card.Title>Latest Transaction</Card.Title>
//         </Card.Header>
//         <Card.Body className="py-0">
//           <div className="table-responsive">
//             <Table className="table-head-custom table-vertical-center text-nowrap" striped bordered hover>
//               <thead>
//                 <tr className="text-left">
//                   <th className="pl-0 text-center">
//                     <span className="text-primary font-weight-bolder d-block font-size-sm">TransID</span>
//                     <span className="text-muted font-weight-bolder d-block font-size-sm">Date</span>
//                   </th>
//                   <th className="pl-0 text-center">
//                     <span className="text-primary font-weight-bolder d-block font-size-sm">Customer</span>
//                     <span className="text-muted font-weight-bolder d-block font-size-sm">Amount</span>
//                   </th>
//                   <th className="pl-0 text-center">
//                     <span className="text-primary font-weight-bolder d-block font-size-sm">Operator</span>
//                     <span className="text-muted font-weight-bolder d-block font-size-sm">Operator ID</span>
//                   </th>
//                   <th className="pl-0 text-center">
//                     <span className="text-primary font-weight-bolder d-block font-size-sm">Status</span>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactions.map((transaction) => (
//                   <tr key={transaction.id}>
//                     <td className="pl-0 text-center">
//                       <span className="text-info font-weight-bolder d-block font-size-sm">{transaction.id}</span>
//                       <span className="text-muted font-weight-bolder d-block font-size-sm">{transaction.date}</span>
//                     </td>
//                     <td className="pl-0 text-center">
//                       <span className="text-info font-weight-bolder d-block font-size-sm">{transaction.customer}</span>
//                       <span className="text-muted font-weight-bolder d-block font-size-sm">{transaction.amount}</span>
//                     </td>
//                     <td className="pl-0 text-center">
//                       <span className="text-info font-weight-bolder d-block font-size-sm">{transaction.operator}</span>
//                       <span className="text-muted font-weight-bolder d-block font-size-sm">{transaction.operatorId}</span>
//                     </td>
//                     <td className="pl-0 text-center">
//                       <span className={`label label-lg label-${transaction.status === 'Successful' ? 'success' : 'danger'} label-inline`} style={{ width: '75px' }}>
//                         {transaction.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         </Card.Body>
//       </Card>
//     </div>
//       </div></div>
//       </div>
//       </div>

<div className="layout content">
  <div className="content-body">
    <div className="row rowTop">
      <div className="col-md-5">
        <div className="card card-custom gutter-b example example-compact">
        <div className="bg-light border-bottom py-2 px-3  bg-dark">
      <h5 className="mb-0 text-white">Dth Recharge</h5>
    </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="customerNumber">Subscriber ID</label>
                <input
                  type="text"
                  id="subscriberId"
                  maxLength="10"
                  className="form-control"
                  placeholder="Subscriber ID"
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
//                   <option value="166">AIRTEL DIGITAL</option>
//                   <option value="19">DISH TV</option>
//                   <option value="167">RELIANCE DIGITAL</option>
//                   <option value="20">SUN DIRECT TV</option>
//                   <option value="21">TATA SKY</option>
//                   <option value="22">VIDEOCON D2H</option>
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
      <DthTransactions/>
    </div>
    <Footer/>
    </div></div>
    );
  };
  
  export default DTHRecharge;
  
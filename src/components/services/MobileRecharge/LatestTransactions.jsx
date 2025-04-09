import React from 'react';
import { Card, Table } from 'react-bootstrap';

const LatestTransactions = () => {
  const transactions = [
    {
      transId: '1325315',
      date: '21.06.2024 20:20:35',
      customer: '9348002739',
      amount: '1.00',
      operator: 'MONEY TRANSFER',
      operatorId: '',
      status: 'Successful',
    },
    {
      transId: '1325313',
      date: '21.06.2024 20:18:50',
      customer: '9348002739',
      amount: '1.00',
      operator: 'MONEY TRANSFER',
      operatorId: '',
      status: 'Successful',
    },
    {
      transId: '1325312',
      date: '21.06.2024 20:17:06',
      customer: '9348002739',
      amount: '1.00',
      operator: 'MONEY TRANSFER',
      operatorId: '',
      status: 'Successful',
    },
    {
      transId: '1321734',
      date: '28.05.2024 15:42:50',
      customer: '9853186870',
      amount: '10.00',
      operator: 'RELIANCE JIO',
      operatorId: '',
      status: 'Failed',
    },
    {
      transId: '1305616',
      date: '19.04.2024 19:19:55',
      customer: '9937764941',
      amount: '65.00',
      operator: 'AIRTEL',
      operatorId: '4375830',
      status: 'Successful',
    },
  ];

  return (
    <div className="col-md-12 rowTop">
      <Card className="card-custom gutter-b card-stretch">
        <Card.Header className="bg-light border-bottom py-2 px-3  bg-dark ">
          <Card.Title className="mb-0 text-white">Latest Transactions</Card.Title>
        </Card.Header>
        
        <Card.Body className="py-0 rowTop">
          <div className="table-responsive">
            <Table className="table-head-custom table-vertical-center text-nowrap" striped bordered hover>
              <thead>
                <tr className="text-left">
                  <th className="pl-0 text-center">
                    <span className="text-primary font-weight-bolder d-block font-size-sm">TransID</span>
                    <span className="text-muted font-weight-bolder d-block font-size-sm">Date</span>
                  </th>
                  <th className="pl-0 text-center">
                    <span className="text-primary font-weight-bolder d-block font-size-sm">Customer</span>
                    <span className="text-muted font-weight-bolder d-block font-size-sm">Amount</span>
                  </th>
                  <th className="pl-0 text-center">
                    <span className="text-primary font-weight-bolder d-block font-size-sm">Operator</span>
                    <span className="text-muted font-weight-bolder d-block font-size-sm">Operator ID</span>
                  </th>
                  <th className="pl-0 text-center">
                    <span className="text-primary font-weight-bolder d-block font-size-sm">Status</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td className="pl-0 text-center">
                      <span className="text-info font-weight-bolder d-block font-size-sm">{transaction.transId}</span>
                      <span className="text-muted font-weight-bolder d-block font-size-sm">{transaction.date}</span>
                    </td>
                    <td className="pl-0 text-center">
                      <span className="text-info font-weight-bolder d-block font-size-sm">{transaction.customer}</span>
                      <span className="text-muted font-weight-bolder d-block font-size-sm">{transaction.amount}</span>
                    </td>
                    <td className="pl-0 text-center">
                      <span className="text-info font-weight-bolder d-block font-size-sm">{transaction.operator}</span>
                      <span className="text-muted font-weight-bolder d-block font-size-sm">{transaction.operatorId}</span>
                    </td>
                    <td className="pl-0 text-center">
                      <span className={`label label-lg label-inline ${transaction.status === 'Successful' ? 'label-success' : 'label-danger'}`} style={{ width: '75px' }}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LatestTransactions;

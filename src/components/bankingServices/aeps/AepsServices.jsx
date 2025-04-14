import React, { useState } from 'react';
import { Card, Button, Form, Modal, InputGroup, Dropdown, Table } from 'react-bootstrap';
import AepsTransaction from './AepsTransaction';

function AepsServices() {
//   const handleAction = () => {
//     // Implement the desired functionality here
//     console.log('Action triggered');
//   };
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
    <>
    <div className="layout content">
  <div className="content-body">
  <div className="row rowTop">
  <div className="col-md-7">
      <div className="card card-custom gutter-b example example-compact">
        <div  className="bg-light border-bottom py-2 px-3  bg-dark">
          <h5 className="mb-0 text-white">AEPS Services</h5>
        </div>

        {/* Begin::Form */}
        <div className="card-body">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
              <div className="text-center">
                <span id="ContentPlaceHolder1_lblAgentAuth" style={{ color: 'red', fontWeight: 'bold' }}></span>
              </div>
            </div>
          </div>
          {/* Additional content can be added here */}
        </div>
        {/* End::Form */}
      </div>
    </div>
    <div className="col-md-5">
      <div className="card card-custom gutter-b card-stretch">
      <div  className="bg-light border-bottom py-2 px-3  bg-dark">
          <h5 className="mb-0 text-white">Latest Transactions</h5>
        </div>
        <div className="card-body py-0">
          {/* Begin::Table */}
          <div className="table-responsive">
            <table className="table table-head-custom table-vertical-center text-nowrap">
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
                {/* Table rows will be dynamically generated here */}
              </tbody>
            </table>
          </div>
          {/* End::Table */}
        </div>
        {/* End::Body */}
      </div>
    </div>
    </div>
    
    </div>
    </div>
    {/* <AepsTransaction/> */}
    </>
  );
}

export default AepsServices;



// import React, { useState } from 'react';
// import AepsTransaction from './AepsTransaction';

// const AepsServices = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     // Additional logic to show parent component or refresh data can be added here
//   };

//   return (
//     <div>
//       <button onClick={() => setIsModalOpen(true)}>Open AEPS Transaction</button>
//       {isModalOpen && <AepsTransaction onClose={handleCloseModal} />}
//       {/* Parent component content */}
//     </div>
//   );
// };

// export default AepsServices;

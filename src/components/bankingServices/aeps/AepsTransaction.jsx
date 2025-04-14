
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';

function AepsTransaction() {
  const [selectedAeps, setSelectedAeps] = useState('rbAeps2');
  const [selectedTransactionType, setSelectedTransactionType] = useState('rbCashWithdrawal');
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const handleAepsChange = (event) => setSelectedAeps(event.target.value);
  const handleTransactionTypeChange = (event) => setSelectedTransactionType(event.target.value);

  const handleClose = () => {
    setShowModal(false);
    navigate('/aeps-services');
  };

  const handleProceed = () => {
    console.log('Proceeding with transaction');
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Aeps Transaction</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Select AEPS</Form.Label>
            <div className="d-flex gap-4">
              <div className="d-flex align-items-center gap-2">
                <Form.Check.Input
                  type="radio"
                  name="aepsOptions"
                  value="rbAeps2"
                  id="rbAeps2"
                  checked={selectedAeps === 'rbAeps2'}
                  onChange={handleAepsChange}
                />
                <Form.Check.Label htmlFor="rbAeps2">AEPS2</Form.Check.Label>
              </div>
              {/* Add more AEPS options here if needed */}
            </div>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Select Type</Form.Label>
            <div className="d-flex flex-wrap gap-4">
              {[
                { label: "Cash Withdrawal", value: "rbCashWithdrawal" },
                { label: "Aadhaar Pay", value: "rbAadhaarPay" },
                { label: "Mini Statement", value: "rbMiniStatement" },
                { label: "Balance Enquiry", value: "rbBalanceEnquiry" },
              ].map(({ label, value }) => (
                <div key={value} className="d-flex align-items-center gap-2">
                  <Form.Check.Input
                    type="radio"
                    name="transactionType"
                    value={value}
                    id={value}
                    checked={selectedTransactionType === value}
                    onChange={handleTransactionTypeChange}
                  />
                  <Form.Check.Label htmlFor={value}>{label}</Form.Check.Label>
                </div>
              ))}
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleProceed}>
          Proceed
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AepsTransaction;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Modal, Button, Form } from 'react-bootstrap';

// function AepsTransaction() {
//   const [selectedAeps, setSelectedAeps] = useState('rbAeps2');
//   const [selectedTransactionType, setSelectedTransactionType] = useState('rbCashWithdrawal');
//   const [showModal, setShowModal] = useState(true);
//   const navigate = useNavigate();

//   const handleAepsChange = (event) => setSelectedAeps(event.target.value);
//   const handleTransactionTypeChange = (event) => setSelectedTransactionType(event.target.value);

//   const handleClose = () => {
//     setShowModal(false);
//     navigate('/aeps-services');
//   };

//   const handleProceed = () => {
//     console.log('Proceeding with transaction');
//     handleClose();
//   };

//   return (
//     <Modal show={showModal} onHide={handleClose} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Aeps Transaction</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           {/* AEPS Options */}
//           <Form.Group>
//             <Form.Label>Select AEPS</Form.Label>
//             <div className="d-grid gap-2">
//               <div className="form-check">
//                 <input
//                   className="form-check-input custom-radio"
//                   type="radio"
//                   name="aepsOptions"
//                   id="rbAeps2"
//                   value="rbAeps2"
//                   checked={selectedAeps === 'rbAeps2'}
//                   onChange={handleAepsChange}
//                 />
//                 <label className="form-check-label" htmlFor="rbAeps2">
//                   AEPS2
//                 </label>
//               </div>
//               {/* Add more AEPS options here if needed */}
//             </div>
//           </Form.Group>

//           {/* Transaction Types */}
//           <Form.Group className="mt-3">
//             <Form.Label>Select Type</Form.Label>
//             <div className="d-grid gap-2">
//               {[
//                 { label: "Cash Withdrawal", value: "rbCashWithdrawal" },
//                 { label: "Aadhaar Pay", value: "rbAadhaarPay" },
//                 { label: "Mini Statement", value: "rbMiniStatement" },
//                 { label: "Balance Enquiry", value: "rbBalanceEnquiry" },
//               ].map(({ label, value }) => (
//                 <div key={value} className="form-check">
//                   <input
//                     className="form-check-input custom-radio"
//                     type="radio"
//                     name="transactionType"
//                     id={value}
//                     value={value}
//                     checked={selectedTransactionType === value}
//                     onChange={handleTransactionTypeChange}
//                   />
//                   <label className="form-check-label" htmlFor={value}>
//                     {label}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="primary" onClick={handleProceed}>
//           Proceed
//         </Button>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default AepsTransaction;


//  import React from 'react';
//  import Form from 'react-bootstrap/Form';
// // import { useNavigate } from 'react-router-dom';
// // import { Modal, Button, Form } from 'react-bootstrap';

// function AepsTransaction() {
// //   const [selectedAeps, setSelectedAeps] = useState('rbAeps2');
// //   const [selectedTransactionType, setSelectedTransactionType] = useState('rbCashWithdrawal');
// //   const [showModal, setShowModal] = useState(true);
// //   const navigate = useNavigate();

// //   const handleAepsChange = (event) => setSelectedAeps(event.target.value);
// //   const handleTransactionTypeChange = (event) => setSelectedTransactionType(event.target.value);

// //   const handleClose = () => {
// //     setShowModal(false);
// //     navigate('/aeps-services');
// //   };

// //   const handleProceed = () => {
// //     console.log('Proceeding with transaction');
// //     handleClose();
// //   };

//   return (
//     // <Modal show={showModal} onHide={handleClose} centered>
//     //   <Modal.Header closeButton>
//     //     <Modal.Title>Aeps Transaction</Modal.Title>
//     //   </Modal.Header>
//     //   <Modal.Body>
//     //     <Form>
//     //       {/* AEPS Options */}
//     //       <Form.Group>
//     //         <Form.Label>Select AEPS</Form.Label>
//     //         <div className="d-grid gap-2">
//     //           <div className="form-check">
//     //             <input
//     //               className="form-check-input custom-radio"
//     //               type="radio"
//     //               name="aepsOptions"
//     //               id="rbAeps2"
//     //               value="rbAeps2"
//     //               checked={selectedAeps === 'rbAeps2'}
//     //               onChange={handleAepsChange}
//     //             />
//     //             <label className="form-check-label" htmlFor="rbAeps2">
//     //               AEPS2
//     //             </label>
//     //           </div>
//     //           {/* Add more AEPS options here if needed */}
//     //         </div>
//     //       </Form.Group>

//     //       {/* Transaction Types */}
//     //       <Form.Group className="mt-3">
//     //         <Form.Label>Select Type</Form.Label>
//     //         <div className="d-grid gap-2">
//     //           {[
//     //             { label: "Cash Withdrawal", value: "rbCashWithdrawal" },
//     //             { label: "Aadhaar Pay", value: "rbAadhaarPay" },
//     //             { label: "Mini Statement", value: "rbMiniStatement" },
//     //             { label: "Balance Enquiry", value: "rbBalanceEnquiry" },
//     //           ].map(({ label, value }) => (
//     //             <div key={value} className="form-check">
//     //               <input
//     //                 className="form-check-input custom-radio"
//     //                 type="radio"
//     //                 name="transactionType"
//     //                 id={value}
//     //                 value={value}
//     //                 checked={selectedTransactionType === value}
//     //                 onChange={handleTransactionTypeChange}
//     //               />
//     //               <label className="form-check-label" htmlFor={value}>
//     //                 {label}
//     //               </label>
//     //             </div>
//     //           ))}
//     //         </div>
//     //       </Form.Group>
//     //     </Form>
//     //   </Modal.Body>
//     //   <Modal.Footer>
//     //     <Button variant="primary" onClick={handleProceed}>
//     //       Proceed
//     //     </Button>
//     //     <Button variant="secondary" onClick={handleClose}>
//     //       Close
//     //     </Button>
//     //   </Modal.Footer>
//     // </Modal>
//     <Form>
//       {['checkbox', 'radio'].map((type) => (
//         <div key={`inline-${type}`} className="mb-3">
//           <Form.Check
//             inline
//             label="1"
//             name="group1"
//             type={type}
//             id={`inline-${type}-1`}
//           />
//           <Form.Check
//             inline
//             label="2"
//             name="group1"
//             type={type}
//             id={`inline-${type}-2`}
//           />
//           <Form.Check
//             inline
//             disabled
//             label="3 (disabled)"
//             type={type}
//             id={`inline-${type}-3`}
//           />
//         </div>
//       ))}
//     </Form>
//   );
// }

// export default AepsTransaction;

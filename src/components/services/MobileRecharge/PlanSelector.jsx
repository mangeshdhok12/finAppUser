import React, { useState } from 'react';
import Select from 'react-select';

const PlanSelector = () => {
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [selectedCircle, setSelectedCircle] = useState(null);

  const operators = [
    { value: 'AIRTEL', label: 'AIRTEL' },
    { value: 'BSNL', label: 'BSNL' },
    { value: 'JIO', label: 'JIO' },
    { value: 'VODAFONE', label: 'VODAFONE' },
    { value: 'IDEA', label: 'IDEA' },
  ];

  const circles = [
    { value: 'Andhra Pradesh Telangana', label: 'Andhra Pradesh Telangana' },
    { value: 'Assam', label: 'Assam' },
    { value: 'Bihar Jharkhand', label: 'Bihar Jharkhand' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Delhi NCR', label: 'Delhi NCR' },
    { value: 'Gujarat', label: 'Gujarat' },
    { value: 'Haryana', label: 'Haryana' },
    { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
    { value: 'Jammu Kashmir', label: 'Jammu Kashmir' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Kerala', label: 'Kerala' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Madhya Pradesh Chhattisgarh', label: 'Madhya Pradesh Chhattisgarh' },
    { value: 'Maharashtra Goa', label: 'Maharashtra Goa' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'North East', label: 'North East' },
    { value: 'Orissa', label: 'Orissa' },
    { value: 'Punjab', label: 'Punjab' },
    { value: 'Rajasthan', label: 'Rajasthan' },
    { value: 'Tamil Nadu', label: 'Tamil Nadu' },
    { value: 'UP East', label: 'UP East' },
    { value: 'UP West', label: 'UP West' },
    { value: 'West Bengal', label: 'West Bengal' },
  ];

  return (
    <div className="col-md-6">
      <div className="card card-custom" style={{ height: '430px', overflowY: 'auto' }}>
       
        <div className="bg-light border-bottom py-2 px-3  bg-dark">
      <h5 className="mb-0 text-white">Choose Plan</h5>
    </div>
        
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <Select
                options={operators}
                value={selectedOperator}
                onChange={setSelectedOperator}
                placeholder="Select Operator"
                isSearchable
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <Select
                options={circles}
                value={selectedCircle}
                onChange={setSelectedCircle}
                placeholder="Select Circle"
                isSearchable
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="table-responsive" id="dvPlans"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSelector;

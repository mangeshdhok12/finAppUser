import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios"; // To send data to backend
import "../styles.css";
import logo from "../../assets/manare_bg_free.png";
import logLeftImg from "../../assets/login-left-1.svg";
import show from "../../assets/icons/show.svg";
import hide from "../../assets/icons/hide.svg";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1); // Step counter
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // State to store form data
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    transactionPin: "",
    roleId: 1,
    statusId: 1,
    locationId: 1,
    genderId:"" ,
    businessTypeId: 1,
    addressProofType: 1,
    identityProofType: 1,
    salutation: "",
    dateOfBirth: "",
    firstName: "",
    middleName: "",
    lastName: "",
    locationName: "",
    pinCode: "",
    cityId: "",
    stateId: "",
    countryId: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    businessName: "",
    gstNumber: "",
    addressProofNumber: "",
    identityProofNumber: "",
    // businessAddressLine1: "",
    // businessAddressLine2: "",
    // businessAddressLine3: "",
    // addressProofDocumentPath: "",
    // identityProofDocumentPath: "",
    // selfieImagePath: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],  // Save the first file to the formData
    }));
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Move to next step
  const nextStep = (e) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  // Move to previous step
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };



  // Submit form to backend
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(formData)
  //   try {
  //     await axios.post("https://your-api.com/signup", formData);
  //     alert("Signup successful!");
      
  //     navigate("/login"); // Redirect to login
  //     toast.success("Signup Successful! Redirecting to the login.");
  //   } catch (error) {
  //     console.error("Signup failed:", error);
  //      toast.error("Signup failed. Please try again.");
  //     // alert("Signup failed. Please try again.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    const form = new FormData();
    for (let key in formData) {
      form.append(key, formData[key]);
    }
  
    try {
      await axios.post("http://ec2-34-237-167-173.compute-1.amazonaws.com:8080/fin-api-v1/api/users", form, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      toast.success("Signup Successful! Redirecting to the login.");
      navigate("/login"); // Redirect to login
    } catch (error) {
      console.error("Signup failed:", error);
      toast.error("Signup failed. Please try again.");
    }
  };
  

  return (
    <div className="py-canvas">
      {/* Left Block */}
      <div className="left-block py-bg-A1">
        <div className="logo-main">
          <a href="#">
            <img src={logo} alt="gencash" />
          </a>
        </div>
        <div className="introimg">
          <div className="intimg">
            <img src={logLeftImg} alt="img" />
          </div>
          <p className="introtext">
            Simplifying financial operations for SMEs, startups, & large enterprises
          </p>
        </div>
      </div>

      {/* Right Block */}
      <div className="right-block">
        <div className="login-block">
          <div className="head">
            <h2 className="mt-3">Sign Up</h2>
            <p>Start your journey with us – Register for free in minutes!</p>
          </div>

          <form onSubmit={step === 3 ? handleSubmit : nextStep}>
            <div className="formsets">
              
              {/* Step 1: Basic Info */}
              {step === 1 && (
                <div className="fieldsets row">
                  
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        required
                        id="phoneNumber"
                        name="phoneNumber"
                        className="floating-input"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                      <label htmlFor="phoneNumber">Mobile Number</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        required
                        id="userName"
                        name="userName"
                        className="floating-input"
                        value={formData.userName}
                        onChange={handleChange}
                      />
                      <label htmlFor="userName">Username</label>
                    </div>
                  </div>
              
                  <div className="col-md-12 form-group ">
                    <div className="floating-label icon-right">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder=" "
                        required
                        id="password"
                        name="password"
                        className="floating-input"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <span className="showhidepsd" onClick={togglePasswordVisibility}>
                        <img
                          id="toggleImage"
                          src={showPassword ? show : hide}
                          alt={showPassword ? "Hide" : "Show"}
                        />
                      </span>
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        id="transactionPin"
                        name="transactionPin"
                        className="floating-input"
                        value={formData.transactionPin}
                        onChange={handleChange}
                      />
                      <label htmlFor="transactionPin">Transaction PIN</label>
                    </div>
                  </div>
                
                  
                  <button type="button" className="sw-btn py-btn-2 w-100 mt20" onClick={nextStep}>
                    Next
                  </button>
                </div>
              )}

              {/* Step 2: Additional Info */}
              {step === 2 && (
                <div className="fieldsets row">
               <h5 className="mb-3">Basic Details</h5>
               <div className="col-md-12 form-group">
  <div className="floating-label">
    <select
      id="salutation"
      name="salutation"
      className="floating-input"
      value={formData.salutation}
      onChange={handleChange}
    >
      <option value="">Select Salutation</option>
      <option value="Mr">Mr</option>
      <option value="Mrs">Mrs</option>
    </select>
    <label htmlFor="salutation">Salutation</label>
  </div>
</div>
<div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        id="firstName"
                        name="firstName"
                        className="floating-input"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      <label htmlFor="firstName">First Name</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        id="middleName"
                        name="middleName"
                        className="floating-input"
                        value={formData.middleName}
                        onChange={handleChange}
                      />
                      <label htmlFor="middleName">Middle Name</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        id="lastName"
                        name="lastName"
                        className="floating-input"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      <label htmlFor="lastName">Last Name</label>
                    </div>
                  </div>
                  <div className="col-md-6 form-group">
                    <div className="floating-label">
                      <select name="genderId" className="floating-input" value={formData.genderId} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                      </select>
                      <label>Gender</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        className="floating-input"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                      />
                      <label htmlFor="dateOfBirth">Date of Birth</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        required
                        id="email"
                        name="email"
                        className="floating-input"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label htmlFor="email">Email Address</label>
                    </div>
                  </div> 
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        id="businessName"
                        name="businessName"
                        className="floating-input"
                        value={formData.businessName}
                        onChange={handleChange}
                      />
                      <label htmlFor="addressLine3">business Name</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        id="gstNumber"
                        name="gstNumber"
                        className="floating-input"
                        value={formData.gstNumber}
                        onChange={handleChange}
                      />
                      <label htmlFor="gstNumber">GST Number</label>
                    </div>
                  </div>

                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        id="addressLine1"
                        name="addressLine1"
                        className="floating-input"
                        value={formData.addressLine1}
                        onChange={handleChange}
                      />
                      <label htmlFor="addressLine1">Address Line 1</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        id="addressLine2"
                        name="addressLine2"
                        className="floating-input"
                        value={formData.addressLine2}
                        onChange={handleChange}
                      />
                      <label htmlFor="addressLine2">Address Line 2</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        id="addressLine3"
                        name="addressLine3"
                        className="floating-input"
                        value={formData.addressLine3}
                        onChange={handleChange}
                      />
                      <label htmlFor="addressLine3">Address Line 3</label>
                    </div>
                  </div>
           
                  
                  <button type="button" className="sw-btn py-btn-2 w-100 mt20" onClick={nextStep}>
                    Next
                  </button>
                  <button type="button" className="sw-btn py-btn-2 w-100 mt20" onClick={prevStep}>
                    Back
                  </button>
                </div>
              )}

              {/* Step 3: Submit */}
              {step === 3 && (
                <>
               
              
                  <div className="col-md-6 form-group">
  <label>Business Type</label>
  <div className="floating-label">
    <select
      name="businessTypeId"
      className="floating-input"
      value={formData.businessTypeId}
      onChange={handleChange}
    >
      <option value="">Select Business Type</option>
      <option value="1">Retail</option>
      <option value="2">Wholesale</option>
      <option value="3">Manufacturing</option>
    </select>
  </div>
</div>

<div className="col-md-6 form-group">
  <label>Identity Proof Type</label>
  <div className="floating-label">
    <select
      name="identityProofType"
      className="floating-input"
      value={formData.identityProofType}
      onChange={handleChange}
    >
      <option value="">Select Identity Proof</option>
      <option value="1">PAN Card</option>
      <option value="2">Voter ID</option>
      <option value="3">Passport</option>
    </select>
  </div>
</div>

<div className="col-md-6 form-group">
  <label>Address Proof Type</label>
  <div className="floating-label">
    <select
      name="addressProofType"
      className="floating-input"
      value={formData.addressProofType}
      onChange={handleChange}
    >
      <option value="">Select Address Proof</option>
      <option value="1">Aadhaar Card</option>
      <option value="2">Driving License</option>
      <option value="3">Passport</option>
    </select>
  </div>
</div>
{/* <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        id="businessAddressLine1"
                        name="businessAddressLine1"
                        className="floating-input"
                        value={formData.businessAddressLine1}
                        onChange={handleChange}
                      />
                      <label htmlFor="addressLine3">business Address Line 1</label>
                    </div>
                  </div>

                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        id="businessAddressLine2"
                        name="businessAddressLine2"
                        className="floating-input"
                        value={formData.businessAddressLine2}
                        onChange={handleChange}
                      />
                      <label htmlFor="addressLine3">business Address Line 2</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        id="businessAddressLine3"
                        name="businessAddressLine3"
                        className="floating-input"
                        value={formData.businessAddressLine3}
                        onChange={handleChange}
                      />
                      <label htmlFor="addressLine3">business Address Line 3</label>
                    </div>
                  </div>
               */}
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        id="addressProofNumber"
                        name="addressProofNumber"
                        className="floating-input"
                        value={formData.addressProofNumber}
                        onChange={handleChange}
                      />
                      <label htmlFor="addressProofNumber">Address Proof Number</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="file"
                        placeholder=" "
                        id="addressProofDocumentPath"
                        name="addressProofDocumentPath"
                        className="floating-input"
                        // value={formData.addressProofDocumentPath}
                        // onChange={handleChange}
                        onChange={handleFileChange}
                      />
                      <label htmlFor="addressProofDocumentPath">address Proof Document</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="text"
                        placeholder=" "
                        id="identityProofNumber"
                        name="identityProofNumber"
                        className="floating-input"
                        value={formData.identityProofNumber}
                        onChange={handleChange}
                      />
                      <label htmlFor="identityProofNumber">identity Proof Number</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="file"
                        placeholder=" "
                        id="identityProofDocumentPath"
                        name="identityProofDocumentPath"
                        className="floating-input"
                        // value={formData.identityProofDocumentPath}
                        // onChange={handleChange}
                        onChange={handleFileChange}
                      />
                      <label htmlFor="identityProofDocumentPath">Identity Proof Document</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type="file"
                        placeholder=" "
                        id="selfieImagePath"
                        name="selfieImagePath"
                        className="floating-input"
                        // value={formData.selfieImagePath}
                        // onChange={handleChange}
                        onChange={handleFileChange}
                      />
                      <label htmlFor="selfieImagePath">self Image</label>
                    </div>
                  </div>
                  
<div className="col-md-12 form-group">
  <div className="floating-label">
    <input
      type="number"
      placeholder=" "
      id="pinCode"
      name="pinCode"
      className="floating-input"
      value={formData.pinCode}
      onChange={handleChange}
    />
    <label htmlFor="pinCode">Pin Code</label>
  </div>
</div>
<div className="col-md-12 form-group">
  <div className="floating-label">
    <select
      name="countryId"
      className="floating-input"
      value={formData.countryId}
      onChange={handleChange}
    >
      <option value="">Select Country</option>
      {/* Example country options, you can populate this dynamically */}
      <option value="1">India</option>
      <option value="2">USA</option>
      <option value="3">UK</option>
    </select>
    <label>Country</label>
  </div>
</div>

<div className="col-md-12 form-group">
  <div className="floating-label">
    <select
      name="stateId"
      className="floating-input"
      value={formData.stateId}
      onChange={handleChange}
    >
      <option value="">Select State</option>
      {/* Example state options, you can populate this dynamically */}
      <option value="1">Odisha</option>
      <option value="2">Karnataka</option>
      <option value="3">Maharashtra</option>
    </select>
    <label>State</label>
  </div>
</div>
<div className="col-md-12 form-group">
  <div className="floating-label">
    <select
      name="cityId"
      className="floating-input"
      value={formData.cityId}
      onChange={handleChange}
    >
      <option value="">Select City</option>
      {/* Example city options, you can populate this dynamically */}
      <option value="1">Bhubaneswar</option>
      <option value="2">Cuttack</option>
      <option value="3">Rourkela</option>
    </select>
    <label>City</label>
  </div>
</div>
<div className="col-md-12 form-group">
  <div className="floating-label">
    <input
      type="text"
      placeholder=" "
      id="locationName"
      name="locationName"
      className="floating-input"
      value={formData.locationName}
      onChange={handleChange}
    />
    <label htmlFor="locationName">Location Name</label>
  </div>
</div>

                <button type="submit" className="sw-btn py-btn-2 w-100">
                  Create Account
                </button>
                <button type="button" className="sw-btn py-btn-2 w-100 mt20" onClick={prevStep}>
                    Back
                  </button>
                </>
              )}
            </div>
            <div className="link-text text-center mt20 ">
                  <p>
                    Already have account? <Link to="/login" className="sol-link ">Login here</Link>
                  </p>
                </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;

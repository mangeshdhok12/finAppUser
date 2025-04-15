// import { useState } from "react";
// import logo from "../assets/manare_bg_free.png"
// import logLeftImg from "../assets/login-left-1.svg"
// import show from "../assets/icons/show.svg"
// import hide from "../assets/icons/hide.svg"
// import "./styles.css"; // Import necessary styles

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

//   return (
//     <div className="py-canvas">
//       {/* Left Block */}
//       <div className="left-block py-bg-A1">
//         <div className="logo-main">
//           <a href="#">
//             <img src={logo} alt="FinApp" />
//           </a>
//         </div>
//         <div className="introimg">
//           <div className="intimg">
//             <img src={logLeftImg} alt="img" />
//           </div>
//           <p className="introtext">
//             Simplifying financial operations for SMEs, startups, & large enterprises
//           </p>
//         </div>
//       </div>
//       {/* Right Block */}
//       <div className="right-block">
//         <div className="login-block">
//           <div className="head">
//             <h2>Login to Your Account</h2>
//             <p>Step into your personalized gencash world securely</p>
//           </div>
//           <form>
//             <div className="formsets">
//               <div className="fieldsets row">
//                 <div className="col-md-12 form-group">
//                   <div className="floating-label">
//                     <input
//                       type="text"
//                       placeholder=" "
//                       required
//                       id="email_address"
//                       className="floating-input"
//                       name="email_address"
//                     />
//                     <label htmlFor="email_address">Email Address</label>
//                   </div>
//                 </div>
//                 <div className="col-md-12 form-group">
//                   <div className="floating-label icon-right">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       placeholder=" "
//                       required
//                       id="password1"
//                       className="floating-input"
//                       name="password"
//                     />
//                     <span className="showhidepsd" onClick={togglePasswordVisibility}>
//                       <img
//                         id="toggleImage1"
//                         src={showPassword ? show : hide}
//                         alt={showPassword ? "Hide" : "Show"}
//                       />
//                     </span>
//                     <label htmlFor="password1">Password</label>
//                   </div>
//                 </div>
//               </div>
//               <div className="fieldsets row mt20">
//                 <div className="col-md-6 col-6">
//                   <div className="checkbox custom-py">
//                     <label>
//                       <input type="checkbox" /> Remember me
//                     </label>
//                   </div>
//                 </div>
//                 <div className="col-md-6 col-6 text-right">
//                   <a href="/redirect/send-otp" className="sol-link">
//                     Forgot Password?
//                   </a>
//                 </div>
//               </div>
//               <div className="mt25">
//                 <div className="fbtn">
//                   <button type="submit" className="sw-btn py-btn-2 w-100">
//                     Login Account
//                   </button>
//                 </div>
//                 <div className="link-text text-center mt20">
//                   <p>
//                     Don’t have an account? <a href="/redirect/sign-up" className="sol-link">Sign Up</a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import axios from "axios"; 
import logo from "../../assets/manare_bg_free.png";
import logLeftImg from "../../assets/login-left-1.svg";
import show from "../../assets/icons/show.svg";
import hide from "../../assets/icons/hide.svg";
import { toast, ToastContainer  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles.css"; 
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userDataSlice";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 

  const dispatch = useDispatch();
  const navigate= useNavigate()
 
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };


  const handleLogin = async (e) => {
    e.preventDefault();
  
    setLoading(true); // Show loading indicator
    setError(""); // Clear any previous errors
  
    const loginUrl =
      "http://ec2-34-237-167-173.compute-1.amazonaws.com:8080/fin-api-v1/api/auth/login";
  
    const requestBody = {
      userName,
      password,
    };
  
    console.log("Sending data to backend:", requestBody);
  
    try {
      const response = await axios.post(loginUrl, requestBody);
  
      if (response.data.status) {

        const userData = response.data.data;
        console.log("Login Response Data:", userData);

        localStorage.setItem("token", userData);

             // ✅ Store data in Redux
             dispatch(setUser(userData));

      // ✅ Optional: Store token in localStorage
      // localStorage.setItem("token", userData.token);

        toast.success("Login Successful! Redirecting to the dashboard.");
  
        // Redirect to the dashboard
        navigate("/users/payout/dashboard");
      } else {
        // Handle failed login
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      // General error handling
      console.error("Login error:", error); // Add this line

      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <div className="py-canvas">
      <div className="left-block py-bg-A1">
        <div className="logo-main">
          <a href="#">
            <img src={logo} alt="FinApp" />
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
      <div className="right-block">
        <div className="login-block">
          <div className="head">
            <h2>Login to Your Account</h2>
            <p>Step into your personalized gencash world securely</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="formsets">
              <div className="fieldsets row">
                <div className="col-md-12 form-group">
                  <div className="floating-label">
                    <input
                      type="text"
                      placeholder=""
                      required
                      id="userName"
                      className="floating-input"
                      name="userName"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)} // Bind to state
                    />
                    <label htmlFor="username">User Name</label>
                  </div>
                </div>
                {/* Password Field */}
                <div className="col-md-12 form-group">
                  <div className="floating-label icon-right">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder=" "
                      required
                      id="password1"
                      className="floating-input"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // Bind to state
                    />
                    <span className="showhidepsd" onClick={togglePasswordVisibility}>
                      <img
                        id="toggleImage1"
                        src={showPassword ? show : hide}
                        alt={showPassword ? "Hide" : "Show"}
                      />
                    </span>
                    <label htmlFor="password1">Password</label>
                  </div>
                </div>
              </div>
              {/* Remember Me & Forgot Password */}
              <div className="fieldsets row mt20">
                <div className="col-md-6 col-6">
                  <div className="checkbox custom-py">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                  </div>
                </div>
                <div className="col-md-6 col-6 text-right">
                  <a href="/redirect/send-otp" className="sol-link">
                    Forgot Password?
                  </a>
                </div>
              </div>
              {/* Submit Button */}
              <div className="mt25">
                <div className="fbtn">
                  <button type="submit" className="sw-btn py-btn-2 w-100" disabled={loading}>
                    {loading ? "Logging in..." : "Login Account"}
                  </button>
                </div>
                <div className="link-text text-center mt20">
                  <p>
                    Don’t have an account? <a href="/sign-up" className="sol-link">Sign Up</a>
                  </p>
                </div>
              </div>
            </div>
          </form>

          {/* Error Message */}
          {/* {error && <p className="error-message">{error}</p>} */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

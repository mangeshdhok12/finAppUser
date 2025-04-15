import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../store/payinPayoutSlice";
import bing from "../../assets/icons/bing.svg";
import user from "../../assets/user.jpg";
import { toast, ToastContainer  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles.css";
import { toggleSidebar } from "../../store/sidebarSlice";
import axios from "axios";
import { setUser } from "../../store//userDataSlice";


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.payMode.mode);

  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const [username, setUsername] = useState(""); 

  // Determine the mode based on the current URL
  const getModeFromPath = () => (location.pathname.startsWith("/payin") ? "payin" : "payout");

  // const [mode, setMode] = useState(getModeFromPath());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // useEffect(() => {
  //   setMode(getModeFromPath());
  // }, [location.pathname]);

  const handleProfile = async () => {
    console.log("handleProfile start");
  
    // setLoading(true); // Show loading indicator
    setError(""); // Clear any previous errors
  
    const loginUrl = "http://ec2-34-237-167-173.compute-1.amazonaws.com:8080/fin-api-v1/api/users/1";  // Your URL
  
    try {
      console.log("Making API request");
      const response = await axios.get(loginUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
  
      console.log("API Response Data:", response.data); 
      setUsername(response.data.userName) // Check the API response
      // Continue processing the response
  
          // Save data to Redux store
    dispatch(setUser(response.data));


    } catch (error) {
      console.error("API Error:", error); // Log any errors
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    console.log('Component rendered');

    handleProfile();


    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleModeChange = (selectedMode) => {
    dispatch(toggleMode(selectedMode));
    navigate(`/users/${selectedMode}/dashboard`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Map paths to page titles (supporting both Payin & Payout)
  const pageTitles = {
    "/payin/dashboard": "Payin Dashboard",
    "/beneficiaries": "Beneficiaries",
    "/instant-transfer": "Instant Transfer",
    "/bulk-transfer": "Bulk Transfer",
    "/account-statements": "Account Statements",
    "/reports": "Reports",
    "/transactions":"Transactions",
    "/settlement":"Settlement",
    "/profile": "Profile",
    "/login-history": "Login History",

  };

  // Extract path without "/payin" or "/payout"
  const currentPath = location.pathname.replace(/^\/(payin|payout)/, "");

  // Get full title with mode
  const pageTitle = `${mode === "payin" ? "Payin" : "Payout"} - ${pageTitles[currentPath] || "Dashboard"}`;

  const handleLogout = () => {
    // Clear token
    localStorage.removeItem("token");
  
    toast.success("You have logged out successfully!");
    // Redirect to login page
    const navigate = useNavigate();
    navigate("/login");
  
    // Optional: Reset any other user-related state
    // setUser(null); (if using state to track user)
  };

  // const handleMenuClick = (e) => {
  //   e.preventDefault();
  //   // alert("hi")
  //   dispatch(toggleSidebar());
  // };

  return (
    <div className="header sticky">
      <div className="header-left">
        <div className="page-title">
          {/* <a id="mobileMenu" href="#" className="content-mobile">
            <span></span>
          </a> */}
            {/* <a onClick={handleMenuClick} id="mobileMenu" href="#" className="content-mobile">
            <span></span>
          </a> */}
          <p>{pageTitle}</p>
        </div>
      </div>
      <div className="header-right">
        <ul className="nav nav-tabs user-menu">
          <li className="nav-item separatoright">
            <div className="switch">
              <input
                type="radio"
                id="payout"
                // name="transferMode"
                 name="mode"
                value="payout"
                checked={mode === "payout"}
                // onChange={handleModeChange}
                // onChange={() => dispatch(toggleMode("payout"))}
                onChange={() => handleModeChange("payout")}
              />
              <label htmlFor="payout">PAYOUTS</label>
              <input
                type="radio"
                id="payin"
                // name="transferMode"
                 name="mode"
                value="payin"
                checked={mode === "payin"}
                // onChange={handleModeChange}
                // onChange={() => dispatch(toggleMode("payin"))}
                onChange={() => handleModeChange("payin")}
              />
              <label htmlFor="payin">PAYIN</label>
            </div>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <img src={bing} alt="icon" />
            </a>
          </li>
          <li className="nav-item dropdown main-drop" ref={dropdownRef}>
            <a
              href="#"
              className={`dropdown-toggle nav-link user-acdp ${isDropdownOpen ? "show" : ""}`}
              onClick={toggleDropdown}
            >
              <div className="user-img">
                <img src={user} alt="User" />
              </div>
              <span>{username}</span>
            </a>
            <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <a className="dropdown-item" href="/users/profile">Profile</a>
              <a className="dropdown-item" href="/login"
              onClick={handleLogout}
              >Logout</a>
            </div>
          </li>
        </ul>
      </div>
      {/* <ToastContainer/> */}
    </div>
  );
};

export default Header;

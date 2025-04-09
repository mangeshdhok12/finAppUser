import { useState } from "react";
import hideIcon from "../assets/icons/hide.svg"
import showIcon from "../assets/icons/show.svg"
import deleteIcon from "../assets/icons/deleteIcon.svg"
import placeholder from "../assets/icons/placeholder.jpg"


const ProfileUpdate = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <div className="layout content">
    <div className="content-body">
      <div className="py-table-wrap bg-white shadow radius-5 overflow-hidden">
        <div className="py-table-head pair-tw0">
          <div className="pytbl1">
            <div className="blockheading">Profile Photo</div>
          </div>
        </div>
        <div className="tablebody-py pscroll fhd">
          <div className="gencashprofile">
            <div className="accosprofile">
              <div className="profilephoto shadow">
                <input type="file" onChange={handleImageChange} />
                <img src={profileImage || placeholder} alt="profile" />
                <a href="#" onClick={() => setProfileImage(null)}>
                  <img src={deleteIcon} alt="delete" />
                </a>
              </div>
              <div className="photointro">
                <div className="intro-headng">This Image will be displayed in your Profile</div>
                <div className="introsubs">Image Dimensions: 120 x 120 pixels</div>
                <div className="introsubs">Maximum File Size: 1MB</div>
              </div>
            </div>
            <div className="formsets mt40">
              <div className="fieldsets row">
                <div className="col-md-12 form-group">
                  <div className="floating-label">
                    <input type="text" required id="Name" className="floating-input" name="Name" />
                    <label>Name</label>
                  </div>
                </div>
                <div className="col-md-12 form-group">
                  <div className="floating-label">
                    <input type="email" required id="Email" className="floating-input" name="Email" />
                    <label>Email ID</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt50">
              <div className="blockheading">Password Update</div>
            </div>
            <div className="formsets mt20">
              <div className="fieldsets row">
                {['old', 'new', 'confirm'].map((type, index) => (
                  <div key={index} className="col-md-12 form-group">
                    <div className="floating-label">
                      <input
                        type={showPassword[type] ? "text" : "password"}
                        required
                        className="floating-input"
                        name={type}
                      />
                      <span className="showhidepsd" onClick={() => togglePasswordVisibility(type)}>
                        <img src={showPassword.password ? showIcon : hideIcon} alt="toggle visibility" />
                        
                      </span>
                      <label>{type === 'old' ? 'Old Password' : type === 'new' ? 'New Password' : 'Confirm New Password'}</label>
                    </div>
                  </div>
                ))}
              </div>
              <div className="buttonpair mt40">
                <button type="reset" className="sw-btn py-btn-3 clearbtn">Cancel</button>
                <button type="submit" className="sw-btn py-btn-2">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfileUpdate;
import React, {useState} from "react";
import { ReactComponent as Profile } from "../../../assets/images/profile.svg";
import user_profile from "../../../assets/images/user_profile.svg";
import mail from "../../../assets/images/mail.svg";
import location from "../../../assets/images/location.svg";
import { ReactComponent as Camera } from "../../../assets/images/camera.svg";
import Select from 'react-select';


const PersonalDetails = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
  ];
  return (
    <>
      <div className={"personal_details_section"}>
        <form className={"personal_details_section_form"}>
          <div className={"personal_details_section_form_left"}>
            <div className={"profile"}>
              <div className="user_profile">
                <div className="user_profile_pic">
                  <div className={"profile_circle"}>
                    <Profile />
                  </div>
                  <span className="addnew">
                    <Camera />
                    <input type="file" name="member_photo" id="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={"personal_details_section_form_right"}>
            <div className={"formData_main_section"}>
              <div className={"formData form-left-side"}>
                <label>First Name</label>
                <div className={"input-field"}>
                  <input type="text" name="firstName" />
                  <img src={user_profile} alt={"user_profile"} />
                </div>
              </div>
              <div className={"formData form-left-right"}>
                <label>Last Name</label>
                <div className={"input-field"}>
                  <input type="text" name="firstName" />
                  <img src={user_profile} alt={"user_profile"} />
                </div>
              </div>
            </div>
            <div className={"formData"}>
              <label>Contact Number</label>
              <div className={"input-field"}>
                <input
                  type="number"
                  onWheel={(e) => e.currentTarget.blur()}
                  name="firstName"
                />
                <img src={mail} alt={"user_profile"} className={"mail"} />
              </div>
            </div>
            <div className={"formData"}>
              <label>Email Address</label>
              <div className={"input-field"}>
                <input type="text" name="firstName" />
                <img src={mail} alt={"user_profile"} className={"mail"} />
              </div>
            </div>
            <div className={"formData select-section"}>
              <label>City</label>
              <div className={'input-field-details'}>
                <Select
                    isSearchable={false}
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder={'Select Category'}
                    styles={{
                      option: (base) => ({
                        ...base,
                        fontSize:'14px',
                        fontFamily:'Poppins'
                      }),
                    }}
                />
                <img src={location} alt={"user_profile"} className={"mail"} />
              </div>
            </div>
            <div className={"formData"}>
              <label>My Experience</label>
              <div className={"input-field"}>
                <textarea rows={4} />
              </div>
              <span className={"words-count"}>Words 0/800</span>
            </div>
            <div className={"formData-btn"}>
              <button className={"submit-btn"}>Continue</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default PersonalDetails;

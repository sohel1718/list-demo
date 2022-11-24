import profile from "../../../assets/images/profile.svg";
import camera from "../../../assets/images/plus.svg";
import user_profile from "../../../assets/images/user_profile.svg";
import mail from "../../../assets/images/mail.svg";
import React, {useState} from "react";
import location from "../../../assets/images/location.svg";
import photo from "../../../assets/images/Icon-Image.svg";
import Select from "react-select";

const MyGig = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
  ];
  return (
    <>
      <div className={"personal_details_section myGig-details-section"}>
        <form className={"personal_details_section_form"}>
          <div className={"personal_details_section_form_right"}>
            <div className={"formData"}>
              <label>Gig Title</label>
              <div className={"input-field"}>
                <input type="text" name="firstName" />
                <img
                  src={user_profile}
                  alt={"user_profile"}
                  className={"title"}
                />
              </div>
            </div>
            <div className={"title-category"}>
              <h2>Select Category</h2>
            </div>
            <div className={"formData select-section"}>
              <label>Category</label>
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
                <img src={mail} alt={"user_profile"} className={"location"} />
              </div>
            </div>
            <div className={"formData select-section"}>
              <label>Sub - Category</label>
              <div className={'input-field-details'}>
                <Select
                    isSearchable={false}
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder={'Select Sub - Category'}
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
            <div className={"formData"}>
              <label className="mb_27" >Gig Photos</label>
              <div className={"gig-profile-section"}>
                <div className={"profile"}>
                  <div className="user_profile">
                    <div className="user_profile_pic">
                      <div className={"profile_circle"}>
                        <div className={"profile_circle_img"}>
                          <img src={photo} />
                        </div>
                      </div>
                      <span className="addnew">
                        <img src={camera} alt="" />
                        <input type="file" name="member_photo" id="" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"profile"}>
                  <div className="user_profile">
                    <div className="user_profile_pic">
                      <div className={"profile_circle"}>
                        <div className={"profile_circle_img"}>
                          <img src={photo} />
                        </div>
                      </div>
                      <span className="addnew">
                        <img src={camera} alt="" />
                        <input type="file" name="member_photo" id="" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"profile"}>
                  <div className="user_profile">
                    <div className="user_profile_pic">
                      <div className={"profile_circle"}>
                        <div className={"profile_circle_img"}>
                          <img src={photo} />
                        </div>
                      </div>
                      <span className="addnew">
                        <img src={camera} alt="" />
                        <input type="file" name="member_photo" id="" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"profile"}>
                  <div className="user_profile">
                    <div className="user_profile_pic">
                      <div className={"profile_circle"}>
                        <div className={"profile_circle_img"}>
                          <img src={photo} />
                        </div>
                      </div>
                      <span className="addnew">
                        <img src={camera} alt="" />
                        <input type="file" name="member_photo" id="" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"profile"}>
                  <div className="user_profile">
                    <div className="user_profile_pic">
                      <div className={"profile_circle"}>
                        <div className={"profile_circle_img"}>
                          <img src={photo} />
                        </div>
                      </div>
                      <span className="addnew">
                        <img src={camera} alt="" />
                        <input type="file" name="member_photo" id="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
export default MyGig;

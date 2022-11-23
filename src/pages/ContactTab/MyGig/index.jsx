import profile from "../../../assets/images/profile.svg";
import camera from "../../../assets/images/plus.svg";
import user_profile from "../../../assets/images/user_profile.svg";
import mail from "../../../assets/images/mail.svg";
import React from "react";
import location from "../../../assets/images/location.svg";
import photo from "../../../assets/images/Icon-Image.svg";

const MyGig = () => {
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
            <div className={"formData"}>
              <label>City</label>
              <div className={"dropdown-city"}>
                <div className="dropdown">
                  <input
                    type="checkbox"
                    className="dropdown__switch"
                    id="filter-switch"
                    hidden
                  />
                  <label
                    htmlFor="filter-switch"
                    className="dropdown__options-filter"
                  >
                    <ul
                      className="dropdown__filter"
                      role="listbox"
                      tabIndex="-1"
                    >
                      <li
                        className="dropdown__filter-selected"
                        aria-selected="true"
                      >
                        Select Category
                      </li>
                      <li>
                        <ul className="dropdown__select">
                          <li className="dropdown__select-option" role="option">
                            Option 1
                          </li>
                          <li className="dropdown__select-option" role="option">
                            Option 2
                          </li>
                          <li className="dropdown__select-option" role="option">
                            Option 3
                          </li>
                          <li className="dropdown__select-option" role="option">
                            Option 4
                          </li>
                          <li className="dropdown__select-option" role="option">
                            Option 5
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </label>
                </div>
                <img
                  src={location}
                  alt={"user_profile"}
                  className={"location"}
                />
              </div>
            </div>
            <div className={"formData"}>
              <label>Sub - Category</label>
              <div className={"dropdown-city"}>
                <div className="dropdown">
                  <input
                    type="checkbox"
                    className="dropdown__switch"
                    id="filter-switch"
                    hidden
                  />
                  <label
                    htmlFor="filter-switch"
                    className="dropdown__options-filter"
                  >
                    <ul
                      className="dropdown__filter"
                      role="listbox"
                      tabIndex="-1"
                    >
                      <li
                        className="dropdown__filter-selected"
                        aria-selected="true"
                      >
                        Select Sub - Category
                      </li>
                      <li>
                        <ul className="dropdown__select">
                          <li className="dropdown__select-option" role="option">
                            Option 1
                          </li>
                          <li className="dropdown__select-option" role="option">
                            Option 2
                          </li>
                          <li className="dropdown__select-option" role="option">
                            Option 3
                          </li>
                          <li className="dropdown__select-option" role="option">
                            Option 4
                          </li>
                          <li className="dropdown__select-option" role="option">
                            Option 5
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </label>
                </div>
                <img
                  src={location}
                  alt={"user_profile"}
                  className={"location"}
                />
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

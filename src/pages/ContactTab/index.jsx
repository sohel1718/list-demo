import Tabs from "./tab";
import React, { useEffect } from "react";
import TabPane from "./TabPlanel";
import profile from "../../assets/images/profile.svg";
import camera from "../../assets/images/camera.svg";
import user_profile from "../../assets/images/user_profile.svg";
import mail from "../../assets/images/mail.svg";
import PersonalDetails from "./PersonalDetails";
import MyGig from "./MyGig";
import GigPricing from "./GigPricing";

const ContactTab = () => {
  const labelText = document.querySelector(".dropdown__filter-selected");
  useEffect(() => {
    // Change option selected
    const options = Array.from(
      document.querySelectorAll(".dropdown__select-option")
    );
    options.forEach((option) => {
      option.addEventListener("click", () => {
        labelText.textContent = option.textContent;
      });
    });
    document.addEventListener("click", (e) => {
      const toggle = document.querySelector(".dropdown__switch");
      const element = e.target;

      if (element === toggle) return;
      const isDropdownChild = element.closest(".dropdown__filter");
      if (!isDropdownChild) {
        toggle.checked = false;
      }
    });
  }, [labelText]);
  return (
    <>
      <div className="freelancer_section">
        <div className={"freelancer_section_container"}>
          <Tabs>
            <TabPane name="Personal Details" key="1">
              <PersonalDetails />
            </TabPane>
            <TabPane name="My Gig" key="2">
              <MyGig />
            </TabPane>
            <TabPane name="Gig Pricing" key="3">
              <GigPricing />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
};
export default ContactTab;

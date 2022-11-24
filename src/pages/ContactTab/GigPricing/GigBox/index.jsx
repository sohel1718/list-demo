import React, {useState} from "react";
import Select from "react-select";
import location from "../../../../assets/images/location.svg";

const GigBox = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
  ];
  return (
    <div className={"box gigPricing_box_2"}>
      <div className={"gigPricing_box_2_title"}>
        <h2>Basic</h2>
      </div>
      <div className={"gigPricing_box_2_amount"}>
        <input placeholder="Add Amount" />
      </div>
      <div className={"gigPricing_box_2_select_time"}>
        <div className={"select-section"}>
          <Select
              isSearchable={false}
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
              placeholder={'Select Time'}
              styles={{
                option: (base) => ({
                  ...base,
                  fontSize:'14px',
                  fontFamily:'Poppins'
                }),
              }}
          />
        </div>
      </div>
      <div className={"gigPricing_box_2_points"}>
        <ul>
          <li>Add point details</li>
          <li>Add point details</li>
          <li>Add point details</li>
          <li>Add point details</li>
          <li>Add point details</li>
        </ul>
      </div>
      <div className={"gigPricing_box_2_select_revision "}>
        <div className={"select-section"}>
          <Select
              isSearchable={false}
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
              placeholder={'Revision'}
              styles={{
                option: (base) => ({
                  ...base,
                  fontSize:'14px',
                  fontFamily:'Poppins'
                }),
              }}
          />
        </div>
      </div>
    </div>
  );
};

export default GigBox;

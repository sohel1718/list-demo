const GigBox = () => {
  return (
    <div className={"box gigPricing_box_2"}>
      <div className={"gigPricing_box_2_title"}>
        <h2>Basic</h2>
      </div>
      <div className={"gigPricing_box_2_amount"}>
        <p>Add Amount</p>
      </div>
      <div className={"gigPricing_box_2_select_time"}>
        <div className="dropdown">
          <input
            type="checkbox"
            className="dropdown__switch"
            id="filter-switch"
            hidden
          />
          <label htmlFor="filter-switch" className="dropdown__options-filter">
            <ul className="dropdown__filter" role="listbox" tabIndex="-1">
              <li className="dropdown__filter-selected" aria-selected="true">
                Select Time
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
        <div className="dropdown">
          <input
            type="checkbox"
            className="dropdown__switch"
            id="filter-switch"
            hidden
          />
          <label htmlFor="filter-switch" className="dropdown__options-filter">
            <ul className="dropdown__filter" role="listbox" tabIndex="-1">
              <li className="dropdown__filter-selected" aria-selected="true">
                Revision
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
      </div>
    </div>
  );
};

export default GigBox;

import { ReactComponent as FilterIcon } from '../../../assets/images/filter.svg';

const Filter = () => {
  return (
    <div className='custom-table_filter'>
      <div className='custom-table_filter_title'>
        <FilterIcon />
        <h1>Filter By</h1>
      </div>
      <div className='custom-table_filter_wrapper'>
        <div className='custom-table_filter_wrapper_select'>
          <h1>Category</h1>
          <select>
            <option value='' disabled selected>
              Select Category
            </option>
          </select>
        </div>
        <div className='custom-table_filter_wrapper_select'>
          <h1>Sub-Category</h1>
          <select>
            <option value='' disabled selected>
              Select Sub Category
            </option>
          </select>
        </div>
        <div className='custom-table_filter_wrapper_select'>
          <h1>Delivery Time</h1>
          <select>
            <option value='' disabled selected>
              Select Time
            </option>
          </select>
        </div>
        <div className='custom-table_filter_wrapper_select'>
          <h1>Country</h1>
          <select>
            <option value='' disabled selected>
              Select Country
            </option>
          </select>
        </div>
        <div className='custom-table_filter_wrapper_select'>
          <h1>Post Day</h1>
          <select>
            <option value='' disabled selected>
              Select Day
            </option>
          </select>
        </div>
        <div className='custom-table_filter_wrapper_select'>
          <h1>Pricing</h1>
          <select>
            <option value='' disabled selected>
              Select Price
            </option>
          </select>
        </div>
        <div className='custom-table_filter_wrapper_clear'>
          <h1>Clear Filter</h1>
          <button className='custom-table_filter_wrapper_clear_btn'>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;

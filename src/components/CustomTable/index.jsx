import { useMemo, useState } from 'react';
import { ReactComponent as Filter } from '../../assets/images/filter.svg';
import Pagination from './Pagination';
// import { ReactComponent as DownArrow } from '../../assets/images/down_arrow.svg';

const CustomTable = ({ dataSource, columns, className = '', PageSize=2 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return dataSource.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const headerRender = (data) => {
    return <th style={{ textAlign: data.align }} >{data.title}</th>;
  };

  const bodyRender = (data) => {
    return (
      <tr>
        {columns.map((col) => {
          switch (col.dataIndex) {
            case 'action':
              return <td style={{ textAlign: col.align }}>{col.render()}</td>;
            default:
              if (col.render) {
                return <td style={{ textAlign: col.align }} >{col.render(data)}</td>;
              }
              return <td style={{ textAlign: col.align }} >{data[col.dataIndex]}</td>;
          }
        })}
      </tr>
    );
  };

  return (
    <div className='custom-table'>
      <div className='custom-table_filter'>
        <div className='custom-table_filter_title'>
          <Filter />
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
      <table className={className}>
        <thead>
          <tr>
            {columns.map((data) => {
              return headerRender(data);
            })}
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((data) => {
            return bodyRender(data);
          })}
        </tbody>
      </table>
      <Pagination 
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={dataSource.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
};

export default CustomTable;

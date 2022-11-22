import { useMemo, useState } from 'react';
import Filter from './Filter';
import Pagination from './Pagination';
// import { ReactComponent as DownArrow } from '../../assets/images/down_arrow.svg';

const CustomTable = ({ dataSource, columns, className = '', PageSize = 2 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return dataSource.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, dataSource]);

  const headerRender = (data) => {
    return (
      <div className={`custom-table_content_header_col`}>
        {data.title}
      </div>
    );
  };

  const bodyRender = (data) => {
    return (
      <div className='custom-table_content_row'>
        {columns.map((col) => {
          switch (col.dataIndex) {
            case 'action':
              return (
                <div
                  className={`custom-table_content_row_col`}
                >
                  {col.render()}
                </div>
              );
            default:
              if (col.render) {
                return (
                  <div
                    className={`custom-table_content_row_col`}
                  >
                    {col.render(data)}
                  </div>
                );
              }
              return (
                <div
                  className={`custom-table_content_row_col`}
                >
                  {data[col.dataIndex]}
                </div>
              );
          }
        })}
      </div>
    );
  };

  return (
    <div className='custom-table'>
      <Filter />
      <div className={`custom-table_content ${className}`}>
        <div className='custom-table_content_header'>
          {columns.map((data) => {
            return headerRender(data);
          })}
        </div>
        {currentTableData.map((data) => {
          return bodyRender(data);
        })}
      </div>

      <Pagination
        className='pagination-bar'
        currentPage={currentPage}
        totalCount={dataSource.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default CustomTable;

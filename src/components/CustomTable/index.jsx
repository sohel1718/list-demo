import Pagination from './Pagination';
import { useMemo, useState } from 'react';
import Filter from './Filter';

const CustomTable = ({ dataSource, columns, className = '', PageSize=2 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return dataSource.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, dataSource]);

  const headerRender = (data) => {
    return <th style={{ textAlign: data.align }} >{data.title}</th>;
  };

  const bodyRender = (data) => {
    return (
      <>
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
      <hr />
      </>
    );
  };

  return (
    <div className='custom-table'>
      <Filter />
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

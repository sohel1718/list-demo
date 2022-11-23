import Pagination from './Pagination';
import { useMemo, useState } from 'react';
import Filter from './Filter';
import Table from './Table';
import ProjectList from './ProjectList';

const CustomTable = ({ dataSource, columns, className = '', PageSize = 2 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return dataSource.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, dataSource]);

  const headerRender = (data) => {
    return <th style={{ textAlign: data.align }}>{data.title}</th>;
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
                  return (
                    <td style={{ textAlign: col.align }}>{col.render(data)}</td>
                  );
                }
                return (
                  <td style={{ textAlign: col.align }}>
                    {data[col.dataIndex]}
                  </td>
                );
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

      {/*  Table  */}

      <Table
        bodyRender={bodyRender}
        headerRender={headerRender}
        className={className}
        columns={columns}
        currentTableData={currentTableData}
      />

      {/* Responsive Prject List  */}

      <ProjectList />

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

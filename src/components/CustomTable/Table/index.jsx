const Table = ({ bodyRender, headerRender, className, columns, currentTableData }) => {
  return (
    <div className='custom-table_table-wrapper'>
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
    </div>
  );
};

export default Table;

import React from "react";

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-ful overflow-hidden text-nowrap">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="px-4 text-left py-3 text-xs font-semibold text-gray-600 border-b"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-100 transition-colors gap-2 bg-white"
              >
                {columns.map((col) => (
                  <td
                    key={col.accessor}
                    className="px-4 py-1.5 text-xs  text-gray-600 border-b border-gray-200 t-max-width"
                  >
                    {col.render
                      ? col.render(row[col.accessor], row)
                      : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center text-red-500 py-4 font-semibold whitespace-nowrap"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

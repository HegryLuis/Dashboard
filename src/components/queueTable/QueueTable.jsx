import React from "react";
import "./QueueTable.css";

const QueueTable = ({ columns, data, onSort, sortConfig }) => {
  const getSortArrow = (col) => {
    if (!sortConfig.key) return null;

    if (
      (col === "Created" && sortConfig.key === "created") ||
      (col === "Originator" && sortConfig.key === "originator") ||
      (col === "Status" && sortConfig.key === "status")
    ) {
      return sortConfig.direction === "asc" ? " ↑" : " ↓";
    }
    return null;
  };

  const handleHeaderClick = (col) => {
    if (col === "Created") onSort("created");
    else if (col === "Originator") onSort("originator");
    else if (col === "Status") onSort("status");
  };

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                onClick={() => handleHeaderClick(col)}
                style={
                  ["Created", "Originator", "Status"].includes(col)
                    ? { cursor: "pointer" }
                    : {}
                }
              >
                {col}
                {getSortArrow(col)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueueTable;

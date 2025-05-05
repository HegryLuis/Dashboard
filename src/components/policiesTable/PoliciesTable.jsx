import React, { useState } from "react";
import "./PoliciesTable.css";
import boat from "./../../images/boat.svg";
import verified from "./../../images/verified.svg";
import person from "./../../images/person.svg";
import umbrella from "./../../images/umbrella.svg";

const columns = [
  "line",
  "eff.Date",
  "exp.Date",
  "status",
  "expiring tech",
  "expiring premium",
  "renewal to tech",
  "renewal tech",
  "renewal premium",
  "rate change",
  "loss ratio",
];

const columnKeyMap = {
  line: "line",
  "eff.Date": "effDate",
  "exp.Date": "expDate",
  status: "status",
  "expiring tech": "expiringTech",
  "expiring premium": "expiringPremium",
  "renewal to tech": "renewalToTech",
  "renewal tech": "renewalTech",
  "renewal premium": "renewalPremium",
  "rate change": "rateChange",
  "loss ratio": "lossRatio",
};

const rawData = [
  {
    line: {
      logo: boat,
      logoBackground: "blue",
      code: "17030212",
      name: "Marine Cargo",
    },
    effDate: "6/30/2026",
    expDate: "6/30/2027",
    status: "Active",
    expiringTech: 587500,
    expiringPremium: 605000,
    renewalToTech: 610000,
    renewalTech: 610000,
    renewalPremium: 620000,
    rateChange: 3.3,
    lossRatio: 22,
  },
  {
    line: {
      logo: verified,
      logoBackground: "green",
      code: "4631092",
      name: "General Liability",
    },
    effDate: "6/30/2026",
    expDate: "6/30/2027",
    status: "Active",
    expiringTech: 160000,
    expiringPremium: 165000,
    renewalToTech: 170000,
    renewalTech: 172500,
    renewalPremium: 175000,
    rateChange: 6.1,
    lossRatio: 55,
  },
  {
    line: {
      logo: person,
      logoBackground: "purple",
      code: "9182371",
      name: "Workers Comp",
    },
    status: "Pending",
    expiringTech: 0,
    expiringPremium: 0,
    renewalToTech: 73500,
    renewalTech: 75000,
    renewalPremium: 75000,
  },
  {
    line: {
      logo: umbrella,
      logoBackground: "red",
      code: "5274936",
      name: "Umbrella",
    },
    effDate: "3/13/2026",
    expDate: "3/13/2027",
    status: "Active",
    expiringTech: 245500,
    expiringPremium: 250000,
    renewalToTech: 267500,
    renewalTech: 270000,
    renewalPremium: 275000,
    rateChange: 10.0,
    lossRatio: 78,
  },
];

const numericFields = [
  "expiring tech",
  "expiring premium",
  "renewal to tech",
  "renewal tech",
  "renewal premium",
];

const formatCurrency = (value) =>
  typeof value === "number" ? `$${value.toLocaleString("en-US")}` : "-";

const formatPercent = (value) =>
  typeof value === "number" ? `${value.toFixed(1)}%` : "-";

const getColumnTotal = (fieldKey) =>
  rawData.reduce((sum, row) => {
    const val = row[columnKeyMap[fieldKey]];
    return typeof val === "number" ? sum + val : sum;
  }, 0);

const getAverage = (fieldKey) => {
  const values = rawData
    .map((row) => row[columnKeyMap[fieldKey]])
    .filter((val) => typeof val === "number");
  return values.length
    ? values.reduce((sum, v) => sum + v, 0) / values.length
    : 0;
};

const PoliciesTable = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedData = [...rawData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const valA = a[sortConfig.key];
    const valB = b[sortConfig.key];

    if (typeof valA === "number" && typeof valB === "number") {
      return sortConfig.direction === "asc" ? valA - valB : valB - valA;
    }

    const strA = (valA || "").toString().toLowerCase();
    const strB = (valB || "").toString().toLowerCase();
    if (strA < strB) return sortConfig.direction === "asc" ? -1 : 1;
    if (strA > strB) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (col) => {
    const key = columnKeyMap[col];
    const isSameColumn = sortConfig.key === key;
    const direction =
      isSameColumn && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });
  };

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                onClick={() => handleSort(col)}
                style={{ cursor: "pointer", fontSize: "12px" }}
              >
                {col.toUpperCase()}
                {sortConfig.key === columnKeyMap[col] &&
                  (sortConfig.direction === "asc" ? " ↑" : " ↓")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col, cellIdx) => {
                const key = columnKeyMap[col];
                const value = row[key];

                const isPending = row.status === "Pending";

                if (col === "line") {
                  const line = row.line;
                  return (
                    <td key={cellIdx}>
                      <div className="line-cell">
                        <img
                          alt="logo"
                          src={line.logo}
                          className={`line-logo ${line.logoBackground}`}
                        />
                        <span>{line.name}</span>
                      </div>
                      <span className="line-code">{line.code}</span>
                    </td>
                  );
                }

                if (col === "status") {
                  const statusColor =
                    value === "Active"
                      ? "green"
                      : value === "Pending"
                      ? "yellow"
                      : "gray";
                  return (
                    <td key={cellIdx}>
                      <div className="status-cell">
                        <span className={`status-dot ${statusColor}`}></span>
                        {value || "N/A"}
                      </div>
                    </td>
                  );
                }

                if (["eff.Date", "exp.Date"].includes(col) && isPending) {
                  return <td key={cellIdx}>Pending</td>;
                }

                if (col === "rate change") {
                  if (isPending) return <td key={cellIdx}>N/A</td>;

                  const isOverTech = value > 5 ? "red" : "";

                  return (
                    <td key={cellIdx} className={`rate-change ${isOverTech}`}>
                      {formatPercent(value)}
                    </td>
                  );
                }

                if (col === "loss ratio") {
                  if (isPending) return <td key={cellIdx}>N/A</td>;

                  const backgroundRatio =
                    value <= 50 ? "green" : value <= 70 ? "yellow" : "red";

                  return (
                    <td
                      key={cellIdx}
                      className={`loss-ratio ${backgroundRatio}`}
                    >
                      <span>{formatPercent(value)}</span>
                    </td>
                  );
                }

                if (numericFields.includes(col)) {
                  return <td key={cellIdx}>{formatCurrency(value)}</td>;
                }

                return <td key={cellIdx}>{value || "N/A"}</td>;
              })}
            </tr>
          ))}

          <tr className="summary-row">
            {columns.map((col, idx) => {
              if (idx === 0)
                return (
                  <td key={idx}>
                    <div>
                      <strong>Total</strong>
                    </div>
                  </td>
                );

              if (numericFields.includes(col)) {
                return (
                  <td key={idx}>
                    <div>
                      <strong>{formatCurrency(getColumnTotal(col))}</strong>
                    </div>
                  </td>
                );
              }

              if (col === "rate change" || col === "loss ratio") {
                return (
                  <td key={idx}>
                    <div>
                      <strong>{formatPercent(getAverage(col))}</strong>
                    </div>
                  </td>
                );
              }

              return <td key={idx}></td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PoliciesTable;

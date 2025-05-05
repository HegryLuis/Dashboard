import React from "react";
import "./AccountsTable.css";

const columnKeyMap = {
  "Account name/Type": ["name", "line"],
  Line: "line",
  Broker: "broker",
  "Renewal Date": "date",
  Premium: "premium",
  "Rated Premium": "ratedPremium",
  "Loss Ratio": "ratio",
  Appetite: "appetite",
  Status: "status",
  Triage: "triage",
  Winnability: "winnability",
};

const AccountsTable = ({ columns, data }) => {
  const getRatioColor = (ratio) => {
    const num = parseInt(ratio);
    if (num < 30) return "green";
    if (num < 60) return "yellow";
    return "red";
  };

  const renderDots = (level) => {
    const levels = {
      "Very Strong": 4,
      Strong: 3,
      Medium: 2,
      Low: 1,
    };
    const count = levels[level] || 0;
    return (
      <div className="dot-group">
        {Array.from({ length: 4 }, (_, i) => (
          <span key={i} className={`dot ${i < count ? "active" : ""}`} />
        ))}
      </div>
    );
  };

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col, cellIdx) => {
                const key = columnKeyMap[col];

                if (Array.isArray(key)) {
                  return (
                    <td key={cellIdx}>
                      <div className="account-name">{row[key[0]]}</div>
                      <div className="account-type">{row[key[1]]}</div>
                    </td>
                  );
                }

                const value = row[key];

                switch (col) {
                  case "Premium":
                  case "Rated Premium":
                    return <td key={cellIdx}>{`$${value}`}</td>;

                  case "Loss Ratio":
                    return (
                      <td key={cellIdx}>
                        <span className={`ratio-badge ${getRatioColor(value)}`}>
                          {`${value * 100}%`}
                        </span>
                      </td>
                    );
                  case "Appetite":
                    return (
                      <td key={cellIdx}>
                        <span
                          className={`appetite-badge ${value.toLowerCase()}`}
                        >
                          {value}
                        </span>
                      </td>
                    );
                  case "Status":
                    return (
                      <td key={cellIdx}>
                        <span
                          className={`status-dot ${
                            value === "Active" ? "green" : "blue"
                          }`}
                        />
                        {value}
                      </td>
                    );

                  case "Triage":
                    return (
                      <td key={cellIdx}>
                        <div className="triage-cell">{value}</div>
                      </td>
                    );
                  case "Winnability":
                    return (
                      <td key={cellIdx}>
                        <div className="winnability-cell">
                          {renderDots(value)}
                          <span className="winnability-label">{value}</span>
                        </div>
                      </td>
                    );
                  default:
                    return <td key={cellIdx}>{value}</td>;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountsTable;

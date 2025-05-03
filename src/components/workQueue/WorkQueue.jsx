import React, { useState } from "react";
import "./WorkQueue.css";
import QueueTable from "../queueTable/QueueTable";
import StatusBadge from "../statusBadge/StatusBadge";
import UserAvatar from "../userAvatar/UserAvatar";

const rawData = [
  {
    originator: "Sam Masters",
    clientLine: "NAMEX Tech Solutions",
    type: "Underwriter Referral",
    status: "New",
    created: "04/16/2025",
  },
  {
    originator: "Annalise Willis",
    clientLine: "Maritime Logistics Corp",
    type: "Underwriter Referral",
    status: "New",
    created: "04/20/2025",
  },
  {
    originator: "Patrick Devenport",
    clientLine: "GreenField Energy Ltd",
    type: "Loss Control Request",
    status: "New",
    created: "04/16/2025",
  },
  {
    originator: "Anna Killian",
    clientLine: "NorthStar Financial Group",
    type: "Underwriter Referral",
    status: "Pending",
    created: "04/22/2025",
  },
  {
    originator: "Anna Killian",
    clientLine: "Alliance Healthcare Systems",
    type: "Email",
    status: "Completed",
    created: "04/28/2025",
  },
  {
    originator: "Me",
    clientLine: "QuantumTech Industries",
    type: "Email",
    status: "Completed",
    created: "04/20/2025",
  },
];

const workBar = [
  {
    title: "All",
    num: rawData.length,
  },
  {
    title: "Assigned to me",
    num: rawData.filter((item) => item.originator === "Me").length,
  },
  {
    title: "Pending Review",
    num: rawData.filter((item) => item.status === "Pending").length,
  },
  {
    title: "Referrals",
    num: rawData.filter((item) => item.type === "Underwriter Referral").length,
  },
];

const columns = ["Originator", "Client/Line", "Type", "Status", "Created"];

const WorkQueue = () => {
  const [barActiveIndex, setBarActiveIndex] = useState(0);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [filteredData, setFilteredData] = useState(rawData);

  const sortData = (key) => {
    let sortedData = [...filteredData];

    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";

    sortedData.sort((a, b) => {
      const valA = a[key]?.toUpperCase?.() || a[key];
      const valB = b[key]?.toUpperCase?.() || b[key];

      if (key === "created") {
        return direction === "asc"
          ? new Date(valA) - new Date(valB)
          : new Date(valB) - new Date(valA);
      }

      if (valA > valB) return direction === "asc" ? 1 : -1;
      if (valA < valB) return direction === "asc" ? -1 : 1;

      return 0;
    });

    setSortConfig({ key, direction });

    setFilteredData(sortedData);
  };

  const handleBarClick = (index) => {
    setBarActiveIndex(index);

    let newData;
    switch (index) {
      case 0: // All
        newData = rawData;
        break;
      case 1: // Assigned to me
        newData = rawData.filter((item) => item.originator === "Me");
        break;
      case 2: // Pending Review
        newData = rawData.filter((item) => item.status === "Pending");
        break;
      case 3: // Referrals
        newData = rawData.filter(
          (item) => item.type === "Underwriter Referral"
        );
        break;
      default:
        newData = rawData;
    }

    setFilteredData(newData);
  };

  const tableData = filteredData.map((row) => [
    <div className="originator-block">
      <UserAvatar username={row.originator} />
      {row.originator}
    </div>,
    row.clientLine,
    row.type,
    <StatusBadge status={row.status} />,
    row.created,
  ]);

  return (
    <div className="content-main-wrap">
      <h1 className="content-title">Work Queue</h1>

      <div className="queue-bar">
        {workBar.map((chip, index) => {
          return (
            <div
              className={`queue-chip ${
                barActiveIndex === index ? "active" : ""
              }`}
              key={index}
              onClick={() => handleBarClick(index)}
            >
              <span className="queue-chip-label">{`${chip.title}(${chip.num}) `}</span>
            </div>
          );
        })}
      </div>

      <div className="queue-table-wrap">
        <QueueTable
          columns={columns}
          data={tableData}
          onSort={sortData}
          sortConfig={sortConfig}
        />
      </div>
    </div>
  );
};

export default WorkQueue;

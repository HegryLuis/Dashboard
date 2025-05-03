import React, { useState } from "react";
import "./WorkQueue.css";
import QueueTable from "../queueTable/QueueTable";
import StatusBadge from "../statusBadge/StatusBadge";
import UserAvatar from "../userAvatar/UserAvatar";

const workBar = [
  {
    title: "Assigned to me",
    num: 12,
  },
  {
    title: "Pending Review",
    num: 8,
  },
  {
    title: "Referrals",
    num: 3,
  },
];

const columns = ["Originator", "Client/Line", "Type", "Status", "Created"];

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

const WorkQueue = () => {
  const [barActiveIndex, setBarActiveIndex] = useState(0);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [data, setData] = useState(rawData);

  const sortData = (key) => {
    let sortedData = [...data];

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

    setData(sortedData);
  };

  const tableData = data.map((row) => [
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
              onClick={() => setBarActiveIndex(index)}
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

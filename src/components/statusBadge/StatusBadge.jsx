import React from "react";
import "./StatusBadge.css";

const StatusBadge = ({ status }) => {
  const color =
    status === "Completed"
      ? "green"
      : status === "Pending"
      ? "orange"
      : status === "New"
      ? "blue"
      : "gray";

  return (
    <div className="status-badge">
      <span className={`status-badge-dot ${color}`} />
      <span>{status}</span>
    </div>
  );
};

export default StatusBadge;

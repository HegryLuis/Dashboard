import React, { useState } from "react";
import "./MyAccounts.css";
import AccountsTable from "../accountsTable/AccountsTable";

const btns = ["+ New", "Group", "Sort", "Filter"];

const columns = [
  "Account name/Type",
  "Line",
  "Broker",
  "Renewal Date",
  "Premium",
  "Rated Premium",
  "Loss Ratio",
  "Appetite",
  "Status",
  "Triage",
  "Winnability",
];

const rawData = [
  {
    name: "NAMEX Tech Solutions",
    line: "D&O Liability",
    broker: "Willis Towers",
    date: "04/16/2025",
    premium: "2.3M",
    ratedPremium: "2.8M",
    ratio: 0.32,
    ratioStatus: "good",
    appetite: "High",
    status: "Active",
    triage: "180",
    winnability: "Very Strong",
  },
  {
    name: "Alliance Healthcare Systems",
    line: "Medical Malpractice",
    broker: "Aon Risk",
    date: "06/30/2025",
    premium: "1.7M",
    ratedPremium: "1.9M",
    ratio: 0.38,
    ratioStatus: "medium",
    appetite: "medium",
    status: "Under review",
    triage: "165",
    winnability: "Strong",
  },
  {
    name: "Maritime Logistics Corp",
    line: "Marine Cargo",
    broker: "Marsh McLennan",
    date: "09/05/2025",
    premium: "875K",
    ratedPremium: "920K",
    ratio: 0.25,
    ratioStatus: "good",
    appetite: "high",
    status: "Active",
    triage: "182",
    winnability: "Very Strong",
  },
  {
    name: "GreenField Energy Ltd",
    line: "Environmental Liability",
    broker: "Aon Risk",
    date: "07/22/2025",
    premium: "1.2M",
    ratedPremium: "1.4M",
    ratio: 0.67,
    ratioStatus: "bad",
    appetite: "cautious",
    status: "Under review",
    triage: "158",
    winnability: "Medium",
  },
];

const MyAccounts = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="content-main-wrap account-main-wrap">
      <div className="accounts-top-block">
        <h3 className="content-title">My accounts</h3>
        <input
          className="header-search accounts-search"
          type="text"
          placeholder="Search..."
        />

        <div className="btns-wrap">
          {btns.map((btn, index) => {
            return (
              <button
                className={`accounts-chip chip fade-in ${
                  activeIndex === index ? "active" : ""
                }`}
                key={index}
                onClick={() => setActiveIndex(index)}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>

      <div className="accounts-table-wrap">
        <AccountsTable columns={columns} data={rawData} />
      </div>
    </div>
  );
};

export default MyAccounts;

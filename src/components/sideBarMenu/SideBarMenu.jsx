import React, { useState } from "react";
import "./SideBarMenu.css";

const categoriesData = [
  {
    title: "DECISION SUPPORT",
    count: 4,
    items: [
      "Winnability",
      "Exposure Review & Suggested Coverage",
      "Portfolio Strategy Alignment",
      "Broker Analytics",
    ],
  },
  {
    title: "RISK ASSESSMENT",
    count: 6,
    items: [
      "Winnability",
      "Exposure Review & Suggested Coverage",
      "Portfolio Strategy Alignment",
      "Broker Analytics",
      "Winnability",
      "Exposure Review & Suggested Coverage",
    ],
  },
  {
    title: "DOCUMENTS AND COMPLIANCE",
    count: 2,
    items: ["Portfolio Strategy Alignment", "Broker Analytics"],
  },
];

const SidebarMenu = ({ onItemSelect }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleItemClick = (item) => {
    if (onItemSelect) onItemSelect(item);
  };

  return (
    <div className="sidebar">
      {categoriesData.map((category, index) => (
        <div key={index} className="sidebar-section">
          <div className="sidebar-header" onClick={() => handleToggle(index)}>
            <span>{category.title}</span>
            <span className="badge">{category.count}</span>
          </div>
          {openIndex === index && category.items.length > 0 && (
            <div className="sidebar-items">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="sidebar-item"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;

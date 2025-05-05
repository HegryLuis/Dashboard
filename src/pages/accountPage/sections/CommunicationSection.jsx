import React from "react";
import CommunicationBlock from "./../../../components/communicationBlock/CommunicationBlock";

const CommunicationSection = () => {
  return (
    <div className="communication-wrap">
      <h2>Communication</h2>

      <div className="communication-block">
        <div className="search-block-top">
          <input
            type="text"
            placeholder="Search..."
            className="input-search header-search"
          />

          <div className="search-btns-wrap">
            <button className="search-btn">Filter</button>
            <button className="search-btn">Group</button>
          </div>
        </div>

        <CommunicationBlock />
      </div>
    </div>
  );
};

export default CommunicationSection;

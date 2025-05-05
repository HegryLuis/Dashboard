import React from "react";
import PoliciesTable from "../../../components/policiesTable/PoliciesTable";

const PoliciesTableSection = () => {
  return (
    <div className="policies-table-wrap">
      <h2>Policies</h2>

      <div className="policies-table-block">
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

        <PoliciesTable />
      </div>
    </div>
  );
};

export default PoliciesTableSection;

import React from "react";
import "./ComplianceDocumentation.css";
import check_circle from "../../images/check_circle.svg";

const documentationData = [
  "KYC verification",
  "Required Documentation",
  "Regulatory approval",
  "Financial Verification",
];

const ComplianceDocumentation = () => {
  return (
    <div className="documentation-block">
      <div className="status-documentation-title documentation-top">
        <h3>Compliance & Documentation</h3>
        <span className="documentation-link metric-link">See history →</span>
      </div>
      <div className="status-documentation-content documentation-content">
        {documentationData.map((data, index) => (
          <div key={index} className="documentation-info">
            <img alt="check" src={check_circle} />
            <div className="documentation-text">{data}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplianceDocumentation;

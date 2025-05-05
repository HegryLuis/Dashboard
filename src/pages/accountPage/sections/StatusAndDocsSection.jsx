import React from "react";
import AccountStatusBlock from "../../../components/accountStatusBlock/AccountStatusBlock";
import ComplianceDocumentation from "../../../components/сomplianceDocumentation/ComplianceDocumentation";

const StatusAndDocsSection = () => {
  return (
    <div className="status-documentation-wrap">
      <AccountStatusBlock />
      <ComplianceDocumentation />
    </div>
  );
};

export default StatusAndDocsSection;

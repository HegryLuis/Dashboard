import React, { useState } from "react";
import "./AccountPage.css";
import PoliciesTable from "../../components/policiesTable/PoliciesTable";
import AccountHeader from "./sections/AccountHeader";
import MetricSection from "./sections/MetricSection";
import PoliciesCardSection from "./sections/PoliciesCardsSection";
import StatusAndDocsSection from "./sections/StatusAndDocsSection";
import AccountDetailsSection from "./sections/AccountDetailsSection";
import CommunicationSection from "./sections/CommunicationSection";
import PoliciesTableSection from "./sections/PoliciesTableSection";

const AccountPage = () => {
  return (
    <div>
      <AccountHeader />
      <MetricSection />
      <PoliciesCardSection />
      <StatusAndDocsSection />
      <AccountDetailsSection />
      <CommunicationSection />
      <PoliciesTableSection />
    </div>
  );
};

export default AccountPage;

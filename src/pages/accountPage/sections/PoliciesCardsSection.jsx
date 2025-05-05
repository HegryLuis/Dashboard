import React from "react";
import PoliceBlock from "./../../../components/policeBlock/PoliceBlock";
import boat from "./../../../images/boat.svg";
import factory from "./../../../images/factory.svg";
import person from "./../../../images/person.svg";
import umbrella from "./../../../images/umbrella.svg";
import verified from "./../../../images/verified.svg";

const policiesData = [
  {
    icon: boat,
    title: "Marine Cargo",
    premium: "625,500",
    effDate: "6/30/2026",
  },
  {
    icon: verified,
    title: "General Liability",
    premium: "175,000",
    effDate: "6/30/2026",
  },
  {
    icon: person,
    title: "Workers Comp",
    premium: "75,000",
  },
  {
    icon: factory,
    title: "Property",
    premium: "64,829.83",
  },
  {
    icon: umbrella,
    title: "Umbrella",
    premium: "275,000",
    effDate: "13/03/2026",
  },
];

const PoliciesCardSection = () => {
  return (
    <div className="policies-wrap">
      <h1>Policies</h1>
      <div className="policies-content">
        {policiesData.map((data, index) => {
          return <PoliceBlock key={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default PoliciesCardSection;

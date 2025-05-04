import React from "react";
import "./AccountStatusBlock.css";
import check from "./../../images/check.svg";
import check_gray from "./../../images/check_gray.svg";

const accountData = [
  {
    logo: check,
    title: "Submitted",
  },
  {
    logo: check,
    title: "Review",
  },
  {
    logo: check,
    title: "Quote",
  },
  {
    logo: check,
    title: "Bind",
  },
  {
    logo: check,
    title: "Issue",
  },
  {
    logo: check_gray,
    title: "Renew",
  },
];
const AccountStatusBlock = () => {
  return (
    <div className="status-block">
      <h3 className="status-documentation-title">Account Status</h3>

      <div className="status-documentation-content status-content">
        <div className="status-line-wrap">
          <div className="status-line"></div>
          <div className="status-content-block">
            {accountData.map((data, index) => {
              const isLast = index === accountData.length - 1;

              return (
                <div key={index} className="status-data-block">
                  <div className={`status-img-wrap ${isLast ? "last" : ""}`}>
                    <img alt="logo" src={data.logo} />
                  </div>
                  <h5>{data.title}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStatusBlock;

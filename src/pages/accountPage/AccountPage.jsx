import React from "react";
import "./AccountPage.css";
import database from "./../../images/database.svg";
import priority from "./../../images/priority.svg";

const accountInfo = [
  {
    top: "425 Harbor Boulevard, Suite 300",
    bottom: "Seattle, WA 98104",
  },
  {
    top: "Existing Account",
    bottom: "54383",
  },
  {
    top: "Broker",
    bottom: "Marsh McLennan",
  },
  {
    top: "Underwriter",
    bottom: "Kate Johnson",
  },
];

const AccountPage = () => {
  return (
    <div className="header-account-wrap">
      <div className="header-left-block">
        <img alt="logo" src={database} className="header-logo" />

        <div className="account-header-wrap">
          <h1 className="account-header-title">Maritime Logistic Corp</h1>
          <div className="account-header-wrap-block">
            {accountInfo.map((item, index) => {
              return (
                <div className="account-header-content" key={index}>
                  <span className="account-header-content-top">
                    {item.top.toUpperCase()}
                  </span>
                  <span className="account-header-content-bottom">
                    {item.bottom}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="header-right-block">
        <div className="right-top-block">
          <span>
            <img alt="attention" src={priority} />
          </span>

          <h4>Needs Attention</h4>
        </div>

        <div className="right-bottom-block">sadads</div>
      </div>
    </div>
  );
};

export default AccountPage;

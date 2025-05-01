import React from "react";
import "./Header.css";
import UserAvatar from "../userAvatar/UserAvatar";

const Header = ({ username, tasksNum }) => {
  return (
    <header>
      <div className="wrap">
        <div className="header-wrap">
          <h1>{`Hi ${username}, welcome! You have ${tasksNum} open ${
            tasksNum > 1 ? "tasks" : "task"
          }`}</h1>

          <div className="header-search-container">
            <input
              className="header-search"
              type="text"
              placeholder="Search..."
            />
            <UserAvatar username={username} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

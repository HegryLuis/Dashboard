import React from "react";
import "./UserAvatar.css";

const UserAvatar = ({ username }) => {
  const getInitials = (name) => {
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
    } else {
      return name.slice(0, 2).toUpperCase();
    }
  };

  const initials = getInitials(username);

  return <div className="avatar-logo">{initials}</div>;
};

export default UserAvatar;

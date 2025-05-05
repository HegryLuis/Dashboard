import React, { useRef, useState } from "react";
import "./ScrollBar.css";
import arrow_back from "./../../images/arrow_back.svg";
import arrow_forward from "./../../images/arrow_forward.svg";
import database from "./../../images/database.svg";
import domain from "./../../images/domain.svg";
import home from "./../../images/home.svg";
import key from "./../../images/key.svg";
import note from "./../../images/note.svg";
import people_group from "./../../images/people_group.svg";
import target from "./../../images/target.svg";
import { Link, useLocation } from "react-router-dom";
import arrow_back_2 from "./../../images/arrow_back_2.svg";

const chips = [
  { icon: home, label: "Dashboard", route: "/" },
  { icon: database, label: "Accounts", route: "/account" },
  { icon: people_group, label: "Brokers", route: "/brokers" },
  { icon: note, label: "Submission", route: "/submission" },
  { icon: domain, label: "Organization", route: "/organization" },
  { icon: target, label: "Goals & Rules", route: "/goals" },
  { icon: key, label: "Admin", route: "/admin" },
  { icon: key, label: "Admin 2", route: "/admin2" },
  { icon: key, label: "Admin 4", route: "/admin4" },
  { icon: key, label: "Admin 5", route: "/admin5" },
  { icon: key, label: "Admin 6", route: "/admin6" },
  { icon: key, label: "Admin 7", route: "/admin7" },
  { icon: key, label: "Admin 8", route: "/admin8" },
];

const ScrollBar = () => {
  const scrollRef = useRef();
  const location = useLocation();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -150 : 150,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="chip-wrapper">
      <button className="scroll-btn" onClick={() => scroll("left")}>
        <img src={arrow_forward} alt="back" className={`arrow back`} />
      </button>

      <div className="chip-scroll-container" ref={scrollRef}>
        {chips.map((chip, index) => {
          const isActive = location.pathname === chip.route;
          return (
            <Link
              to={chip.route}
              key={index}
              className={`chip fade-in ${isActive ? "active" : ""}`}
            >
              <img className="chip-icon" src={chip.icon} alt="icon" />
              <span className="chip-label">{chip.label}</span>
            </Link>
          );
        })}
      </div>

      <button className="scroll-btn" onClick={() => scroll("right")}>
        <img className="arrow" src={arrow_forward} alt="forward" />
      </button>
    </div>
  );
};

export default ScrollBar;

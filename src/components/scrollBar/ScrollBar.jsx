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

const chips = [
  { icon: home, label: "Dashboard" },
  { icon: database, label: "Accounts" },
  { icon: people_group, label: "Brokers" },
  { icon: note, label: "Submission" },
  { icon: domain, label: "Organization" },
  { icon: target, label: "Goals & Rules" },
  { icon: key, label: "Admin" },
  { icon: key, label: "Admin" },
  { icon: key, label: "Admin" },
  { icon: key, label: "Admin" },
  { icon: key, label: "Admin" },
  { icon: key, label: "Admin" },
  { icon: key, label: "Admin" },
  { icon: key, label: "Admin" },
  { icon: key, label: "Admin" },
  { icon: key, label: "Admin" },
  { icon: key, label: "Admin" },
];

const ScrollBar = () => {
  const scrollRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

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
        <img src={arrow_back} alt="back" />
      </button>

      <div className="chip-scroll-container" ref={scrollRef}>
        {chips.map((chip, idx) => (
          <div
            className={`chip fade-in ${activeIndex === idx ? "active" : ""}`}
            key={idx}
            onClick={() => setActiveIndex(idx)}
          >
            <img className="chip-icon" src={chip.icon} alt="icon" />
            <span className="chip-label">{chip.label}</span>
          </div>
        ))}
      </div>

      <button className="scroll-btn" onClick={() => scroll("right")}>
        <img src={arrow_forward} alt="forward" />
      </button>
    </div>
  );
};

export default ScrollBar;

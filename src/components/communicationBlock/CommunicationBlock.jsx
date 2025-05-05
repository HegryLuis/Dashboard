import React from "react";
import CommentBlock from "./CommentBlock";
import "./CommunicationBlock.css";

const communicationData = [
  {
    type: "New",
    title: "Policy Renewal - Auto Insurance 5/15/25",
    author: "Michael Roberts",
    date: "Apr 5",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio aliquam aperiam eveniet deleniti aspernatur pariatur quo reiciendis nihil officia? Nulla libero aperiam eveniet deleniti modi adipisci nesciunt maiores eius.",
    attachments: 3,
  },
  {
    type: "New",
    title: "New Quote Request - Workers Comp Insurance",
    author: "Sarah Chen",
    date: "Apr 5",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio aliquam aperiam eveniet deleniti aspernatur pariatur quo reiciendis nihil officia? Nulla libero aperiam eveniet deleniti modi adipisci nesciunt maiores eius.",
    attachments: 3,
  },
  {
    type: "Responded",
    title: "Fwd: New Submission - BPM Real Estate - EFF 4/1/24",
    author: "Joshua Dunmire",
    date: "Mar 25",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio aliquam aperiam eveniet deleniti aspernatur pariatur quo reiciendis nihil officia? Nulla libero aperiam eveniet deleniti modi adipisci nesciunt maiores eius.",
  },
  {
    title: "New Business: BMP Real Estate Group, LLC",
    author: "Isabel Kreller",
    date: "Feb 28",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio aliquam aperiam eveniet deleniti aspernatur pariatur quo reiciendis nihil officia? Nulla libero aperiam eveniet deleniti modi adipisci nesciunt maiores eius.",
    attachments: 5,
  },
];

const CommunicationBlock = () => {
  return (
    <div className="communication-main-wrap">
      {communicationData.map((data, index) => {
        return <CommentBlock data={data} key={index} />;
      })}
    </div>
  );
};

export default CommunicationBlock;

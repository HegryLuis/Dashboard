import React from "react";
import attach from "./../../images/attach.svg";

const CommentBlock = ({ data }) => {
  return (
    <div className="comment-box">
      <div className="comment-box-top">
        {data.type && <div className="comment-type">{data.type}</div>}
        <div className="comment-title">{data.title}</div>
      </div>
      <div className="comment-author">{`${data.author} // ${data.date}`}</div>

      <div className="comment-content">{data.text}</div>

      {data.attachments && (
        <div className="comment-links">
          <div className="attachments-wrap">
            <img alt="attach" src={attach} />
            <span>{`${data.attachments} attachments`}</span>
          </div>
          <div className="reply-btn">Reply</div>
        </div>
      )}
    </div>
  );
};

export default CommentBlock;

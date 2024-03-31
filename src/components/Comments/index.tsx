"use client";

import React from "react";
import { BsChatLeftQuote } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";

import { IComments } from "./Comments";

import "./style.scss";

const Comments: React.FC<IComments.Props> = ({ comments }) => {
  return (
    <div className="commentSection">
      <Carousel showArrows={false} showStatus={false} showThumbs={false}>
        {comments.map((comment, index) => {
          return (
            <div key={index} className="item">
              <BsChatLeftQuote size="36px" />
              <p>{comment.text}</p>
              <span>
                {comment.user}
                <em>{comment.userTitle}</em>
              </span>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Comments;

import { Avatar, Comment, Tooltip } from "antd";
import axios from "axios";
import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const URL = process.env.REACT_APP_API_URL;
export const Comments = ({ movieID }) => {
  const [commentList, setCommentList] = useState([]);

  let getComments = () => {
    let response = axios.get(`${URL}/comments`);
    setCommentList(response.data);
  };

  useEffect(()=>{
    getComments()
  },[])
  return (
    <>
      <div className="comment-section">
        <div className="add-comment"></div>
        <div className="comment-list">
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            }
            datetime={
              <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
        </div>
      </div>
    </>
  );
};

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Avatar, Button, Comment, Form, Tooltip } from "antd";
import axios from "axios";
import moment from "moment";
import TextArea from "antd/lib/input/TextArea";
const URL = process.env.REACT_APP_API_URL;

export const Comments = ({ movieID }) => {
  const [commentList, setCommentList] = useState([]);

  let getComments = async () => {
    let response = await axios.get(`${URL}/comments`);
    console.log(response)
    // setCommentList(JSON.stringify(response.data));
    console.log('desde Comment'+JSON.stringify(movieID))
  };

  useEffect(()=>{
    getComments()
  },[])

  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </>
  );

  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue('');
      setComments([
        ...comments,
        {
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ]);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
    
      <div className="comment-section">

        <div className="add-comment">
        <Comment
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
        </div>
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

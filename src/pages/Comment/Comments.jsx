import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Avatar, Button, Comment, Form, List, Tooltip } from "antd";
import axios from "axios";
import moment from "moment";
import TextArea from "antd/lib/input/TextArea";
import "./Comments.scss"
const URL = process.env.REACT_APP_API_URL;

export const Comments = ({ movieID }) => {
  const [commentList, setCommentList] = useState([]);
  const [renderList, setRenderList] =useState([]);
  
  //RENDERIZAR COMENTARIOS
//traer los datos de la base de datos de comentrios
 
  let getComments = async () => {
    let response = await axios.get(`${URL}/comments`);
    let {Comments}=response.data
    setCommentList(Comments);
  };

  //filtrar los datos que incluyan el id de la pelicula
//pintar en dom
  let filter = ()=>{
    console.log(commentList)
    console.log(movieID)
    let result = commentList.filter(el=> el.movieID==movieID.id)
    console.log(result)
    setRenderList(result)
  }
//AGREGAR NUEVOS COMENTARIOS
//Tomar los datos del input 
//ordenrlos en el formato que espera la BD
//mandar los datos
 
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
  useEffect(()=>{
    getComments();
    
  },[])

  useEffect(()=>{
    filter()
  },[commentList])

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
        <List
    className="comment-list"
    header={`${renderList.length} Comments`}
    itemLayout="horizontal"
    dataSource={renderList}
    renderItem={item => (
      <li>
        <Comment
          author={item.userID}
          avatar={item.avatar}
          content={item.comment}
          datetime={
            <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().subtract(2, 'days').fromNow()}</span>
            </Tooltip>
          }
        />
      </li>
    )}
  />
       
        </div>
      </div>
    </>
  );
};

import axios from 'axios'
import React, { useState, useEffect } from 'react'
import mockData from '../mock_data'
import AddComment from './AddComment'
import Comment from './Comment'
import Comments from './Comments'

const AppMock = () => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    mockData();
    axios('abc.json')
    .then(res => {
      console.log(res.data.result.length);
      setComments(res.data.result);
    })
  }, [])

  function getDate(){
    var d = new Date();
    var datestring = d.getFullYear()  + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
     ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
    return datestring;
  }

  function submitComment(text){
    var newComment = {
      name:"me",
      datetime:getDate(),
      comment:text
    };
    setComments([newComment,...comments]);
  }

  return (
    <div>
      <AddComment submitComment={submitComment}></AddComment>
      <Comments comments={comments}></Comments>
    </div>
  )
}

export default AppMock

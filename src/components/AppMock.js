import React, { useState, useEffect } from 'react';
import AddComment from './AddComment';
import Comments from './Comments';
import { fetchPosts } from '../services';

const AppMock = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      var res = await fetchPosts();
      setComments(res.data);
    })();
  }, []);

  function getDate() {
    var d = new Date();
    var datestring =
      d.getFullYear() +
      '-' +
      ('0' + (d.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + d.getDate()).slice(-2) +
      ' ' +
      ('0' + d.getHours()).slice(-2) +
      ':' +
      ('0' + d.getMinutes()).slice(-2) +
      ':' +
      ('0' + d.getSeconds()).slice(-2);
    return datestring;
  }

  function submitComment(text) {
    var newComment = {
      name: 'me',
      datetime: getDate(),
      comment: text,
    };
    setComments([newComment, ...comments]);
  }

  return (
    <div>
      <AddComment submitComment={submitComment}></AddComment>
      <Comments comments={comments}></Comments>
    </div>
  );
};

export default AppMock;

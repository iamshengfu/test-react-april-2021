import React from 'react';
import Comment from './Comment';

const Comments = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <Comment key={Date.now() + index} name={comment.name} time={comment.datetime} text={comment.comment} />
      ))}
    </>
  );
};

export default Comments;

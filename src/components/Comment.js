import React from 'react';

const Comment = ({ name, time, text }) => {
  return (
    <div
      style={{
        width: '80%',
        backgroundColor: 'whitesmoke',
        margin: 'auto',
        borderRadius: '0.3em',
        borderWidth: '1px',
        borderColor: 'lightgrey',
        borderStyle: 'solid',
        marginBottom: '20px',
      }}>
      <h4 style={{ padding: '0.5em', marginTop: '0.2em' }}>
        {name} - {time}
      </h4>
      <p style={{ padding: '0.5em', marginTop: '-1.7em' }}>{text}</p>
    </div>
  );
};
export default Comment;

import React, { useState } from 'react'

const AddComment = ({submitComment}) => {

  const [comment, setComment] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    submitComment(comment);
  }

  const onCommentChange = (e) => {
    setComment(e.target.value);
  }

  return (
    <form style={{"margin":"auto","width":"80%"}} onSubmit={onSubmit}>
      <textarea style={{"height":"8em","width":"100%"}} onChange={e => onCommentChange(e)}></textarea>
      <div style={{"marginBottom":"2em"}}>
        <input type="submit" value="Submit" style={{"marginLeft":"auto","display":"block"}}/>
      </div>
    </form>

  )
}

export default AddComment
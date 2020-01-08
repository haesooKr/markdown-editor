import React from 'react'
import './Preview.css';

export default function Preview(state) {
  console.log(state);
  return (
    <div className="preview">
      <div className="title">
        {state.title}
      </div>
      <div className="markdown">
        {state.code}
      </div>
    </div>
  )
}

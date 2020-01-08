import React from 'react'
import './Preview.css';
import MarkdownRender from './MarkdownRender';

export default function Preview({title, code}) {
  return (
    <div className="preview">
      <div className="title">
        {title}
      </div>
      <div className="markdown">
        <MarkdownRender code={code}/>
      </div>
    </div>
  )
}

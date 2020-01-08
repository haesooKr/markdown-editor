import React, { Component } from 'react'

export default class Editor extends Component {
  render() {
    return (
      <div className="editor">
        <input
          className="title"
          placeholder="Enter the title"
          name="title"
        />
        <div className="markdown">
          Markdown
        </div>
      </div>
    )
  }
}

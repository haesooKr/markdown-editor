import React, { Component } from 'react'

export default class Editor extends Component {
  render() {
    return (
      <div>
        <input
          className="title"
          placeholder="Enter the title"
          name="title"
        />
        <div>
          Markdown
        </div>
      </div>
    )
  }
}

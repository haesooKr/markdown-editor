import React, { Component } from 'react'
import './Editor.css';

import CodeMirror from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

export default class Editor extends Component {
  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true
    });
    this.codeMirror.on('change', this.handleChangeMarkDown);
  }

  handleChangeMarkDown = (doc) => {
    const { onChange } = this.props;
    const value = doc.getValue();
    console.log(value);
    onChange(value);
  }

  componentDidMount(){
    this.initializeEditor();
  }

  render() {
    return (
      <div className="editor">
        <input
          className="title"
          placeholder="Enter the title"
          name="title"
        />
        <div className="markdown" ref={ref => this.editor=ref}>
          {/* markdown */}
        </div>
      </div>
    )
  }
}

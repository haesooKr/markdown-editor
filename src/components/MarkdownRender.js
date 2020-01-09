import React, { Component } from 'react';
import './MarkdownRender.css';
import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-bash.min.js'
import 'prismjs/components/prism-javascript.min.js'
import 'prismjs/components/prism-jsx.min.js'
import 'prismjs/components/prism-css.min.js'


export default class MarkdownRender extends Component {
  state = {
    code: this.props.code || ""
  }

  renderMarkdown = () => {
    const { code } = this.props;
    if(!code){
      this.setState({code: ''});
      return;
    }
    this.setState({
      code: marked(code, {
        breaks: true,
        sanitize: true,
      })
    });
  }
  componentDidMount(){
    if(this.state.code !== ""){
      this.renderMarkdown();
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.code !== this.props.code){
      this.renderMarkdown();
    }
    if(prevState.code !== this.state.code){
      Prism.highlightAll();
    }
  }

  render() {    
    const { code } = this.state;
    const markup = {
      __html: code
    }

    return (
      <div className="markdown-render" dangerouslySetInnerHTML={markup}></div>
    )
  }
}

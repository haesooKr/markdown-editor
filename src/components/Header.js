import React from 'react'
import './Header.css';

export default function Header() {
  const preview = document.getElementsByClassName('preview');
  const editor = document.getElementsByClassName('editor');
  console.log(preview, editor);
  const handlePreviewClick = () => {
    preview[0].classList.toggle("show");
    editor[0].classList.toggle("hide")
  }
  return (
      <header>
        <div className="title">Markdown Editor</div>
        <button className="header__preview" onClick={handlePreviewClick}>Preview</button>
        <button className="header__save">Save </button>
      </header>
  )
}

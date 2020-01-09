import React from 'react'
import './Header.css';

export default function Header({title, code}) {
  const preview = document.getElementsByClassName('preview');
  const editor = document.getElementsByClassName('editor');
  const handlePreviewClick = () => {
    preview[0].classList.toggle("show");
    editor[0].classList.toggle("hide")
  }
  const handleSaveClick = () => {
    localStorage.setItem('title', title);
    localStorage.setItem('code', code);
  }
  return (
      <header>
        <div className="title">Markdown Editor</div>
        <button className="header__preview" onClick={handlePreviewClick}>Preview</button>
        <button className="header__save" onClick={handleSaveClick}>Save </button>
      </header>
  )
}

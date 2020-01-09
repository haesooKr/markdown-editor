import React from 'react'
import './Header.css';

export default function Header() {
  return (
      <header>
        <div className="title">Markdown Editor</div>
        <button className="header__preview">Preview</button>
        <button className="header__save">Save </button>
      </header>
  )
}

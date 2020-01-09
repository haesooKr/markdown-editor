import React from 'react';
import './App.css';
import EditorContainer from './containers/EditorContainer';
import PreviewContainer from './containers/PreviewContainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <EditorContainer/>
      <PreviewContainer/>
    </div>
  );
}

export default App;

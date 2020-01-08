import React from 'react';
import './App.css';
import EditorContainer from './containers/EditorContainer';
import PreviewContainer from './containers/PreviewContainer';

function App() {
  return (
    <div className="App">
      <EditorContainer/>
      <PreviewContainer/>
    </div>
  );
}

export default App;

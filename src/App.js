import React from 'react';
import './App.css';
import EditorContainer from './containers/EditorContainer';
import PreviewContainer from './containers/PreviewContainer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <EditorContainer/>
      <PreviewContainer/>
    </div>
  );
}

export default App;

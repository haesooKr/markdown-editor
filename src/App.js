import React from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

function App() {
  return (
    <div className="App">
      <Editor/>
      <Preview/>
    </div>
  );
}

export default App;

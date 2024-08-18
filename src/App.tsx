import React, { useState } from 'react';
import CodeEditor from './Components/CodeEditor';

function App() {
  const [code, setCode] = useState('');

  return (
    <div className="App">
      <h1>Python Code Editor</h1>
      <CodeEditor value={code} onChange={setCode} />
      <button onClick={() => console.log(code)}>Log Code</button>
    </div>
  );
}

export default App;
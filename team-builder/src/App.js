import React, {useState} from 'react';
import './App.css';
import Members from "./components/Members"

import data from "./data";

function App() {
  const [members, setMembers] = useState(data)
  return (
    <div className="App">
      <h1>Team Members List</h1>
      <Members membersList={members}/>
    </div>
  );
}

export default App;

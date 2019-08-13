import React, {useState} from 'react';
import './App.css';
import Members from "./components/Members";
import MembersForm from "./components/MembersForm";

import data from "./data";

function App() {
  const [members, setMembers] = useState(data)

  const addNewMember = member => {
    setMembers ([...members, member])
  }

  return (
    <div className="App">
      <h1>Team Members List:</h1>
      <Members membersList={members}/>
      <MembersForm addNewMember = {addNewMember}/>
    </div>
  );
}

export default App;

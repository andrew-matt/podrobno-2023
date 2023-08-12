import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';

function App() {
  return (
    <div>
      <Accordion titleValue={'Menu'} collapsed={true}/>
      <Accordion titleValue={'Users'} collapsed={false}/>
    </div>
  );
}

export default App;
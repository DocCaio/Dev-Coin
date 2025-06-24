import { useState } from 'react';
import './App.css';
import SeuNome from './components/SeuNome';
import Saldacao from './components/Saudacao';

function App() {
   const [nome , setNome] = useState()
  return (
    <div className='app'>
      <h1>State Lift</h1> 
      <SeuNome setNome={setNome}/>
      <Saldacao nome={nome}/>   
    
    </div>
  );
}

export default App;

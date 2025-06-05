import './App.css'
import SayMyname from './components/SayMyName';
import Item from './components/Item';
import Pessoas from './components/pessoas';



function App() {


  return (
   <div className='app'>
    <SayMyname nome="Caio"/>
    <Pessoas nome="Caio"
    idade="28"
    profissao="Programador"
    foto="https://placehold.co/600x400"
    
    />
    <Item/>
    

   </div>
  )
}

export default App

import './App.css'
import Eventos from './components/Eventos';
import Form from './components/Form';





function App() {


  return (
   <div className='app'>
    <h1>Teste</h1>
    <Eventos numero='1'/>
    <Eventos numero='2'/>
    <Form/>

   </div>
  )
}

export default App

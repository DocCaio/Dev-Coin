import './App.css';
import OutraLista from './components/OutraLista';

const meusItens = ['React', 'Vue', 'Angular'];

function App() {
  return (
    <div className='app'>
      <h1>Renderizador de listas</h1> 
      <OutraLista itens={meusItens} />
       <OutraLista itens={[]} />
    </div>
  );
}

export default App;

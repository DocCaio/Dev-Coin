function Evento({numero}) {
    function meuEvento() {
        console.log(`opa, ativado' ${numero}`)
    }
 return (
    <div>
        <p>Clique aqui</p>
        <button onClick={meuEvento}>Ativar</button>

    </div>
 )
}

export default Evento;
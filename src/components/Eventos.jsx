import Button from "./event/Button";

function Evento() {
    function meuEvento() {
        console.log('opa, ativando primeiro evento')
    }

    function segundoEvento() {
        console.log('opa, ativando segundo evento')
    }

 return (
    <div>
        <p>Clique aqui</p>
        <Button event={meuEvento} text="Primeiro evento"/> 
        <Button event={segundoEvento} text="Segundo evento"/>             

    </div>
 )
}

export default Evento;
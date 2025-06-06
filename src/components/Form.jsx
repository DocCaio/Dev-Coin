function Form() {
    function cadastro(e) {
        e.preventDefault()
        console.log('cadastrou o usuário')
    }
   
 return (
    <div>
        <h2>Cadastro:</h2>
        <form onSubmit={cadastro}>
            <div>
                <input type="text" placeholder="Digite o sue nome"/>
            </div>
            <div>
                <input type="submit" value="Cadastro"/>
            </div>
        </form>
        
    </div>
 )
}

export default Form;
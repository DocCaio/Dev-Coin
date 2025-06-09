import { useState } from "react";

function Form() {
    function cadastro(e) {
        e.preventDefault()
        console.log(name)
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
    }

    const [name ,setName ] = useState()
    const [password ,setPassword] = useState()
   
 return (
    <div>
        <h2>Cadastro:</h2>
        <form onSubmit={cadastro}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input id="name" 
                name="name" 
                type="text" 
                placeholder="Digite o sue nome"
                onChange={(e) => setName(e.target.value)}
                
                />
            </div>
            <div>
                 <label htmlFor="password" name="password">Senha:</label>
                <input type="password"
                 placeholder="Digite a sua senha"
                 id="passward"
                 name="password"
                 onChange={(e) => setPassword(e.target.value)}
                 />
            </div>
            <div>
                <input type="submit" value="Cadastro"/>
            </div>
        </form>
        
    </div>
 )
}

export default Form;
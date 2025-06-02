function Pessoas({nome , idade , profissao, fotos}) {
    return (
        <div>
            <img src={fotos} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoas;




function Saldacao({nome}) {

 function gerarSaudacao(algumNome) {
  return`olá, ${algumNome}, tudo bem ?`

 }
  return (
    <>
        {nome && <p>{gerarSaudacao(nome)}</p>}
    
    </>
  );
}

export default Saldacao;

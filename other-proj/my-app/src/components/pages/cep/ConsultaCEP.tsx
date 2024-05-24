import { useEffect, useState } from "react"

// EXERCICIOS
//1 - consulta api (CORS)
//2 - EXIBIR NO HTML A LISTA DE PRODUTOS


function ConsultaCEP() {
  const [rua, setRua] = useState("")
  // evento de carregamento do componente, param(função, e array vazio)
  useEffect(
    ()=>{
    // func que executa na hora que esse componente for carregado
      
    fetch("https://viacep.com.br/ws/81270250/json/")
    .then((resposta) => 

      resposta.json()

    ).then((cep) => {

      console.log(cep)
      setRua(cep.logradouro)

    })

  }, [])
  return (
    <div>

      <h1>FUNCIONA !!!</h1>

      <p>
        {rua}
      </p>

    </div>
  );
}

export default ConsultaCEP;

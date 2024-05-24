import { useState } from "react";


function Soma() {
    const [contador, setContador] = useState(0);
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [soma, setSoma] = useState(0);

    function contar(){
        setContador(contador+1);
    }

    function somar(){
     //   console.log(result);
        setSoma(parseFloat(num1) + parseFloat(num2))
    }

    // function digitarN1(e : any){
    //     setNum1(e.target.value)
    // }

    // function digitarN2(e : any){
    //     setNum2(e.target.value)
    // }

  return (
    <center>
    <div>
        <h1>el somador</h1>

        <label>Number um</label>
        <input type="text" onChange={

            (e : any) => { // outro jeito de fazer p/ func pequena
            setNum1(e.target.value)

        }}/> <br />

        <label>Number dois</label>
        <input  type="text" onChange={

            (e : any) => {
            setNum2(e.target.value)}
        
        }/><br />

        <button onClick={contar}>contar</button>
        <button onClick={somar}>calcular</button>
        <p>
           Resultado da Soma: {soma}
        </p>

        <p>
           Resultado da Contagem: {contador}
        </p>
    </div>
    </center>
  );
}

export default Soma;

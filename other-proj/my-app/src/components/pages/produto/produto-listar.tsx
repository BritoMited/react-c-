import { useEffect, useState } from "react"
import { Endereco } from "../../../models/Endereco"
import { Produto } from "./Produto";

// EXERCICIOS
//1 - consulta api (CORS)
//2 - EXIBIR NO HTML A LISTA DE PRODUTOS

function ProdutoListar(){
    const[produtos, setProdutos] = useState<Produto[]>([]);
      useEffect(() => {
        carregarProdutos()
        cadastrarProdutos()
      }, []);
  
  
      function carregarProdutos(){
          //Fetch ou axios
          //fetch == buscar
          fetch("http://localhost:5225/api/produto/listar")
          .then((resposta) =>
              resposta.json()
          )
          .then((produtos : Produto[]) => {
            console.table(produtos);
            setProdutos(produtos);
          });
      }

      function cadastrarProdutos(){

        const produto : Produto = {
                nome: "fejao",
                descricao: "bão",
                valor: 100,
                quantidade: 1
        }
          //Fetch ou axios
          //fetch == buscar
          fetch("http://localhost:5225/api/produto/cadastrar")
          .then((resposta) =>
              resposta.json()
          )
          .then((produto : Produto) => {
            console.log(produto);
          });
      }
      return(
          
      
          <div>
              <h1>Listar Produtos</h1>
              <table border={5}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Descricao</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Criado Em</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(produto => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.descricao}</td>
                            <td>{produto.quantidade}</td>
                            <td>{produto.valor}</td>
                            <td>{produto.criadoEm}</td>
                        </tr>
                    ))}
                    
                </tbody>
              </table>
             
          </div>
  
         
      )
  }

export default ProdutoListar;

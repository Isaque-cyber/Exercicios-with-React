import { useState } from "react"
import "./App.css"
function App() {
  const [pessoas, setPessoas] = useState( [
    { id: 1, nome: "Dona Beth", idade: 72 },
    { id: 2, nome: "Dona Bela", idade: 76 },
    { id: 3, nome: "Dr Aurelio", idade: 75 },
    { id: 4, nome: "Dr Auzio", idade: 72 },
    { id: 5, nome: "Sansão", idade: 64 },
    { id: 6, nome: "Sarumano", idade: 68 },


  ])
  function cadastrar(){
    let pessoa = {
      id: Date.now(),
      nome: prompt("nome:"),
      idade: Number(prompt("Idade: ")),
    }
    console.log(pessoa);

    pessoas.push(pessoa);
    // pessoas.push(pessoa) nunca faça isso com useState
    setPessoas([pessoa, ...pessoas])

  }

  return (
    <div>
      <h1>Arrays</h1>
      <div className="formCadastro">
      <label htmlFor="name">Nome:</label>
      <input type="text" />

      <label htmlFor="name">Idade:</label>
      <input type="text" />

 


      <button onClick={cadastrar}>Cadastrar</button>
      </div>
      <div className="container-cards">
        {pessoas.map((pessoa) => (

          <div key={pessoa.id} className="card-pessoa">

            <h2>{pessoa.nome}</h2>

            <p>Idade: {pessoa.idade}</p>

          </div>


        ))}

      </div>





    </div>
  )
}

export default App

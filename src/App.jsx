
import { useState } from 'react';
import {FiSearch} from 'react-icons/fi' 
import "./style.css"
import api from './services/api'

function App() {
 
   const[input,setInput]=useState('')
   const[cep,setCep]=useState({})

 

   async function handleSearch() {
    //01310930/json/

    if (input==='') {
      alert("preencha algum CEP!")
    }
    try{
      const response= await api.get(`${input}/json`)
      console.log(response.data)
      setCep(response.data)
      setInput('')

    }
    catch{
alert("Ops erro ao buscar")
setInput('')
    }
   }
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>


      <div className="containerInput">
        <input type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
         name="" 
         id=""
         placeholder="Digite seu CEP " 
         />

         <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#fff'/>
         </button>

      </div>
      {Object.keys(cep).length>0 &&(
            <main className='main'>
              <h2>CEP: {cep.cep}</h2>

              <span>Rua:{cep.logradouro}</span>
              <span>Complemento:  {cep.complemento}</span>
              <span>Bairro: {cep.bairro} </span>
              <span>{cep.localidade}</span>
            </main>
      
      )}
     
    </div>
  );
}

export default App;

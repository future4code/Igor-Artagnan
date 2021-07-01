import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../../constantes/url'


function Clear() {
  
   const putClear = ()=>{
      axios.put(`${BASE_URL}/clear`) 
      
      .then((response)=>{
          console.log('certo',response)
          
          
      }) 
      
      .catch((error)=>{
          console.log('ERRO CLEAR',error.response)
      })
      
  }
 
    return (
        <div>
            <button onClick={putClear}> Limpar Matches</button>
        </div>
    )
}



export default Clear;

import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../../constantes/url'

function Clear() {
  
   const putClear = ()=>{
      axios.put(`${BASE_URL}/clear`) 
      
      .then((response)=>{
            
      }) 
      
      .catch((error)=>{
          alert(error.response)
      })
      
  }

    return (
        <div>
            <button onClick={putClear}> Limpar Matches</button>
        </div>
    )
}


export default Clear;

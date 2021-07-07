import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../../constantes/url'
import {ClearButton} from './styled'

function Clear() {
  
   const putClear = ()=>{
      axios.put(`${BASE_URL}/clear`) 
      
      .then((response)=>{}) 
      
      .catch((error)=>{
          alert(error.response)
      })
      
  }

    return (
        <div>
            <ClearButton onClick={putClear}> Limpar Matches</ClearButton>
        </div>
    )
}


export default Clear;

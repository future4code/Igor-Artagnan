import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../../constantes/url'


function Clear() {
  
/*   const putClear = ()=>{
      axios(`${BASE_URL}/clear`) 
      
      .then((response)=>{
          console.log(response)
          console.log('Clickei')
      }) 
      
      .catch((error)=>{
          alert(error)
      })
      
  }
 */
    return (
        <div>
            <button /* onClick={putClear} */> Limpar Matches</button>
        </div>
    )
}



export default Clear;

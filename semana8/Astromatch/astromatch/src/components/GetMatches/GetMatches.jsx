import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { BASE_URL } from '../../constantes/url'


function GetMatches(props) {

    const [arrayMatches, setArrayMatches] = useState([])

const getMatches = () =>{
    axios(`${BASE_URL}/matches`) 
    
    .then((response)=>{
        setArrayMatches(response.data)
    }) 
    
    .catch((error)=>{
        console.log(error)
    }) 
}
/* console.log('matches', arrayMatches) array ainda retornando vazio*/
    return (
        <div>
            <button onClick={props.renderMain}>Voltar</button>
            <h7>MATCHES</h7>
            
        </div>
    )
}



export default GetMatches;

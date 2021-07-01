import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { BASE_URL } from '../../constantes/url'


function GetMatches() {

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
console.log('matches', arrayMatches)
    return (
        <div>
            <button onClick={getMatches}>Visualizar Matches</button>
        </div>
    )
}



export default GetMatches;

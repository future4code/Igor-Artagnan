import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { BASE_URL } from '../../constantes/url'


function GetMatches(props) {

    const [arrayMatches, setArrayMatches] = useState([])

 useEffect(()=>{
    getMatches()
 }, [])

const getMatches = () =>{
    axios(`${BASE_URL}/matches`) 
    
    .then((response)=>{
        console.log(response)
        setArrayMatches(response.data.matches)
        
    }) 
    
    .catch((error)=>{
        console.log(error)
    }) 
}
console.log(arrayMatches)

     const mapedMatches = arrayMatches.map((profile)=>{
        return <div>
                {profile.name}
                {profile.bio}
                </div>
    }) 

    return (
        <div>
            <button onClick={props.renderMain}>Voltar</button>
            <h4>MATCHES</h4>
            { mapedMatches }
            
        </div>
    )
}



export default GetMatches;

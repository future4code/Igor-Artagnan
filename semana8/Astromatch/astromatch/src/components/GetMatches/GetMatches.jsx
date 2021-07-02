import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { BASE_URL } from '../../constantes/url'
import {Image, MatchContainer} from './styled'

function GetMatches(props) {

    const [arrayMatches, setArrayMatches] = useState([])

 useEffect(()=>{
    getMatches()
 }, [])

const getMatches = () =>{
    axios(`${BASE_URL}/matches`) 
    
    .then((response)=>{
        setArrayMatches(response.data.matches)
        
    }) 
    
    .catch((error)=>{
        alert(error)
    }) 
}
console.log(arrayMatches)

     const mapedMatches = arrayMatches.map((profile)=>{
        return <MatchContainer key={profile.id}>
                <Image src={profile.photo}/>
                {profile.name}
                </MatchContainer>
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

import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { BASE_URL } from '../../constantes/url'
import {Image, MatchContainer, StyledName} from './styled'

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
                <StyledName>{profile.name}</StyledName>
                </MatchContainer>
    }) 

    return (
        <div>
            
            <button onClick={props.renderMain}>Voltar</button>
           <a> { mapedMatches } </a>
                
        </div>
    )
}



export default GetMatches;

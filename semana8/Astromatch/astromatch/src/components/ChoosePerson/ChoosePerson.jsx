import axios from 'axios'
import React, { useState } from 'react'
/* import { BASE_URL } from '../../constantes/url' */
import { Container } from './styled'


function ChoosePerson(props) {
   /*  const [id, setId] = useState('')

    axios.post(`${BASE_URL}/choose-person`)
    .then(()=>{

    })

    .catch(()=>{
        
    }) */


    /* const onClickTrue = () => {
        console.log('true')
    }

    const onClickFalse = () => {
        console.log('false')
    } */

    return (
        <Container>
            <button onClick={props.changeProfile}>X</button>
            <button onClick={props.changeProfile}>V</button>

        </Container>
    )
}



export default ChoosePerson;

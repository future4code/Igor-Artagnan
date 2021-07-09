import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { MainContainer, StyledButton } from './styled'
import {useProtectedPage} from '../../hooks/ProtectedPage'
import { useHistory, useParams } from 'react-router-dom'



export default function TripDetailsPage() {

    const [arrayOfTrip, setTrip] = useState([])
    const [arrayOfCandidates, setArrayOfCandidates] = useState([])
    
    

    const history = useHistory()
    const params = useParams()

    const goBack = () => {
        history.goBack()
    }

    useProtectedPage()

    useEffect(() => {

        const token = localStorage.getItem('token')

        axios.get(`${BASE_URL}/trip/${params.id}`, {
            headers: {
                auth: token
            }
        }) 
            .then((response) => {
                setTrip(response.data.trip)
                setArrayOfCandidates(response.data.trip.candidates)
            })
            .catch((error) => {
                console.log('Erro', error)
            })
    }, [])

    console.log(arrayOfCandidates)

    const mapedCandidates = arrayOfCandidates.map((candi)=>{
        return <div key={candi.id}>
            {candi.name}

        </div>
    })

     const {name, description, planet, durationInDays, date} = arrayOfTrip
    return (
       
       <MainContainer>
            <h1>{name}</h1>
            <h3>Título: {name}</h3>
            <h3>Descrição: {description}</h3>
            <h3>Planeta: {planet}</h3>
            <h3>Duração: {durationInDays}</h3>
            <h3>Data: {date}</h3>

             <h1>Candidatos Pendentes</h1> 
            
             {mapedCandidates}



            <StyledButton onClick={goBack}>Voltar</StyledButton>
        </MainContainer>
    )
}
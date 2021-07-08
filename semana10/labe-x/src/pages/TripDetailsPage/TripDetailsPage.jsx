import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { MainContainer, StyledButton } from './styled'
import {useProtectedPage} from '../../hooks/ProtectedPage'



export default function TripDetailsPage() {

    const [arrayOfTrip, setTrip] = useState([])

    useProtectedPage()

    useEffect(() => {

        const token = localStorage.getItem('token')

        axios.get(`${BASE_URL}/trip/jn5pZd8l9WsXpUDHTn5o`, {
            headers: {
                auth: token
            }
        }) // <= id fixo para teste
            .then((response) => {
                setTrip(response.data.trip)
            })
            .catch((error) => {
                console.log('Erro', error.response.data.message)
            })
    }, [])

     const {name, description, planet, durationInDays, date} = arrayOfTrip
    return (
        <MainContainer>
            <h1>{name}</h1>
            <h3>Título: {name}</h3>
            <h3>Descrição: {description}</h3>
            <h3>Planeta: {planet}</h3>
            <h3>Duração: {durationInDays}</h3>
            <h3>Data: {date}</h3>


            <StyledButton>Voltar</StyledButton>
        </MainContainer>
    )
}
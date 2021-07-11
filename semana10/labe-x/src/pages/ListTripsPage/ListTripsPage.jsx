import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { MainContainer, StyledButton, InfoDiv, ButtonsDiv, TripsDiv } from './styled'
import { BASE_URL } from '../../constants/url'

export default function ListTripsPage() {

    const [arrayOfTrips, setArrayOfTrips] = useState([])

    const history = useHistory()

    const renderMainPage = () => {
        history.push('/')
    }

    const renderApplicationFormPage = (id) => {
        history.push(`ApplicationFormPage/`)
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/trips`)
            .then((response) => {
                setArrayOfTrips(response.data.trips)
            })
            .catch((error) => {
                alert(error.response) 
            })
    }, [])

    const mapedTrips = arrayOfTrips.map((trip) => {
        return <TripsDiv key={trip.id}>
            <h1>{trip.name}</h1>
            <h3>Título: {trip.name}</h3>            
            <h3>Descrição: {trip.description}</h3>
            <h3>Planeta: {trip.planet}</h3>
            <h3>Duração: {trip.durationInDays}</h3>
            <h3>Data: {trip.date}</h3>

        </TripsDiv>

    })

    return (
        <MainContainer>
            <InfoDiv>
                <h1>Viagens Disponíveis</h1>
                <ButtonsDiv>
                    <StyledButton onClick={renderMainPage}>Voltar</StyledButton>
                    <StyledButton onClick={renderApplicationFormPage}>Inscreva-se</StyledButton>
                </ButtonsDiv>
            </InfoDiv>
            {mapedTrips}

        </MainContainer>
    )
}
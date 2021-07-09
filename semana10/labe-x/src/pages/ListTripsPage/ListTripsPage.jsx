import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { MainContainer, StyledButton, InfoDiv, ButtonsDiv } from './styled'
import { BASE_URL } from '../../constants/url'

export default function ListTripsPage() {
    
    const [arrayOfTrips, setArrayOfTrips] = useState([])
    
    const history = useHistory()

    const renderMainPage = () => {
        history.goBack()
    }

    const renderApplicationFormPage = () => {
        history.push("ApplicationFormPage")
    }

    useEffect(()=>{
        axios.get(`${BASE_URL}/trips`)
        .then((response)=>{
            setArrayOfTrips(response.data.trips)
        })
        .catch((error)=>{
            alert(error.response) // <= Alterar os alerts antes da versão final
        })
    }, [])


    

    const mapedTrips = arrayOfTrips.map((trip)=>{
        return <div key={trip.id}>
           <h1>{trip.name}</h1>
            <h3>Título: {trip.name}</h3>            {/* <= Estilizar cards*/}
            <h3>Descrição: {trip.description}</h3>
            <h3>Planeta: {trip.planet}</h3>
            <h3>Duração: {trip.durationInDays}</h3>
            <h3>Data: {trip.date}</h3>

        </div>
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
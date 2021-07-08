import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/ProtectedPage'
import { BASE_URL } from '../../constants/url'
import { MainContainer, StyledButton, ButtonsDiv } from './styled'



export default function AdminHomePage() {

    const [arrayOfTrips, setArrayOfTrips] = useState([])

    useProtectedPage()

    useEffect(() => {
        axios.get(`${BASE_URL}/trips`)
            .then((response) => {
                setArrayOfTrips(response.data.trips)
            })
            .catch((error) => {
                alert(error.response) // <= Alterar os alerts antes da versão final
            })
    }, [])



    const mapedTrips = arrayOfTrips.map((trip) => {
        return <div key={trip.id}>
            <h2>{trip.name}</h2>            {/* <= Estilizar cards*/}
            <button>Deletar</button>

        </div>
    })

    const history = useHistory()

    const goBack = () => {
        history.push('/')
    }

    const renderCreateTripPage = () => {
        history.push("CreateTripPage")
    }

    const renderLoginPage = () => {
        history.push("LoginPage")
    }

    return (
        <MainContainer>

            <ButtonsDiv>
                <StyledButton onClick={goBack}>Voltar</StyledButton>
                <StyledButton onClick={renderCreateTripPage}>Criar Viagem</StyledButton>
                <StyledButton onClick={renderLoginPage}>Logout</StyledButton>
            </ButtonsDiv>
            {mapedTrips}


        </MainContainer>
    )
}
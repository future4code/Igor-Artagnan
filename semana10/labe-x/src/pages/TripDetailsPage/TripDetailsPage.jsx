import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { MainContainer, StyledButton, DecisionButton, TripsDiv, CandidatesDiv, ApprovedDiv, ButtonDiv, GoBackDiv } from './styled'
import { useProtectedPage } from '../../hooks/ProtectedPage'
import { useHistory, useParams } from 'react-router-dom'



export default function TripDetailsPage() {

    const [arrayOfTrip, setTrip] = useState([])
    const [arrayOfCandidates, setArrayOfCandidates] = useState([])
    const [approvedCandidates, setApprovedCandidates] = useState([])
    const [approve] = useState(true)
    const [reject] = useState(false)

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
                setApprovedCandidates(response.data.trip.approved)
            })
            .catch((error) => {
                alert('Erro', error)
            })
    }, [arrayOfCandidates])


    const decideCandidateApprove = (candiId) => {

        const token = localStorage.getItem('token')

        const body = {
            approve: approve
        }

        axios.put(`${BASE_URL}/trips/${params.id}/candidates/${candiId}/decide`, body, {
            headers: {
                auth: token
            }
        }).then((response) => {
            alert(response)
        })
            .catch((error) => {
                alert(error)
            })
    }

    const decideCandidateReject = (candiId) => {

        const token = localStorage.getItem('token')

        const body = {
            approve: reject
        }

        axios.put(`${BASE_URL}/trips/${params.id}/candidates/${candiId}/decide`, body, {
            headers: {
                auth: token
            }
        }).then((response) => {
            alert(response)
        })
            .catch((error) => {
                alert(error)
            })
    }



    const mapedCandidates = arrayOfCandidates.map((candidate) => {
        return <CandidatesDiv key={candidate.id}>

            <h1>Candidatos Pendentes</h1>

            <h2>{candidate.name}</h2>
            <ButtonDiv>
                <DecisionButton onClick={() => decideCandidateApprove(candidate.id)}>Aceitar</DecisionButton>
                <DecisionButton onClick={() => decideCandidateReject(candidate.id)}>Negar</DecisionButton>
            </ButtonDiv>


        </CandidatesDiv>
    })

    const mapedApprovedCandidates = approvedCandidates.map((candidate) => {
        return <ApprovedDiv key={candidate.id}>

            <h1>Candidatos Aprovados</h1>

            <h2>{candidate.name}</h2>
        </ApprovedDiv>
    })


    const { name, description, planet, durationInDays, date } = arrayOfTrip
    return (

        <MainContainer>
            <TripsDiv>
                <h1>{name}</h1>
                <h3>Título: {name}</h3>
                <h3>Descrição: {description}</h3>
                <h3>Planeta: {planet}</h3>
                <h3>Duração: {durationInDays}</h3>
                <h3>Data: {date}</h3>
            </TripsDiv>



            {mapedCandidates}



            {mapedApprovedCandidates}


            <GoBackDiv>
                <StyledButton onClick={goBack}>Voltar</StyledButton>
            </GoBackDiv>

        </MainContainer>
    )
}
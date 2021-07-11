import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { MainContainer, StyledButton } from './styled'
import {useProtectedPage} from '../../hooks/ProtectedPage'
import { useHistory, useParams } from 'react-router-dom'



export default function TripDetailsPage() {

    const [arrayOfTrip, setTrip] = useState([])
    const [arrayOfCandidates, setArrayOfCandidates] = useState([])
    const [approvedCandidates, setApprovedCandidates] = useState([])
    const [approve, setApprove] = useState(true)
    const [reject, setReject] = useState(false)

    
    

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
                console.log('Erro', error)
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
        }) .then((response)=>{
            console.log(response)
        })
            .catch((error)=>{
                console.log(error)
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
        }) .then((response)=>{
            console.log(response)
        })
            .catch((error)=>{
                console.log(error)
            })
    }

    console.log('APROVADOS',approvedCandidates)
    
   

    const mapedCandidates = arrayOfCandidates.map((candidate)=>{
        return <div key={candidate.id}>
            {candidate.name}
            <button  onClick={()=> decideCandidateApprove(candidate.id)}>Aceitar</button>
            <button  onClick={()=> decideCandidateReject(candidate.id)}>Negar</button>


        </div>
    })

    const mapedApprovedCandidates = approvedCandidates.map((candidate)=>{
        return <div key={candidate.id}>
            {candidate.name}
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

             <h1>Candidatos Aprovados</h1>

             {mapedApprovedCandidates}



            <StyledButton onClick={goBack}>Voltar</StyledButton>
        </MainContainer>
    )
}
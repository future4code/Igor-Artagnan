import React from 'react'
import {useHistory} from 'react-router-dom'
import { MainContainer } from './styled'

export default function CreateTripPage() {
    const history = useHistory()

    const goBack = () =>{
        history.goBack()
    }
    return (
        <MainContainer>
            CreateTripPage
            <button onClick={goBack}>Voltar</button>
            <button>Criar</button>
        </MainContainer>
    )
}
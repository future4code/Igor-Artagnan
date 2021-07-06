import React from 'react'
import { MainContainer, FormDiv } from './styled'
import {useHistory} from 'react-router-dom'

export default function ApplicationFormPage() {
    const history = useHistory()

    const goBack = () =>{
        history.goBack()
    }

    return (
        <MainContainer>
            <h1>Cadidate-se para uma viagem</h1>
            <FormDiv>
                <select>
                    <option>exemplo</option>
                    <option>exemplo</option>
                    <option>exemplo</option>
                </select>
                <input placeholder={'Nome'} />
                <input placeholder={'Idade'} />
                <input placeholder={'Texto de candidatura'} />
                <input placeholder={'Profissão'} />
                <select>
                    <option>exemplo</option>
                    <option>exemplo</option>
                    <option>exemplo</option>
                </select>

            </FormDiv>
            <button onClick={goBack}>Voltar</button>
            <button>Enviar</button>


        </MainContainer>
    )
}
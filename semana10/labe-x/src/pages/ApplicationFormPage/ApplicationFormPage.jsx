import React from 'react'
import { MainContainer, FormDiv } from './styled'

export default function ApplicationFormPage() {
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
            <button>Voltar</button>
            <button>Enviar</button>


        </MainContainer>
    )
}
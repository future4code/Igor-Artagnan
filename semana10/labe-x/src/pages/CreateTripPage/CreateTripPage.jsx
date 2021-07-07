import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { MainContainer, ButtonsDiv, StyledButton, InfoDiv, FormDiv, StyledInput, StyledSelect } from './styled'

export default function CreateTripPage() {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [planet, setPlanet] = useState("")
    const [durationInDays, setDurationInDays] = useState("")
    const [date, setDate] = useState("")

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const onChangePlanet = (e) => {
        setPlanet(e.target.value)
    }

    const onChangeDurationInDays = (e) => {
        setDurationInDays(e.target.value)
    }

    const onChangeDate = (e) => {
        setDate(e.target.value)
    }



    return (
        <MainContainer>
            <InfoDiv>
                <h1>Cadastrar viagem</h1>
                <FormDiv>
                    <StyledInput
                        placeholder={"Título"}
                        onChange={onChangeName}
                    />
                    <StyledSelect
                        onChange={onChangePlanet}
                    >
                        <option>Escolha um Planeta</option>
                        <option>Exemplo</option>
                        <option>Exemplo</option>
                    </StyledSelect>
                    <StyledInput
                        type="date"
                        onChange={onChangeDate}
                    />
                    <StyledInput
                        placeholder={"Descrição"}
                        onChange={onChangeDescription}
                    />
                    <StyledInput
                        placeholder={"Duração em dias"}
                        onChange={onChangeDurationInDays}
                    />
                </FormDiv>

                <ButtonsDiv>
                    <StyledButton onClick={goBack}>Voltar</StyledButton>
                    <StyledButton>Criar</StyledButton>
                </ButtonsDiv>
            </InfoDiv>
        </MainContainer>
    )
}
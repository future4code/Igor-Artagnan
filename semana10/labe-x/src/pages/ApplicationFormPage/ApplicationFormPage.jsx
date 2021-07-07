import React, {useState} from 'react'
import { MainContainer, FormDiv, InfoDiv, StyledButton, ButtonsDiv, StyledInput, StyledSelect } from './styled'
import { useHistory } from 'react-router-dom'

export default function ApplicationFormPage() {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const [name, setName] = useState("")
    const [age, setAge] = useState("") 
    const [applicationText, setApplicationText ] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")
    
    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeAge = (e) => {
        setAge(e.target.value)
    }

    const onChangeApplicationText = (e) => {
        setApplicationText(e.target.value)
    }

    const onChangeProfession = (e) => {
        setProfession(e.target.value)
    }

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    console.log(name, age, applicationText, profession)

    return (
        <MainContainer>
            <InfoDiv>
                <h1>Cadidate-se para uma viagem</h1>
                <FormDiv>
                    <StyledSelect>
                        <option>exemplo</option>
                        <option>exemplo</option>
                        <option>exemplo</option>
                    </StyledSelect>
                    <StyledInput 
                    placeholder={'Nome'} 
                    value={name}
                    onChange={onChangeName}
                    />
                    <StyledInput 
                    placeholder={'Idade'} 
                    value={age}
                    onChange={onChangeAge}

                    />
                    <StyledInput 
                    placeholder={'Texto de candidatura'} 
                    value={applicationText}
                    onChange={onChangeApplicationText}
                    />
                    <StyledInput 
                    placeholder={'Profissão'} 
                    value={profession}
                    onChange={onChangeProfession}

                    />
                    <StyledSelect
                    value={country}        //Verificar onChange do select
                    onChange={onChangeCountry}
                    
                    >
                        <option>exemplo</option>
                        <option>exemplo</option>
                        <option>exemplo</option>
                    </StyledSelect>

                </FormDiv>
                <ButtonsDiv>
                    <StyledButton onClick={goBack}>Voltar</StyledButton>
                    <StyledButton>Enviar</StyledButton>
                </ButtonsDiv>

            </InfoDiv>
        </MainContainer>
    )
}
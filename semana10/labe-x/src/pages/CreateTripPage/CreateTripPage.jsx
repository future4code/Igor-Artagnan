import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/ProtectedPage'
import { BASE_URL } from '../../constants/url'
import useForm from '../../hooks/UseForm'
import { MainContainer, ButtonsDiv, StyledButton, InfoDiv, FormDiv, StyledInput, StyledSelect } from './styled'

export default function CreateTripPage() {

    useProtectedPage()

    const history = useHistory()

    const goBack = () => {
        history.push("/AdminHomePage")
    }

    const { form, onChange, cleanFields } = useForm({ name: '', description: '', planet: '', durationInDays: '', date: '' })

    console.log(form)

    const CreateTrip = (event) => {

        event.preventDefault()
        
        const token = localStorage.getItem('token')
        
        axios.post(`${BASE_URL}/trips`, {
            headers: {
                auth: token
            }
        }, form)

            .them((response) => {
                console.log(response)
                /* cleanFields() */

            })
            .catch((error) => {
                console.log(error.response)

            })
    }



    return (
        <MainContainer>
            <InfoDiv>
                <h1>Cadastrar viagem</h1>
                <form>
                    <FormDiv onSubmit={CreateTrip}>  {/* Não acontece nada no clicar do botão */}

                        <StyledInput
                            name={'name'}
                            value={form.name}
                            placeholder={"Título"}
                            onChange={onChange}
                            pattern={"^.{5,}"}
                            title={"O nome deve ter no mínimo 5 letras"}
                            required
                        />
                        <StyledSelect
                            name={'planet'}
                            onChange={onChange}
                            value={form.planet}
                            required
                        >
                            <option>Escolha um Planeta</option>
                            <option>Mercúrio</option>
                            <option>Vênus</option>
                            <option>Marte</option>
                            <option>Júpiter</option>
                            <option>Saturno</option>
                            <option>Urano</option>
                            <option>Netuno</option>
                            <option>Plutão</option>

                        </StyledSelect>
                        <StyledInput
                            name={'date'}
                            value={form.date}    //procurar regex que impede que a data do dia corrente seja escolhida
                            type="date"
                            onChange={onChange}
                            required
                        />
                        <StyledInput
                            name={'description'}
                            value={form.description}
                            placeholder={"Descrição"}
                            onChange={onChange}
                            pattern={"^.{30,}"}
                            title={"A descrição deve conter no mínimo 30 caracteres"}
                            required
                        />
                        <StyledInput
                            name={'durationInDays'}
                            value={form.durationInDays}
                            placeholder={"Duração em dias"}
                            onChange={onChange}
                            type={'number'}
                            min={50}
                            required
                        />

                    </FormDiv>

                    <ButtonsDiv>
                        <StyledButton onClick={goBack}>Voltar</StyledButton>
                        <StyledButton>Criar</StyledButton>
                    </ButtonsDiv>
                </form>
            </InfoDiv>
        </MainContainer>
    )
}
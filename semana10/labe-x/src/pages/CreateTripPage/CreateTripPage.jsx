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


    const createTrip = (event) => {
        const dateSplited = form.date.split('-')

        const newDate = `${dateSplited[2]}/${dateSplited[1]}/${dateSplited[0]}`

        event.preventDefault()
        const body = { ...form, date: newDate }
        const token = localStorage.getItem('token')
        const header = {
            headers: {
                auth: token
            }
        }
        axios.post(`${BASE_URL}/trips`, body, header)

            .then((response) => {

                console.log(response)
                alert("Viagem criada com sucesso!")
                cleanFields()


            })
            .catch((error) => {
                console.log(error.response)

            })
    }

    return (
        <MainContainer>
            <InfoDiv>
                <h1>Cadastrar viagem</h1>
                <form onSubmit={createTrip}>
                    <FormDiv>

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
                        <StyledButton type={"submit"}>Criar</StyledButton>
                    </ButtonsDiv>
                </form>
            </InfoDiv>
        </MainContainer>
    )
}
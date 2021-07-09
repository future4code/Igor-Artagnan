import React from 'react'
import useForm from '../../hooks/UseForm'
import { useHistory, /* useParams  */} from 'react-router-dom'
import { BASE_URL } from '../../constants/url'
import { MainContainer, FormDiv, InfoDiv, StyledButton, ButtonsDiv, StyledInput, StyledSelect } from './styled'
import axios from 'axios'

export default function ApplicationFormPage() {
    const history = useHistory()
    /* const params = useParams() */

    const goBack = () => {
        history.goBack()
    }

    const { form, onChange, cleanFields } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })

    /* console.log(form) */
   /*  console.log(params) */

   const applyToTrip = () =>{
       axios.post(`${BASE_URL}/trips/${"aqui vai o id"}/apply`)
       .then(()=>{})
       .catch(()=>{})
   }

    return (
        <MainContainer>
            <form /* onSubmit={applyToTrip} */>
                <InfoDiv>
                    <h1>Cadidate-se para uma viagem</h1>
                    <FormDiv>
                        <StyledSelect>
                            <option>exemplo</option>
                            <option>exemplo</option>
                            <option>exemplo</option>
                        </StyledSelect>
                        <StyledInput
                            name={"name"}
                            placeholder={'Nome'}
                            value={form.name}
                            onChange={onChange}
                            pattern={"^.{3,}"}
                            title={"O nome deve ter no mínimo 3 letras"}
                            required
                        />
                        <StyledInput
                            name={"age"}
                            placeholder={'Idade'}
                            value={form.age}
                            onChange={onChange}
                            type={'number'}
                            min={18}
                            required
                        />
                        <StyledInput
                            name={"applicationText"}
                            placeholder={'Texto de candidatura'}
                            value={form.applicationText}
                            onChange={onChange}
                            pattern={"^.{30,}"}
                            title={"O texto deve ter no mínimo 30 caracteres"}
                            required
                        />
                        <StyledInput
                            name={"profession"}
                            placeholder={'Profissão'}
                            value={form.profession}
                            onChange={onChange}
                            pattern={"^.{10,}"}
                            title={"A profissão deve ter no mínimo 10 caracteres"}
                            required

                        />
                        <StyledSelect
                            name={"country"}
                            value={form.country}
                            onChange={onChange}
                            required
                        >
                            <option>Escolha um país</option>
                            <option>Brasil</option>
                            <option>Estados Unidos</option>
                            <option>África do Sul</option>
                            <option>Russia</option>
                            <option>Chile</option>
                            <option>China</option>

                        </StyledSelect>

                    </FormDiv>
                    <ButtonsDiv>
                        <StyledButton onClick={goBack}>Voltar</StyledButton>
                        <StyledButton>Enviar</StyledButton>
                    </ButtonsDiv>

                </InfoDiv>
            </form>
        </MainContainer>
    )
}
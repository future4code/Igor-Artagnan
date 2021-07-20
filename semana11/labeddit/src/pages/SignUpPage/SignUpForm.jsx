import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm'

import { MainContainer, InputsContainer } from './styled'

const SignUpForm = () => {

    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })


    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)

    }

    return <MainContainer>


        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    label="Nome"
                    fullWidth
                    margin={'dense'}
                    required
                />

                <TextField
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    label="Email"
                    fullWidth
                    margin={'dense'}
                    required
                />

                <TextField
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    label="Senha"
                    type="password"
                    fullWidth
                    margin={'dense'}
                    required
                />
                <Button
                    type={'submit'}
                    variant="contained"
                    color="primary"
                    disableElevation
                    fullWidth
                >
                    Fazer cadastro
       </Button>
            </form>
        </InputsContainer>

    </MainContainer>
}

export default SignUpForm
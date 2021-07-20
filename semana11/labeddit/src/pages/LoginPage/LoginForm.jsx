import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import { MainContainer, InputsContainer } from './styled'

const LoginForm = () => {

    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history)
    }



    return <MainContainer>


        <InputsContainer>
            <form onSubmit={onSubmitForm}>
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
                    Login
       </Button>
            </form>
        </InputsContainer>

    </MainContainer>
}

export default LoginForm
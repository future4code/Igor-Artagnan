import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { MainContainer, InputsContainer } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { signUp } from '../../services/user';

const SignUpForm = () => {

    const history = useHistory()

    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })

    useUnprotectedPage()


    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history)

    }

    return <MainContainer>


        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={'username'}
                    value={form.username}
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
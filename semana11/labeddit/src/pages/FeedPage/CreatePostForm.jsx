import React from 'react';
import useForm from '../../hooks/useForm'
import { createPost } from '../../services/create'
import { FormContainer } from './styled'
import TextField from '@material-ui/core/TextField';



const CreatePostForm = () => {

    const [form, onChange, clear] = useForm({ title: "", body: "" })



    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form)
        clear()

    }


    return <FormContainer>
    <form onSubmit={onSubmitForm}>

        <TextField
            name={'title'}
            value={form.title}
            onChange={onChange}
            label={"Titulo"}
            placeholder={'Título'}
            multiline
            required
        />

        <TextField
            name={'body'}
            value={form.body}
            onChange={onChange}
            label={"Post"}
            placeholder={'Post'}
            margin={'dense'}
            required

        />

        <button type={'submit'}>Criar post</button>

    </form>
    </FormContainer>
}

export default CreatePostForm
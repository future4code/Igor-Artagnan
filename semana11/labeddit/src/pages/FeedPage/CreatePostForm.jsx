import React from 'react';
import useForm from '../../hooks/useForm'
import { createPost } from '../../services/create'


const CreatePostForm = () => {

    const [form, onChange, clear] = useForm({ title: "", body: "" })



    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form)
        clear()

    }


    return <form onSubmit={onSubmitForm}>

        <input
            name={'title'}
            value={form.title}
            onChange={onChange}
            label={"Titulo"}
            placeholder={'Título'}
            required
        />

        <input
            name={'body'}
            value={form.body}
            onChange={onChange}
            label={"Post"}
            placeholder={'Post'}
            required

        />

        <button type={'submit'}>Criar post</button>

    </form>
}

export default CreatePostForm
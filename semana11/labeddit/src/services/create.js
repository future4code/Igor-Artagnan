import axios from 'axios'
import { BASE_URL } from '../constants/url'


export const createPost = (body, clear) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            clear()
            console.log('Post criado com sucesso', res)
        })
        .catch((err) => {
            console.log('ERRO', err.response.data)

        })

}   //ESTÁ ENTRANDO NO CONSOLE LOG DE ERRO MESMO COM A REQUISIÇÃO SENDO FEITA COM SUCESSO

export const createComment = (id, body, clear) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            clear()
            console.log('Comentário adicionado com sucesso', res)
        })
        .catch((err) => {
            console.log('ERRO', err.response.data)
        })
}

export const createPostVote = (id, body) => {
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            console.log('Sucesso', res)
        })
        .catch((err) => {
            console.log('Erro', err.response.data)
        })
}

export const createCommentVote = (id, body) => {
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            console.log('Sucesso', res)
        })
        .catch((err) => {
            console.log('Erro', err.response.data)
        })
}


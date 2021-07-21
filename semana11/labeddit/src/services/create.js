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
            console.log('ERRO', err.response)

        })

}   //ESTÁ ENTRANDO NO CONSOLE LOG DE ERRO MESMO COM A REQUISIÇÃO SENDO FEITA COM SUCESSO

export const creatComment = (id, body, clear) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res)=>{
            clear()
            console.log('Comentário adicionado com sucesso', res)
        })
        .catch((err)=>{
            console.log('ERRO', err)
        })
}
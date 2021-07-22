import axios from 'axios'
import { BASE_URL } from '../constants/url'

export const deletePostVote = (id, body) => {
    axios.delete(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }).then((res) => {
        console.log('Sucesso', res)
    }).catch((err) => {
        console.log('Erro', err.response.data)
    })

}

export const deleteCommentVote = (id, body) => {
    axios.delete(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }).then((res) => {
        console.log('Sucesso', res)
    }).catch((err) => {
        console.log('Erro', err.response.data)
    })

}
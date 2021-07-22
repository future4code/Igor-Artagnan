import axios from 'axios'
import { BASE_URL } from '../constants/url'

export const changePostVote = (id, body) => {
    axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
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

export const changeCommentVote = (id, body) => {
    axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
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
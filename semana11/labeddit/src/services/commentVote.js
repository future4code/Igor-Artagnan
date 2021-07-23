import axios from 'axios'
import { BASE_URL } from '../constants/url'

export const commentVote = (id, body, userVote) => {

    if (userVote === null) {

        axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }) .then((res) => {
                console.log('Sucesso', res)
            }) .catch((err) => {
                console.log('Erro', err.response.data)
            })

    } else if (userVote === value) {

        axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
                console.log('Sucesso', res)
            }).catch((err) => {
                console.log('Erro', err.response.data.message)
            })

    } else {

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
}
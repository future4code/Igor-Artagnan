import axios from 'axios'
import { BASE_URL } from '../constants/url'

export const commentVote = (id, direction, userVote) => {

    const body = {
        direction: direction
    }

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

    } else  {

        axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
                console.log('Sucesso', res)
            }).catch((err) => {
                console.log('Erro', err.response.data.message)
            })

}}
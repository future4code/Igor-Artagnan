import axios from 'axios'
import { BASE_URL } from '../constants/url'

export const postVote = (id, direction, userVote) => {

    const body = {
        direction: direction
    }
    console.log(direction)
    
    if (userVote === null) {
        axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            console.log('Sucesso create', res)
        }).catch((err) => {
            console.log('Erro', err.response.data)
        })

    } else {

        axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            console.log('Sucesso change', res)
        }).catch((err) => {
            console.log('Erro', err.response.data.message)
        })
    } /* else {

        axios.delete(`${BASE_URL}/posts/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            console.log('Sucesso', res)
        }).catch((err) => {
            console.log('Erro', err.response.data)
        })
    } */
}

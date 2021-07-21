import axios from 'axios'
import { BASE_URL } from '../constants/url'

export const createPost = (body, clear) => {
    axios.post(`${BASE_URL}/posts`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
        })
        .catch((err) => {
            console.log('erro', err)

        })

}
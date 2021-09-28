import axios from 'axios'
import BASE_URL from '../constants/Url'
import KEY from '../constants/Key'

export const searchVideo = (setData) => {
    axios.get(`${BASE_URL}search?part=id,snippet&q=${search}&key=${KEY}`)

        .then((res) => {
            setData(res.data)

        })

        .catch((err) => {
            console.log(err)
        })
}
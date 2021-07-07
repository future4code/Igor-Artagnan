import React, { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { MainContainer } from './styled'
import { useHistory } from 'react-router'


 const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === null) {
            console.log('Não está logado')
            history.push("/LoginPage")
        }
    }, [])
} 

export default function TripDetailsPage() {

     useProtectedPage() 


    useEffect(() => {


        const token = localStorage.getItem('token')

        axios.get(`${BASE_URL}/trip/jn5pZd8l9WsXpUDHTn5o`, {
            headers: {
                auth: token
            }
        }) // <= id fixo para teste
            .then((response) => {
                console.log('sucesso', response.data)
            })
            .catch((error) => {
                console.log('Erro', error.response.data.message)
            })
    }, [])

    return (
        <MainContainer>
            {/* TripDetailsPage
            <button>Voltar</button> */}
        </MainContainer>
    )
}
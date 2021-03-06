import axios from 'axios'
import { addressInfo } from '../types'

export const getAddressInfo = async (
    zipCode: string
):Promise<addressInfo | null>=>{
    try {
        const response = await axios.get(
            `https://viacep.com.br/ws/${zipCode}/json/`
            )
            return {
                logradouro: response.data.logradouro,
                bairro: response.data.bairro,
                cidade: response.data.localidade,
                estado: response.data.uf
            }
        
    } catch (error) {
        return null
    }
}
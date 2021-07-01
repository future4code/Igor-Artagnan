import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../../constantes/url'
import axios from 'axios'
import ChoosePerson from '../ChoosePerson/ChoosePerson'
import { Image } from './styled'

function GetProfile() {

    const [profile, setProfile] = useState({})
    const [id, setId] = useState('')
    const [choice, setChoice] = useState()

    useEffect(() => {
        getProfileToChoose()
    }, [])


    const getProfileToChoose = () => {


        axios.get(`${BASE_URL}/person`)
            .then((response) => {
                setProfile(response.data.profile)


            })
            .catch((error) => {
                alert(error.data)

            })
    }

    const choosePerson = () => {

        const body = {
            id: id,
            choice: choice
        }

        axios.post(`${BASE_URL}/choose-person`, body)
            .then((response) => { })
            .catch((error) => { })
    }

    const onClickAccept = () => {

    }

    const onClickDecline = () => { }



    return (
        <div>
            <Image src={profile.photo} />
            <p>{profile.name}</p>
            <p>{profile.age}</p>
            <p>{profile.bio}</p>

            <button onClick={getProfileToChoose}>X</button>
            <button onClick={getProfileToChoose}>V</button>

        </div>
    )
}



export default GetProfile;

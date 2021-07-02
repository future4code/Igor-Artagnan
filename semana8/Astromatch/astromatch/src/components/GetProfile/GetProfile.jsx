import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../../constantes/url'
import axios from 'axios'
import { Image, MainContainer, InfoDiv } from './styled'

function GetProfile() {

    const [profile, setProfile] = useState({})

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

    const choosePerson = (choice) => {

        const body = {
            id: profile.id,
            choice: choice
        }
        console.log('body', body)
        axios.post(`${BASE_URL}/choose-person`, body)
            .then((response) => {
                getProfileToChoose()
            })
            .catch((error) => {
                alert(error.response)

            })
    }

    return (
        <MainContainer>
            <Image src={profile.photo} />
            <InfoDiv>
                <p>{profile.name}</p>
                <p>{profile.age}</p>
                <p>{profile.bio}</p>

            </InfoDiv>
            <div>
                <button onClick={() => choosePerson(false)}>X</button>
                <button onClick={() => choosePerson(true)}>V</button>
            </div>
        </MainContainer>

    )
}

export default GetProfile;

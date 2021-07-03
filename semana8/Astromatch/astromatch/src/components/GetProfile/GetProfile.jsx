import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../../constantes/url'
import axios from 'axios'
import { MainContainer, InfoDiv, ChooseButtonsDiv, StyledButtonAccept, StyledButtonDenit, Name, Bio } from './styled'
import styled from 'styled-components'

const ImgContainer = styled.div`
max-width: 400px;
height: 400px;
background-image: url(${({url})=>url});
background-repeat: no-repeat;
background-position: top center ;
background-size: cover;
display:flex;
align-items: flex-end;
`

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
            <ImgContainer url={profile.photo}>
                
                <InfoDiv>
                <Name>{profile.name}, {profile.age} anos</Name>
                <Bio>{profile.bio}</Bio>

            </InfoDiv>
            </ImgContainer>
            
            <ChooseButtonsDiv>
                <StyledButtonDenit onClick={() => choosePerson(false)}>X</StyledButtonDenit>
                <StyledButtonAccept onClick={() => choosePerson(true)}>V</StyledButtonAccept>
            </ChooseButtonsDiv>
        </MainContainer>

    )
}

export default GetProfile;

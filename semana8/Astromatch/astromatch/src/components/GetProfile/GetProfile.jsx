import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../../constantes/url'
import axios from 'axios'
import { Image } from './styled'

function GetProfile() {

    const [profile, setProfile] = useState({})
    
    useEffect(() => {
        getProfileToChoose()
    }, [])

    
    const getProfileToChoose = () => {

        axios.get(`${BASE_URL}/person`)
            .then((response) => {
                setProfile(response.data.profile)
                 /* console.log('PESSOA', response.data.profile)  */
                
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
        console.log('body',body)
        axios.post(`${BASE_URL}/choose-person`, body)
            .then((response) => {
               getProfileToChoose()
            })
            .catch((error) => { 
                alert(error.response)
                
            })
    } 

    return (
        <div>
             <Image src={profile.photo} />
            <p>{profile.name}</p>
            <p>{profile.age}</p>
            <p>{profile.bio}</p> 

            <button  onClick={() => choosePerson(false)}>X</button>
            <button onClick={() => choosePerson(true)}>V</button>
           
        </div>
    )
}

export default GetProfile;

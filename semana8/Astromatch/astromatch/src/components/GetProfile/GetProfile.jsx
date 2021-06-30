import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../../constantes/url'
import axios from 'axios'
import ChoosePerson from '../ChoosePerson/ChoosePerson'

function GetProfile() {

    const [profile, setProfile] = useState({})

    useEffect(()=>{
        getProfileToChoose()
    }, [])


    const getProfileToChoose = () =>{
        axios.get(`${BASE_URL}/person`)
        .then((response) => {
            setProfile(response.data.profile)

        })
        .catch((error) => {
            alert(error.data)

        })
    }
    


    return (
        <div>
             <p>{profile.name}</p>
            <p>{profile.age}</p>
            <p>{profile.bio}</p> 
            <ChoosePerson
            id={profile.id}
            changeProfile={getProfileToChoose}
            />
        </div>
    )
}



export default GetProfile;

import React, { useState } from 'react'
import { BASE_URL } from '../../constantes/url'
import axios from 'axios'
import ChoosePerson from '../ChoosePerson/ChoosePerson'

function GetProfile() {

    const [profile, setProfile] = useState({})

    axios.get(`${BASE_URL}/person`)
        .then((response) => {
            setProfile(response.data.profile)
            
        })
        .catch((error) => {
            alert(error.data)
        })


    return (
        <div>
            {/*   <p>{profile.name}</p>
           <p>{profile.age}</p>
           <p>{profile.bio}</p> */}
            <ChoosePerson id={profile.id}/> 
        </div>
    )
}



export default GetProfile;

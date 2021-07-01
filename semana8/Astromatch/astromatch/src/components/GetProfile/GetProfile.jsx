import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../../constantes/url'
import axios from 'axios'
import { Image } from './styled'

function GetProfile() {

    const [profile, setProfile] = useState({})
    const [id, setId] = useState('')
    const [choice, setChoice] = useState()

    useEffect(() => {
        getProfileToChoose()
    }, [choice])

    useEffect(()=>{
        choosePerson()
    },[choice])

    const getProfileToChoose = () => {


        axios.get(`${BASE_URL}/person`)
            .then((response) => {
                setProfile(response.data.profile)
                /* console.log('PESSOA', response.data.profile) */

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
            .then((response) => { 
                console.log('CHOOSE', response) //response.data.isMatch retorna seo match é true ou false
               
            })
            .catch((error) => { 
                alert(error)
            })
    }

    const onClickAccept = (id) => {
         setChoice(true)
         setId(id)  //está setando o ID correto do perfil que está renderizado na tela.
         /* console.log('id onclick', id) */
        
    }

    const onClickDecline = (id) => { 
         setChoice(false) 
        

    }



    return (
        <div>
            <Image src={profile.photo} />
            <p>{profile.name}</p>
            <p>{profile.age}</p>
            <p>{profile.bio}</p>

            <button  onClick={() => onClickDecline(profile.id)}>X</button>
            <button onClick={()=>onClickAccept(profile.id)}>V</button>
            

        </div>
    )
}



export default GetProfile;

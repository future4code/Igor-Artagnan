import React from 'react'
import GetProfile from '../GetProfile/GetProfile'
import {
    Container,

} from './styled'

function MainPage(props) {



    return (
        <Container>


            <button onClick={props.renderMatches}>Matches</button>

            <GetProfile />


        </Container>
    )
}



export default MainPage;

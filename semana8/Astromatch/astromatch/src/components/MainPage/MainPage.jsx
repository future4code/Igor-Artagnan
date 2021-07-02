import React from 'react'
import GetProfile from '../GetProfile/GetProfile'
import {
    Container,

} from './styled'

function MainPage(props) {

    return (
        <div>
            <button onClick={props.renderMatches}>Matches</button>
            <Container>

                <GetProfile />

            </Container>
        </div>
    )
}

export default MainPage;

import React from 'react'
import GetProfile from '../GetProfile/GetProfile'
import {
    Button,
    ButtonDiv,
    MainContainer

} from './styled'

function MainPage(props) {

    return (
        <MainContainer>
            
            <ButtonDiv>
               
                <Button onClick={props.renderMatches}>Matches</Button>
            
            </ButtonDiv>
            
            <GetProfile />

        </MainContainer>
    )
}

export default MainPage;

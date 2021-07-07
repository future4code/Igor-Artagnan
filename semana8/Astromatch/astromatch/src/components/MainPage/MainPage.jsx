import React from 'react'
import GetProfile from '../GetProfile/GetProfile'
import {
    Button,
    ButtonDiv,
    
} from './styled'

function MainPage(props) {

    return (
        <div>
            
            <ButtonDiv>
               
                <Button onClick={props.renderMatches}>Matches</Button>
            
            </ButtonDiv>
            
            <GetProfile />

        </div>
    )
}

export default MainPage;

import React from 'react'
import { CardDiv } from './styled'

const CommentsCard = (props) => {

    return <CardDiv onClick={props.onClick}>
        <h2> {props.username} </h2>
        <div>
            <p> {props.body} </p>
        </div>
        <div>
            <h5> {props.voteSum} </h5>

        </div>
    </CardDiv>
}

export default CommentsCard
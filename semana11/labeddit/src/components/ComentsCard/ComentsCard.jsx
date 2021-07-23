import React from 'react'
import { CardDiv } from './styled'

const CommentsCard = (props) => {

    return <CardDiv onClick={props.onClick}>
        <h2> {props.username} </h2>
        <div>
            <p> {props.body} </p>
        </div>
        <div>
            <button onClick={props.onClickUp}> Up</button>
            <h5> {props.voteSum ? props.voteSum : '0'} </h5>
            <button onClick={props.onClickDown}>Down</button>

        </div>
    </CardDiv>
}

export default CommentsCard
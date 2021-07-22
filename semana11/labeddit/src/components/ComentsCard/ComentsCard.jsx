import React from 'react'
import { CardDiv } from './styled'

const CommentsCard = (props) => {

    return <CardDiv onClick={props.onClick}>
        <h2> {props.username} </h2>
        <div>
            <p> {props.body} </p>
        </div>
        <div>
            <button onClick={props.onClickCreate}> Up</button>
            <h5> {props.voteSum} </h5>
            <button onClick={props.onClickChange}>Down</button>

        </div>
    </CardDiv>
}

export default CommentsCard
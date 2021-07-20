import React from 'react'
import {CardDiv} from './styled'

const PostCard = (props) => {

    return <CardDiv onClick={props.onClick}>
        <h2> {props.username} </h2>
        <div>
            <h3> {props.title} </h3>
            <p> {props.body} </p>
        </div>
        <div>
            <h5> {props.userVote} </h5>
            <h6>Comentarios </h6> <h6> {props.commentCount} </h6>
        </div>
    </CardDiv>
}

export default PostCard
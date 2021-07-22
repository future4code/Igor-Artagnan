import React from 'react'
import {CardDiv} from './styled'

const PostCard = (props) => {

    return <CardDiv>
        <h2> {props.username} </h2>
        <div onClick={props.onClick}>
            <h3> {props.title} </h3>
            <p> {props.body} </p>
        </div>
        <div>
            <button onClick={props.onClickCreate}>Upvote</button>
            <h5> {props.voteSum} </h5>
            <button onClick={props.onClickChange}>DownVote</button>

            <h6>Comentarios </h6> <h6> {props.commentCount} </h6>
        </div>
    </CardDiv>
}

export default PostCard
import React from 'react'

const PostCard = (props) => {

    return <div>
        <h2> {props.username} </h2>
        <div>
            <h3> {props.title} </h3>
            <p> {props.body} </p>
        </div>
        <div>
            <h5> {props.userVote} </h5>
            <h6>Comentarios </h6> <h6> {props.commentCount} </h6>
        </div>
    </div>
}

export default PostCard
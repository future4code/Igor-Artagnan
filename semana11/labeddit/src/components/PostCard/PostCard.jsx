import React from 'react'
import { CardDiv, IconsDiv, VoteDiv, CommentDiv } from './styled'
import { BiUpArrow, BiDownArrow, BiCommentDots } from 'react-icons/bi'

const PostCard = (props) => {

    return <CardDiv>
        <h2> {props.username} </h2>
        <div onClick={props.onClick}>
            <h3> {props.title} </h3>
            <p> {props.body} </p>
        </div>
        <IconsDiv>
            <VoteDiv>
                <BiUpArrow onClick={props.onClickUp} />
                <h5> {props.voteSum ? props.voteSum : '0'} </h5>
                <BiDownArrow onClick={props.onClickDown} />
            </VoteDiv>
            <CommentDiv>
                <BiCommentDots /> Comentários <h6> {props.commentCount} </h6>
            </CommentDiv>
        </IconsDiv>
    </CardDiv>
}

export default PostCard
import React from 'react'
import { CardDiv, IconsDiv, VoteDiv, CommentDiv, UserDiv, TitleDiv, BodyDiv } from './styled'
import { BiUpArrow, BiDownArrow, BiCommentDots } from 'react-icons/bi'

const PostCard = (props) => {

    return <CardDiv>
        <UserDiv>
            <h3> {props.username} </h3>
        </UserDiv>
        <div onClick={props.onClick}>
            <TitleDiv>
                <h1> {props.title} </h1>
            </TitleDiv>
            <BodyDiv>
                <h2> {props.body} </h2>
            </BodyDiv>
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
import React from 'react'
import { CardDiv, IconsDiv, VoteDiv, CommentDiv, UserDiv, TitleDiv, BodyDiv, Icone } from './styled'
import { BiUpArrow, BiDownArrow, BiCommentDots } from 'react-icons/bi'



const PostCard = (props) => {

    return <CardDiv>
        <UserDiv>
            <h3> <h6> Postado por: </h6> {props.username} </h3>
        </UserDiv>

        <TitleDiv>
            <h1> {props.title} </h1>
        </TitleDiv>
        <BodyDiv>
            <h2> {props.body} </h2>
        </BodyDiv>

        <IconsDiv>
            <VoteDiv>
                <Icone> <BiUpArrow onClick={props.onClickUp} /></Icone>
                <h5> {props.voteSum ? props.voteSum : '0'} </h5>
                <Icone>  <BiDownArrow onClick={props.onClickDown} /> </Icone>
            </VoteDiv>
            <CommentDiv>
                <Icone> <BiCommentDots onClick={props.onClick} /> </Icone>  <h5> Comentários {props.commentCount} </h5>
            </CommentDiv>
        </IconsDiv>
    </CardDiv>







}

export default PostCard
import React from 'react'
import { AiOutlineDislike, AiOutlineLike, AiOutlineEye, AiOutlineArrowLeft } from 'react-icons/ai'
import { Head, Thumbnail, Info, Views, Description, MainDiv } from './Styled'


const DetailedCard = (props) => {

    return <MainDiv>
        <Head>
            <AiOutlineArrowLeft />
            <button onClick={props.goBack}></button>
            <h1>{props.title}</h1>
        </Head>


        <Thumbnail>
            <img src={props.thumbnails}></img>
        </Thumbnail>
        <Info>
            <h4>{props.channelTitle}</h4>
            <h6>{props.likeCount}</h6>
            <AiOutlineLike />
            <h6>{props.dislikeCount}</h6>
            <AiOutlineDislike />

        </Info>
        <Description>
            {props.description}
        </Description>

        <Views>
            {props.viewCount}
            <AiOutlineEye />
        </Views>
    </MainDiv>

}

export default DetailedCard
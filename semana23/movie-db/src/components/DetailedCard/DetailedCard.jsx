import React from "react";
import { MainDiv, TitleDiv, OverviewDiv, VoteDiv, SiteDiv } from './Styled'
import { AiOutlineStar } from 'react-icons/ai'
import { GiWorld } from 'react-icons/gi'

const DetailedCard = (props) => {
    return <MainDiv>
        <div>
        <button onClick={props.onClick}>Voltar</button>
        </div>
        <TitleDiv>
            <h1>{props.name}</h1>
            <h3>({props.title})</h3>
        </TitleDiv>
        <OverviewDiv>
            <h4>Overview</h4>
            <h3>{props.overview}</h3>
        </OverviewDiv>
        <VoteDiv>
            <spam><AiOutlineStar /></spam>
            <h4>{props.vote_average}</h4>
        </VoteDiv>
        <SiteDiv>
            <spam><GiWorld /></spam>
            <a href={props.homepage}>Offcial Website</a>
        </SiteDiv>
    </MainDiv>
}

export default DetailedCard
import React from "react";
import { MainDiv, TitleDiv, OverviewDiv, HeaderImage, ButtonDiv } from './Styled'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

const DetailedCard = (props) => {
    return <MainDiv>
        <ButtonDiv>
            <button onClick={props.onClick}> <spam><BsFillArrowLeftSquareFill /></spam></button>
        </ButtonDiv>
        <HeaderImage background={props.background}>

        </HeaderImage>
        <TitleDiv>
            <h1>{props.name}</h1>
            <h3>({props.title})</h3>
        </TitleDiv>
        <OverviewDiv>
            <h3>{props.overview}</h3>
        </OverviewDiv>
    </MainDiv>
}

export default DetailedCard
import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { MainDiv, TitleDiv } from './Styled'

const MovieCard = (props) => {
  return <MainDiv>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          onClick={props.details}
          component="img"
          height="100%"
          image={`https://image.tmdb.org/t/p/original/${props.img}`}
          alt="Movie poster"
        />

      </CardActionArea>
    </Card>
  </MainDiv>
}

export default MovieCard
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MainDiv, TitleDiv } from './Styled'

const MovieCard = (props) => {
  return <MainDiv>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          onClick={props.details}
          component="img"
          height="450"
          image={`https://image.tmdb.org/t/p/original/${props.img}`}
          alt="Movie poster"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div"> */}
          <TitleDiv>
            {props.title}
          </TitleDiv>
          {/*  </Typography> */}

        </CardContent>
      </CardActionArea>
    </Card>
  </MainDiv>
}

export default MovieCard
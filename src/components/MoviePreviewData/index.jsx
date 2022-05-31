import React from 'react';
import { 
    Card, 
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { observer, inject } from "mobx-react"
import FavoriteButton from '../FavoriteButton';

import './styles.scss'

const MoviePreviewData = (props) => {
    const {
        movieData,
        modalModel:{setOpenedMovieModalObject}
    } = props
    return <Card 
        sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding:"10px", position: "relative"}}
        onClick={() => setOpenedMovieModalObject(movieData)} 
    >
        <div className='movieCardMedia'>
            <CardMedia
                component="img"       
                image = {movieData.img}
                alt="random"
                sx = {{height:"240px", objectFit:"cover"}}
            />
        </div>
        <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom>
                {movieData.name}
            </Typography>
            <Typography>
                {movieData.year}
            </Typography>
        </CardContent>
        <div className= "favoriteMovieIcon">
            <FavoriteButton movie = {movieData}/>
        </div>
    </Card>
}

export default inject(
    "modalModel",
)(observer(MoviePreviewData))
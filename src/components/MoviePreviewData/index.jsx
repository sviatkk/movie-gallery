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
        sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding:"10px" }}
        onClick={() => setOpenedMovieModalObject(movieData)}
    >
        <div className='movieCardMedia'>
            <CardMedia
                component="img"       
                image = {movieData.img}
                alt="random"
                sx = {{height:"240px", objectFit:"cover"}}
            />
            <div className= "favoriteMovieIcon">
                <FavoriteButton/>
            </div>
        </div>
        <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
                {movieData.name}
            </Typography>
            <Typography>
                {movieData.description}
            </Typography>
        </CardContent>
    </Card>
}

export default inject(
    "modalModel",
)(observer(MoviePreviewData))
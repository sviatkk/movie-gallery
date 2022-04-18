import React from 'react';
import { 
    Card, 
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import FavoriteButton from '../FavoriteButton';

import './styles.scss'

const MoviePreviewData = (props) => {
    return <Card 
        sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding:"10px" }}
    >
        <div className='movieCardMedia'>
            <CardMedia
                component="img"
                
                image="https://source.unsplash.com/random"
                alt="random"
            />
            <div className= "favoriteMovieIcon">
                <FavoriteButton/>
            </div>
        </div>
        <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
                Heading
            </Typography>
            <Typography>
                This is a media card. You can use this section to describe the
                content.
            </Typography>
        </CardContent>
    </Card>
}

export default MoviePreviewData
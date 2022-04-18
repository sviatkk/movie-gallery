import React from 'react';
import ImgBuilder from '../../res/images/imgBuilder';
import FavoriteButton from '../FavoriteButton';
import CloseIcon from '@mui/icons-material/Close';

import './styles.scss'

import { 
    Box,
    Typography,
    Modal,
    Rating,
    Grid,
    Button,
    IconButton
} from '@mui/material';

const MovieModal = () => {
  return <Modal open = {true} className = "movieModalContainer" >
    <Grid container spacing = {2} className='movieModalBoxContainer'>
        <Grid item xs = {4} className='leftModalContainer'>
            <img src = {ImgBuilder.dune} 
                style = {{
                    maxWidth:"100%"
                }}
            />
            <div style = {{display:"flex", alignItems: " center", marginTop:"16px"}}>
                <FavoriteButton/>
                <Typography sx = {{ml:2}}>
                    2011
                </Typography>
            </div>
            <div style = {{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "16px"
            }}>
                {["wordkkkkkkkkkkkkk 1", "word 2", "word 3", "word 4"].map((genre, index) => 
                    <Button 
                        sx = {{mr:1, mb:1}} 
                        variant = "contained"
                        size = "small"
                        key = {index}
                    >
                        {genre}
                    </Button>
                )}
            </div>
        </Grid>
        <Grid item xs = {8} className='rightModalContainer'>
            <Typography variant="h6" component="h2">
                Text in a modal
            </Typography>
            <Typography  sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Typography  sx={{ mt: 2, mb: 2 }}>
                Director: III IIII III
            </Typography>
            <div style = {{display:"flex", alignItems: " center"}}>
                <Typography sx = {{mr:2}}>
                    Stars: 
                </Typography>
                <Rating name="read-only" value={3} readOnly />
            </div>
            <div className='closeModalButton'>
                <CloseIcon/>
            </div>
        </Grid>
    </Grid>
</Modal>

}

export default MovieModal;
import React, { useEffect } from 'react';
import ImgBuilder from '../../res/images/imgBuilder';
import FavoriteButton from '../FavoriteButton';
import CloseIcon from '@mui/icons-material/Close';
import { observer, inject } from "mobx-react"

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

const MovieModal = (props) => {
    const {
        modalModel : {
            openedMovieModalObject,
            setOpenedMovieModalObject
        }
    } = props
    const handleCloseModal = () => {
        setOpenedMovieModalObject(null)
    }
    
    return openedMovieModalObject !== null ? 
        <Modal 
            open = {openedMovieModalObject !== null} className = "movieModalContainer" 
            onClose={handleCloseModal}
        >
            <Grid container spacing = {2} className='movieModalBoxContainer'>
                <Grid item xs = {4} className='leftModalContainer'>
                    <img src = {openedMovieModalObject.img} 
                        style = {{
                            maxWidth:"100%"
                        }}
                    />
                    <div style = {{display:"flex", alignItems: " center", marginTop:"16px"}}>
                        <FavoriteButton movie = {openedMovieModalObject}/>
                        <Typography sx = {{ml:2}}>
                            {openedMovieModalObject.year}
                        </Typography>
                    </div>
                    <div style = {{
                        display: "flex",
                        flexWrap: "wrap",
                        marginTop: "16px"
                    }}>
                        {openedMovieModalObject.genres.map((genre, index) => 
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
                        {openedMovieModalObject.name}
                    </Typography>
                    <Typography  sx={{ mt: 2 }}>
                        {openedMovieModalObject.description}
                    </Typography>
                    <Typography  sx={{ mt: 2, mb: 2 }}>
                        Director: {openedMovieModalObject.director}
                    </Typography>
                    <Typography sx = {{mr:2}}>
                        Stars: {openedMovieModalObject.starring.join(", ")} 
                    </Typography>
                    <div className='closeModalButton' onClick={handleCloseModal}>
                        <CloseIcon/>
                    </div>
                </Grid>
            </Grid>
        </Modal>: 
        null

}

export default inject(
    "modalModel",
)(observer(MovieModal));
import React, { useEffect } from 'react';
import MovieModal from '../../components/MovieModal';

import { 
    Box,
    Grid,
    Typography,
    Container,
    Modal
} from '@mui/material';
import BasicPage from '../BasicPage';
import { observer, inject } from "mobx-react"
import MoviePreviewData from '../../components/MoviePreviewData';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const MainPage = (props) => {
  const {
    moviesModel: {getMovies, movies}
  } = props

  useEffect(() => {
    getMovies()
  }, [])

  return <>
    <BasicPage>       
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {movies.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4}>
              <MoviePreviewData
                movieData = {movie}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </BasicPage>
    <MovieModal/>
  </>
}

export default inject(
  "moviesModel",
)(observer(MainPage));
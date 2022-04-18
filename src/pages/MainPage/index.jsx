import React from 'react';
import MovieModal from '../../components/MovieModal';

import { 
    Box,
    Grid,
    Typography,
    Container,
    Modal
} from '@mui/material';
import BasicPage from '../BasicPage';
import MoviePreviewData from '../../components/MoviePreviewData';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const MainPage = () => {
  return <>
    <BasicPage>       
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <MoviePreviewData/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </BasicPage>
    <MovieModal/>
  </>
}

export default MainPage;
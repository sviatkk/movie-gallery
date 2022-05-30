import React from "react"
import { Card, Typography } from "@mui/material"
import { Stack } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import { observer, inject } from "mobx-react"

import './styles.scss'

const FavoriteList = (props) => {	
	const {
		moviesModel:{
			movies,
			favoriteMoviesId,
			setFavoriteMoviesId
		}
	} = props

	const handleRemove = (id) =>{
		setFavoriteMoviesId(id)
	}

	return <Card sx = {{padding:"10px"}} className = "favoriteListContainer">
		<Typography variant = "h5" sx = {{textAlign:"center"}}>Favorite list</Typography>
		<ul>
			{favoriteMoviesId.map(movieId => {
				let movie = movies.find(movie => movie.id === movieId)
				return movie ? 
					<li key = {movieId}>
						&#9679;
						<span>{movie.name}</span> 
						<div onClick={()=>handleRemove(movieId)} style = {{cursor:"pointer"}}><CloseIcon /></div>
					</li>: 
					null
			})}
		</ul>
	</Card>
}

export default inject(
    "moviesModel",
)(observer(FavoriteList))
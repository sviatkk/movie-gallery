import React from "react"
import { Card, Typography } from "@mui/material"
import { Stack } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { observer, inject } from "mobx-react"

import './styles.scss'

const FavoriteList = (props) => {	
	const {
		moviesModel:{
			filteredMovies,
			favoriteMoviesId,
			setFavoriteMovies	
		}
	} = props

	const handleRemove = (movie) =>{
		setFavoriteMovies(movie.id)
	}
	let favoriteMovies = filteredMovies.filter(movie => favoriteMoviesId.includes(movie.id))
	return <Card sx = {{padding:"10px"}} className = "favoriteListContainer">
		<Typography variant = "h5" sx = {{textAlign:"center"}}>Favorite list</Typography>
		{favoriteMovies.length ? 
			<ul>
				{favoriteMovies.map(movie => {
					return <li key = {movie.id}>
						&#9679;
						<span>{movie.name}</span> 
						<div onClick={()=>handleRemove(movie)} className = "favoriteListItemRemove"><CloseIcon /></div>
					</li>
				})}
			</ul>:
			<div style = {{textAlign: "center"}}>No favorite movies at the moment</div>

		}
	</Card>
}

export default inject(
    "moviesModel",
)(observer(FavoriteList))
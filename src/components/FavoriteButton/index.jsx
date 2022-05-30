import React from "react"
import StarIcon from '@mui/icons-material/Star';
import { observer, inject } from "mobx-react"

const FavoriteButton = (props) => {
    const {
        movieId,
        moviesModel: {
            favoriteMoviesId,
            setFavoriteMoviesId
        }
    } = props
    const handleClick = (e) => {
        setFavoriteMoviesId(movieId)
        e.stopPropagation()
    }
    return <div onClick={handleClick} style = {{cursor:"pointer"}}>
        {favoriteMoviesId.includes(movieId) ? 
            <StarIcon sx = {{color:"orange"}}/> : 
            <StarIcon sx = {{color:"black"}}/>}
    </div>
}

export default inject(
    "moviesModel",
  )(observer(FavoriteButton))
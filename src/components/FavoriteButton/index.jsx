import React, {useEffect} from "react"
import StarIcon from '@mui/icons-material/Star';
import { observer, inject } from "mobx-react"

const FavoriteButton = (props) => {
  const {
    movieId,
    moviesModel: {
      setFavoriteMovies,
      filteredMovies,
      favoriteMoviesId
    }
  } = props

  const handleClick = (e) => {
    setFavoriteMovies(movieId)
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
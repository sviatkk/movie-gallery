import React, {useEffect} from "react"
import StarIcon from '@mui/icons-material/Star';
import { observer, inject } from "mobx-react"

const FavoriteButton = (props) => {
    const {
        movie,
        moviesModel: {
            setFavoriteMovies,
            filteredMovies
        }
    } = props

    const handleClick = (e) => {
        setFavoriteMovies(movie)
        e.stopPropagation()
    }
  
    return <div onClick={handleClick} style = {{cursor:"pointer"}}>
        {filteredMovies.some(item => (item.id === movie.id) && item.favorite) ? 
            <StarIcon sx = {{color:"orange"}}/> : 
            <StarIcon sx = {{color:"black"}}/>}
    </div>
}

export default inject(
    "moviesModel",
  )(observer(FavoriteButton))
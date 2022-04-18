import React from "react"
import StarIcon from '@mui/icons-material/Star';

const FavoriteButton = () => {
    return true ? <StarIcon sx = {{color:"black"}}/> : <StarIcon sx = {{color:"white"}}/>
}

export default FavoriteButton
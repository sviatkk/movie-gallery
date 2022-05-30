import axios from 'axios'
import { makeAutoObservable} from 'mobx'

export class MoviesModel {
    constructor(){
        this.movies = []
        this.favoriteMoviesId = []
        makeAutoObservable(this)
    }

    setFavoriteMoviesId = (id) => {
        let copyFavoriteMoviesId = this.favoriteMoviesId
        let moviesId = this.movies.map(movie => movie?.id)
        let result = copyFavoriteMoviesId

        if(moviesId.includes(id)){
            if(copyFavoriteMoviesId.includes(id)){
                result = copyFavoriteMoviesId.filter(movieId => movieId !== id)
            }else{
                result.push(id)
            }
        }
        
        this.favoriteMoviesId = result
    }

    setMovies = (data) => {
        this.movies = data
    }

    getMovies = () =>{
        const setMovies = this.setMovies

        axios.get("https://my-json-server.typicode.com/moviedb-tech/movies/list")
        .then((response) => {
            setMovies(response.data)
        })
    }

}

export const moviesModel = new MoviesModel()


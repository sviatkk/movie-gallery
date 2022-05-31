import axios from 'axios'
import { makeAutoObservable} from 'mobx'

export class MoviesModel {
    constructor(){
        this.movies = []
        this.filteredMovies = []
        this.allGenres = new Set()
        makeAutoObservable(this)
    }

    setActiveFilters = (activeGenres = []) => {
        if(!activeGenres.length){
            this.filteredMovies = this.movies
            return
        }
        let filteredMoviesDraft = this.movies.filter(movie => movie.genres.some(genre => activeGenres.includes(genre)))
        this.filteredMovies = filteredMoviesDraft
    }

    setFavoriteMovies = (movie) => {
        let result
        if(movie.favorite){
            result = {...movie, favorite: false}
        }else{
            result = {...movie, favorite: true}
        }
        this.filteredMovies = this.filteredMovies.map(item => item.id === movie.id ? result : item)
        this.movies = this.movies.map(item => item.id === movie.id ? result : item)

    }

    setMovies = (data) => {
        let dataWrapper = data.map(item => {return {...item, favorite: false}})
        this.movies = dataWrapper
        this.filteredMovies = dataWrapper
        let genres = new Set()
        data.forEach(movie => movie.genres.forEach(genre => genres.add(genre)))
        this.allGenres = genres
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


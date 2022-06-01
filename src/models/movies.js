import axios from 'axios'
import { makeAutoObservable} from 'mobx'

export class MoviesModel {
  constructor(){
    this.movies = []
    this.filteredMovies = []
    this.favoriteMoviesId = []
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

  setFavoriteMovies = (movieId) => {
    let copyFavoriteMoviesId = this.favoriteMoviesId
    if(!copyFavoriteMoviesId.includes(movieId)){
      copyFavoriteMoviesId.push(movieId)
      this.favoriteMoviesId = copyFavoriteMoviesId
    }else{
      this.favoriteMoviesId = copyFavoriteMoviesId.filter(id => id !== movieId)
    }
  }

  setMovies = (data) => {
    this.movies = data
    this.filteredMovies = data
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


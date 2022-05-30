import axios from 'axios'
import { makeAutoObservable} from 'mobx'

export class MoviesModel {
    constructor(){
        this.movies = []
        makeAutoObservable(this)
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


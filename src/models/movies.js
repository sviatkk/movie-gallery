import { makeAutoObservable} from 'mobx'

export class MoviesModel {
    constructor(){
        makeAutoObservable(this)
    }


}

export const moviesModel = new MoviesModel()


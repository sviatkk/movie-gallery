import { makeAutoObservable} from 'mobx'

export class ModalModel {
  constructor(){
    this.openedMovieModalObject = null
    makeAutoObservable(this)
  }

  setOpenedMovieModalObject= (data) => {
    this.openedMovieModalObject = data
  }
}

export const modalModel = new ModalModel()


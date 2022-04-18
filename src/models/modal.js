import { makeAutoObservable} from 'mobx'

export class ModalModel {
    constructor(){
        this.openModal = false
        makeAutoObservable(this)
    }

    setopenModal = (data) => {
        this.openModal = data
    }
}

export const modalModel = new ModalModel()


class ListBerries{

    constructor(){
        this._berries = [];
    }

    adicionar(berry){
        this._berries.push(berry);
    }

    get berries(){
        return [].concat(this._berries);
    }


}
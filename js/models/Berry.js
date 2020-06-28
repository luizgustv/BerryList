class Berry{

    constructor(picture, name, effect){
        this._picture = picture;
        this._name = name;
        this._effect = effect;
        Object.freeze(this);
    }

    get name(){
        return this._name;
    }

    get effect(){
        return this._effect;
    }

    get picture(){
        return this._picture;
    }

}
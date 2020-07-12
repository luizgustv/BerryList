//atualmente a requisição só retorna 64 mas hoje existem 73 tipos de berries
const _url = 'https://pokeapi.co/api/v2/berry?limit=200';
const _urlBerry = 'https://pokeapi.co/api/v2/berry';

class BerryService{

    constructor(){
        this._http = new HttpService();
    }

    //obter a url correspondente de cada berry
    obterBerrieListUrl(){
        return new Promise((resolve, reject) =>{
            this._http
                .get(_url)
                    .then(lista =>{
                        resolve(lista.results.map(berry => berry.url));
                    })
                    .catch(error => {
                        console.log(error);
                        reject('Não foi possível obter a lista');
                    });
        });
    }

    //acessar a url de cada berry e obter sua url de item
    obterItemBerryUrl(url){
        return new Promise((resolve, reject) =>{
            this._http
                .get(url)
                    .then(berry => {
                        resolve(berry.item.url);
                    })
                    .catch(error => {
                        console.log(error);
                        reject('Não foi possível obter dos dados individuais das berries');
                    });
        });
    }

    //acessar a lista de item e obter os dados de figura, nome e efeito de cada berry
    obterBerryItemInfo(url){
        return new Promise((resolve, reject) =>{
            this._http
                .get(url)
                    .then(berry => {
                        resolve(new Berry(berry.sprites.default, berry.name, 
                            berry.effect_entries[0].short_effect));
                    })
                    .catch(error =>{
                        console.log(error);
                        reject('Não foi possível obter os dados dos items');
                    });
        });
    }



}
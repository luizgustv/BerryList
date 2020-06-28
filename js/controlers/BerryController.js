class BerryController {

    constructor() {

        let e = document.querySelector.bind(document);
        this._search = e('#search');

        this._listBerries = new ListBerries();

        this._berryView = new BerryView(e('#berryView'));
        this._berryView.update(this._listBerries);

        this._service = new BerryService();

        this._init();

    }

    //ao carregar o site a lista deverá ser mostrada
    _init() {

        this._service
            .obterBerrieUrl()
                .then(lista => lista.forEach(berry =>{
                    //console.log(berry);
                    this._service
                        .obterBerry(berry)
                            .then(berry => {
                                this._service
                                    .obterItemBerry(berry)
                                        .then(berry => {
                                            //console.log(berry);
                                            this._listBerries.adicionar(berry);
                                            this._berryView.update(this._listBerries);
                                        });
                            });

                }))
                .catch(error => console.log(error));

    }



    procurar(event) {
        event.preventDefault();

        fetch(_urlBerry + this._search.value.toLowerCase())
            .then(res => res.json())
            .then(berry => {
                //console.log('Berry' + berry.item.name + ' e ' + 'Havest: ' + berry.max_harvest)
                /*
                fetch(_urlItem + berry.item.name)
                    .then(res => res.json())
                    .then(bi => console.log(bi.effect_entries['0'].short_effect));*/
            });
    }



}
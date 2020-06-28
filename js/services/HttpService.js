class HttpService{

    get(url){
        return fetch(url)
            .then(res => res.json());
    }


}
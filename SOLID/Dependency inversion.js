// Dependancy inversion

class Fetch{
    request(url){
        // return fetch(url).then(r=>r.json());
        return Promise.resolve('data from fetch'); 
    }
}

class LocalStorage{
    get(){
        const dataFromLocalStorage = 'data from local storage';
        return dataFromLocalStorage;
    }
}

class FetchClient{
    constructor(){
        this.fetch = new Fetch();
    }

    clientGet(){
        this.fetch.request('vk.com');
    }
}

class LocalStorageClient{
    constructor(){
        this.LocalStorage = new LocalStorage();
    }

    clientGet(key){
        return this.LocalStorage.get(key);
    }
}

class Database{
    constructor(client){
        this.client = client;
    }

    getData(key){
        return this.client.clientGet(key);
    }
}

const db = new Database(new LocalStorageClient());
console.log(db.getData('rand'));

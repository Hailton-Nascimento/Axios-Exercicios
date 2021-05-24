import axios from 'axios';
use: const axios = require('axios').default;
  
class Api{

    static async getAddress (cep){
        const response = new Address((await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data);
        return response;
    }
}

class Address{
    constructor({logradouro, bairro, localidade}){
        this.logradouro = logradouro,
        this.bairro = bairro,
        this.localidade = localidade
    }
}



Api.getAddress('05577100').then(v => {console.log(v)});

//axios configuration
//central backend connection

import axios from "axios";
import {getToken} from '../utils/auth';

const api = axios.create({
    baseURL : "http://localhost:5000/api"          //base url the backend runs on

});

api.interceptors.request.use((config) =>{       //automatically send jwt
    const token =getToken();

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export default api;
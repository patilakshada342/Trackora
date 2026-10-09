import api from './api';

export const aiInsights = async () =>{

    const response = await api.post('/ai/insights');
     console.log("Base URL:", api.defaults.baseURL);
    return response.data;
}
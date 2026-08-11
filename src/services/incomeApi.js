import api from './api'

export const getAllIncomes = async () =>{
    const response = await api.get('/income');

    return response.data;

};

export const createIncome = async(incomeData) =>{
    const response = await api.post('/income',incomeData);

    return response.data
}


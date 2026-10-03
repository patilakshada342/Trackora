import Categories from '../pages/Categories';
import api from './api';

export const getAllCategories = async () =>{
    const response = await api.get('/categories');
    return response.data;
};

export const createCategory = async(categoryData) => {
const response = await api.post('/categories',categoryData);
return response.data;
};
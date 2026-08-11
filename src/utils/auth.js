//Backend->JWT token->Frontend->localStorage
//JWT storage 
//remenber logged-in user

export const saveToken =(token) =>{
    localStorage.setItem("token",token);
};

export const getToken =() =>{
    return localStorage.getItem("token");

};

export const removeToken =() =>{
    localStorage.removeItem('token');
};
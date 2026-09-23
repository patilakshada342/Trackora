    //Backend->JWT token->Frontend->sessionStorage
    //JWT storage 
    //remember logged-in user

    export const saveToken =(token) =>{
        sessionStorage.setItem("token",token);
    };

    export const getToken =() =>{
        return sessionStorage.getItem("token");

    };

    export const removeToken =() =>{
        sessionStorage.removeItem('token');
    };
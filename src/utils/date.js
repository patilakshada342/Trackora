//one date-formating function for entire project

 export const formatDate = (date) =>{
    if(!date) return "" ;

    const datePart = date.split("T")[0];
    const[year,month,day] =datePart.split("-");

    return `${day}/${month}/${year}`;
}

//function for today's date ...return 2026-09-23
export const getToday =() =>{
    const today =new Date();

    const day = String(today.getDate()).padStart(2,"0");
    const month = String(today.getMonth() + 1 ).padStart(2,"0");
    const year = today.getFullYear();

    return `${year}-${month}-${day}`;
}; 
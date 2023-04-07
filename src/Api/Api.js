import { apiUrl , headers ,headersFormData} from "../Config/config";
import STORE from "../Redux/Store";
const getToken=()=>{

    return STORE.getState().auth.token
}

const signUp= async (body)=>{
    const response = await fetch( apiUrl+"signup", {
        method: "POST",
        body: body,
        headers:headers 
      })
        return response.json();
}

const signIn = async (body)=> {
    const response = await fetch ( apiUrl+"login",{
        method: "POST",
        body:body,
        headers:headers     
    })
    return response.json() ;
}
const changePassword = async (body)=> {
    const response = await fetch ( apiUrl+"changePassword",{
        method: "PUT",
        body:body,
        headers:headers     
    })
    return response.json() ;
}
const createServey = async (body)=> {
    const response = await fetch ( apiUrl+"servey/createServey",{
        method: "POST",
        body:body,
        headers:{
            ...headers,
            "Authorization":"Bearer "+getToken(),
        }   
    })
    return response.json() ;
}
const getAllServey = async (id)=> {
    const response = await fetch ( apiUrl+"servey/getServeyForeachUser/"+id,{
        method: "GET",
        headers:{
            ...headers,
            "Authorization":"Bearer "+getToken(),
        }    
    })
    return response.json() ;
  
}
const sendMail = async (body)=> {
    const response = await fetch ( apiUrl+"sendmail",{
        method: "POST",
        body:body,
        headers:{
            ...headers,
            "Authorization":"Bearer "+getToken(),
        }    
    })
    return response.json() ;
  
}

export {
    signUp,
    signIn,   
    changePassword,
    createServey,
    getAllServey,
    sendMail
}
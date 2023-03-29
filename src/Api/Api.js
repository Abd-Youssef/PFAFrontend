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



export {
    signUp,
    signIn,   
    changePassword,
}
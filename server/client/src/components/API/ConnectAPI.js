import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api/'

export default async function connectAPI(method, url, data=null, token=null) {
    return await axios({
        method, 
        url, 
        data, 
        headers: {'Authorization': token !== null && 'Bearer ' + token}
    })
    .then(res=>res)
    .catch(err=>console.log(err))
}


//Auth API
const LoginAPI = async (data)=>{
    const res = await connectAPI('post', '/auth/login', data)
    return res
}

const RegisterAPI = async (data)=>{
    const res = await connectAPI('post', '/auth/register', data)
    return res
}

export {
    LoginAPI,
    RegisterAPI
}
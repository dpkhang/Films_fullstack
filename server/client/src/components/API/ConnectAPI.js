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
const loginAPI = async (data)=>{
    const res = await connectAPI('post', '/auth/login', data)
    return res
}

const registerAPI = async (data)=>{
    const res = await connectAPI('post', '/auth/register', data)
    return res
}

const getUserByUsername = async (username)=>{
    const res = await connectAPI('get', `/auth?username=${username}`)
    return res
}

const getUserById = async (id)=>{
    const res = await connectAPI('get',`auth?uid=${id}`)
    return res
}

const checkTimeOutToken = async (token)=>{
    const res = await connectAPI('get', `/auth/check-token`, null, token)
    return res
}

export {
    loginAPI,
    registerAPI,
    getUserByUsername,
    getUserById,
    checkTimeOutToken
}
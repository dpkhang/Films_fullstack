import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './Login.scss'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'universal-cookie'
import { loginAPI } from '../API/ConnectAPI'
import { saveUser } from '../../actions/user'

function Login(props) {
    //state
    const [user, setUser] = useState({
        username: '',
        password: '',
    })
    
    //redux
    const selector = useSelector(state=>state.user.data)
    const dispatch = useDispatch()
    //local
    const history = useHistory()

    //handle
    const handleChange = (e)=>{
        const {name, value} = e.target
        const mergeUser = {
            ...user,
            [name]: value,
        }
        setUser(mergeUser)
    }

    const handleSubmit = async (e)=>{
        try {
            e.preventDefault()
            const result = await loginAPI(user)
            if(result.status && result.status === 200) {
                const action = saveUser(result.data.data)
                const cookies = new Cookies()
                cookies.set('accessToken', result.data.data.token)
                cookies.set('uid', result.data.data.id)
                dispatch(action)
                history.push('/films')
                console.log(selector)
            }else {
                alert('Invalid username or password!')
            }
        }catch(err){
            alert('Invalid username or password!')
        }
    }

    useEffect(() => {
        document.title = 'Login | Hippo Movies'
    }, [])

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <div className='input-item'>
                <p>Username:</p>
                <div className='input-element'>
                    <i className="fas fa-user"></i>
                    <input type='text' id='username' name='username' onChange={handleChange}/>
                </div>
                <p>Password:</p>
                <div className='input-element'>
                    <i className="fas fa-lock"></i>
                    <input type='password' id='password' name='password' onChange={handleChange}/>
                </div>
                </div>
                <div className='register-question-item'>
                    <Link to='/register'>Register</Link>
                </div>
                <div className='input-submit'>
                <input className='button-item' type='submit' value='Login'/>
                <Link className='button-item' to='/' type='button'>Exit</Link>
                </div>
            </form>
        </div>
    );
}

export default Login

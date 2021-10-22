import React, {useEffect, useRef, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Cookies from 'universal-cookie'
import './Register.scss'
import { RegisterAPI } from '../API/ConnectAPI'
import { useSelector, useDispatch } from 'react-redux'
import { saveUser } from '../../actions/user'

function Register(props) {

    //State
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: ''
    })
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validSubmit, setValidSubmit] = useState(0)
    const [focus, setFocus] = useState('')

    //ref
    const err_username = useRef(null)
    const err_password = useRef(null)
    const err_confirm_password = useRef(null)
    const err_email = useRef(null)

    //redux
    const selector = useSelector(state=>state.user.data)
    const dispatch = useDispatch()

    //local
    const history = useHistory()

    //Handle
    const handleChange = (e)=>{
        const {name, value} = e.target
        if(name === 'confirmPassword'){
            setConfirmPassword(value)
        }else {
            const mergeUser = {
                ...user,
                [name]: value
            }
            setUser(mergeUser)
        }
        setFocus(name)
    }

    useEffect(()=>{
        const passwordRegexp = /(?=.*[A-Z])(?=.*\d)(?=.*[a-z])[A-Za-z0-9]{10,20}$/
        const usernameRegexp = /^[A-Za-z0-9]{7,20}$/
        const emailRegexp = /^([A-Za-z0-9.]+)@([A-Za-z0-9.]+)\.([A-Za-z]){3,8}$/
        let validUsername = 1, validPassword = 1
        let validConfirmPassword = 1, validEmail = 1
        console.log(focus)
        if(!usernameRegexp.test(user.username) && focus === 'username'){
            validUsername = 0
            err_username.current.innerHTML = 'Username is from 8 characters.'
        }else {
            validUsername = 1
            err_username.current.innerHTML = ''
        }

        if(!emailRegexp.test(user.email) && focus ==='email'){
            validEmail = 0
            err_email.current.innerHTML = 'example@gmail.com'
        }else{
            validEmail = 1
            err_email.current.innerHTML = ''
        }

        if(!passwordRegexp.test(user.password) && focus ==='password'){
            validPassword = 0
            err_password.current.innerHTML = 'password is from 10-20: lower, upper & number.'
        } else {
            validPassword = 1
            err_password.current.innerHTML = ''
        }

        if(user.password !== confirmPassword && focus === 'confirmPassword'){
            validConfirmPassword = 0
            err_confirm_password.current.innerHTML = 'Password do not match.'
        }else {
            validConfirmPassword = 1
            err_confirm_password.current.innerHTML = ''
        }

        if(validUsername && validPassword && validConfirmPassword && validEmail)
            setValidSubmit(1)
        else
            setValidSubmit(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, confirmPassword])

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            if(validSubmit){
                const result = await RegisterAPI(user)
                if(result.status === 200){
                    const cookie = new Cookies()
                    cookie.set('accessToken', result.data.data.token)
                    const action = saveUser(result.data.data)
                    dispatch(action)
                    alert(result.data.message)
                    history.push('/films')
                    console.log(selector)
                }
                else{
                    alert('Reigister is failed!')
                }
            }
        }catch(err){
            console.log(err)
        }
        
    }

    useEffect(() => {
        document.title ='Register | Hippo Movies'
    }, [])


    return (
        <div className='register'>
            <form onSubmit={handleSubmit}>
                <h1 className='title'>REGISTER</h1>
                <div className='main'>
                    <div className='input-item'>
                        <p>Username:</p>
                        <div className='input-element'>
                            <input type='text' name='username' onChange={handleChange}/>
                            <p className='err-text' ref={err_username}>404</p>
                        </div>
                        <p>Password:</p>
                        <div className='input-element'>
                            <input type='password' name='password' onChange={handleChange}/>
                            <p className='err-text' ref={err_password}>404</p>
                        </div>
                        <p>Re-password:</p>
                        <div className='input-element'>
                            <input type='password' name='confirmPassword' onChange={handleChange}/>
                            <p className='err-text' ref={err_confirm_password}>404</p>
                        </div>
                        <p>Email:</p>
                        <div className='input-element'>
                            <input type='text' name='email' onChange={handleChange}/>
                            <p className='err-text' ref={err_email} >404</p>
                        </div>
                        <div className='input-submit'>
                            <input className='button-item' type='submit' name='username'/>
                            <Link className='button-item' to='/'>Exit</Link>
                        </div>
                    </div>
                    <div className='img-item'>
                        <img src='/img/svg/connections-2099068.svg' alt=''/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register

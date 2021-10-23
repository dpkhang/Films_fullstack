import React from 'react'
import LoginTag from '../Login/Login'
import {useHistory} from 'react-router'
import Cookies from 'universal-cookie'

function Login(props) {


    const history = useHistory()
    if(new Cookies().get('accessToken'))
        history.push('/films')

    return (   
        <LoginTag></LoginTag>
    );
}

export default Login
import React from 'react'
import RegisterTag from '../Register/Register'
import {useHistory} from 'react-router'
import Cookies from 'universal-cookie'

function Register(props) {


    const history = useHistory()
    if(new Cookies().get('accessToken'))
        history.push('/films')

    return (
        <RegisterTag></RegisterTag>
    );
}

export default Register
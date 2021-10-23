import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../../actions/user';
import ContactTag from '../Contact/Contact'
import {useHistory} from 'react-router'
import Cookies from 'universal-cookie'

function Contact(props) {

    const user = useSelector(state=>state.user.data)
    const dispatch = useDispatch()

    const handleClick = () => {
        const newUser = {
            username: 'khang2',
            firstName: 'Dinh',
            lastName: 'Khang'
        }
        const action = saveUser(newUser)
        dispatch(action)
        console.log(user)
    }


    const history = useHistory()
    if(new Cookies().get('accessToken'))
        history.push('/films')

    return (
        <>
        <ContactTag></ContactTag>
        <button onClick={handleClick}>kkk</button>
        </>
    );
}

export default Contact
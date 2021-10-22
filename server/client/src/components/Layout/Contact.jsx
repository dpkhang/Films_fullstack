import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../../actions/user';
import ContactTag from '../Contact/Contact'

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

    return (
        <>
        <ContactTag></ContactTag>
        <button onClick={handleClick}>kkk</button>
        </>
    );
}

export default Contact
import React from 'react';
import IntroduceTag from '../Introduce/Introduce'
import {useHistory} from 'react-router'
import Cookies from 'universal-cookie'

function Introduce(props) {

    const history = useHistory()
    if(new Cookies().get('accessToken'))
        history.push('/films')

    return (
        <IntroduceTag></IntroduceTag>
    );
}

export default Introduce;
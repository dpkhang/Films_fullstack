import React, { useEffect } from 'react'
import MasterFilmsMenu from '../Films/FilmsMenu/FilmsMenu'
import {Route, useHistory} from 'react-router-dom'
import routes from '../../routes/MasterRoute'
import MapRoute from '../MapRoute'
import Home from '../Films/Pages/Home'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

function Films(props) {

    const userSelector = useSelector(state=>state.user.data)
    
    useEffect(()=>{
        document.title = 'Film | Hippo Movies'
        console.log(userSelector)
    }, [userSelector])

    const history = useHistory()
    if(!localStorage.getItem('accessToken'))
        history.push('/')

    return (    
        <div className='wrap'>
            <MasterFilmsMenu/>
            <div className='master' style={{width: '80%', overflow: 'hidden', height: 'auto', margin: '0 auto'}}>
                <Route path='/' exact component={Home}/>
                <MapRoute supRoute={'/films'} routes={routes}/>               
            </div>
        </div>
    );
}

export default Films;
import React, { useEffect, useState } from 'react'
import MasterFilmsMenu from '../Films/FilmsMenu/FilmsMenu'
import Explorer from '../Films/Explorer/Explorer'
import {Route, useHistory} from 'react-router-dom'
import routes from '../../routes/MasterRoute'
import MapRoute from '../MapRoute'
import Home from '../Films/Pages/Home'
import { useSelector } from 'react-redux'
import Cookies from 'universal-cookie'

function Films(props) {

    //states
    const [left, setLeft] = useState('-30rem')

    const userSelector = useSelector(state=>state.user.data)

    
    useEffect(()=>{
        document.title = 'Film | Hippo Movies'
        console.log(userSelector)
    }, [userSelector])

    const handleShowExplorer = ()=>{
        setLeft('0rem')
    }

    const handleHideExplorer = ()=>{
        setLeft('-30rem')
    }

    const history = useHistory()
    const cookies = new Cookies()
    if(!cookies.get('accessToken'))
        history.push('/')

    return (    
        <div className='wrap'>
            <MasterFilmsMenu onShowExplorer={handleShowExplorer} onHideExplorer={handleHideExplorer}/>
            <Explorer  onHideExplorer={handleHideExplorer} left={left}></Explorer>
            <div onClick={handleHideExplorer} className='master' style={{width: '100%', overflow: 'hidden', height: 'auto'}}>
                <Route path='/' exact component={Home}/>
                <MapRoute supRoute={'/films'} routes={routes}/>               
            </div>
        </div>
    );
}

export default Films;
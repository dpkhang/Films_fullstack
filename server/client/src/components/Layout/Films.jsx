import React, { useEffect, useState } from 'react'
import MasterFilmsMenu from '../Films/FilmsMenu/FilmsMenu'
import Explorer from '../Films/Explorer/Explorer'
import Footer from '../Footer/Footer'
import {Route, useHistory} from 'react-router-dom'
import routes from '../../routes/MasterRoute'
import MapRoute from '../MapRoute'
import Home from '../Films/Pages/Home'
import { useSelector } from 'react-redux'
import Cookies from 'universal-cookie'
import { checkTimeOutToken } from '../API/ConnectAPI'

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
    useEffect(()=>{
            (async function() {
                const checkToken = await checkTimeOutToken(cookies.get('accessToken'))
                if(!checkToken) {
                    cookies.remove('accessToken')
                    cookies.remove('uid')
                    console.log('hello-world')
                    history.push('/')
                }
            })()
        return ()=>{
            
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (    
        <div className='wrap'>
            <MasterFilmsMenu onShowExplorer={handleShowExplorer} onHideExplorer={handleHideExplorer}/>
            <Explorer  onHideExplorer={handleHideExplorer} left={left}></Explorer>
            <div onClick={handleHideExplorer} className='master' style={{width: '100%', overflow: 'hidden', height: 'auto'}}>
                <Route path='/' exact component={Home}/>
                <MapRoute supRoute={'/films'} routes={routes}/>               
            </div>
            <Footer onHideExplorer={handleHideExplorer}/>
        </div>
    );
}

export default Films;

import React from 'react'
import NotFound from '../components/NotFound/NotFound'
import Master from '../components/Master/Master'
import Introduce from '../components/Introduce/Introduce'
import Register from '../components/Register/Register'
import Contact from '../components/Contact/Contact'
import Login from '../components/Login/Login'
let routes = [
    { 
        path: '/',
        component: ()=> <Master/>,
        exact: true,
    },
    {
        path: '/films',
        component: ()=> <Master/>,
        exact: false,
    },
    { 
        path: '/contact',
        component: ()=> <Contact/>,
        exact: false,
    },
    {
        path: '/introduce',
        component: ()=> <Introduce/>
    },
    {
        path: '/register',
        component: ()=> <Register/>,
        exact: false,
    },
    {
        path: '/login',
        component: ()=> <Login/>,
        exact: false,
    },
    {
        path: '',
        component: ()=> <NotFound></NotFound>,
        exact: false,
    }
]

export default routes
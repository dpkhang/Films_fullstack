
import React from 'react'
import NotFound from '../components/NotFound/NotFound'
import Main from '../components/Layout/Main'
import Films from '../components/Layout/Films'
import Introduce from '../components/Layout/Introduce'
import Register from '../components/Layout/Register'
import Contact from '../components/Layout/Contact'
import Login from '../components/Layout/Login'
let routes = [
    { 
        path: '/',
        component: ()=> <Main/>,
        exact: true,
    },
    {
        path: '/films',
        component: ()=> <Films/>,
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
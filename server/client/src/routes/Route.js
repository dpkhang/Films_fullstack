
import React from 'react';
import NotFound from '../components/Main/NotFound/NotFound';
import Master from '../components/Main/Master/Master';
import Introduce from '../components/Main/Menu/Introduce/Introduce';
import Register from '../components/Main/Menu/Register/Register';
import Contact from '../components/Main/Menu/Contact/Contact';
import Login from '../components/Main/Menu/Login/Login';
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

export default routes;
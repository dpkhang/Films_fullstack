
import React from 'react';
import NotFound from '../components/NotFound';
import Master from '../components/Master';
import Introduce from '../components/Introduce';
import Register from '../components/Register';
import Contact from '../components/Contact';
import Login from '../components/Login';
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
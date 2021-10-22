import React, { useCallback, useEffect, useRef } from 'react'
import './Menu.scss'
import LinkMenu from '../../LinkMenu'
import $ from 'jquery'
import {Link} from 'react-router-dom'

function Menu(props) {
    //props

    //state

    //ref

    //handle


    const listMenu = [
        {
            label:['Contact ', <i className="bi bi-chat-dots" key={3}></i>],
            to: '/contact',
            exact:false
        },
        {
            label:['Introduce ', <i className="bi bi-info-circle" key={4}></i>],
            to: '/introduce',
            exact:false
        },
        {
            label:['Register ',<i className="bi bi-plus-circle" key={2}></i>],
            to: '/register',
            exact:false
        },
        {
            label: ['Log in ', <i className="bi bi-box-arrow-right"  key={1}></i>],
            to: '/login',
            exact: false
        }
    ]

    const handleMenuBackground = (e)=>{
        if($('.main-menu').length !== 0){
            let top = $('.main-menu').offset().top
            $('.main-menu').toggleClass('main-menu-background-active', top !== 0)    
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleMenuBackground)
        return ()=>{
            window.removeEventListener('scroll', handleMenuBackground)
            console.log('removed')
        }
    }, [])

    let menu = listMenu.map((value, index)=>{
        return (
            <LinkMenu className="li-master-menu" label={value.label} to={value.to} exact={value.exact} key={index}/>
        )
    })

    return (
        <div className='main-menu'>
            <div className="row-menu">
                <Link to='/' className="row-menu-title">
                    <img src='/img/logo/header-logo.png' alt=''/>
                </Link>
                <ul>
                    {menu}
                </ul>
            </div>
        </div>
    );
}

export default Menu

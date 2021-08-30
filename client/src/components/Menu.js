import React from 'react';
import '../scss/Menu.scss';
import LinkMenu from './LinkMenu';
import {Link} from 'react-router-dom';
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.listMenu =[
            {
                label: ['Log in ', <i className="bi bi-box-arrow-right"  key={1}></i>],
                to: '/login',
                exact: false
            },
            {
                label:['Register ',<i className="bi bi-plus-circle" key={2}></i>],
                to: '/register',
                exact:false
            },
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
        ]
    }
    render() {
        let menu = this.listMenu.map((value, index)=>{
            return (
                <LinkMenu className="li-master-menu" label={value.label} to={value.to} exact={value.exact} key={index}/>
            )
        })
        return (
            <div className='menu'>
                <div className="row-menu">
                    <Link to='/' className="row-menu-title">FILMS-<span style={{'fontSize': '4rem'}}>X</span></Link>
                    <ul>
                        {menu}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;
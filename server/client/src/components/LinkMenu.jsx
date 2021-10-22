import React from 'react'
import {Route, Link} from 'react-router-dom'
const LinkMenu = ({label, to, exact, className}) => {
    return (
        <Route
            path={to} exact={exact} children={({ match })=>{
                return (
                    <li className={`${className} ${match ? 'active': ''}`}>
                        <Link to={to}>{label}</Link>
                    </li>
                )
            }}
        />
    )
}

export default LinkMenu;
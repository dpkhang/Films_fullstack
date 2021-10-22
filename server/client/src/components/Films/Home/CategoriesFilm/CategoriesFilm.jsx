import React from 'react'
import PropTypes from 'prop-types'
import Items from './Items/Items'
import './CategoriesFilm.scss'
import {Link} from 'react-router-dom'
CategoriesFilm.propTypes = {
    
};

function CategoriesFilm(props) {
    //props
    const {categories} = props

    //state

    const data = categories.map((elm, idx)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='categories-films'>
            <p className='title'>CATEGORIES</p>
            <div className='item-block'>
                <div className='show-item'>
                    {data}
                </div>
            </div>
            <Link className='more' to='/films/categories'>More</Link>
        </div>
    )
}

export default CategoriesFilm
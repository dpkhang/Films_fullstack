import React from 'react'
import {Link} from 'react-router-dom'
import Items from './Items/Items'
import './PopularFilms.scss'
PopularFilms.propTypes = {
    
};

function PopularFilms(props) {
    //props
    const {popularFilms} = props

    //state

    const data = popularFilms.map((elm, idx)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='popular-films'>
            <p className='title'>POPULAR FILMS</p>
            <div className='item-block'>
                <div className='show-item'>
                  {data}
                </div>
            </div>
            <Link className='more' to='/films/popular'>More</Link>
        </div>
    )
}

export default PopularFilms
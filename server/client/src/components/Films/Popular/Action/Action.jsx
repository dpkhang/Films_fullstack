import React from 'react'
import {Link} from 'react-router-dom'
import Items from '../_Items/Items'
import './Action.scss'
PopularFilms.propTypes = {
    
};

function PopularFilms(props) {
    //props
    const {actionFilms} = props

    //state

    const data = actionFilms.map((elm, idx)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='action-popular-films'>
            <p className='title'>ACTION</p>
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
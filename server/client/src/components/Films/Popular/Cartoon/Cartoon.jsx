import React from 'react'
import {Link} from 'react-router-dom'
import Items from '../_Items/Items'
import './Cartoon.scss'
PopularFilms.propTypes = {
    
};

function PopularFilms(props) {
    //props
    const {cartoonFilms} = props

    //state

    const data = cartoonFilms.map((elm, idx)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='cartoon-popular-films'>
            <p className='title'>CARTOON</p>
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
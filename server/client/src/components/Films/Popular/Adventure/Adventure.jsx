import React from 'react'
import {Link} from 'react-router-dom'
import Items from '../_Items/Items'
import './Adventure.scss'
PopularFilms.propTypes = {
    
};

function PopularFilms(props) {
    //props
    const {adventureFilms} = props

    //state

    const data = adventureFilms.map((elm, idx)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='adventure-popular-films'>
            <p className='title'>ADVENTURE</p>
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
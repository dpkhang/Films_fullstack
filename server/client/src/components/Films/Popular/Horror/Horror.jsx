import React from 'react'
import {Link} from 'react-router-dom'
import Items from '../_Items/Items'
import './Horror.scss'
HorrorPopular.propTypes = {
    
};

function HorrorPopular(props) {
    //props
    const {horrorFilms} = props

    //state

    const data = horrorFilms.map((elm, idx)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='horror-popular-films'>
            <p className='title'>HORROR</p>
            <div className='item-block'>
                <div className='show-item'>
                  {data}
                </div>
            </div>
            <Link className='more' to='/films/popular'>More</Link>
        </div>
    )
}

export default HorrorPopular
import React from 'react'
import {Link} from 'react-router-dom'
import Items from '../_Items/Items'
import './Romance.scss'
RomancePopular.propTypes = {
    
};

function RomancePopular(props) {
    //props
    const {romanceFilms} = props

    //state

    const data = romanceFilms.map((elm, idx)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='romance-popular-films'>
            <p className='title'>ROMANCE</p>
            <div className='item-block'>
                <div className='show-item'>
                  {data}
                </div>
            </div>
            <Link className='more' to='/films/popular'>More</Link>
        </div>
    )
}

export default RomancePopular
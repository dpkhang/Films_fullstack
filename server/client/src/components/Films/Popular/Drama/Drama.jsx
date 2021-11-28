import React from 'react'
import {Link} from 'react-router-dom'
import Items from '../_Items/Items'
import './Drama.scss'
DramaPopular.propTypes = {
    
};

function DramaPopular(props) {
    //props
    const {dramaFilms} = props

    //state

    const data = dramaFilms.map((elm, idx)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='drama-popular-films'>
            <p className='title'>DRAMA</p>
            <div className='item-block'>
                <div className='show-item'>
                  {data}
                </div>
            </div>
            <Link className='more' to='/films/popular'>More</Link>
        </div>
    )
}

export default DramaPopular
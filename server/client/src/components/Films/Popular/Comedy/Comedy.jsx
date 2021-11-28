import React from 'react'
import {Link} from 'react-router-dom'
import Items from '../_Items/Items'
import './Comedy.scss'
ComedyPopular.propTypes = {
    
};

function ComedyPopular(props) {
    //props
    const {comedyFilms} = props

    //state

    const data = comedyFilms.map((elm, idx)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='comedy-popular-films'>
            <p className='title'>COMEDY</p>
            <div className='item-block'>
                <div className='show-item'>
                  {data}
                </div>
            </div>
            <Link className='more' to='/films/popular'>More</Link>
        </div>
    )
}

export default ComedyPopular
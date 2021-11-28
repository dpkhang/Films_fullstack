import React from 'react'
import './Films.scss'
import {Link} from 'react-router-dom'

Films.propTypes = {
    
};

function Films(props) {
    return (
        <div className='component-film'>

            <div className='img-film'>
                <img src='/img/banner/jurassic-world.jpg' alt=''/>
            </div>
            <div className='title-film'>
                <p className='title'>films x xxxx</p>
                <i className='fas fa-heart'></i>
                <p className='director'>James</p>
                <div className='button-see'>
                    <Link to='/films/details/hello'>See</Link>
                    <Link to='/films/details'>Trailer</Link>
                </div>
            </div>
        </div>
    )
}

export default Films
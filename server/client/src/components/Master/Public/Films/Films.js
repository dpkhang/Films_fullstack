import React from 'react'
import './Films.scss'
import {Link} from 'react-router-dom'
class Films extends React.Component {
    render() {
        return (
            <div className='component-film'>
                <div className='favorite-film'>
                    <i className="fab fa-gratipay"></i>
                </div>
                <div className='img-film'>
                    <img src='/img/banner/jurassic-world.jpg' alt=''/>
                </div>
                <div className='title-film'>
                    <p className='title'>films x xxsdasd</p>
                    <p className='director'>James</p>
                    <div className='button-see'>
                        <Link to='/films/details/hello'>See</Link>
                        <Link to='/films/details'>Trailer</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Films;
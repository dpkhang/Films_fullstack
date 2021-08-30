import React from 'react';
import '../scss/Films.scss';
class Films extends React.Component {
    render() {
        return (
            <div className='component-film'>
                <div className='img-film'>
                    <img src='/img/banner-it.jpg' alt=''/>
                </div>
                <div className='title-film'>
                    <p className='title'>films x</p>
                    <p className='director'>James</p>
                    <p className='year'>2021</p>
                    <button className='Add-favorites'>Add to favorites</button>
                </div>
            </div>
        )
    }
}

export default Films;
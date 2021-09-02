import React from 'react';
import './Films.scss';
class Films extends React.Component {
    render() {
        return (
            <div className='component-film'>
                <div>
                    <i className="far fa-heart"></i>
                </div>
                <div className='img-film'>
                    <img src='/img/banner-it.jpg' alt=''/>
                </div>
                <div className='title-film'>
                    <p className='title'>films x xxsdasd</p>
                    <p className='director'>James</p>
                    <div className='button-see'>
                        <button>See</button>
                        <button>Trailer</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Films;
import React from 'react'
import PropTypes from 'prop-types'
import './Enjoy.scss'
Enjoy.propTypes = {
    
};

function Enjoy(props) {
    return (
        <div className='main-enjoy-background'>
            <div className="main-enjoy">
                <div className="col main-enjoy-video">
                    <video loop={true} autoPlay={true} muted={true} >
                        <source src="/video/main/film.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="col main-enjoy-text">
                    <p>Enjoying on TV, Laptop...</p>
                    <p>Relaxing in the weekend.</p>
                    <p>Happiness with your family.</p>
                    <p>Stay with your lover.</p>
                </div>
            </div>
        </div>
    );
}

export default Enjoy;
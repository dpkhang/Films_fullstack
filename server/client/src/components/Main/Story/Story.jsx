import React from 'react'
import './Story.scss'

Story.propTypes = {
    
};

function Story(props) {
    //props

    //state

    //handle


    return (
        <div className='main-story-background'>
            <div className='main-story'>
                <div className='col main-story-text'>
                    <p>Hippo will bring for you any experience.</p>
                    <p>Watching with high quality. </p>
                    <p>Providing any famous Game show...</p>
                </div>
                <div className='col main-story-img'>
                    <video loop={true} autoPlay={true} muted={true} >
                        <source src="/video/main/action.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Story
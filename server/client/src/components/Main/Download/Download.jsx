import React from 'react'
import './Download.scss'
Download.propTypes = {
    
};

function Download(props) {
    return (
        <div className="main-download-background">
            <div className="main-download">
                <div className="col main-download-text">
                    <div className="text">
                        <p>Hippo is supported on Smartphone, Tablet...</p>
                        <p>You can download in Android or iOS.</p>
                    </div>
                    <div className="img">
                        <img className="play-store" src="/img/logo/download-play-store.png" alt="" />
                        <img className="app-store" src="/img/logo/download-app-store.png" alt="" />
                    </div>
                </div>
                <div className="col main-download-phone-image">
                    <img src="/img/logo/smartphone.png" alt="" />
                </div>
            </div>
            
        </div>
    );
}

export default Download;

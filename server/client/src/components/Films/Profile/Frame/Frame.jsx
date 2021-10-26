import React from 'react'
import UpdateFrame from '../Frame/UpdateFrame/UpdateFrame'
import './Frame.scss'
Frame.propTypes = {
    
};

function Frame(props) {
    return (
        <div className="frame-profile-background">
            <UpdateFrame/>
        </div>
    );
}

export default Frame;
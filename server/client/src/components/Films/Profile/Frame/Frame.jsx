import React from 'react'
import UpdateFrame from '../Frame/UpdateFrame/UpdateFrame'
import VIPFrame from '../Frame/VIPFrame/VIPFrame'
import PropTypes from 'prop-types'
import './Frame.scss'
Frame.propTypes = {
    frameType: PropTypes.string,
};

function Frame(props) {

    //props

    const {frameType} = props;

    return (
        <div className="frame-profile-background">
            {frameType === 'vip' ? <VIPFrame/> : <UpdateFrame/>}
        </div>
    );
}

export default Frame;
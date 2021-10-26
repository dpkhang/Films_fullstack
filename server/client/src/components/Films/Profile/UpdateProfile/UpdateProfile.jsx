import React, {} from 'react'
import PropTypes from 'prop-types'
import './UpdateProfile.scss'

UpdateProfile.propTypes = {
    user: PropTypes.object
};

function UpdateProfile(props) {
    //props
        const {user} = props
    //state

    //hook

    return (
        <div className="update-profile-background">
            <div className="update-profile">
                <img src="/img/main/jurassic.jpg" alt="" />
                <div className="show-details">
                    <p className="show">{user.name}</p>
                    <p className="show">{user.username}</p>
                    <p className="show">{user.email}</p>
                    <p className="show">{user.phone}</p>
                </div>
                <button className="btn-update">Edit Profile</button>
            </div>
        </div>
    );
}

export default UpdateProfile
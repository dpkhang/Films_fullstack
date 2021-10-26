import React, { } from 'react'
import $ from 'jquery'
import './UpdateFrame.scss'

function UpdateFrame(props) {
    //props

    //state

    //hook

    //handle

    const handleClick = (e)=>{
        if(e.target.getAttribute('class') && e.target.getAttribute('class').match(/^title/i))
            {
                $(e.target).addClass('active')
                $(e.target.nextSibling).css('display', 'block')
                $(e.target.nextSibling).focus()
            }
    }

    return (
        <div className="update-frame-background">
            <p className="update-frame-title">Update Profile</p>
            <form>
                <div className="items" onClick={handleClick}>
                    <p className="title">Email</p>
                    <input type="text" name="" id="" />
                </div>
                <div className="items" onClick={handleClick}>
                    <p className="title">Phone number</p>
                    <input type="text" name="" id="" />
                </div>
                <div className="items" onClick={handleClick}>
                    <p className="title">First name</p>
                    <input type="text" name="" id="" />
                </div>
                <div className="items" onClick={handleClick}>
                    <p className="title">Last name</p>
                    <input type="text" name="" id="" />
                </div>
                <div className="items-submit">
                    <input type="submit" className="btn btn-update" value="Update" />
                    <button className="btn btn-clear">Clear</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateFrame
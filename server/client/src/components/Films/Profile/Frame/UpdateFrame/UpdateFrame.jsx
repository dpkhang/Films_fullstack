import React, { useState } from 'react'
import $ from 'jquery'
import './UpdateFrame.scss'

function UpdateFrame(props) {
    //props

    //state
    const [user, setUser]= useState({
        id: '',
        email: '',
        phone: '',
        first_name: '',
        last_name: ''
    })
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

    const handleChange = (e)=>{
        const {name, value} = e.target
        const mergeUser  = {
            ...user,
            [name]: value,
        }
        setUser(mergeUser)
    }

    return (
        <div className="update-frame-background">
            <p className="update-frame-title">Update Profile</p>
            <form>
                <div className="items" onClick={handleClick}>
                    <p className="title">Email</p>
                    <input type="text" name="email" id="" value={user.email} onChange={handleChange}/>
                </div>
                <div className="items" onClick={handleClick}>
                    <p className="title">Phone number</p>
                    <input type="text" name="phone" id="" value={user.phone} onChange={handleChange}/>
                </div>
                <div className="items" onClick={handleClick}>
                    <p className="title">First name</p>
                    <input type="text" name="first_name" id="" value={user.first_name} onChange={handleChange}/>
                </div>
                <div className="items" onClick={handleClick}>
                    <p className="title">Last name</p>
                    <input type="text" name="last_name" id="" value={user.last_name} onChange={handleChange}/>
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
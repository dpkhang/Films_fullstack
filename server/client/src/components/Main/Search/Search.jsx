import React from 'react'
import './Search.scss'
Search.propTypes = {
    
};

function Search(props) {
    //props

    //state

    //handle
    const handleChange = (e)=>{

    }

    return (
        <div className='main-login-background'>
            <div className='blur'>
                <div className='main-login'>
                    <div className='main-login-text'>
                        <div className='col'>
                            <img src='/img/logo/logo.jpg' alt='' />
                            <div className='text'>
                                <p>Unlimited movies,</p> 
                                <p>TV shows, and more.</p>
                                <p>Watch anythings. Cancel anytime</p>
                            </div>
                        </div>
                    </div>
                    <div className='main-login-search'>
                        <div className='col'>
                            <input type='text' name='' onChange={handleChange} placeholder='Tap to Search'/>
                            <i className='fas fa-search'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
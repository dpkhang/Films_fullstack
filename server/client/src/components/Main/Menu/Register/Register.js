import React from 'react'
import {Link} from 'react-router-dom'
import './Register.scss'
class Register extends React.Component {
    render() {
        return (
            <div className='register'>
                <form>
                    <h1 className='title'>REGISTER</h1>
                    <div className='main'>
                        <div className='input-item'>
                            <p>Username:</p>
                            <div className='input-element'>
                                <input type='text' name='username'/>
                            </div>
                            <p>Password:</p>
                            <div className='input-element'>
                                <input type='password' name='password'/>
                            </div>
                            <p>Re-password:</p>
                            <div className='input-element'>
                                <input type='password'/>
                            </div>
                            <p>Email:</p>
                            <div className='input-element'>
                                <input type='text' name='email'/>
                            </div>
                            <div className='input-submit'>
                                <input className='button-item' type='submit' name='username'/>
                                <Link className='button-item' to='/'>Exit</Link>
                            </div>
                        </div>
                        <div className='img-item'>
                            <img src='/img/svg/connections-2099068.svg' alt=''/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register
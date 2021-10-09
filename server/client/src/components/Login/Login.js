import React from 'react'
import './Login.scss'
import {Link} from 'react-router-dom'
class Login extends React.Component {
    componentWillMount() {
        document.title = 'Login | Films-X'
    }
    
    render() {
        return (
             <div className="login">
                 <form method='POST' action='http://localhost:7000/login'>
                     <h1>LOGIN</h1>
                     <div className='input-item'>
                        <p>Username:</p>
                        <div className='input-element'>
                            <i class="fas fa-user"></i>
                            <input type='text' id='username' name='username'/>
                        </div>
                        <p>Password:</p>
                        <div className='input-element'>
                            <i class="fas fa-lock"></i>
                            <input type='password' id='password' name='password'/>
                        </div>
                     </div>
                     <div className='register-question-item'>
                         <Link to='/register'>Register</Link>
                     </div>
                     <div className='input-submit'>
                        <input className='button-item' type='submit' value='Login'/>
                        <Link className='button-item' to='/' type='button'>Exit</Link>
                     </div>
                 </form>
             </div>
        )
    }
}

export default Login
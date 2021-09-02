import React from 'react';

class Login extends React.Component {
    render() {
        return (
             <div className="login">
                 <form>
                     <h1>LOGIN</h1>
                     <div className='input-item'>
                        <p>Username:</p>
                        <input type='text' id='username' name='username'/>
                        <p>Password:</p>
                        <input type='password' id='password' name='password'/>
                     </div>
                     <div className='input-submit'>
                        <input type='submit' value='Login'/>
                        <input type='button' value='Exit'/>
                     </div>
                 </form>
             </div>
        );
    }
}

export default Login;
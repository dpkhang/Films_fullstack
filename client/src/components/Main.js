import React from 'react';

class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render(){
        return (
            <form action="http://localhost:4000/login" method="POST">
                <input type="text" name="username" />
                <input type="submit" value="Login"/>
            </form>
        )
    }
}

export default Header;
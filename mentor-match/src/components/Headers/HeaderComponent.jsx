import React from 'react';
import {Link} from 'react-router-dom'

function Header(props) {

    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Sign in</Link>
                </li>
                <li>
                    <Link to="sign-up">Sign up</Link>
                </li>
            </ul>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Header;
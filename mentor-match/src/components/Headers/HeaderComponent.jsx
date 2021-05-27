import React from 'react';
import { Link } from 'react-router-dom'
import { styles } from '../styles/HeaderStyles'

function Header(props) {
    const classes = styles();

    return (
        <div>
            <ul className={`${classes.flexHorizontal} ${classes.list}`}>
                <li>
                    <Link to='/'>
                        <img src="images/mentorLogo.png" alt="logo" />
                    </Link>
                </li>
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
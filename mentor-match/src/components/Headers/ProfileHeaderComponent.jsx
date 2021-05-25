import React from 'react';
import {Link} from 'react-router-dom'

function ProfileHeader(props) {

    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>
                        <img src="images/mentorLogo.png" alt="logo" />
                    </Link>
                </li>
                <li>
                    <Link to="/">Sign out</Link>
                </li>
            </ul>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default ProfileHeader;
import React from 'react';
import {Link} from 'react-router-dom'
import { styles } from '../styles/HeaderStyles'
import { useDispatch, connect } from 'react-redux'
import { changeStateByKey } from '../../redux/actions/employeeActions'

function ProfileHeader(props) {
    const classes = styles();
    const dispatch = useDispatch();

    function signOut(){
        dispatch(changeStateByKey('signedIn', false))
    }

    return (
        <div>
            <ul className={`${classes.flexHorizontal} ${classes.list}`}>
                <li>
                    <Link to='/'>
                        <img src="images/mentorLogo.png" alt="logo" />
                    </Link>
                </li>
                <li>
                    <Link onClick={() => signOut()} to="/">Sign out</Link>
                </li>
            </ul>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default connect(r => r)(ProfileHeader);
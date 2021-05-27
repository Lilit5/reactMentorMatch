import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import ProfileHeader from './Headers/ProfileHeaderComponent';
import { styles } from './styles/ProfileStyles'
import { connect } from 'react-redux'

function Profile() {
    const classes = styles();

    return (
        <ProfileHeader>
            <div>
                <div className={`${classes.container}`}>
                    <img className={`${classes.avatarImg}`} src="images/avatar.jpg" alt="avatar"/>
                    <a href="">Manage Account</a>
                    <Link to="/match-suggestions">Manage Suggestions List</Link>
                </div>
                <div>
                
                </div>
            </div>
        </ProfileHeader>
    )
}

export default connect(r => r)(Profile);
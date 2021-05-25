import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import ProfileHeader from './Headers/ProfileHeaderComponent';

function Profile() {

    return (
        <ProfileHeader>
            <div>
                <img src="" alt="avatar"/>
                <a href="">Manage Account</a>
                <Link to="/match-suggestions">Manage Suggestions List</Link>
            </div>
        </ProfileHeader>
    )
}

export default Profile;
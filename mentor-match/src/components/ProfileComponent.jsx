import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import ProfileHeader from './Headers/ProfileHeaderComponent';
import { connect } from 'react-redux'

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

export default connect(r => r)(Profile);
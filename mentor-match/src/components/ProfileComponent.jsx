import React from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from './Headers/ProfileHeaderComponent';
import { styles } from './styles/ProfileStyles'
import { connect } from 'react-redux'

function Profile() {
    const classes = styles();

    return (
        <ProfileHeader>
            <div className={`${classes.flexHorizontal}`}>
                <div className={`${classes.container}`}>
                    <img className={`${classes.avatarImg}`} src="images/avatar.jpg" alt="avatar" />
                    <a href="/">Manage Account</a>
                    <Link to="/match-suggestions">Manage Suggestions List</Link>
                </div>
                <div className={`${classes.newsFeed}`}>
                    <div>
                        <img src="images/social1.jpg" alt="social1" />
                        <p>Stay in touch
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eveniet,
                        inventore, sunt tempora quidem tenetur earum amet dolores veniam distinctio
                        repudiandae necessitatibus consequatur consequuntur esse temporibus dicta, saepe possimus sint?
                        </p>
                    </div>
                    <div>
                        <img src="images/social2.jpg" alt="social2" />
                        <p>
                            Social media influence
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eveniet,
                            inventore, sunt tempora quidem tenetur earum amet dolores veniam distinctio
                            repudiandae necessitatibus consequatur consequuntur esse temporibus dicta, saepe possimus sint?
                        </p>
                    </div>
                    <div>
                        <img src="images/social3.jpg" alt="social3" />
                        <p>
                            Communication during lockdown
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eveniet,
                            inventore, sunt tempora quidem tenetur earum amet dolores veniam distinctio
                            repudiandae necessitatibus consequatur consequuntur esse temporibus dicta, saepe possimus sint?
                        </p>
                    </div>
                </div>
            </div>
        </ProfileHeader>
    )
}

export default connect(r => r)(Profile);
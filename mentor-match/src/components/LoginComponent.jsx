import React from 'react';
import {Link} from 'react-router-dom'
import Header from './Headers/HeaderComponent'
import { connect } from 'react-redux'
import { generalStyles } from './styles/generalStyles';

function Login() {
    const classes = new generalStyles();

    function signIn() {
        // Currently here are no validations as this is out of scope of implementing feature
    }

    return (
        <Header>
            <div>
                <div className={`${classes.flexVertical}`}>
                    <label htmlFor="login"></label>
                    <input type="text" id="login" placeholder="Login" className={`${classes.input}`}/>
                    <label htmlFor="passwd"></label>
                    <input type="password" id="passwd" placeholder="Password" className={`${classes.input}`}/>
                    <br />
                    <Link to="/sign-up" className={`${classes.btn}`} onClick={() => signIn()}>Sign in</Link>
                </div>
            </div>
        </Header>
    )
}

export default connect(r => r)(Login)
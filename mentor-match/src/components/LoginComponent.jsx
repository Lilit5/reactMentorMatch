import React, { useState, useEffect } from 'react';
import Header from './Headers/HeaderComponent'
import { connect } from 'react-redux'
import { generalStyles } from './styles/generalStyles';

function Login() {
    const classes = new generalStyles();
    return (
        <Header>
            <div>
                <div>
                    <label htmlFor="login"></label>
                    <input type="text" id="login" placeholder="Login" className={`${classes.input}`}/>
                    <label htmlFor="passwd"></label>
                    <input type="password" id="passwd" placeholder="Password" className={`${classes.input}`}/>
                    <br />
                    <button className={`${classes.btn}`}>Sign up</button>
                </div>
            </div>
        </Header>
    )
}

export default connect(r => r)(Login)
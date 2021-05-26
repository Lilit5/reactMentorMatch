import React, { useState, useEffect } from 'react';
import Header from './Headers/HeaderComponent'
import { connect } from 'react-redux'

function Login() {

    return (
        <Header>
            <div>
                <div>
                    <label htmlFor="login"></label>
                    <input type="text" id="login" placeholder="Login" />
                    <label htmlFor="passwd"></label>
                    <input type="password" id="passwd" placeholder="Password" />
                    <br />
                    <button>Sign up</button>
                </div>
            </div>
        </Header>
    )
}

export default connect(r => r)(Login)
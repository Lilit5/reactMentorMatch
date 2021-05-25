import React, { useState, useEffect } from 'react';
import Header from './Headers/HeaderComponent';


function SignUp() {

    return (
        <Header>
            <div>
                <h3>Step 1</h3>
                <hr />
                <label htmlFor="name"></label>
                <input type="text" id="name" placeholder="Name" />
                <label htmlFor="last-name"></label>
                <input type="text" id="last-name" placeholder="Last Name" />
                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="Email" />
                <select name="" id="">
                    <option value="">Departament</option>
                </select>
                <br />
                <button>Continue</button>
            </div>
            {/* TODO second part should be inisible untill 1st part is over */}
            <div> 
                <h3>Step 2</h3>
                <hr />
                <label htmlFor="passwd"></label>
                <input type="password" id="passwd" placeholder="Pasword" />
                <label htmlFor="confirm-passwd"></label>
                <input type="password" id="confirm-passwd" placeholder="Confirm Pasword" />
                <br />
                <button>Sign up</button>
            </div>
        </Header>
    )
}

export default SignUp;
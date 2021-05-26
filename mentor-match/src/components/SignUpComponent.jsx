import React, { useEffect } from 'react';
import Header from './Headers/HeaderComponent';
import { useSelector, useDispatch, connect } from 'react-redux'
import { getEmployees } from '../redux/actions/employeeActions'
import { styles } from './styles/styles'
import { changeStateByNestedKey } from '../redux/actions/employeeActions'


function SignUp() {
    const classes = styles();
    const dispatch = useDispatch();
    const employees = useSelector(state => state.employeeData.employees)
    const signUpData = useSelector(state => state.employeeData.signUp)
    console.log("employees -------", employees)

    useEffect(() => {
        dispatch(getEmployees())
    }, [])

    function continueRegistration(){
        // TODO add all inputs validation uppon this click
        dispatch(changeStateByNestedKey('signUp', 'visible', !signUpData.visible))
    }

    return (
        <Header>
            <div>
                <h3 className={classes.colorRed}>Step 1</h3>
                <hr />
                <label htmlFor="name"></label>
                <input type="text" id="name" placeholder="Name" />
                <label htmlFor="last-name"></label>
                <input type="text" id="last-name" placeholder="Last Name" />
                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="Email" />
                <ul>
                    {
                        employees.matchCategories.map((category, index) => {
                            return <li key={`${category}${index}`}>
                                <select>
                                    <option value="">{category}</option>
                                    {
                                        employees.employeesList.map((empl, ind) => {
                                            return <option key={`${empl[category]}${ind}`}>{empl[category]}</option>
                                        })
                                    }
                                </select>
                            </li>
                        })

                    }
                </ul>

                <br />
                <button onClick={() => continueRegistration()}>Continue</button>
            </div>
            <div className={ signUpData.visible ? classes.visible : classes.hidden}>
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

export default connect(r => r)(SignUp);
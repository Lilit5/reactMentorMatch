import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import Header from './Headers/HeaderComponent';
import { useSelector, useDispatch, connect } from 'react-redux'
import { getEmployees, changeStateByNestedKey, changeStateByKey } from '../redux/actions/employeeActions'
import { styles } from './styles/SignUpStyles'
import { generalStyles } from './styles/generalStyles';
import Utils from '../utils/utils'


function SignUp() {
    const classes = styles();
    const generalClasses = generalStyles();
    const utils = new Utils();
    const dispatch = useDispatch();
    const employees = useSelector(state => state.employeeData.employees)
    const signUpData = useSelector(state => state.employeeData.signUp)
    const selectedCategories = useSelector(state => state.employeeData.selectedCategories)
    console.log("employees -------", employees)
    const uniqueCategories = utils.getUniqueValuesFromArrayOfObjs(employees.employeesList, employees.matchCategories) ;
   

    useEffect(() => {
        dispatch(getEmployees())
    }, [])

    function continueRegistration() {
        // TODO add all inputs validation uppon this click
        dispatch(changeStateByNestedKey('signUp', 'visible', !signUpData.visible))
    }

    function getSelectedCategories(value, category){
        dispatch(changeStateByNestedKey('selectedCategories', category, value))
        const suggestionsList = utils.getSuggestions(selectedCategories, employees.employeesList)
        dispatch(changeStateByNestedKey('employees','matchedEmployees', suggestionsList))
    }

    function registerEmployee() {
        dispatch(changeStateByKey('signedIn', true))
    }

    return (
        <Header>
            <div>
                <h3>Step 1</h3>
                <hr />
                <label htmlFor="name"></label>
                <input className={`${generalClasses.input}`} className={`${generalClasses.input}`} type="text" id="name" placeholder="Name" required/>
                <label htmlFor="last-name"></label>
                <input className={`${generalClasses.input}`} type="text" id="last-name" placeholder="Last Name" required/>
                <label htmlFor="email"></label>
                <input className={`${generalClasses.input}`} type="email" id="email" placeholder="Email" required/>
                <ul>
                    {
                        employees.matchCategories.map((category, index) => {
                            return <li key={`${category}${index}`}
                                       className={`${generalClasses.noListDecoration}`}>
                                <select onChange={(e) => getSelectedCategories(e.target.value, category)}>
                                    <option value="">{`-- ${category} --`}</option>
                                    {
                                        uniqueCategories.map((empl, ind) => {
                                            return <option key={`${empl[category]}${ind}`}>{empl[category]}</option>
                                        })
                                    }
                                </select>
                            </li>
                        })

                    }
                </ul>

                <br />
                <button className={`${generalClasses.btn}`} onClick={() => continueRegistration()}>Continue</button>
            </div>
            <div className={signUpData.visible ? classes.visible : classes.hidden}>
                <h3>Step 2</h3>
                <hr />
                <label htmlFor="passwd"></label>
                <input className={`${generalClasses.input}`} type="password" id="passwd" placeholder="Pasword" />
                <label htmlFor="confirm-passwd"></label>
                <input className={`${generalClasses.input}`} type="password" id="confirm-passwd" placeholder="Confirm Pasword" />
                <br />
                <Link className={`${generalClasses.btn}`} to="/match-suggestions" onClick={() => registerEmployee()}>Sign up</Link>
            </div>
        </Header>
    )
}

export default connect(r => r)(SignUp);
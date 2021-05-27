import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Header from './Headers/HeaderComponent';
import { useSelector, useDispatch, connect } from 'react-redux'
import { getEmployees, changeStateByNestedKey, changeStateByKey, setError } from '../redux/actions/employeeActions'
import { styles } from './styles/SignUpStyles'
import { generalStyles } from './styles/generalStyles';
import Utils from '../utils/utils'


function SignUp() {
    const classes = styles();
    const generalClasses = generalStyles();
    const utils = new Utils();
    const dispatch = useDispatch();
    const history = useHistory();
    const employees = useSelector(state => state.employeeData.employees)
    const signUpData = useSelector(state => state.employeeData.signUp)
    const { passwd, validationPasswd, isValid } = useSelector(state => state.employeeData.password)
    const selectedCategories = useSelector(state => state.employeeData.selectedCategories)
    console.log("employees -------", employees)
    const uniqueCategories = utils.getUniqueValuesFromArrayOfObjs(employees.employeesList, employees.matchCategories);
    const error = useSelector(state => state.employeeData.error)


    useEffect(() => {
        dispatch(getEmployees())
    }, [])

    function continueRegistration() {
        // TODO add all inputs validation uppon this click (out of scope of this feature)
        dispatch(changeStateByNestedKey('signUp', 'visible', !signUpData.visible))
    }

    function getSelectedCategories(value, category) {
        dispatch(changeStateByNestedKey('selectedCategories', category, value))
        const suggestionsList = utils.getSuggestions(selectedCategories, employees.employeesList)
        dispatch(changeStateByNestedKey('employees', 'matchedEmployees', suggestionsList))
    }

    function validatePassword(passwd, validationPasswd) {
        console.log("passwd validation ", passwd, validationPasswd);
        if (passwd === "" || validationPasswd === "") {
            dispatch(setError("Please fill in all fields"))
        }else if (passwd !== validationPasswd) {
            dispatch(setError("Passwords not match, please retype"))
        } else {
            dispatch(setError(""))
            history.push('/match-suggestions')
        }
    }

    function registerEmployee(passwd, validationPasswd) {
        dispatch(changeStateByKey('signedIn', true))
        validatePassword(passwd, validationPasswd)
    }



    return (
        <Header>
            <div className={`${generalClasses.flexVertical}`}>
                <h3>Step 1</h3>
                <hr />
                <label htmlFor="name"></label>
                <input className={`${generalClasses.input}`} className={`${generalClasses.input}`} type="text" id="name" placeholder="Name" required />
                <label htmlFor="last-name"></label>
                <input className={`${generalClasses.input}`} type="text" id="last-name" placeholder="Last Name" required />
                <label htmlFor="email"></label>
                <input className={`${generalClasses.input}`} type="email" id="email" placeholder="Email" required />
                <ul>
                    {
                        employees.matchCategories.map((category, index) => {
                            return <li key={`${category}${index}`}
                                className={`${generalClasses.noListDecoration}`}>
                                <select onChange={(e) => getSelectedCategories(e.target.value, category)}
                                    className={`${classes.option}`}>
                                    <option className={`${classes.option}`}>{`-- ${category} --`}</option>
                                    {
                                        uniqueCategories.map((empl, ind) => {
                                            return <option key={`${empl[category]}${ind}`}
                                                className={`${classes.option}`}>
                                                {empl[category]}
                                            </option>
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
            <div className={`${signUpData.visible ? '' : classes.hidden} ${generalClasses.flexVertical}`}>
                <h3>Step 2</h3>
                <hr />
                <p className={`${error ? generalClasses.warning : ''}`}>{error}</p>
                <label htmlFor="passwd"></label>
                <input className={`${generalClasses.input}`}
                    type="password"
                    id="passwd"
                    placeholder="Pasword"
                    value={passwd}
                    onChange={(e) => dispatch(changeStateByNestedKey('password', 'passwd', e.target.value))}
                />
                <label htmlFor="confirm-passwd"></label>
                <input className={`${generalClasses.input}`}
                    type="password"
                    id="confirm-passwd"
                    placeholder="Confirm Pasword"
                    value={validationPasswd}
                    onChange={(e) => dispatch(changeStateByNestedKey('password', 'validationPasswd', e.target.value))}
                />
                <br />
                <button className={`${generalClasses.btn}`} onClick={() => registerEmployee(passwd, validationPasswd)}>Sign up</button>
            </div>
        </Header>
    )
}

export default connect(r => r)(SignUp);
import React, { useEffect } from 'react';
import Header from './Headers/HeaderComponent';
import { useSelector, useDispatch, connect } from 'react-redux'
import { styles } from './styles/SuggestionsStyles'
import { generalStyles } from './styles/generalStyles';
import Utils from '../utils/utils'
import { Link } from 'react-router-dom'
import { deleteByIndex, appendToStateByNestedKey, setError } from '../redux/actions/employeeActions'
import { Draggable } from "react-drag-reorder";

function MatchSuggestion() {
    const dispatch = useDispatch();
    const classes = styles();
    const generalClasses = generalStyles();
    const utils = new Utils();
    const employees = useSelector(state => state.employeeData.employees)
    const error = useSelector(state => state.employeeData.error)


    function selectFromSuggestionList(index) {
        if (employees.choosedSuggestions.length >= 5) {
            dispatch(setError("You cannot select more than 5 mentors"))
        } else {
            dispatch(setError(""))
            const itemToBeAdded = employees.matchedEmployees[index];
            dispatch(deleteByIndex('employees', 'matchedEmployees', index))
            dispatch(appendToStateByNestedKey('employees', 'choosedSuggestions', itemToBeAdded))
        }
    }

    function deSelectFromSuggestionList(index) {
        dispatch(setError(""))
        const itemToBeAdded = employees.choosedSuggestions[index];
        dispatch(deleteByIndex('employees', 'choosedSuggestions', index))
        dispatch(appendToStateByNestedKey('employees', 'matchedEmployees', itemToBeAdded))
    }

    console.log("employees.matchedEmployees.length ", employees.matchedEmployees);
    return (
        <Header>
            <div className={`${generalClasses.flexVertical}`}>
                <h3>Step 3</h3>
                <hr />
                <p className={`${generalClasses.info}`}>add/remove mentors by clicking on items or change order by drag and drop</p>
                <div className={`${generalClasses.container}`}>
                    <p className={`${error ? generalClasses.warning : ''}`}>{error}</p>
                    <p><em>Selected list</em></p>
                    <Draggable>
                    {
                        employees.choosedSuggestions.length === 0 ?
                            <h4 className={`${generalClasses.warning}`}>
                                No items added to this list yet
                             </h4>
                            :
                            employees.choosedSuggestions.map((employee, ind) => {
                                return <li key={`${employee.first_name}${ind}`}
                                    className={classes.listItem}
                                    onClick={() => deSelectFromSuggestionList(ind)}>
                                    <h4>{`${employee.first_name} ${employee.last_name}`}</h4>
                                    <h6>{employee.gender}</h6>
                                    <div>
                                        <p>{`${employee.city}, ${employee.country}`}</p>
                                        <p><u>Email:</u>{employee.email}</p>
                                        <p><u>Job Title:</u>{employee['job title']}<u>Departament:</u>{employee.department}</p>
                                    </div>
                                </li>
                            })
                    }
                    </Draggable>
                </div>
                <div className={`${generalClasses.container}`}>
                    <p><em>Suggested list</em></p>
                    {
                        employees.matchedEmployees.length === 0 ?
                            <h4 className={`${generalClasses.warning}`}>
                                There are no available employees in suggestion list
                                </h4>
                            : employees.matchedEmployees.map((employee, ind) => {
                                return <li key={`${employee.first_name}${ind}`}
                                    className={`${classes.listItem}`}
                                    onClick={() => selectFromSuggestionList(ind)}>
                                    <h4>{`${employee.first_name} ${employee.last_name}`}</h4>
                                    <h6>{employee.gender}</h6>
                                    <div>
                                        <p>{`${employee.city}, ${employee.country}`}</p>
                                        <p><u>Email:</u>{employee.email}</p>
                                        <p><u>Job Title:</u>{employee['job title']}<u>Departament:</u>{employee.department}</p>
                                    </div>
                                </li>
                            })
                    }
                </div>
                <Link to="/profile" className={`${generalClasses.btn}`}>Confirm</Link>
            </div>
        </Header>
    )
}

export default connect(r => r)(MatchSuggestion);
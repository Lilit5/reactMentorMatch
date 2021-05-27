import React, { useEffect } from 'react';
import Header from './Headers/HeaderComponent';
import { useSelector, useDispatch, connect } from 'react-redux'
import { styles } from './styles/SuggestionsStyles'
import { generalStyles } from './styles/generalStyles';
import Utils from '../utils/utils'
import {Link} from 'react-router-dom'
import { deleteByIndex, appendToStateByNestedKey, setError } from '../redux/actions/employeeActions'
import { Draggable } from "react-drag-reorder";

function MatchSuggestion() {
    const dispatch = useDispatch();
    const classes = styles();
    const generalclasses = generalStyles();
    const utils = new Utils();
    const employees = useSelector(state => state.employeeData.employees)
    const error = useSelector(state => state.employeeData.error)


    function selectFromSuggestionList(index) {
        if (employees.choosedSuggestions.length >= 5) {
            dispatch(setError("You cannot choose more than 5 mentors"))
        } else {
            dispatch(setError(""))
            const itemToBeAdded = employees.matchedEmployees[index];
            dispatch(deleteByIndex('employees', 'matchedEmployees', index))
            dispatch(appendToStateByNestedKey('employees', 'choosedSuggestions', itemToBeAdded))
        }
    }

    function deSelectFromSuggestionList(index) {
        const itemToBeAdded = employees.choosedSuggestions[index];
        dispatch(deleteByIndex('employees', 'choosedSuggestions', index))
        dispatch(appendToStateByNestedKey('employees', 'matchedEmployees', itemToBeAdded))
    }

    return (
        <Header>
            <div>
                <h3>Step 3</h3>
                <hr />
                <p className="warning-msg"></p>
                <div>
                    <p>{error}</p>
                    {/* <Draggable> */}
                    {
                        employees.choosedSuggestions.map((employee, ind) => {
                            return <li key={`${employee.first_name}${ind}`}
                                className={classes.listItem}
                                onClick={() => deSelectFromSuggestionList(ind)}>
                                <h4>{`${employee.first_name} ${employee.last_name}`}</h4>
                                <h6>{employee.gender}</h6>
                                <div>
                                    <p>{`${employee.city}, ${employee.country}`}</p>
                                    <p>{`Email: ${employee.email}`}</p>
                                    <p>{`Job Title: ${employee['job title']}, Departament: ${employee.department}`}</p>
                                </div>
                            </li>
                        })
                    }
                    {/* </Draggable> */}
                </div>
                <div>
                    <ul>
                        {
                            employees.matchedEmployees.map((employee, ind) => {
                                return <li key={`${employee.first_name}${ind}`}
                                    className={classes.listItem}
                                    onClick={() => selectFromSuggestionList(ind)}>
                                    <h4>{`${employee.first_name} ${employee.last_name}`}</h4>
                                    <h6>{employee.gender}</h6>
                                    <div>
                                        <p>{`${employee.city}, ${employee.country}`}</p>
                                        <p>{`Email: ${employee.email}`}</p>
                                        <p>{`Job Title: ${employee['job title']}, Departament: ${employee.department}`}</p>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <Link to="/profile" className={`${generalclasses.btn}`}>Confirm</Link>
            </div>
        </Header>
    )
}

export default connect(r => r)(MatchSuggestion);
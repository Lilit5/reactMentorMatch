import React, { useEffect } from 'react';
import Header from './Headers/HeaderComponent';
import { useSelector, useDispatch, connect } from 'react-redux'
import { styles } from './styles/SuggestionsStyles'
import Utils from '../utils/utils'
import { deleteByIndex, appendToStateByNestedKey } from '../redux/actions/employeeActions'


function MatchSuggestion() {
    const dispatch = useDispatch();
    const classes = styles();
    const utils = new Utils();
    const employees = useSelector(state => state.employeeData.employees)


    function selectFromSuggestionList(index) {
        const itemToBeAdded = employees.matchedEmployees[index];
        dispatch(deleteByIndex('employees', 'matchedEmployees', index))
        dispatch(appendToStateByNestedKey('employees', 'choosedSuggestions', itemToBeAdded))
    }

    function deSelectFromSuggestionList(index) {
        const itemToBeAdded = employees.choosedSuggestions[index];
        dispatch(deleteByIndex('employees', 'choosedSuggestions', index))
        dispatch(appendToStateByNestedKey('employees', 'matchedEmployees', itemToBeAdded))
    }

    return (
        <Header>
            <div>
                <p className="warning-msg"></p>
                <div>
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
                <button>Confirm</button>
            </div>
        </Header>
    )
}

export default connect(r => r)(MatchSuggestion);